import { getBalanceTool } from "./getBalance";
import { getWalletAddressTool } from "./getWalletAddress";
import { sendTransactionTool } from "./sendTransaction";
import { deployErc20Tool } from "./deployERC20";
import { getPriceToSwapTool } from "./getPriceToSwap";
import { getSourcesTool } from "./get0xSources";
import { getTokensAccountTool } from "./getTokensAccount";
import { getActivitiesAccountTool } from "./getActivitiesAccount";
import { executeSwapTool } from "./executeSwapTokens";
import { getStakingBalanceTool } from "./getStakingBalance";
import { getStakingRateFromMONTool } from "./getStakingRateFromMON";

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
  /**
   * Get the activities of a wallet
   */
   get_activities_account: getActivitiesAccountTool,
  /**
   * Get the balance in staking of a wallet
   */
   get_staking_balance: getStakingBalanceTool,
  /**
   * Fetch the rate to get the amount of aprMON if MON is staked
   */
   get_staking_rate_from_mon: getStakingRateFromMONTool,

  // == WRITE == \\
  /**
   * Send a transaction with optional parameters.
   */
  send_transaction: sendTransactionTool,
  /**
   * Deploy an ERC20 token.
   */
  deploy_erc20: deployErc20Tool,
  /**
   * Execute a swap between 2 tokens
   */
   execute_swap: executeSwapTool,
};
