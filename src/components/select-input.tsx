import React from 'react';
import './style.css';

import { Text } from './text';

interface SelectInputProps {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectInput = (props: SelectInputProps) => {
  return (
    <div className='SelectInput'>
      <Text type='label'>{props.label}</Text>
      <select value={props.value} onChange={props.onChange}>
        {props.options.map((item, i) => (
          <option key={i} value={i}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
