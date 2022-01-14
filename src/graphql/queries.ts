import { gql } from '@apollo/client';

export const USERS_QUERY = gql`
  query USERS_QUERY($pageInfo: PageInputType) {
    users(pageInfo: $pageInfo) {
      count
      nodes {
        id
        name
        email
      }
    }
  }
`;

export const USER_QUERY = gql`
  query USE_USER($id: ID!) {
    user(id: $id) {
      name
      email
      phone
      birthDate
      role
    }
  }
`;
