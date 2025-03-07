import { getBalance } from "../src/apriori/getBalance";
import type { ToolConfig } from "./allTools.js";
import { formatEther } from "viem";
import type { Address } from "viem";

import type { GetBalanceArgs } from "../interface/index.js";

/**
 * Get the staked balance of a wallet.
 *
 * This tool takes a single parameter, the wallet address to get the balance
 * from.
 */
export const getStakingBalanceTool: ToolConfig<GetBalanceArgs> = {
  definition: {
    type: "function",
    function: {
      name: "get_staking_balance",
      description: "Get the balance in stake of a wallet",
      parameters: {
        type: "object",
        properties: {
          wallet: {
            type: "string",
            pattern: "^0x[a-fA-F0-9]{40}$",
            description: "The wallet address to get the balance from",
          },
        },
        required: ["wallet"],
      },
    },
  },
  handler: async ({ wallet }) => {
    return await getStakingBalance(wallet);
  },
};

async function getStakingBalance(wallet: Address) {
  const balance = await getBalance(wallet);
  return formatEther(balance);
}
