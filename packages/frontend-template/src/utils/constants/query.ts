import { gql } from '@apollo/client';

export const DATA_QUERY = gql`
  graphql query MyQuery {
    streams(where: {receiver: "YOUR_ADDRESS_HERE"}) {
      currentFlowRate
      token {
        symbol
      }
      sender {
        id
      }
      receiver {
        id
      }
    }
  }
`;
