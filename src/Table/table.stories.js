import React from 'react';

import { storiesOf } from '@storybook/react';
import Table from './index';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import Button from '../Button';
import Select from '../Select';

const stories = storiesOf('Table', module);
stories.addDecorator(withKnobs);

const columns = [
  {
    title: 'Name',
    dataIndex: 'columnFirst'
  },
  {
    title: ' ',
    dataIndex: 'columnSecond'
  },
  {
    title: ' ',
    dataIndex: 'columnThird'
  }
];
const options = [
  { key: '1', content: 'First Item' },
  { key: '2', content: 'Second Item' },
  { key: '3', content: 'Third Item' }
];

const data = [
  {
    key: '1',
    columnFirst: (
      <div>
        <span> this is dummy text</span>
      </div>
    ),
    columnSecond: 32,
    columnThird: 'columnThird text/div come here'
  },
  {
    key: '2',
    columnFirst: <Button />,
    columnSecond: 32,
    columnThird: 'columnThird text/div come here'
  },
  {
    key: '3',
    columnFirst: (
      <Select
        options={options}
        defaultValue="Select"
        style={{ minWidth: '200px' }}
      />
    ),
    columnSecond: (
      <Select
        options={options}
        defaultValue="Select"
        style={{ minWidth: '200px' }}
      />
    ),
    columnThird: (
      <div>
        <Select
          options={options}
          defaultValue="Select"
          style={{ minWidth: '200px' }}
        />
        <span> this is dummy text</span>
      </div>
    )
  },
  {
    key: '4',
    columnFirst: 'Joe Black',
    columnSecond: 32,
    columnThird: 'Sidney No. 1 Lake Park'
  }
];

stories
  .add(
    'Table Small',
    withInfo('Adding Table small')(() => (
      <Table
        columns={columns}
        dataSource={data}
        size="small"
        pagination={false}
      />
    ))
  )
  .add(
    'Table Middle',
    withInfo('Adding Table middle')(() => (
      <Table
        columns={columns}
        dataSource={data}
        size="middle"
        pagination={false}
      />
    ))
  );
