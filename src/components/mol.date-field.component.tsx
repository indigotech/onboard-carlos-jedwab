import React from 'react';

import { TextInput } from './atm.text-input.component';
import { Text } from './atm.text.component';
import { StyledWrapper, StyledLabelWrapper } from './mol.date-field.styles';
import { toDate, parseDate } from 'helpers/formatting';
import { isDate } from 'helpers/validations';

interface DateFieldProps {
  label: string;
  name: string;
  value: Date;
  onChange: (date: Date) => void;
}

export const DateField = (props: DateFieldProps) => {
  const [textDate, setTextDate] = React.useState(parseDate(props.value, { format: 'dd/mm/yyyy' }));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = toDate(event.target.value);
    if (isDate(date)) {
      props.onChange(date);
      setTextDate(event.target.value);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const date = toDate(event.target.value);
    if (isDate(date)) {
      setTextDate(parseDate(date, { format: 'dd/mm/yyyy' }));
    }
  };

  return (
    <StyledWrapper>
      <StyledLabelWrapper>
        <Text type='label'>{props.label}</Text>
      </StyledLabelWrapper>
      <TextInput name={props.name} value={textDate} onChange={handleChange} onBlur={handleBlur} />
    </StyledWrapper>
  );
};
