import {aprMON_CONTRACT_ID, aprMON_ABI} from "../constants/staking";
import { getContract, toHex } from 'viem';
import { createViemWalletClient } from "../viem/createViemWalletClient";

export async function stake(amount:number) {
    const publicClient = createViemWalletClient();

    // const aprMONContract = getContract({
    //     address: aprMON_CONTRACT_ID,
    //     abi: aprMON_ABI,
    //     client: publicClient,
    //   });
    const totalAmount = amount * 10**18;
    const { request } = await publicClient.simulateContract({
        account: publicClient.account,
        address: aprMON_CONTRACT_ID,
        abi: aprMON_ABI,
        functionName: 'deposit',
        value: BigInt(totalAmount),
        args: [BigInt(totalAmount),publicClient.account.address ]
      });
    await publicClient.writeContract(request);
    return true;
}
