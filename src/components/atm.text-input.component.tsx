import React from 'react';

import { StyledInput, StyledWrapper } from './atm.text-input.styles';

interface TextInputProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const TextInput = (props: TextInputProps) => {
  return (
    <StyledWrapper>
      <StyledInput type='text' name={props.name} value={props.value} onChange={props.onChange} onBlur={props.onBlur} />
    </StyledWrapper>
  );
};
