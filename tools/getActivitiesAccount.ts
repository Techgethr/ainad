import { getActivitiesForAccount } from "../src/blockvision/getActivitiesForAccount";
import type { ToolConfig } from "./allTools.js";
import { formatEther } from "viem";

import type { GetBalanceArgs } from "../interface/index.js";

/**
 * Get the activities of a wallet.
 *
 * This tool takes a single parameter, the wallet address to get the balance
 * from.
 */
export const getActivitiesAccountTool: ToolConfig<GetBalanceArgs> = {
  definition: {
    type: "function",
    function: {
      name: "get_activities_account",
      description: "Get the activities of a wallet",
      parameters: {
        type: "object",
        properties: {
          wallet: {
            type: "string",
            pattern: "^0x[a-fA-F0-9]{40}$",
            description: "The wallet address to get the activities from",
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
  const activities = await getActivitiesForAccount(wallet);
  return activities;
}
