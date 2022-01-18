import React from 'react';

import { StyledWrapper, StyledSelect } from './atm.select-input.styles';

interface SelectInputProps {
  options: string[];
  value: string;
  onChange: (selectedIndex: number) => void;
}

export const SelectInput = (props: SelectInputProps) => {
  const [index, setIndex] = React.useState(props.options.indexOf(props.value) || 0);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIndex(event.target.selectedIndex);
    props.onChange(event.target.selectedIndex);
  };

  return (
    <StyledWrapper>
      <StyledSelect value={index} onChange={handleChange}>
        {props.options.map((item, i) => (
          <option key={i} value={i}>
            {item}
          </option>
        ))}
      </StyledSelect>
    </StyledWrapper>
  );
};
