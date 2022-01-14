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

export const useUser = (
  id: number,
  onCompleted: (user: User) => void,
  onError: (message: string, code: string) => void,
) => {
  const handleCompleted = (data: UserData) => {
    const user = data?.user;
    onCompleted(user);
  };

  const handleError = (error: ApolloError) => {
    const message = error.message;
    const code = `${error.graphQLErrors[0].extensions.code}`;
    onError(message, code);
  };

  const { loading } = useQuery<UserData, UserVars>(USER_QUERY, {
    notifyOnNetworkStatusChange: true,
    onCompleted: handleCompleted,
    onError: handleError,
    variables: {
      id: id,
    },
  });

  return {
    loading,
  };
};
