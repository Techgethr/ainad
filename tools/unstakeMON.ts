import { unstake } from "../src/apriori/unStakeMon";
import type { ToolConfig } from "./allTools.js";
import { formatEther } from "viem";

import type { StakeArgs } from "../interface/index.js";

/**
 * Unstake a specific amount of MON in aPriori platform
 *
 * This tool takes a single parameter, the amount to stake
 * from.
 */
export const unstakeMONTool: ToolConfig<StakeArgs> = {
  definition: {
    type: "function",
    function: {
      name: "unstake_mon",
      description: "Unstake a specific amount of MON in aPriori platform",
      parameters: {
        type: "object",
        properties: {
          amount: {
            type: "number",
            //pattern: "^0x[a-fA-F0-9]{40}$",
            description: "The amount in MON to unstake",
          },
        },
        required: ["amount"],
      },
    },
  },
  handler: async ({ amount }) => {
    return await unstakeAmount(amount);
  },
};

async function unstakeAmount(amount:number) {
  const balanceAprMON = await unstake(amount);
  return balanceAprMON;
}
