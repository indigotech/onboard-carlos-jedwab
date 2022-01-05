import React from 'react';
import './App.css';

import { TextLabel } from './components/text-label';
import { TextInput } from './components/text-input';
import { ButtonInput } from './components/button-input';

function App() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className='App'>
      <TextLabel>Bem-vindo(a) à Taqtile!</TextLabel>
      <TextInput label='E-mail' value={email} onChange={onChangeEmail} />
      <TextInput label='Senha' value={password} onChange={onChangePassword} />
      <ButtonInput label='Entrar' />
    </div>
  );
}

export default App;
