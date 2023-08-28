import { gql } from '@apollo/client';

export const STREAMS = gql`
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
