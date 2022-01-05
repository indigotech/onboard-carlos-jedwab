import React from 'react';
import './style.css';

import { TextLabel } from './text-label';

interface ButtonInputProps {
  label: string;
  onClick?: () => void;
}

export const ButtonInput = (props: ButtonInputProps) => {
  return (
    <div className='ButtonInput'>
      <button className='ButtonInput__button' onClick={props.onClick}>
        <TextLabel type='button'>{props.label}</TextLabel>
      </button>
    </div>
  );
};
