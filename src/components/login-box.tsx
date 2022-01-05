import React from 'react';
import './style.css';

import { TextLabel } from './text-label';
import { TextInput } from './text-input';
import { ButtonInput } from './button-input';

import { validateEmail, validatePassword } from '../helpers/login-validation';

export const LoginBox = () => {
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
        <TextLabel type='header'>Bem-vindo(a) à Taqtile!</TextLabel>
      </div>

      <div className='LoginBox__content'>
        <TextInput label='E-mail' value={email} onChange={onChangeEmail} />
        <TextInput label='Senha' value={password} onChange={onChangePassword} />
        {emailError !== '' && <TextLabel type='error'>{emailError}</TextLabel>}
        {passwordError !== '' && <TextLabel type='error'>{passwordError}</TextLabel>}
        <ButtonInput label='Entrar' onClick={onSubmit} />
      </div>
    </div>
  );
};
