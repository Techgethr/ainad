import axios from "axios";

export async function getSources() {
    const targetPath = `https://api.0x.org/sources?chainId=10143`;

    const targetPathConfig = {
        headers: {
            "0x-api-key": process.env.ZeroX_API_KEY,
            "0x-version": "v2"
        }
    };

    try {
        const {data} = await axios.get(
            targetPath,
            targetPathConfig
        );

        // Return the sources available in 0x for Monad
        return data.sources;

    } catch (error) {
        throw(error);
    };
};