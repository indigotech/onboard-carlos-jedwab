import React from 'react';
import './style.css';

interface TextProps {
  type: 'header' | 'label' | 'error' | 'success' | 'button';
  children: string | string[];
}

export const Text = (props: TextProps) => {
  return (
    <div className='TextLabel'>
      <header className={'TextLabel__' + props.type}>{props.children}</header>
    </div>
  );
};
