import React from 'react';
import './style.css';

import { Text } from 'components/text';
import { translations } from 'helpers/translations';

import { LoginFields } from './login-fields.component';

const loginTranslations = translations.pt.login;

export const LoginPage = () => {
  const [loginForms, setLoginForms] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = (key: string) => (text: string) => {
    setLoginForms({ ...loginForms, [key]: text });
  };

  return (
    <div className='LoginBox'>
      <div className='LoginBox__title'>
        <Text type='header'>{loginTranslations.welcome}</Text>
      </div>
      <div className='LoginBox__content'>
        <LoginFields loginForms={loginForms} onChange={handleChange} />
      </div>
    </div>
  );
};
