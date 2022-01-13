import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

import { Text } from 'components/text';
import { TextInput } from 'components/text-input';
import { Button } from 'components/button';
import { translations } from 'helpers/translations';
import { validateEmail, validatePassword } from 'helpers/validations';
import { useLogin } from 'hooks/use-login';

const loginTranslations = translations.pt.login;
const errorTranslations = translations.pt.error;

export const LoginPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [internalError, setInternalError] = React.useState('');

  const navigate = useNavigate();

  const handleCompleted = (token: string) => {
    if (token) {
      localStorage.setItem('token', token);
      navigate('/front_page');
    }
  };

  const handleError = (message: string, code: string) => {
    if (code === 'INTERNAL_SERVER_ERROR' || code === 'UNAUTHORIZED') {
      setInternalError(errorTranslations.invalidCredentials);
    } else {
      setInternalError(message);
    }
  };

  const { login, loading } = useLogin(email, password, handleCompleted, handleError);

  const validate = (email: string, password: string) => {
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    setEmailError(emailValidation);
    setPasswordError(passwordValidation);
    setInternalError('');
    return emailValidation === '' && passwordValidation === '';
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate(email, password)) {
      login();
    }
  };

  return (
    <div className='LoginBox'>
      <div className='LoginBox__title'>
        <Text type='header'>{loginTranslations.welcome}</Text>
      </div>

      <form className='LoginBox__content' onSubmit={onSubmit}>
        <TextInput label={loginTranslations.email} value={email} name='email' onChange={setEmail} />
        <TextInput label={loginTranslations.password} value={password} name='password' onChange={setPassword} />

        {emailError !== '' && <Text type='error'>{emailError}</Text>}
        {passwordError !== '' && <Text type='error'>{passwordError}</Text>}
        {internalError !== '' && <Text type='error'>{internalError}</Text>}

        <Button label={loginTranslations.submit} type='submit' isLoading={loading} />
      </form>
    </div>
  );
};
