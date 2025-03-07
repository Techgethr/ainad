import { getContract, maxUint256, numberToHex, size , concat } from 'viem';
import {tokensAvailable, abiByToken} from "../constants/tokens";
import type { Hex } from "viem";
import { createViemWalletClient } from "../viem/createViemWalletClient";

export async function executeSwap(token_to_sell:string, token_to_buy:string, amount:string) {
    if (!process.env.ZeroX_API_KEY) {
        throw new Error(
          "⛔ ZeroX_API_KEY environment variable is not set. You need to set it to connect with 0X Swap API."
        );
    }
    const tokenOrigin = tokensAvailable.find((t) => t.contractId === token_to_sell);
    const amountWithDecimals = Number(amount) * 10** tokenOrigin.decimals;

    const publicClient = createViemWalletClient();

    // fetch headers
    const headers = new Headers({
        "Content-Type": "application/json",
        "0x-api-key": process.env.ZeroX_API_KEY,
        "0x-version": "v2",
    });

    // 1. fetch price
    const priceParams = new URLSearchParams({
        chainId: "10143",
        sellToken: token_to_sell,
        buyToken: token_to_buy,
        sellAmount: amountWithDecimals.toString(),
        taker: publicClient.account.address,
    });

    const priceResponse = await fetch(
        "https://api.0x.org/swap/permit2/price?" + priceParams.toString(),
        { headers }
    );

    const price = await priceResponse.json();
    

    if (tokenOrigin?.contractId === "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE") {
        //console.log("Native token detected, no need for allowance check");
    } else {
        if (price.issues.allowance !== null) {
            try {
                const sellTokenElement = abiByToken.find((t) => t.contractId === token_to_sell);
                const sellToken = getContract({
                    address: token_to_sell,
                    abi: sellTokenElement?.ABI,
                    client: publicClient,
                  });
              const { request } = await sellToken.simulate.approve([
                price.issues.allowance.spender,
                maxUint256,
              ]);
              //console.log("Approving Permit2 to spend sellToken...", request);
              // set approval
              const hash = await sellToken.write.approve(request.args);
            //   console.log(
            //     "Approved Permit2 to spend sellToken.",
            //     await publicClient.waitForTransactionReceipt({ hash })
            //   );
            } catch (error) {
              //console.log("Error approving Permit2:", error);
            }
          } else {
            //console.log("sellToken already approved for Permit2");
          }
    }
    // 3. fetch quote
  const quoteParams = new URLSearchParams();
  for (const [key, value] of priceParams.entries()) {
    quoteParams.append(key, value);
  }

  const quoteResponse = await fetch(
    "https://api.0x.org/swap/permit2/quote?" + quoteParams.toString(),
    { headers }
  );

  const quote = await quoteResponse.json();
  //console.log(`Fetching quote to swap 0.0001  for USDC`);
  //console.log("quoteResponse: ", quote);

  // 4. sign permit2.eip712 returned from quote
  let signature: Hex | undefined;
  if (quote.permit2?.eip712) {
    try {
      signature = await publicClient.signTypedData(quote.permit2.eip712);
      //console.log("Signed permit2 message from quote response");
    } catch (error) {
      //console.error("Error signing permit2 coupon:", error);
    }

    // 5. append sig length and sig data to transaction.data
    if (signature && quote?.transaction?.data) {
      const signatureLengthInHex = numberToHex(size(signature), {
        signed: false,
        size: 32,
      });

      const transactionData = quote.transaction.data as Hex;
      const sigLengthHex = signatureLengthInHex as Hex;
      const sig = signature as Hex;

      quote.transaction.data = concat([transactionData, sigLengthHex, sig]);
    } else {
      throw new Error("Failed to obtain signature or transaction data");
    }
  }

  // 6. submit txn with permit2 signature
  const nonce = await publicClient.getTransactionCount({
    address: publicClient.account.address,
  });

  // Check if it's a native token (like ETH)
  if (tokenOrigin?.contractId === "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE") {
    // Directly sign and send the native token transaction
    const transaction = await publicClient.sendTransaction({
      account: publicClient.account,
      chain: publicClient.chain,
      gas: !!quote?.transaction.gas
        ? BigInt(quote?.transaction.gas)
        : undefined,
      to: quote?.transaction.to,
      data: quote.transaction.data,
      value: BigInt(quote.transaction.value),
      gasPrice: !!quote?.transaction.gasPrice
        ? BigInt(quote?.transaction.gasPrice)
        : undefined,
      nonce: nonce,
    });

    //console.log("Transaction hash:", transaction);
    return {
      success:true,
      hash: transaction
    };
    
  } else if (signature && quote.transaction.data) {
      // Handle ERC-20 token case (requires signature)
      const signedTransaction = await publicClient.signTransaction({
        account: publicClient.account,
        chain: publicClient.chain,
        gas: !!quote?.transaction.gas
          ? BigInt(quote?.transaction.gas)
          : undefined,
        to: quote?.transaction.to,
        data: quote.transaction.data,
        gasPrice: !!quote?.transaction.gasPrice
          ? BigInt(quote?.transaction.gasPrice)
          : undefined,
        nonce: nonce,
      });

      const hash = await publicClient.sendRawTransaction({
        serializedTransaction: signedTransaction,
      });

      //console.log("Transaction hash:", hash);
      return {
        success:true,
        hash: hash
      };

    }
}