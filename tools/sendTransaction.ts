// Importing necessary functions and types for transaction handling
import { parseEther, getContract } from "viem"; // Function to convert ETH to Wei
import { createViemWalletClient } from "../src/viem/createViemWalletClient.js"; // Function to create a Viem wallet client
import type { ToolConfig } from "./allTools.js"; // Type definition for tool configurations
import type { SendTransactionArgs } from "../interface/index.js"; // Type definition for send transaction arguments
import {tokensAvailable, abiByToken} from "../src/constants/tokens";

// Configuration for the send transaction tool
export const sendTransactionTool: ToolConfig<SendTransactionArgs> = {
  definition: {
    type: "function",
    function: {
      name: "send_transaction",
      description: "Send a transaction with optional parameters",
      parameters: {
        type: "object",
        properties: {
          to: {
            type: "string",
            pattern: "^0x[a-fA-F0-9]{40}$",
            description: "The recipient address",
          },
          value: {
            type: "string",
            description: "The amount of S to send (in S, not Wei)",
            optional: true,
          },
          data: {
            type: "string",
            pattern: "^0x[a-fA-F0-9]*$",
            description: "Contract interaction data",
            optional: true,
          },
          nonce: {
            type: "number",
            description: "Unique number identifying this transaction",
            optional: true,
          },
          gasPrice: {
            type: "string",
            description: "Gas price in Gwei",
            optional: true,
          },
          accessList: {
            type: "array",
            description: "EIP-2930 access list",
            items: {
              type: "object",
              properties: {
                address: {
                  type: "string",
                  description:
                    "The address of the account or contract to access",
                },
                storageKeys: {
                  type: "array",
                  items: {
                    type: "string",
                    description: "The storage keys to access",
                  },
                },
              },
              required: ["address", "storageKeys"],
            },
            optional: true,
          },
          factoryDeps: {
            type: "array",
            description: "Factory dependencies (bytecodes of smart contracts)",
            items: {
              type: "string",
              pattern: "^0x[a-fA-F0-9]*$",
              description: "Contract bytecode as hex string",
            },
            optional: true,
          },
          paymaster: {
            type: "string",
            pattern: "^0x[a-fA-F0-9]{40}$",
            description: "Paymaster address",
            optional: true,
          },
          paymasterInput: {
            type: "string",
            pattern: "^0x[a-fA-F0-9]*$",
            description: "Paymaster input",
            optional: true,
          },
          token: {
            type: "string",
            description: "The contract Id of the token/coin to send",
            optional: true,
          },
        },
        required: ["to"],
      },
    },
  },
  // Handler function to execute the send transaction tool
  handler: async (args) => {
    const result = await sendTransaction(args);
    if (!result.success || !result.hash) throw new Error(result.message);
    return result.hash;
  },
};

// Function to send a transaction
async function sendTransaction({
  to,
  value,
  data,
  nonce,
  gasPrice,
  accessList,
  factoryDeps,
  paymaster,
  paymasterInput,
  token
}: SendTransactionArgs) {
  try {
    // Creating a Viem wallet client instance
    const walletClient = createViemWalletClient();

    // Sending the transaction with the provided parameters
    //console.log("Token id: "+token);
    if(token == undefined || token == '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE') {
      const hash = await walletClient.sendTransaction({
        to,
        value: value ? parseEther(value) : undefined,
        data,
        nonce: nonce || undefined,
        gasPrice: gasPrice ? parseEther(gasPrice) : undefined,
        accessList: accessList || undefined,
        customData: {
          factoryDeps: factoryDeps || undefined,
          paymaster: paymaster || undefined,
          paymasterInput: paymasterInput || undefined,
        },
      });
  
      // Returning the transaction hash and a success message
      return {
        success: true,
        hash,
        message: `Transaction sent successfully. Hash: ${hash}`,
      };
    } else {
      const tokenOrigin = tokensAvailable.find((t) => t.contractId === token);
      const amountWithDecimals = Number(value) * 10** tokenOrigin.decimals;
      const tokenToSend = abiByToken.find((t) => t.contractId === token);
      const { request } = await walletClient.simulateContract({
        account: walletClient.account,
        address: token,
        abi: tokenToSend?.ABI,
        functionName: 'transfer',
        args: [to,amountWithDecimals ]
      });
      const tx = await walletClient.writeContract(request);
      return {
        success: true,
        tx,
        message: `Transaction sent successfully. Hash: ${tx}`,
      };
    }
    
  } catch (error) {
    // Handling errors and returning an error message
    //console.error(error);
    return {
      success: false,
      hash: null,
      message: `Failed to send transaction: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    };
  }
}
