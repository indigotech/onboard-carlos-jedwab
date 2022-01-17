import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($data: LoginInputType!) {
    login(data: $data) {
      token
    }
  }
`;

export const CREATE_USER_MUTATION = gql`
  mutation CREATE_USER_MUTATION($data: UserInputType!) {
    createUser(data: $data) {
      id
    }
  }
`;
