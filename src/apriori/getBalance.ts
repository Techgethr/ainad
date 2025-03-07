import {aprMON_CONTRACT_ID, aprMON_ABI} from "../constants/staking";
import { getContract, maxUint256, numberToHex, size , concat } from 'viem';
import { createViemWalletClient } from "../viem/createViemWalletClient";

export async function getBalance(address:string) {
    const publicClient = createViemWalletClient();

    const aprMONContract = getContract({
        address: aprMON_CONTRACT_ID,
        abi: aprMON_ABI,
        client: publicClient,
      });

    const balance = await aprMONContract.read.balanceOf([
        publicClient.account.address
      ]);
    return balance;
}
