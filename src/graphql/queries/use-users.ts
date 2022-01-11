import { gql, useQuery } from '@apollo/client';

import { getNewClient } from '../../helpers/new-client';

interface Nodes {
  nodes: {
    name: string;
    email: string;
  }[];
}

interface UsersData {
  users: Nodes;
}

interface UsersVars {
  pageInfo: {
    limit: number;
  };
}

const GET_USERS = gql`
  query GET_USERS($pageInfo: PageInputType) {
    users(pageInfo: $pageInfo) {
      nodes {
        name
        email
      }
    }
  }
`;

const client = getNewClient({ withAuthorizarion: true });

export const useUsers = (page: number) => {
  const result = useQuery<UsersData, UsersVars>(GET_USERS, {
    notifyOnNetworkStatusChange: true,
    variables: {
      pageInfo: {
        limit: page,
      },
    },
    client,
  });

  const users = result.data?.users.nodes;

  return {
    users,
    error: result.error,
    loading: result.loading,
    refetch: () => result.refetch(),
  };
};
