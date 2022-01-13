import React from 'react';
import './style.css';

import { Text } from './text';

export type HeaderType = string[];
export type RowType = { name: string; email: string };

interface TableProps {
  header: string[];
  rows: RowType[];
}

export const Table = (props: TableProps) => {
  return (
    <div className='Table'>
      <div className='Table__header'>
        {props.header.map((item, i) => (
          <div className='Table__item' key={i}>
            <Text type={'header'}>{item}</Text>
          </div>
        ))}
      </div>

      {props.rows.map((row, i) => (
        <div className='Table__row' key={i}>
          <div className='Table__item'>
            <Text type={'label'}>{row.name}</Text>
          </div>
          <div className='Table__item'>
            <Text type={'label'}>{row.email}</Text>
          </div>
        </div>
      ))}
    </div>
  );
};
