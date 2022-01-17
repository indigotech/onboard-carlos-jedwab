import React from 'react';
import './style.css';

import { Text } from 'components/text';
import { Spinner } from 'components/spinner';
import { Table, RowType } from 'components/table';
import { InfiniteScroll } from 'components/infinite-scroll';
import { User, useUsers } from 'hooks/use-users';
import { translations } from 'helpers/translations';

interface UserListProps {
  setInternalError: (message: string) => void;
}

const frontPageTranslations = translations.pt.front_page;
const errorTranslations = translations.pt.error;

const usersTableHeader = ['Nome', 'Email'];
const pageSize = 10;
const initialPage = 0;

export const UserList = (props: UserListProps) => {
  const { setInternalError } = props;

  const [rows, setRows] = React.useState<RowType[]>([]);
  const [page, setPage] = React.useState(initialPage);
  const [hasMore, setHasMore] = React.useState(true);

  const handleCompleted = (newUsers: User[], hasMore: boolean) => {
    setRows((prev) => [...prev, ...newUsers]);
    setHasMore(hasMore);
  };

  const handleError = (message: string, code: string) => {
    if (code === 'INTERNAL_SERVER_ERROR' || code === 'UNAUTHORIZED') {
      setInternalError(errorTranslations.invalidCredentials);
    } else {
      setInternalError(message);
    }
  };

  const { loading } = useUsers(page, handleCompleted, handleError);

  const handleBottomHit = () => {
    setPage((prev) => prev + pageSize);
  };

  return (
    <InfiniteScroll isLoading={loading} hasMore={hasMore} onBottomHit={handleBottomHit}>
      <Table header={usersTableHeader} rows={rows} />
      {hasMore ? loading && <Spinner size='medium' /> : <Text type='label'>{frontPageTranslations.noMoreUsers}</Text>}
    </InfiniteScroll>
  );
};
