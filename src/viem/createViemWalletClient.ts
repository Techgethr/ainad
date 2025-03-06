import { createWalletClient, http, publicActions } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { monadTestnet } from "./configureMonadChain";


/**
 * Creates a new Viem wallet client connected to the Monad network.
 *
 * A wallet client is a client that is connected to a specific wallet and
 * can therefore perform write operations.
 *
 * @returns A new Viem wallet client.
 */
export function createViemWalletClient() {
  // Check if the private key environment variable is set
  if (!process.env.WALLET_PRIVATE_KEY) {
    throw new Error(
      "⛔ WALLET_PRIVATE_KEY environment variable is not set. You need to set it to create a wallet client."
    );
  }

  // Create an account from the private key
  const account = privateKeyToAccount(
     `0x${process.env.WALLET_PRIVATE_KEY}`
  );

  // Create the wallet client
  return createWalletClient({
    account,
    chain: monadTestnet,
    transport: http(),
  }).extend(publicActions);
}
