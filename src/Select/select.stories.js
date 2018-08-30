import React from 'react';

import { storiesOf } from '@storybook/react';
import Select from './index';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, object } from '@storybook/addon-knobs';

const stories = storiesOf('Select', module);
stories.addDecorator(withKnobs);

const options = [
  { key: '1', content: 'First Item' },
  { key: '2', content: 'Second Item' },
  { key: '3', content: 'Third Item' }
];

stories
  .add(
    'Default Select',
    withInfo('Basic usage of the Select')(() => (
      <Select options={object('options', options)} defaultValue="Select" />
    ))
  )
  .add(
    'Multiple Select',
    withInfo('Basic usage of the Multiple Select')(() => (
      <Select
        options={object('options', options)}
        defaultValue="Select"
        mode="multiple"
      />
    ))
  );

//   <div style={{ margin: 10, overflow: 'scroll', height: 200 }}>
//   <h2>Select in a scrollable area</h2>
//   <div style={{ padding: 100, height: 1000, background: '#eee', position: 'relative' }} id="area">
//     <h4>可滚动的区域 / scrollable area</h4>
//     <Select
//       defaultValue="lucy"
//       style={{ width: 120 }}
//       getPopupContainer={() => document.getElementById('area')}
//     >
//       <Option value="jack">Jack</Option>
//       <Option value="lucy">Lucy</Option>
//       <Option value="yiminghe">yiminghe</Option>
//     </Select>
//   </div>
// </div>
