import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import { uri } from '../uri';

export const loginUser = async (email: string, password: string) => {
  const client = new ApolloClient({
    uri,
    cache: new InMemoryCache(),
  });

  return client.mutate({
    mutation: gql`
        mutation {
          login(data: { email: "${email}", password: "${password}" }) {
            token
          }
        }
      `,
  });
};
