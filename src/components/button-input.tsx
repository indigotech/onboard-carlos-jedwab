import React from 'react';
import './style.css';

import { Text } from './text';

interface ButtonInputProps {
  label: string;
  onClick?: () => void;
}

export const ButtonInput = (props: ButtonInputProps) => {
  return (
    <div className='ButtonInput'>
      <button className='ButtonInput__button' onClick={props.onClick}>
        <Text type='button'>{props.label}</Text>
      </button>
    </div>
  );
};
