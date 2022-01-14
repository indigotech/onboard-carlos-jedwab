import React from 'react';
import './style.css';
import { useParams } from 'react-router-dom';

import { Text } from 'components/text';
import { translations } from 'helpers/translations';

import { UserInfo } from './user-info.component';

const detailsPageTranslations = translations.pt.details_page;

export const DetailsPage = () => {
  const [internalError, setInternalError] = React.useState('');

  const params = useParams();
  const id = parseInt(params.id as string);

  return (
    <div className='DetailsPage'>
      <Text type='header'>{detailsPageTranslations.title}</Text>
      <Text type='label'>{detailsPageTranslations.subtitle}</Text>

      {internalError === '' ? (
        <UserInfo id={id} setInternalError={setInternalError} />
      ) : (
        <Text type='error'>{internalError}</Text>
      )}
    </div>
  );
};
