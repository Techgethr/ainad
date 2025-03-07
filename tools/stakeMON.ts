import { stake } from "../src/apriori/stakeMon";
import type { ToolConfig } from "./allTools.js";
import { formatEther } from "viem";

import type { StakeArgs } from "../interface/index.js";

/**
 * Stake a specific amount of MON in aPriori platform
 *
 * This tool takes a single parameter, the amount to stake
 * from.
 */
export const stakeMONTool: ToolConfig<StakeArgs> = {
  definition: {
    type: "function",
    function: {
      name: "stake_mon",
      description: "Stake a specific amount of MON in aPriori platform",
      parameters: {
        type: "object",
        properties: {
          amount: {
            type: "number",
            //pattern: "^0x[a-fA-F0-9]{40}$",
            description: "The amount in MON to stake",
          },
        },
        required: ["amount"],
      },
    },
  },
  handler: async ({ amount }) => {
    return await stakeAmount(amount);
  },
};

async function stakeAmount(amount:number) {
  const balanceAprMON = await stake(amount);
  return balanceAprMON;
}
