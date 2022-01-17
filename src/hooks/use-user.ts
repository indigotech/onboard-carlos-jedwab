import { ApolloError, useQuery } from '@apollo/client';

import { USER_QUERY } from 'graphql/queries';

export interface User {
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  role: string;
}

interface UserData {
  user: User;
}

interface UserVars {
  id: number;
}

export const useUser = (id: number, onError: (message: string, code: string) => void) => {
  const handleError = (error: ApolloError) => {
    const message = error.message;
    const code = `${error.graphQLErrors[0].extensions.code}`;
    onError(message, code);
  };

  const { data, loading } = useQuery<UserData, UserVars>(USER_QUERY, {
    notifyOnNetworkStatusChange: true,
    onError: handleError,
    variables: {
      id: id,
    },
  });

  const user = data?.user;

  return {
    user,
    loading,
  };
};
