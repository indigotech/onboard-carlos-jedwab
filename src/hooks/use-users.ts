import { ApolloError, useQuery } from '@apollo/client';

import { USERS_QUERY } from 'graphql/queries';

export interface User {
  id: number;
  name: string;
  email: string;
}
interface Users {
  count: number;
  nodes: User[];
}

interface UsersData {
  users: Users;
}

interface UsersVars {
  pageInfo: {
    offset: number;
    limit: number;
  };
}

export const useUsers = (
  page: number,
  onCompleted: (newUsers: User[], hasMore: boolean) => void,
  onError: (message: string, code: string) => void,
) => {
  const handleCompleted = (data: UsersData) => {
    const newUsers = data?.users.nodes;
    const hasMore = page < data?.users.count;
    onCompleted(newUsers, hasMore);
  };

  const handleError = (error: ApolloError) => {
    const message = error.message;
    const code = `${error.graphQLErrors[0].extensions.code}`;
    onError(message, code);
  };

  const { loading } = useQuery<UsersData, UsersVars>(USERS_QUERY, {
    notifyOnNetworkStatusChange: true,
    onCompleted: handleCompleted,
    onError: handleError,
    variables: {
      pageInfo: {
        offset: page,
        limit: 10,
      },
    },
  });

  return {
    loading,
  };
};
