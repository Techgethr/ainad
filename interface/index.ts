import type { Address, AccessList } from "viem";

/**
 * Arguments for the get_balance tool
 */
export interface GetBalanceArgs {
  /**
   * The wallet to get the balance of
   */
  wallet: Address;
}

// No arguments needed since we're getting the connected wallet
export interface GetWalletAddressArgs {}

export interface SendTransactionArgs {
  /**
   * The recipient address
   */
  to: Address;
  /**
   * The amount of ETH to send (in ETH, not Wei)
   */
  value?: string;
  /**
   * Contract interaction data
   */
  data?: `0x${string}`;
  /**
   * Unique number identifying this transaction
   */
  nonce?: number;
  /**
   * Gas price in Gwei
   */
  gasPrice?: string;
  /**
   * EIP-2930 access list
   */
  accessList?: AccessList;
  /**
   * Factory dependencies (bytecodes of smart contracts)
   */
  factoryDeps?: `0x${string}`[];
  /**
   * Paymaster address
   */
  paymaster?: Address;
  /**
   * Paymaster input
   */
  paymasterInput?: `0x${string}`;
  /**
   * coin/token to send
   */
   token?: string;
}


/**
 * Arguments for the get_price_to_swap tool
 */
 export interface GetPriceToSwapArgs {
  /**
   * The token to swap
   */
  from: string;
  /**
   * The token to get
   */
  to: string;
  /**
   * The amount to swap
   */
  amount: string;
}

/**
 * Arguments for the get_staking_rate_from_mon and get_staking_rate_from_aprmon tools
 */
 export interface FetchRateArgs {
  /**
   * The amount to fetch the rates
   */
  amount: number;
}

/**
 * Arguments for the stake_mon and unstake_mon tools
 */
 export interface StakeArgs {
  /**
   * The amount to stake/unstake
   */
  amount: number;
}

/**
 * Arguments for the execute_swap tool
 */
 export interface ExecuteSwapArgs {
  /**
   * The token to swap
   */
  from: string;
  /**
   * The token to get
   */
  to: string;
  /**
   * The amount to swap
   */
  amount: string;
}