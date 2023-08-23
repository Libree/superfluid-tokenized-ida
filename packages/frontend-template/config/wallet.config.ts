import '@rainbow-me/rainbowkit/styles.css';

import {
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import { arbitrum, mainnet, polygon } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

export const projectId = 'e8d78819297868e755670c9906eb6012';

export const { chains, publicClient } = configureChains(
    [arbitrum, mainnet, polygon],
    [
        alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY as string }),
        publicProvider(),
    ],
);

const { connectors } = getDefaultWallets({
    appName: 'Superfluid Tokenized',
    projectId,
    chains,
});

export const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
});
