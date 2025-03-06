import { createClientV2 } from '@0x/swap-ts-sdk';



export async function getIndicativePrice(token_to_sell:string, token_to_buy:string, amount:string) {

    if (!process.env.ZeroX_API_KEY) {
        throw new Error(
          "⛔ ZeroX_API_KEY environment variable is not set. You need to set it to connect with 0X Swap API."
        );
    }
    const client = createClientV2({
        apiKey: process.env.ZeroX_API_KEY,
    });

    const price = await client.swap.permit2.getPrice.query({
        buyToken: token_to_buy,
        chainId: 10143,
        sellAmount: amount,
        sellToken: token_to_sell
    });
    return price.buyAmount / 10**6;
}