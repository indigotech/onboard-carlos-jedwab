import React from 'react';

import { StyledText, TextNameType } from './atm.text.styles';

interface TextProps {
  type: TextNameType;
  children: string | string[];
}

export const Text = (props: TextProps) => {
  return (
    <div>
      <StyledText name={props.type}>{props.children}</StyledText>
    </div>
  );
};
