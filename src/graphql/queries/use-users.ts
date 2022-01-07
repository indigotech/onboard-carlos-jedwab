import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import { uri } from '../uri';

export const useUsers = async (page: number) => {
  const client = new ApolloClient({
    uri,
    cache: new InMemoryCache(),
    headers: {
      Authorization: localStorage.getItem('token') ? `${localStorage.getItem('token')}` : '',
    },
  });

  return client.query({
    query: gql`
      query {
        users(pageInfo: { offset: ${0}, limit: ${page} }) {
          nodes {
            name
            email
          }
        }
      }
    `,
  });
};
