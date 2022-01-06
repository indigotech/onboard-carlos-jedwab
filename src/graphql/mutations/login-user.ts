import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const loginUser = async (email: string, password: string) => {
  const client = new ApolloClient({
    uri: 'https://tq-template-server-sample.herokuapp.com/graphql',
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
