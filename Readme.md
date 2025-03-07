# AINad

## Description

**AINad** is a powerful tool designed to interact with [Monad network](https://www.monad.xyz/) following the principles of the [PostWeb by Outlier Ventures](http://postweb.io/). It leverages OpenAI's GPT-4o-mini model to provide a conversational interface for users to perform various blockchain operations, such as checking wallet balances, sending transactions, and more. 

## What is the problem?
Blockchain networks have brought many new opportunities to millions (if not billions) of people, but the problem lies in the interaction, since Web3 has not managed to popularize such opportunities because it is complex to use for non-technical users (managing wallets, signing transactions, many approvals before spending, among others).

AI appears as an opportunity not only to reach non-technical users, but also to reduce the time and steps for each interaction, that is, to do a lot with few instructions.

## AINad was born to solve this problem
There are already many frameworks designed to connect AI agents to Blockchain, but AINad goes one step further, with the following features:
- Lightweight, with few dependencies needed.
- Focused on the Monad ecosystem (already integrated with some protocols and extensible in a few steps).
- Ability to execute several on-chain actions with a single instruction (for example: "swap 0.3 USDC to MON and then use that MON to stake it").


## Features

- **Conversational Interface**: Engage with the assistant to perform blockchain operations through natural language.
- **Wallet Operations**: Check wallet balances, last transactions, retrieve connected wallet addresses, and more.
- **Transaction Management**: Send transactions (coins and tokens) with customizable parameters.
- **Trading Management**: Ask for prices and make swaps using [0x Protocol](https://0x.org/).
- **Staking Management**: Check your staked tokens, stake and unstake using [aPriori Protocol](https://www.apr.io/).
- **Error Handling**: Robust error handling and feedback for failed operations.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- TypeScript
- [OpenAI API key](https://platform.openai.com/) to enable the AI agent.
- [0x API Key](https://dashboard.0x.org/create-account) to query prices and swaps.
- [BlockVision API Key](https://blockvision.org/) to query wallet transactions and balances.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/techgethr/ainad.git
   cd ainad
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your OpenAI API key, wallet key file and other information for the network:
   ```plaintext
    OPENAI_API_KEY=************ enter your OpenAI key here
    WALLET_PRIVATE_KEY=**************** enter your wallet private key here (without the "0x" part, just the rest)
    ASSISTANT_NAME=******************* a name for your AI assistant
    ZeroX_API_KEY=************** enter the api key from 0x
    BLOCKVISION_API_KEY=********** enter your api key from Blockvision.org
   ```

### Usage

To start the assistant, run:

```bash
bun run src/index.ts
```

You can then interact with the assistant in the command line. Type "exit" to end the conversation.