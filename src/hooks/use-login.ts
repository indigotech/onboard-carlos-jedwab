import { ApolloError, useMutation } from '@apollo/client';

import { LOGIN_MUTATION } from 'graphql/mutations';

interface LoginData {
  login: {
    token: string;
  };
}

interface LoginVars {
  data: {
    email: string;
    password: string;
  };
}

export const useLogin = (
  email: string,
  password: string,
  onCompleted: (token: string) => void,
  onError: (message: string, code: string) => void,
) => {
  const handleCompleted = (data: LoginData) => {
    const token = data?.login.token;
    onCompleted(token);
  };

  const handleError = (error: ApolloError) => {
    const message = error.message;
    const code = `${error.graphQLErrors[0].extensions.code}`;
    onError(message, code);
  };

  const [login, { loading }] = useMutation<LoginData, LoginVars>(LOGIN_MUTATION, {
    notifyOnNetworkStatusChange: true,
    onCompleted: handleCompleted,
    onError: handleError,
    variables: {
      data: {
        email,
        password,
      },
    },
  });

  return {
    login,
    loading,
  };
};
