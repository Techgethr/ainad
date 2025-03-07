import { getMONFromAprMON } from "../src/apriori/fetchRates";
import type { ToolConfig } from "./allTools.js";
import { formatEther } from "viem";

import type { FetchRateArgs } from "../interface/index.js";

/**
 * Fetch the rate to get the amount of aprMON if MON is staked
 *
 * This tool takes a single parameter, the amount
 * from.
 */
export const getStakingRateFromAprMONTool: ToolConfig<FetchRateArgs> = {
  definition: {
    type: "function",
    function: {
      name: "get_staking_rate_from_aprmon",
      description: "Fetch the rate to get the amount of MON if aprMON is unstaked",
      parameters: {
        type: "object",
        properties: {
          amount: {
            type: "number",
            //pattern: "^0x[a-fA-F0-9]{40}$",
            description: "The amount in aprMON to fetch the amount in MON for unstaking",
          },
        },
        required: ["amount"],
      },
    },
  },
  handler: async ({ amount }) => {
    return await getStakingRateFromMON(amount);
  },
};

async function getStakingRateFromMON(amount:number) {
  const balance = await getMONFromAprMON(amount);
  return formatEther(balance);
}
