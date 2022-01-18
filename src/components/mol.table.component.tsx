import React from 'react';

import { Text } from './atm.text.component';
import { StyledWrapper, StyledHeader, StyledRow, StyledItem, ItemType } from './mol.table.styles';

interface TableProps {
  header: string[];
  rows: string[][];
  onClickItem?: (rowIndex: number) => void;
}

export const Table = (props: TableProps) => {
  const rowType: ItemType = props.onClickItem ? 'button' : 'text';

  return (
    <StyledWrapper>
      <StyledHeader>
        {props.header.map((item, i) => (
          <StyledItem key={i}>
            <Text type={'title'}>{item}</Text>
          </StyledItem>
        ))}
      </StyledHeader>

      {props.rows.map((row, i) => (
        <StyledRow key={i} onClick={() => props.onClickItem?.(i)} itemType={rowType}>
          {row.map((item, j) => (
            <StyledItem key={j}>
              <Text type={'normal'}>{item}</Text>
            </StyledItem>
          ))}
        </StyledRow>
      ))}
    </StyledWrapper>
  );
};
