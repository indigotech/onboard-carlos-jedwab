import React from 'react';
import './style.css';

import { Text } from './text';

import { toDate, toText } from '../helpers/formatting';
import { isDate } from '../helpers/validations';

interface DateInputProps {
  label: string;
  name: string;
  value: Date;
  onChange: (date: Date) => void;
}

export const DateInput = (props: DateInputProps) => {
  const [textDate, setTextDate] = React.useState(toText(props.value));

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
      setTextDate(toText(date));
    }
  };

  return (
    <div className='TextInput'>
      <Text type='label'>{props.label}</Text>
      <input
        className='TextInput__input'
        type='text'
        name={props.name}
        value={textDate}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  );
};
