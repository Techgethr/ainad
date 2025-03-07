import { USDC_ABI} from "./abi/usdc";
import { USDT_ABI} from "./abi/usdt";
import { WBTC_ABI} from "./abi/wbtc";
import { WETH_ABI} from "./abi/weth";
import { WMON_ABI} from "./abi/wmon";
import { GMON_ABI} from "./abi/gmon";
import { MAMABTC_ABI} from "./abi/mamaBTC";
import { WSOL_ABI} from "./abi/wsol";
import { NSTR_ABI} from "./abi/nstr";

interface Token {
    name: string;        // Nombre del token
    symbol: string;      // Símbolo del token
    decimals: number;    // Decimales del token
    contractId: string;  // ID del contrato
}

export const tokensAvailable: Token[] = [
    {
        name: "Monad",
        symbol: "MON",
        decimals: 18,
        contractId: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    },
    {
        name: "USDT",
        symbol: "USDT",
        decimals: 6,
        contractId: "0x88b8E2161DEDC77EF4ab7585569D2415a1C1055D",
    },
    {
        name: "Wrapped Monad",
        symbol: "WMON",
        decimals: 18,
        contractId: "0x760AfE86e5de5fa0Ee542fc7B7B713e1c5425701",
    },
    {
        name: "USD Coin",
        symbol: "USDC",
        decimals: 6,
        contractId: "0xf817257fed379853cDe0fa4F97AB987181B1E5Ea",
    },
    {
        name: "Wrapped Ether",
        symbol: "WETH",
        decimals: 18,
        contractId: "0xB5a30b0FDc5EA94A52fDc42e3E9760Cb8449Fb37",
    },
    {
        name: "Wrapped Bitcoin",
        symbol: "WBTC",
        decimals: 18,
        contractId: "0xcf5a6076cfa32686c0Df13aBaDa2b40dec133F1d",
    },
    {
        name: "gMON",
        symbol: "gMON",
        decimals: 18,
        contractId: "0xaEef2f6B429Cb59C9B2D7bB2141ADa993E8571c3",
    },
    {
        name: "Mama BTC",
        symbol: "mamaBTC",
        decimals: 8,
        contractId: "0x3B428Df09c3508D884C30266Ac1577f099313CF6",
    },
    {
        name: "Wrapped SOL",
        symbol: "WSOL",
        decimals: 9,
        contractId: "0x5387C85A4965769f6B0Df430638a1388493486F1",
    },
    {
        name: "Nostra",
        symbol: "NSTR",
        decimals: 18,
        contractId: "0xc85548e0191cD34Be8092B0D42Eb4e45Eba0d581",
    },
  ];

export const abiByToken = [
    {
        contractId: "0x88b8E2161DEDC77EF4ab7585569D2415a1C1055D",
        ABI: USDT_ABI
    },
    {
        contractId: "0x760AfE86e5de5fa0Ee542fc7B7B713e1c5425701",
        ABI: WMON_ABI
    },
    {
        contractId: "0xf817257fed379853cDe0fa4F97AB987181B1E5Ea",
        ABI: USDC_ABI
    },
    {
        contractId: "0xB5a30b0FDc5EA94A52fDc42e3E9760Cb8449Fb37",
        ABI: WETH_ABI
    },
    {
        contractId: "0xcf5a6076cfa32686c0Df13aBaDa2b40dec133F1d",
        ABI: WBTC_ABI
    },
    {
        contractId: "0xaEef2f6B429Cb59C9B2D7bB2141ADa993E8571c3",
        ABI: GMON_ABI
    },
    {
        contractId: "0x3B428Df09c3508D884C30266Ac1577f099313CF6",
        ABI: MAMABTC_ABI
    },
    {
        contractId: "0x5387C85A4965769f6B0Df430638a1388493486F1",
        ABI: WSOL_ABI
    },
    {
        contractId: "0xc85548e0191cD34Be8092B0D42Eb4e45Eba0d581",
        ABI: NSTR_ABI
    },
]

export const concatenatedTokens = tokensAvailable
        .map(
        (token) =>
            `Name: ${token.name}, Symbol: ${token.symbol}, Decimals: ${token.decimals}, Contract ID: ${token.contractId}`
        )
        .join("\n");