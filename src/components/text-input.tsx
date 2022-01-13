import React from 'react';
import './style.css';

import { Text } from './text';

interface TextInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = (props: TextInputProps) => {
  return (
    <div className='TextInput'>
      <Text type='label'>{props.label}</Text>
      <input className='TextInput__input' type='text' name={props.name} value={props.value} onChange={props.onChange} />
    </div>
  );
};
