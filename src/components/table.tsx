import React from 'react';
import './style.css';

import { Text } from './text';

interface TableProps {
  header: string[];
  rows: string[][];
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
          {row.map((item, j) => (
            <div className='Table__item' key={j}>
              <Text type={'label'}>{item}</Text>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
