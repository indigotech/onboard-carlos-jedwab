import React from 'react';
import './style.css';

import { TextLabel } from './text-label';
import { TextInput } from './text-input';
import { ButtonInput } from './button-input';

export const LoginBox = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className='LoginBox'>
      <TextLabel>Bem-vindo(a) à Taqtile!</TextLabel>
      <TextInput label='E-mail' value={email} onChange={onChangeEmail} />
      <TextInput label='Senha' value={password} onChange={onChangePassword} />
      <ButtonInput label='Entrar' />
    </div>
  );
};
