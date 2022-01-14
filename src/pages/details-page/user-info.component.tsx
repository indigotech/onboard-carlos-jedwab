import React from 'react';
import './style.css';

import { Spinner } from 'components/spinner';
import { Table } from 'components/table';
import { useUser, User } from 'hooks/use-user';
import { translations } from 'helpers/translations';
import { parseDate } from 'helpers/formatting';

const detailsPageTranslations = translations.pt.details_page;
const errorTranslations = translations.pt.error;

interface UserInfoProps {
  id: number;
  setInternalError: (error: string) => void;
}

const userTableHeader = [detailsPageTranslations.header];

export const UserInfo = (props: UserInfoProps) => {
  const [rows, setRows] = React.useState<string[][]>([]);

  const handleCompleted = (user: User) => {
    const birthDate = parseDate(new Date(user.birthDate), { format: 'dd/mm/yyyy' });
    setRows([
      [`${detailsPageTranslations.name}: ${user.name}`],
      [`${detailsPageTranslations.email}: ${user.email}`],
      [`${detailsPageTranslations.phone}: ${user.phone}`],
      [`${detailsPageTranslations.birthDate}: ${birthDate}`],
      [`${detailsPageTranslations.role}: ${user.role}`],
    ]);
  };

  const handleError = (message: string, code: string) => {
    if (code === 'INTERNAL_SERVER_ERROR' || code === 'UNAUTHORIZED') {
      props.setInternalError(errorTranslations.unauthorized);
    } else {
      props.setInternalError(message);
    }
  };

  const { loading } = useUser(props.id, handleCompleted, handleError);

  return (
    <div className='DetailsPage__table'>
      <Table header={userTableHeader} rows={rows} />
      {loading && <Spinner size='medium' />}
    </div>
  );
};
