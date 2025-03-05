import { defineChain } from 'viem'

export const monadTestnet = defineChain({
    id: 10143,
    name: 'Monad Testnet',
    nativeCurrency: {
      decimals: 18,
      name: 'MON',
      symbol: 'MON',
    },
    rpcUrls: {
      default: {
        http: ["https://testnet-rpc.monad.xyz/"],
      },
    },
    blockExplorers: {
      default: { name: 'Explorer', url: 'https://testnet.monadexplorer.com/' },
    },
  })