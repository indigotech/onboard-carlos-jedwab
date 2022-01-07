import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import { uri } from '../uri';

export const useUsers = async () => {
  const client = new ApolloClient({
    uri: uri,
    cache: new InMemoryCache(),
    headers: {
      Authorization: localStorage.getItem('token') ? `${localStorage.getItem('token')}` : '',
    },
  });

  return client.query({
    query: gql`
      query {
        users {
          nodes {
            name
            email
          }
        }
      }
    `,
  });
};
