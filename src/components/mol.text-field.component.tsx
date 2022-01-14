import React from 'react';

import { TextInput } from './atm.text-input.component';
import { Text } from './atm.text.component';
import { StyledWrapper, StyledLabelWrapper } from './mol.text-field.styles';
import { onlyDigits } from 'helpers/formatting';

interface TextFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (text: string) => void;
  onlyDigits?: boolean;
}

export const TextField = (props: TextFieldProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = props.onlyDigits ? onlyDigits(event.target.value) : event.target.value;
    props.onChange(text);
  };

  return (
    <StyledWrapper>
      <StyledLabelWrapper>
        <Text type='label'>{props.label}</Text>
      </StyledLabelWrapper>
      <TextInput name={props.name} value={props.value} onChange={handleChange} />
    </StyledWrapper>
  );
};
