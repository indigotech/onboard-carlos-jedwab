import React from 'react';

import { Text } from '../components/text';
import { Spinner } from '../components/spinner';
import { Table, RowType } from '../components/table';
import { InfiniteScroll } from '../components/infinite-scroll';

import { useUsers } from '../graphql/queries/use-users';

import { translations } from '../helpers/translations';

const frontPageTranslations = translations.pt.front_page;
const header = ['Nome', 'Email'];
const loadNumber = 10;

export const FrontPage = () => {
  const [rows, setRows] = React.useState<RowType[]>([]);
  const [page, setPage] = React.useState(0);
  const { users, hasMore, error, loading } = useUsers(page);

  const handleBottomHit = () => {
    setPage((prev) => prev + loadNumber);
    if (users) {
      setRows(users);
    }
  };

  return (
    <div className='FrontPage'>
      <Text type='header'>{frontPageTranslations.title}</Text>
      <Text type='label'>{frontPageTranslations.subtitle}</Text>

      <div className='FrontPage__table'>
        {error === undefined ? (
          <InfiniteScroll isLoading={loading} hasMore={hasMore} onBottomHit={handleBottomHit}>
            <Table header={header} rows={rows} />
            {hasMore ? (
              loading && <Spinner size='medium' />
            ) : (
              <Text type='label'>{frontPageTranslations.noMoreUsers}</Text>
            )}
          </InfiniteScroll>
        ) : (
          <Text type='error'>{error.message}</Text>
        )}
      </div>
    </div>
  );
};
