import React from 'react';

import { Text } from './atm.text.component';
import { SelectInput } from './atm.select-input.component';
import { StyledWrapper, StyledLabelWrapper } from './mol.text-field.styles';

interface OptionsFieldProps {
  label: string;
  options: string[];
  value: string;
  onChange: (selectedIndex: number) => void;
}

export const OptionsField = (props: OptionsFieldProps) => {
  return (
    <StyledWrapper>
      <StyledLabelWrapper>
        <Text type='label'>{props.label}</Text>
      </StyledLabelWrapper>
      <SelectInput options={props.options} value={props.value} onChange={props.onChange} />
    </StyledWrapper>
  );
};
