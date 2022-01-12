import React from 'react';
import './style.css';

import { Text } from './text';

import { onlyDigits } from '../helpers/formatting';

interface PhoneInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (phone: string) => void;
}

export const PhoneInput = (props: PhoneInputProps) => {
  const [textPhone, setTextPhone] = React.useState(props.value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const phone = onlyDigits(event.target.value);

    props.onChange(phone);
    setTextPhone(event.target.value);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const phone = onlyDigits(event.target.value);
    setTextPhone(phone);
  };

  return (
    <div className='TextInput'>
      <Text type='label'>{props.label}</Text>
      <input
        className='TextInput__input'
        type='text'
        name={props.name}
        value={textPhone}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  );
};
