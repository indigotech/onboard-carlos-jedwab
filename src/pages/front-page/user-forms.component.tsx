import React from 'react';
import './style.css';

import { Text } from 'components/text';
import { Button } from 'components/button';
import { TextInput } from 'components/text-input';
import { DateInput } from 'components/date-input';
import { PhoneInput } from 'components/phone-input';
import { SelectInput } from 'components/select-input';
import { translations } from 'helpers/translations';
import { validateName, validateEmail, validatePassword, validateDate, validatePhone } from 'helpers/validations';

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
  const [userForms, setUserForms] = React.useState<UserType>(initialUserForms);

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
    if (validate(userForms)) {
      alert(JSON.stringify(userForms));
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
      <TextInput
        label={frontPageTranslations.name}
        value={userForms.name}
        name={'name'}
        onChange={handleChangeText('name')}
      />

      <TextInput
        label={frontPageTranslations.email}
        value={userForms.email}
        name={'email'}
        onChange={handleChangeText('email')}
      />

      <PhoneInput
        label={frontPageTranslations.phone}
        value={userForms.phone}
        name={'phone'}
        onChange={handleChangeText('phone')}
      />

      <DateInput
        label={frontPageTranslations.birthDate}
        value={userForms.birthDate}
        name={'birthDate'}
        onChange={handleChangeDate('birthDate')}
      />

      <TextInput
        label={frontPageTranslations.password}
        value={userForms.password}
        name={'password'}
        onChange={handleChangeText('password')}
      />

      <SelectInput
        label={frontPageTranslations.role}
        name={'role'}
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

      <Button label={frontPageTranslations.submit} type='submit' isLoading={false} />
    </form>
  );
};
