import React from 'react';
import './style.css';

interface TextInputProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = (props: TextInputProps) => {
  return (
    <div className='TextInput'>
      <label className='TextInput__label'>{props.label}</label>
      <input className='TextInput__input' type='text' value={props.value} onChange={props.onChange} />
    </div>
  );
};
