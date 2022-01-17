import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($data: LoginInputType!) {
    login(data: $data) {
      token
    }
  }
`;
