import React from 'react';
import './style.css';

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
  const [credentialsError, setCredentialsError] = React.useState('');

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
    setCredentialsError('');
    const isValid = emailValidation === '' && passwordValidation === '';
    return isValid;
  };

  const onSubmit = () => {
    if (validate(email, password)) {
      loginUser(email, password)
        .then((result) => {
          const token = result.data.login.token;
          window.localStorage.setItem('token', token);
          //console.log('token', window.localStorage.getItem('token'));
        })
        .catch((error) => {
          const message = error.message || translations.pt.login.error.invalidCredentials;
          setCredentialsError(message);
        });
    }
  };

  return (
    <div className='LoginBox'>
      <div className='LoginBox__content'>
        <Text type='header'>{translations.pt.login.welcome}</Text>
      </div>

      <div className='LoginBox__content'>
        <TextInput label={translations.pt.login.email} value={email} onChange={onChangeEmail} />
        <TextInput label={translations.pt.login.password} value={password} onChange={onChangePassword} />
        {emailError !== '' && <Text type='error'>{emailError}</Text>}
        {passwordError !== '' && <Text type='error'>{passwordError}</Text>}
        {credentialsError !== '' && <Text type='error'>{credentialsError}</Text>}
        <ButtonInput label={translations.pt.login.submit} onClick={onSubmit} />
      </div>
    </div>
  );
};
