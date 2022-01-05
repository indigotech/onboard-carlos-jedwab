import React from 'react';
import './style.css';

interface TextLabelProps {
  children: string;
}

export const TextLabel = (props: TextLabelProps) => {
  return (
    <div className='TextLabel'>
      <header className='TextLabel__label'>{props.children}</header>
    </div>
  );
};
