import { ApolloError, useMutation } from '@apollo/client';

import { CREATE_USER_MUTATION } from 'graphql/mutations';

import { parseDate } from 'helpers/formatting';

enum RoleEnum {
  ADMIN = 'admin',
  USER = 'user',
}

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

export const useCreateUser = (
  name: string,
  email: string,
  phone: string,
  birthDate: Date,
  password: string,
  role: RoleEnum,
  onCompleted: () => void,
  onError: (message: string) => void,
) => {
  const handleError = (error: ApolloError) => {
    const message = error.message;
    onError(message);
  };

  const birthDateString = parseDate(birthDate, 'standard') as string;

  const [createUser, { loading }] = useMutation<CreateUserData, CreateUserVars>(CREATE_USER_MUTATION, {
    notifyOnNetworkStatusChange: true,
    onCompleted: onCompleted,
    onError: handleError,
    variables: {
      data: {
        name,
        email,
        phone,
        birthDate: birthDateString,
        password,
        role,
      },
    },
  });

  return {
    createUser,
    loading,
  };
};
