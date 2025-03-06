import type { ToolConfig } from "./allTools.js";
import { formatEther } from "viem";
import { getIndicativePrice } from "../src/0x/getPrice"
import type { Address } from "viem";

import type { GetPriceToSwapArgs } from "../interface/index.js";

export const getPriceToSwapTool: ToolConfig<GetPriceToSwapArgs> = {
  definition: {
    type: "function",
    function: {
      name: "get_price_to_swap",
      description: "Get the price to swap between 2 tokens/coins",
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
    return await getPriceToSwap(from, to, amount);
  },
};

async function getPriceToSwap(from:string, to:string, amount:string) {
  const price = await getIndicativePrice(from,to,amount);
  return price;
}
