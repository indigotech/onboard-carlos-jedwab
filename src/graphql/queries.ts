import { gql } from '@apollo/client';

export const USERS_QUERY = gql`
  query USERS_QUERY($pageInfo: PageInputType) {
    users(pageInfo: $pageInfo) {
      count
      nodes {
        name
        email
      }
    }
  }
`;
