import React from 'react';
import './style.css';

interface ButtonInputProps {
  label: string;
  onClick?: () => void;
}

export const ButtonInput = (props: ButtonInputProps) => {
  return (
    <div className='ButtonInput'>
      <button className='ButtonInput__button' onClick={props.onClick}>
        <div className='ButtonInput__label'>{props.label}</div>
      </button>
    </div>
  );
};
