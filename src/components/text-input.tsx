import React from 'react';
import './style.css';

import { TextLabel } from './text-label';

interface TextInputProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = (props: TextInputProps) => {
  return (
    <div className='TextInput'>
      <TextLabel type='label'>{props.label}</TextLabel>
      <input className='TextInput__input' type='text' value={props.value} onChange={props.onChange} />
    </div>
  );
};
