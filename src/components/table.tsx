import React from 'react';
import './style.css';

import { Text } from './text';

interface TableProps {
  header: string[];
  rows: string[][];
  onClickItem?: (rowIndex: number) => void;
}

export const Table = (props: TableProps) => {
  const { onClickItem } = props;

  return (
    <div className='Table'>
      <div className='Table__header'>
        {props.header.map((item, i) => (
          <div className='Table__item' key={i}>
            <Text type={'header'}>{item}</Text>
          </div>
        ))}
      </div>

      {onClickItem === undefined
        ? props.rows.map((row, i) => (
            <div className='Table__row' key={i}>
              {row.map((item, j) => (
                <div className='Table__item' key={j}>
                  <Text type={'label'}>{item}</Text>
                </div>
              ))}
            </div>
          ))
        : props.rows.map((row, i) => (
            <button className='Table__row' key={i} onClick={() => onClickItem(i)}>
              {row.map((item, j) => (
                <div className='Table__item' key={j}>
                  <Text type={'label'}>{item}</Text>
                </div>
              ))}
            </button>
          ))}
    </div>
  );
};
