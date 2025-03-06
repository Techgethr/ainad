import { getTokensForAccount } from "../src/blockvision/getTokensForAccount";
import type { ToolConfig } from "./allTools.js";
import { formatEther } from "viem";

import type { GetBalanceArgs } from "../interface/index.js";

/**
 * Get the balances of all the tokens of a wallet.
 *
 * This tool takes a single parameter, the wallet address to get the balance
 * from.
 */
export const getTokensAccountTool: ToolConfig<GetBalanceArgs> = {
  definition: {
    type: "function",
    function: {
      name: "get_tokens_account",
      description: "Get the tokens of a wallet",
      parameters: {
        type: "object",
        properties: {
          wallet: {
            type: "string",
            pattern: "^0x[a-fA-F0-9]{40}$",
            description: "The wallet address to get the tokens from",
          },
        },
        required: ["wallet"],
      },
    },
  },
  handler: async ({ wallet }) => {
    return await getBalance(wallet);
  },
};

async function getBalance(wallet: string) {
  const balance = await getTokensForAccount(wallet);
  return formatEther(balance);
}
