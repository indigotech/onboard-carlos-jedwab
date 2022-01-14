import { ApolloError, useMutation } from '@apollo/client';

import { CREATE_USER_MUTATION } from 'graphql/mutations';

interface CreateUserData {
  id: string;
}

interface CreateUserVars {
  data: {
    name: string;
    email: string;
    phone: string;
    birthDate: string;
    password: string;
    role: string;
  };
}

export const useCreateUser = (onCompleted: () => void, onError: (message: string) => void) => {
  const handleError = (error: ApolloError) => {
    const message = error.message;
    onError(message);
  };

  const [createUser, { loading }] = useMutation<CreateUserData, CreateUserVars>(CREATE_USER_MUTATION, {
    notifyOnNetworkStatusChange: true,
    onCompleted: onCompleted,
    onError: handleError,
  });

  return {
    createUser,
    loading,
  };
};
