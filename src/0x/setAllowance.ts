import { getContract } from 'viem';
...
// Set up contracts. Note abi and client setup not show in this snippet
const Permit2 = getContract({
    address: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
    abi: exchangeProxyAbi,
    client,
});
const usdc = getContract({
    address: '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913',
    abi: erc20Abi,
    client,
});

// Check allowance is enough for Permit2 to spend sellToken
if (sellAmount > (await usdc.read.allowance([client.account.address, Permit2.address])))
    try {
        const { request } = await usdc.simulate.approve([Permit2.address, maxUint256]);
        console.log('Approving Permit2 to spend USDC...', request);
        // If not, write approval
        const hash = await usdc.write.approve(request.args);
        console.log('Approved Permit2 to spend USDC.', await client.waitForTransactionReceipt({ hash }));
    } catch (error) {
        console.log('Error approving Permit2:', error);
    }
else {
    console.log('USDC already approved for Permit2');
}