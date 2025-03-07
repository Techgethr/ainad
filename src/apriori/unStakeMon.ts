import {aprMON_CONTRACT_ID, aprMON_ABI} from "../constants/staking";
import { getContract, toHex } from 'viem';
import { createViemWalletClient } from "../viem/createViemWalletClient";

export async function unstake(amount:number) {
    const publicClient = createViemWalletClient();

    const aprMONContract = getContract({
        address: aprMON_CONTRACT_ID,
        abi: aprMON_ABI,
        client: publicClient,
      });
    const totalAmount = amount * 10**18;
    //const waitTime = await aprMONContract.read.withdrawalWaitTime();
    //console.log("Amount: "+totalAmount);
    const { request } = await publicClient.simulateContract({
        account: publicClient.account,
        address: aprMON_CONTRACT_ID,
        abi: aprMON_ABI,
        functionName: 'requestRedeem',
        args: [BigInt(totalAmount),publicClient.account.address,publicClient.account.address ]
      });
    await publicClient.writeContract(request);
    //console.log("Waittime: "+waitTime);
    return true;
}
