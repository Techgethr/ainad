import type { Address } from "viem";
import { getSources } from "../src/0x/getSources";
import type { ToolConfig } from "./allTools.js";

/**
 * Gets the available sources to swap
 */
export const getSourcesTool: ToolConfig = {
  definition: {
    type: "function",
    function: {
      name: "get_sources_for_swap",
      description: "Get the available sources to swap with 0x",
      // No parameters needed since we're getting the connected wallet
      parameters: {
        type: "object",
        properties: {},
        required: [],
      },
    },
  },
  handler: async () => {
    return await getAvailableSources();
  },
};

/**
 * Gets the available sources to swap.
 */
async function getAvailableSources(): Promise<any> {
  const sources = await getSources();
  return sources;
}
