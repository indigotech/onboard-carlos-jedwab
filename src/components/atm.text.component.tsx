import React from 'react';

import { StyledText } from './atm.text.styles';

interface TextProps {
  type: 'title' | 'normal' | 'label' | 'error' | 'success';
  children: string | string[];
}

export const Text = (props: TextProps) => {
  return (
    <div>
      <StyledText name={props.type}>{props.children}</StyledText>
    </div>
  );
};
