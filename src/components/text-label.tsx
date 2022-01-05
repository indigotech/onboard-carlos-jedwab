import React from 'react';
import './style.css';

interface TextLabelProps {
  type: 'header' | 'label' | 'error' | 'button';
  children: string | string[];
}

export const TextLabel = (props: TextLabelProps) => {
  return (
    <div className='TextLabel'>
      <header className={'TextLabel__' + props.type}>{props.children}</header>
    </div>
  );
};
