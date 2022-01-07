import React from 'react';

import { Spinner } from '../components/spinner';
import { Table, HeaderType, RowType } from '../components/table';

export const FrontPage = () => {
  // TODO: Change isLoading to a state and show it only when during this page's request
  const isLoading = true;

  // TODO: Use the data from a request
  const header: HeaderType = ['Nome', 'Email'];

  const rows: RowType[] = [
    {
      name: 'John',
      email: 'john@test.com',
    },
    {
      name: 'Jane',
      email: 'jane@test.com',
    },
  ];

  return (
    <div>
      <h1>FrontPage</h1>
      {isLoading && <Spinner size='medium' />}
      <Table header={header} rows={rows} />
    </div>
  );
};
