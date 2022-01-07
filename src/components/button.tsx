import React from 'react';
import './style.css';

import { Text } from './text';
import { Spinner } from './spinner';

interface ButtonProps {
  label: string;
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <div className='Button'>
      <button className='Button__button' type={props.type} disabled={props.isLoading} onClick={props.onClick}>
        {props.isLoading && <Spinner size='small' />}
        <div className='Button__label'>
          <Text type='button'>{props.label}</Text>
        </div>
      </button>
    </div>
  );
};
