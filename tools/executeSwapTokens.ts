import type { ToolConfig } from "./allTools.js";
import { formatEther } from "viem";
import { executeSwap } from "../src/0x/executeSwap"
import type { Address } from "viem";

import type { ExecuteSwapArgs } from "../interface/index.js";

export const executeSwapTool: ToolConfig<ExecuteSwapArgs> = {
  definition: {
    type: "function",
    function: {
      name: "execute_swap",
      description: "Execute swap between 2 tokens/coins",
      parameters: {
        type: "object",
        properties: {
          from: {
            type: "string",
            description: "The contract Id of the token/coin to make a swap",
          },
          to: {
            type: "string",
            description: "The contract Id of the token/coin to get after the swap",
          },
          amount: {
            type: "number",
            description: "The amount to make a swap",
          },
        },
        required: ["from", "to","amount"],
      },
    },
  },
  handler: async ({ from, to, amount }) => {
    return await makeSwap(from, to, amount);
  },
};

async function makeSwap(from:string, to:string, amount:string) {
  const price = await executeSwap(from,to,amount);
  return price;
}
