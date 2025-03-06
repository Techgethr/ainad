import axios from "axios";

export async function getTokensForAccount(wallet:string) {


    if (!process.env.ZeroX_API_KEY) {
        throw new Error(
          "⛔ BLOCKVISION_API_KEY environment variable is not set. You need to set it to connect with BlockVision API."
        );
    }

    const targetPath = `https://api.blockvision.org/v2/monad/account/tokens?address=${wallet}`;

    const targetPathConfig = {
        headers: {
            "x-api-key": process.env.BLOCKVISION_API_KEY,
            "accept": 'application/json'
        }
    };
    try {
        const {data} = await axios.get(
            targetPath,
            targetPathConfig
        );
        // Return the tokens available for the account
        return data.result.data.map((token) =>`Name: ${token.name}, Symbol: ${token.symbol}, Balance: ${token.balance}`).join("\n");

    } catch (error) {
        throw(error);
    };
};