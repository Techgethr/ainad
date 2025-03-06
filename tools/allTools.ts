import { getBalanceTool } from "./getBalance";
import { getWalletAddressTool } from "./getWalletAddress";
import { sendTransactionTool } from "./sendTransaction";
import { deployErc20Tool } from "./deployERC20";
import { getPriceToSwapTool } from "./getPriceToSwap";
import { getSourcesTool } from "./get0xSources";
import { getTokensAccountTool } from "./getTokensAccount";

export interface ToolConfig<T = any> {
  /**
   * The definition of the tool.
   */
  definition: {
    type: "function";
    function: {
      name: string;
      description: string;
      parameters: {
        type: "object";
        properties: Record<string, unknown>;
        required: string[];
      };
    };
  };

  /**
   * The handler function that will be called when the tool is executed.
   */
  handler: (args: T) => Promise<any>;
}

export const tools: Record<string, ToolConfig> = {
  // == READ == \\
  /**
   * Get the balance of a wallet.
   */
  get_balance: getBalanceTool,
  /**
   * Get the available sources to swap with 0x
   */
   get_sources_for_swap: getSourcesTool,
  /**
   * Get the connected wallet address.
   */
  get_wallet_address: getWalletAddressTool,
  /**
   * Get the price for a swap
   */
   get_price_to_swap: getPriceToSwapTool,
  /**
   * Get the tokens of a wallet
   */
   get_tokens_account: getTokensAccountTool,

  // == WRITE == \\
  /**
   * Send a transaction with optional parameters.
   */
  send_transaction: sendTransactionTool,
  /**
   * Deploy an ERC20 token.
   */
  deploy_erc20: deployErc20Tool,
};
