import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

import { Text } from '../components/text';
import { TextInput } from '../components/text-input';
import { ButtonInput } from '../components/button-input';

import { translations } from '../helpers/translations';
import { validateEmail, validatePassword } from '../helpers/login-validation';

import { loginUser } from '../graphql/mutations/login-user';

export const LoginPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [internalError, setInternalError] = React.useState('');

  const loginTranslations = translations.pt.login;
  const [isLoading, setIsLoading] = React.useState(false);

  const navigate = useNavigate();

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
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
    await loginUser(email, password)
      .then((result) => {
        const token = result.data.login.token;
        window.localStorage.setItem('token', token);
        navigate('/front_page');
      })
      .catch((error) => {
        const message = error.message || translations.pt.login.error.invalidCredentials;
        setInternalError(message);
      });
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
      <div className='LoginBox__content'>
        <Text type='header'>{loginTranslations.welcome}</Text>
      </div>

      <form className='LoginBox__content' onSubmit={onSubmit}>
        <TextInput label={translations.pt.login.email} value={email} onChange={onChangeEmail} />
        <TextInput label={translations.pt.login.password} value={password} onChange={onChangePassword} />

        {emailError !== '' && <Text type='error'>{emailError}</Text>}
        {passwordError !== '' && <Text type='error'>{passwordError}</Text>}
        {internalError !== '' && <Text type='error'>{internalError}</Text>}

        <ButtonInput label={translations.pt.login.submit} type='submit' isLoading={isLoading} />
      </form>
    </div>
  );
};
