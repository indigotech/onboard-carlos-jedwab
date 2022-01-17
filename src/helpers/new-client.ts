import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

interface GraphqlClientOptions {
  withAuthorizarion: boolean;
}

const httpLink = createHttpLink({
  uri: 'https://tq-template-server-sample.herokuapp.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? token : '',
    },
  };
});

export const getNewClient = (graphqlClientOptions: GraphqlClientOptions) => {
  return new ApolloClient({
    link: graphqlClientOptions.withAuthorizarion ? authLink.concat(httpLink) : httpLink,
    cache: new InMemoryCache(),
  });
};
