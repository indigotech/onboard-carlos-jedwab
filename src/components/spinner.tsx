import React from 'react';
import './style.css';

interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
}

export const Spinner = (props: SpinnerProps) => {
  return (
    <div>
      <img
        className={`Spinner${props.size ? ' Spinner__' + props.size : 'Spinner__small'}`}
        alt='loading-indicator'
        src='http://cdn.onlinewebfonts.com/svg/img_1585.png'
      />
    </div>
  );
};
