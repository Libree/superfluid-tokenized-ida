import { ApolloClient } from '@apollo/client';
import { DATA_QUERY } from '../src/utils/constants/query';

export async function useSuperfluidData(client: ApolloClient<object>) {
 const { data, error } = await client.query({
  query: DATA_QUERY,
 });
}
