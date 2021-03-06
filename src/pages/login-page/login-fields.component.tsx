import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

import { Text } from 'components/atm.text.component';
import { TextField } from 'components/mol.text-field.component';
import { Button } from 'components/atm.button.component';
import { translations } from 'helpers/translations';
import { validateEmail, validatePassword } from 'helpers/validations';
import { useLogin } from 'hooks/use-login';

interface LoginFieldsProps {
  loginForms: {
    email: string;
    password: string;
  };
  onChange: (key: string) => (text: string) => void;
}

const loginTranslations = translations.pt.login;
const errorTranslations = translations.pt.error;

export const LoginFields = (props: LoginFieldsProps) => {
  const { loginForms, onChange } = props;

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

  const { login, loading } = useLogin(handleCompleted, handleError);

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
    if (validate(loginForms.email, loginForms.password)) {
      login({
        variables: {
          data: {
            email: loginForms.email,
            password: loginForms.password,
          },
        },
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField label={loginTranslations.email} value={loginForms.email} name='email' onChange={onChange('email')} />
      <TextField
        label={loginTranslations.password}
        value={loginForms.password}
        name='password'
        onChange={onChange('password')}
      />

      {emailError !== '' && <Text type='error'>{emailError}</Text>}
      {passwordError !== '' && <Text type='error'>{passwordError}</Text>}
      {internalError !== '' && <Text type='error'>{internalError}</Text>}

      <Button label={loginTranslations.submit} type='submit' isLoading={loading} />
    </form>
  );
};
