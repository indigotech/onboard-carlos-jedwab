import React from 'react';
import './style.css';

import { Text } from './text';

export type RowType = {
  [key: string]: string;
};

interface TableProps {
  header: RowType;
  rows: RowType[];
  renderHeaderItem?: (key: string, value: string) => JSX.Element;
  renderRowItem?: (key: string, item: string) => JSX.Element;
}

export const Table = (props: TableProps) => {
  return (
    <div className='Table'>
      <div className='Table__header'>
        {Object.entries(props.header).map(([key, item]) => (
          <div className='Table__item' key={key}>
            {props.renderHeaderItem ? props.renderHeaderItem(key, item) : <Text type={'header'}>{item}</Text>}
          </div>
        ))}
      </div>

      {props.rows.map((row, i) => (
        <div className='Table__row' key={i}>
          {Object.entries(row).map(([key, item], j) => (
            <div className='Table__item' key={j}>
              {props.renderRowItem ? props.renderRowItem(key, item) : <Text type={'label'}>{item}</Text>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
