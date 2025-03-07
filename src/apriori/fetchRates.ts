import {aprMON_CONTRACT_ID, aprMON_ABI} from "../constants/staking";
import { getContract, maxUint256, numberToHex, size , concat, formatEther } from 'viem';
import { createViemWalletClient } from "../viem/createViemWalletClient";

export async function getAprMONFromMON(amount:number) {
    const publicClient = createViemWalletClient();

    const aprMONContract = getContract({
        address: aprMON_CONTRACT_ID,
        abi: aprMON_ABI,
        client: publicClient,
      });
    const totalAmount = amount * 10**18;
    const rate = await aprMONContract.read.convertToShares([
        totalAmount
      ]);
    return rate;
    
}


export async function getMONFromAprMON(amount:number) {
    const publicClient = createViemWalletClient();

    const aprMONContract = getContract({
        address: aprMON_CONTRACT_ID,
        abi: aprMON_ABI,
        client: publicClient,
      });

    const totalAmount = amount * 10**18;
    const rate = await aprMONContract.read.convertToAssets([
        totalAmount
      ]);
    return rate;
}