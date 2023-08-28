export const SUBGRAPH_SUPERFLUID_API_URL = {
 mumbai:
  'https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-mumbai',
};

export const ASSET_PLATFORMS: Record<SupportedNetworks, string | null> = {
 arbitrum: 'arbitrum-one',
 'arbitrum-test': null,
 ethereum: 'ethereum',
 goerli: null,
 polygon: 'polygon-pos',
 mumbai: null,
 unsupported: null,
};
