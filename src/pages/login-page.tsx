import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

import { Text } from '../components/text';
import { TextInput } from '../components/text-input';
import { Button } from '../components/button';

import { translations } from '../helpers/translations';
import { validateEmail, validatePassword } from '../helpers/validations';

import { loginUserMutation } from '../graphql/mutations/login-user-mutation';
import { ApolloError } from '@apollo/client';

const loginTranslations = translations.pt.login;
const errorTranslations = translations.pt.error;

export const LoginPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [internalError, setInternalError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const navigate = useNavigate();

  const onChangeEmail = (text: string) => {
    setEmail(text);
  };

  const onChangePassword = (text: string) => {
    setPassword(text);
  };

  const validate = (email: string, password: string) => {
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    setEmailError(emailValidation);
    setPasswordError(passwordValidation);
    setInternalError('');
    return emailValidation === '' && passwordValidation === '';
  };

  const tryLogin = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const result = await loginUserMutation(email, password);
      const token = result.data.login.token;
      localStorage.setItem('token', token);
      navigate('/front_page');
    } catch (errors) {
      if (errors instanceof ApolloError) {
        errors.graphQLErrors.forEach((error) => {
          if (error.extensions.code === 'INTERNAL_SERVER_ERROR') {
            setInternalError(errorTranslations.invalidCredentials);
          } else {
            setInternalError(error.message);
          }
        });
      } else {
        setInternalError(errorTranslations.unknownError);
      }
    }
    setIsLoading(false);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate(email, password)) {
      tryLogin(email, password);
    }
  };

  return (
    <div className='LoginBox'>
      <div className='LoginBox__title'>
        <Text type='header'>{loginTranslations.welcome}</Text>
      </div>

      <form className='LoginBox__content' onSubmit={onSubmit}>
        <TextInput label={loginTranslations.email} value={email} name='email' onChange={onChangeEmail} />
        <TextInput label={loginTranslations.password} value={password} name='password' onChange={onChangePassword} />

        {emailError !== '' && <Text type='error'>{emailError}</Text>}
        {passwordError !== '' && <Text type='error'>{passwordError}</Text>}
        {internalError !== '' && <Text type='error'>{internalError}</Text>}

        <Button label={loginTranslations.submit} type='submit' isLoading={isLoading} />
      </form>
    </div>
  );
};
