import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

import { Text } from 'components/atm.text.component';
import { Spinner } from 'components/atm.spinner.component';
import { Table } from 'components/mol.table.component';
import { InfiniteScroll } from 'components/atm.infinite-scroll.component';
import { useUsers, User } from 'hooks/use-users';
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

  const [users, setUsers] = React.useState<User[]>([]);
  const [rows, setRows] = React.useState<string[][]>([]);
  const [page, setPage] = React.useState(initialPage);
  const [hasMore, setHasMore] = React.useState(true);

  const navigate = useNavigate();

  const handleCompleted = (newUsers: User[], hasMore: boolean) => {
    const newRows: string[][] = newUsers.map((user) => [user.name, user.email]);
    setRows((prev) => [...prev, ...newRows]);
    setUsers((prevUsers) => [...prevUsers, ...newUsers]);
    setHasMore(hasMore);
  };

  const handleError = (message: string, code: string) => {
    if (code === 'INTERNAL_SERVER_ERROR' || code === 'UNAUTHORIZED') {
      setInternalError(errorTranslations.unauthorized);
    } else {
      setInternalError(message);
    }
  };

  const { loading } = useUsers(page, handleCompleted, handleError);

  const handleBottomHit = () => {
    setPage((prev) => prev + pageSize);
  };

  const handleClickItem = (rowId: number) => {
    const id = users[rowId].id;
    navigate(`/user_details/${id}`);
  };

  return (
    <InfiniteScroll isLoading={loading} hasMore={hasMore} onBottomHit={handleBottomHit}>
      <Table header={usersTableHeader} rows={rows} onClickItem={handleClickItem} />
      {hasMore ? loading && <Spinner size='medium' /> : <Text type='normal'>{frontPageTranslations.noMoreUsers}</Text>}
    </InfiniteScroll>
  );
};
