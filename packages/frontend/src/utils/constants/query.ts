import { gql } from '@apollo/client';

export const SUPERFLUID_STREAMS = gql`
  query Streams ($user: String) {
    streams(where: {receiver: $user}) {
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
