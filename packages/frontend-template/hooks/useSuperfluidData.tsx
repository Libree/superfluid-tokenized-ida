import { ApolloClient } from '@apollo/client';
import { STREAMS } from '../src/utils/constants/query';
import { ASSET_PLATFORMS } from '../src/utils/constants/api';
import {
 AAVE_TOKEN,
 TOP_ETH_SYMBOL_ADDRESSES,
} from '../src/utils/constants/topSymbolAddresses';

type TokenData = {
 id: string;
 name?: string;
 symbol?: string;
 imgUrl: string;
 address: string;
 price: number;
};

export async function useSuperfluidData(
 address: string,
 client: ApolloClient<object>,
 network: string, // Should be a list with the supp networks
 symbol?: string,
): Promise<TokenData | undefined> {
 const nativeToken = isNativeToken(address);
 let fetchAddress = address;
 let fetchNetwork = network;

 if (
  !nativeToken &&
  symbol &&
  ['goerli', 'mumbai'].includes(network) &&
  TOP_ETH_SYMBOL_ADDRESSES[symbol.toLowerCase()]
 ) {
  fetchAddress = TOP_ETH_SYMBOL_ADDRESSES[symbol.toLowerCase()];
  fetchNetwork = 'ethereum';
 }

 const platformId = ASSET_PLATFORMS[fetchNetwork];
 if (!platformId && !nativeToken) return;

 const url = nativeToken
  ? `/coins/${getNativeTokenId(fetchNetwork)}`
  : `/coins/${platformId}/contract/${fetchAddress}`;

 const { data, error } = await client.query({
  query: STREAMS,
  variables: { url },
 });

 console.error('Error fetching token data', error);
}

function getNativeTokenId(network: any): string {
 if (network === 'polygon' || network === 'mumbai') {
  return NATIVE_TOKEN_ID.polygon;
 }

 return NATIVE_TOKEN_ID.default;
}

function isNativeToken(tokenAddress: string) {
 return tokenAddress === '0x0000000000000000000000000000000000000000';
}

const NATIVE_TOKEN_ID = {
 default: 'ethereum',
 polygon: 'matic-network',
};
