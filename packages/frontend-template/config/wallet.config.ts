import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { configureChains, createConfig } from 'wagmi';
import { goerli, mainnet, polygon, polygonMumbai } from 'wagmi/chains';

export const chains = [mainnet, polygon, goerli, polygonMumbai];
export const projectId = 'e8d78819297868e755670c9906eb6012';

export const provider: any = w3mProvider({ projectId });

const { publicClient } = configureChains(chains, [provider]);

export const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient,
});

export const ethereumClient = new EthereumClient(wagmiConfig, chains);
