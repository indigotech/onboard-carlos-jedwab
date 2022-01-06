import React from 'react';
import './style.css';

import { Text } from './text';

interface ButtonInputProps {
  label: string;
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
  onClick?: () => void;
}

export const ButtonInput = (props: ButtonInputProps) => {
  return (
    <div className='ButtonInput'>
      <button className='ButtonInput__button' type={props.type} disabled={props.isLoading} onClick={props.onClick}>
        {props.isLoading && (
          <img
            className='ButtonInput__loading'
            alt='loading-indicator'
            src='http://cdn.onlinewebfonts.com/svg/img_1585.png'
          />
        )}
        <div className='ButtonInput__label'>
          <Text type='button'>{props.label}</Text>
        </div>
      </button>
    </div>
  );
};
