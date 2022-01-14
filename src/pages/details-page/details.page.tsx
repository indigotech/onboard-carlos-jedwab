import React from 'react';
import './style.css';

import { Text } from 'components/text';
import { translations } from 'helpers/translations';

import { UserInfo } from './user-info.component';

const detailsPageTranslations = translations.pt.details_page;

export const DetailsPage = () => {
  const [internalError, setInternalError] = React.useState('');

  return (
    <div className='DetailsPage'>
      <Text type='header'>{detailsPageTranslations.title}</Text>
      <Text type='label'>{detailsPageTranslations.subtitle}</Text>

      {internalError === '' ? (
        <UserInfo id={1} setInternalError={setInternalError} />
      ) : (
        <Text type='error'>{internalError}</Text>
      )}
    </div>
  );
};
