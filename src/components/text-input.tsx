import React from 'react';
import './style.css';

import { Text } from './text';

interface TextInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (text: string) => void;
}

export const TextInput = (props: TextInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.value);
  };

  return (
    <div className='TextInput'>
      <Text type='label'>{props.label}</Text>
      <input className='TextInput__input' type='text' name={props.name} value={props.value} onChange={handleChange} />
    </div>
  );
};
