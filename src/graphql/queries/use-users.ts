import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const useUsers = async () => {
  const client = new ApolloClient({
    uri: 'https://tq-template-server-sample.herokuapp.com/graphql',
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
