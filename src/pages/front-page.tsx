import React from 'react';

import { Text } from '../components/text';
import { Spinner } from '../components/spinner';
import { Table, RowType } from '../components/table';

import { useUsers } from '../graphql/queries/use-users';

import { translations } from '../helpers/translations';

export const FrontPage = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const frontPageTranslations = translations.pt.front_page;

  const header = ['Nome', 'Email'];
  const [rows, setRows] = React.useState<RowType[]>([]);

  const loadUsers = async () => {
    setIsLoading(true);
    const { data } = await useUsers();
    const rows: RowType[] = data.users.nodes.map((user: RowType) => ({
      name: user.name,
      email: user.email,
    }));
    setRows(rows);
    setIsLoading(false);
  };

  React.useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className='FrontPage'>
      <Text type='header'>{frontPageTranslations.title}</Text>
      <Text type='label'>{frontPageTranslations.subtitle}</Text>
      {isLoading ? (
        <Spinner size='medium' />
      ) : (
        <div className='FrontPage__table'>
          <Table header={header} rows={rows} />
        </div>
      )}
    </div>
  );
};
