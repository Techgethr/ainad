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
  ];

export const concatenatedTokens = tokensAvailable
        .map(
        (token) =>
            `Name: ${token.name}, Symbol: ${token.symbol}, Decimals: ${token.decimals}, Contract ID: ${token.contractId}`
        )
        .join("\n");