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
  const [index, setIndex] = React.useState(props.options.indexOf(props.value) || 0);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIndex(event.target.selectedIndex);
    props.onChange(event);
  };

  return (
    <div className='SelectInput'>
      <Text type='label'>{props.label}</Text>
      <select value={index} onChange={handleChange}>
        {props.options.map((item, i) => (
          <option key={i} value={i}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
