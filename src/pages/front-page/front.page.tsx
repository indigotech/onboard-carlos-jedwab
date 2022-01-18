import React from 'react';
import './style.css';

import { Text } from 'components/atm.text.component';
import { translations } from 'helpers/translations';

import { UserForms } from './user-forms.component';
import { UserList } from './user-list.component';

const frontPageTranslations = translations.pt.front_page;

export const FrontPage = () => {
  const [internalError, setInternalError] = React.useState('');

  return (
    <div className='FrontPage'>
      <Text type='title'>{frontPageTranslations.title}</Text>
      <Text type='normal'>{frontPageTranslations.subtitle}</Text>

      {internalError === '' ? (
        <>
          <div className='FrontPage__forms'>
            <UserForms />
          </div>
          <div className='FrontPage__table'>
            <UserList setInternalError={setInternalError} />
          </div>
        </>
      ) : (
        <Text type='error'>{internalError}</Text>
      )}
    </div>
  );
};
