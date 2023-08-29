import { supportedNetworks } from '@superfluid-finance/widget';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { configureChains, createConfig } from 'wagmi';

export const projectId = 'e8d78819297868e755670c9906eb6012';

export const provider: any = w3mProvider({ projectId });

const { publicClient } = configureChains(supportedNetworks, [provider]);

export const wagmiConfig = createConfig({
    autoConnect: false,
    connectors: w3mConnectors({ projectId, chains: supportedNetworks }),
    publicClient,
});

export const ethereumClient = new EthereumClient(wagmiConfig, supportedNetworks);
