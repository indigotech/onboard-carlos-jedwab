import React from 'react';
import './style.css';

interface SpinnerProps {
  hide?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export const Spinner = (props: SpinnerProps) => {
  return (
    <div>
      {!props.hide && (
        <img
          className={`Spinner${props.size ? ' Spinner__' + props.size : 'Spinner__small'}`}
          alt='loading-indicator'
          src='http://cdn.onlinewebfonts.com/svg/img_1585.png'
        />
      )}
    </div>
  );
};
