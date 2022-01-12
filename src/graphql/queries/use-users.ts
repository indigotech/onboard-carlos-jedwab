import { gql, useQuery } from '@apollo/client';

import { getNewClient } from '../../helpers/new-client';

export interface User {
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

const GET_USERS = gql`
  query GET_USERS($pageInfo: PageInputType) {
    users(pageInfo: $pageInfo) {
      count
      nodes {
        name
        email
      }
    }
  }
`;

const client = getNewClient({ withAuthorizarion: true });

export const useUsers = (page: number, onCompleted: (newUsers: User[]) => void) => {
  const handleCompleted = (data: UsersData) => {
    const newUsers = data?.users.nodes;
    onCompleted(newUsers);
  };

  const result = useQuery<UsersData, UsersVars>(GET_USERS, {
    notifyOnNetworkStatusChange: true,
    onCompleted: handleCompleted,
    variables: {
      pageInfo: {
        offset: page,
        limit: 10,
      },
    },
    client,
  });

  const count = result.data?.users.count;
  let hasMore = true;
  if (count && page > count) {
    hasMore = false;
  }

  return {
    hasMore,
    error: result.error,
    loading: result.loading,
    refetch: () => result.refetch(),
  };
};
