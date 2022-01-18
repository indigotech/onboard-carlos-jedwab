import React from 'react';

import { StyledAnimation, SpinnerSizeType } from './atm.spinner.styles';

interface SpinnerProps {
  size?: SpinnerSizeType;
}

export const Spinner = (props: SpinnerProps) => {
  return (
    <StyledAnimation width={props.size} alt='loading-indicator' src='http://cdn.onlinewebfonts.com/svg/img_1585.png' />
  );
};
