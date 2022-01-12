import { gql } from '@apollo/client';

import { getNewClient } from '../../helpers/new-client';

const client = getNewClient({ withAuthorizarion: false });

export const loginUserMutation = async (email: string, password: string) => {
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
