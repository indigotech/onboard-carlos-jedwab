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
          {Object.entries(row).map(([key, item]) => (
            <div className='Table__item' key={key}>
              <Text type={'label'}>{item}</Text>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
