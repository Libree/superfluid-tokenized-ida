import { ApolloClient } from '@apollo/client';
import { DATA_QUERY } from '../src/utils/constants/query';

export async function useSuperfluidData() {
    const getStreams = async (client: ApolloClient<object>) => {
        const { data, error } = await client.query({
            query: DATA_QUERY,
        });

        if (!error) return data
        console.error('Error fetching token data', error);
    }

    return {
        getStreams
    }
};
