import React from 'react';
import './style.css';

import { Text } from '../components/text';
import { TextInput } from '../components/text-input';
import { ButtonInput } from '../components/button-input';

import { validateEmail, validatePassword } from '../helpers/login-validation';

export const LoginPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onSubmit = () => {
    setEmailError(validateEmail(email));
    setPasswordError(validatePassword(password));
    if (emailError === '' && passwordError === '') {
      console.log(`Email: ${email}`);
      console.log(`Password: ${password}`);
    } else {
      console.log(emailError + ' ' + passwordError);
    }
  };

  return (
    <div className='LoginBox'>
      <div className='LoginBox__content'>
        <Text type='header'>Bem-vindo(a) à Taqtile!</Text>
      </div>

      <div className='LoginBox__content'>
        <TextInput label='E-mail' value={email} onChange={onChangeEmail} />
        <TextInput label='Senha' value={password} onChange={onChangePassword} />
        {emailError !== '' && <Text type='error'>{emailError}</Text>}
        {passwordError !== '' && <Text type='error'>{passwordError}</Text>}
        <ButtonInput label='Entrar' onClick={onSubmit} />
      </div>
    </div>
  );
};
