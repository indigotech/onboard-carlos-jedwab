import React from 'react';

import { Text } from '../components/text';
import { Spinner } from '../components/spinner';
import { Table, RowType } from '../components/table';
import { InfiniteScroll } from '../components/infinite-scroll';

import { useUsers } from '../graphql/queries/use-users';

import { translations } from '../helpers/translations';

const frontPageTranslations = translations.pt.front_page;
const loadNumber = 10;

export const FrontPage = () => {
  const [rows, setRows] = React.useState<RowType[]>([]);
  const [page, setPage] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);

  const header = ['Nome', 'Email'];

  const loadUsers = async () => {
    setIsLoading(true);
    const { data } = await useUsers(page);
    const newRows: RowType[] = data.users.nodes.map((user: RowType) => ({
      name: user.name,
      email: user.email,
    }));
    setRows(newRows);
    setIsLoading(false);
  };

  const loadMoreUsers = () => {
    setPage((prev) => prev + loadNumber);
    loadUsers();
  };

  return (
    <div className='FrontPage'>
      <Text type='header'>{frontPageTranslations.title}</Text>
      <Text type='label'>{frontPageTranslations.subtitle}</Text>

      <div className='FrontPage__table'>
        <InfiniteScroll isLoading={isLoading} onBottomHit={loadMoreUsers}>
          <Table header={header} rows={rows} />
          {isLoading && <Spinner size='medium' />}
        </InfiniteScroll>
      </div>
    </div>
  );
};
