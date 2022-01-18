import React from 'react';
import './style.css';

import { Text } from 'components/atm.text.component';
import { Button } from 'components/atm.button.component';
import { TextField } from 'components/mol.text-field.component';
import { DateField } from 'components/mol.date-field.component';
import { OptionsField } from 'components/mol.options-field.component';
import { useCreateUser } from 'hooks/use-create-user';
import { translations } from 'helpers/translations';
import { validateName, validateEmail, validatePassword, validateDate, validatePhone } from 'helpers/validations';
import { parseDate } from 'helpers/formatting';

enum RoleEnum {
  ADMIN = 'admin',
  USER = 'user',
}

type UserType = {
  name: string;
  email: string;
  phone: string;
  birthDate: Date;
  password: string;
  role: RoleEnum;
};

const frontPageTranslations = translations.pt.front_page;

const initialUserForms: UserType = {
  name: '',
  email: '',
  phone: '',
  birthDate: new Date(),
  password: '',
  role: RoleEnum.USER,
};

export const UserForms = () => {
  const [formsErrors, setFormsErrors] = React.useState<string[]>([]);
  const [formsSuccess, setFormsSuccess] = React.useState<string>('');
  const [userForms, setUserForms] = React.useState<UserType>(initialUserForms);

  const handleCompleted = () => {
    setFormsSuccess(frontPageTranslations.userCreated);
    setFormsErrors([]);
    setUserForms(initialUserForms);
  };

  const handleError = (message: string) => {
    setFormsErrors((errors) => [...errors, message]);
  };

  const { createUser, loading } = useCreateUser(handleCompleted, handleError);

  const validate = (userForms: UserType) => {
    const newErrors: string[] = [];
    newErrors.push(validateName(userForms.name));
    newErrors.push(validateEmail(userForms.email));
    newErrors.push(validatePhone(userForms.phone));
    newErrors.push(validateDate(userForms.birthDate));
    newErrors.push(validatePassword(userForms.password));
    setFormsErrors(newErrors);
    return newErrors.filter((error) => error !== '').length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormsSuccess('');
    if (validate(userForms)) {
      const birthDateString = parseDate(userForms.birthDate, { format: 'yyyy-mm-dd' });
      createUser({
        variables: {
          data: {
            ...userForms,
            birthDate: birthDateString,
          },
        },
      });
    }
  };

  const handleChangeText = (key: string) => (text: string) => {
    setUserForms({ ...userForms, [key]: text });
  };

  const handleChangeDate = (key: string) => (date: Date) => {
    setUserForms({ ...userForms, [key]: date });
  };

  const handleChangeSelect = (key: string) => (selectedIndex: number) => {
    setUserForms({ ...userForms, [key]: Object.values(RoleEnum)[selectedIndex] });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label={frontPageTranslations.name}
        value={userForms.name}
        name={'name'}
        onChange={handleChangeText('name')}
      />

      <TextField
        label={frontPageTranslations.email}
        value={userForms.email}
        name={'email'}
        onChange={handleChangeText('email')}
      />

      <TextField
        label={frontPageTranslations.phone}
        value={userForms.phone}
        name={'phone'}
        onChange={handleChangeText('phone')}
        onlyDigits
      />

      <DateField
        label={frontPageTranslations.birthDate}
        value={userForms.birthDate}
        name={'birthDate'}
        onChange={handleChangeDate('birthDate')}
      />

      <TextField
        label={frontPageTranslations.password}
        value={userForms.password}
        name={'password'}
        onChange={handleChangeText('password')}
      />

      <OptionsField
        label={frontPageTranslations.role}
        options={Object.values(RoleEnum)}
        value={userForms.role}
        onChange={handleChangeSelect('role')}
      />

      {formsErrors.length > 0 && (
        <div className='FrontPage__forms-errors'>
          {formsErrors.map((error, i) => (
            <Text type='error' key={i}>
              {error}
            </Text>
          ))}
        </div>
      )}

      {formsSuccess !== '' && (
        <div className='FrontPage__forms-success'>
          <Text type='success'>{formsSuccess}</Text>
        </div>
      )}

      <Button label={frontPageTranslations.submit} type='submit' isLoading={loading} />
    </form>
  );
};
