import axios from "axios";

export async function getActivitiesForAccount(wallet:string) {


    if (!process.env.ZeroX_API_KEY) {
        throw new Error(
          "⛔ BLOCKVISION_API_KEY environment variable is not set. You need to set it to connect with BlockVision API."
        );
    }

    const targetPath = `https://api.blockvision.org/v2/monad/account/activities?address=${wallet}`;

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
        // Return the activities for the account
        return data.result.data.map((activity) =>`Hash: ${activity.hash}, Time: ${activity.timestamp}, From: ${activity.from}, To: ${activity.to}, Name: ${activity.txName}, Fee: ${activity.transactionFee}`).join("\n");

    } catch (error) {
        throw(error);
    };
};