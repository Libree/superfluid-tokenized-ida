import { ApolloClient, NormalizedCacheObject, InMemoryCache } from '@apollo/client';
import { useAccount } from "wagmi";
import { SUPERFLUID_STREAMS } from '../src/utils/constants/query';
import { SUBGRAPH_SUPERFLUID_API_URL } from '../src/utils/constants/api';
import { useEffect, useState } from 'react';

export async function useSuperfluidData() {

    const { address } = useAccount();
    const [streams, setStreams] = useState()

    useEffect(() => {
        async function loadData() {
            const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
                cache: new InMemoryCache(),
                uri: SUBGRAPH_SUPERFLUID_API_URL['mumbai']
            });

            const { data, error } = await client.query({
                query: SUPERFLUID_STREAMS,
                variables: { user: address }
            });

            if(!error) setStreams(data)
        }

        loadData()

    }, [])

    return {
        streams
    }
};
