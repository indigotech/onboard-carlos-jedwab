import React from 'react';

import { Spinner } from '../components/spinner';

export const FrontPage = () => {
  // TODO: Change isLoading to a state and show it only when during this page's request
  const isLoading = true;

  return (
    <div>
      <h1>FrontPage</h1>
      {isLoading && <Spinner size='medium' />}
    </div>
  );
};
