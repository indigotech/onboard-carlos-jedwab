import React from 'react';

import { Text } from '../components/text';
import { Button } from '../components/button';
import { TextInput } from '../components/text-input';
import { SelectInput } from '../components/select-input';
import { Spinner } from '../components/spinner';
import { Table, RowType } from '../components/table';
import { InfiniteScroll } from '../components/infinite-scroll';

import { User, useUsers } from '../graphql/queries/use-users';

import { translations } from '../helpers/translations';

enum RoleEnum {
  ADMIN = 'admin',
  USER = 'user',
}

type UserForms = {
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  password: string;
  role: RoleEnum;
};

const frontPageTranslations = translations.pt.front_page;
const usersTableHeader = ['Nome', 'Email'];
const initialPage = 0;
const pageSize = 10;

export const FrontPage = () => {
  const [rows, setRows] = React.useState<RowType[]>([]);
  const [page, setPage] = React.useState(initialPage);

  const onCompleted = (newUsers: User[]) => {
    if (newUsers) {
      setRows((prev) => [...prev, ...newUsers]);
    }
  };
  const { hasMore, error, loading } = useUsers(page, onCompleted);
  const [userForms, setUserForms] = React.useState<UserForms>({
    name: '',
    email: '',
    phone: '',
    birthDate: '',
    password: '',
    role: RoleEnum.USER,
  });

  const handleBottomHit = () => {
    setPage((prev) => prev + pageSize);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(userForms);
  };

  const handleChangeText = (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserForms({ ...userForms, [key]: event.target.value });
  };

  const handleChangeSelect = (key: string) => (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUserForms({ ...userForms, [key]: event.target.value as RoleEnum });
  };

  return (
    <div className='FrontPage'>
      <Text type='header'>{frontPageTranslations.title}</Text>
      <Text type='label'>{frontPageTranslations.subtitle}</Text>

      {error === undefined ? (
        <div className='FrontPage__table'>
          <form className='FrontPage__forms' onSubmit={handleSubmit}>
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

            <TextInput
              label={frontPageTranslations.phone}
              value={userForms.phone}
              name={'phone'}
              onChange={handleChangeText('phone')}
            />

            <TextInput
              label={frontPageTranslations.birthDate}
              value={userForms.birthDate}
              name={'birthDate'}
              onChange={handleChangeText('birthDate')}
            />

            <TextInput
              label={frontPageTranslations.password}
              value={userForms.password}
              name={'password'}
              onChange={handleChangeText('password')}
            />

            <SelectInput
              label={frontPageTranslations.role}
              name={'Função'}
              options={Object.values(RoleEnum)}
              value={userForms.role}
              onChange={handleChangeSelect('role')}
            />

            <Button label={frontPageTranslations.submit} type='submit' isLoading={false} />
          </form>

          <InfiniteScroll isLoading={loading} hasMore={hasMore} onBottomHit={handleBottomHit}>
            <Table header={usersTableHeader} rows={rows} />
            {hasMore ? (
              loading && <Spinner size='medium' />
            ) : (
              <Text type='label'>{frontPageTranslations.noMoreUsers}</Text>
            )}
          </InfiniteScroll>
        </div>
      ) : (
        <Text type='error'>{error.message}</Text>
      )}
    </div>
  );
};
