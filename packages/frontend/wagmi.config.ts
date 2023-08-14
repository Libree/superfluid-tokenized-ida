import { InjectedConnector, configureChains, createConfig, mainnet } from "@wagmi/core";
import { CoinbaseWalletConnector } from "@wagmi/core/connectors/coinbaseWallet";
import { MetaMaskConnector } from "@wagmi/core/connectors/metaMask";
import { WalletConnectConnector } from "@wagmi/core/connectors/walletConnect";
import { alchemyProvider } from "@wagmi/core/providers/alchemy";
import { env } from "process";
import { polygon } from "viem/chains";

// Configure chains & providers with the Alchemy provider.
const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet, polygon],
    [alchemyProvider({ apiKey: env.ALCHEMY_API_KEY as string })],

)

// Set up wagmi config
export const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: [
        new MetaMaskConnector({ chains }),
        new CoinbaseWalletConnector({
            chains,
        options: {
            appName: 'Wagmi',
        }}),
        new WalletConnectConnector({
            chains,
            options: {
                projectId: '...'
            },
        }),
        new InjectedConnector({
            chains,
            options: {
                name: 'Injected',
                shimDisconnect: true,
            }
        }),
    ],
    publicClient,
    webSocketPublicClient,
});
