import React from 'react';
import { storiesOf } from '@storybook/react';
import AutoComplete from './index';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('AutoComplete', module);
stories.addDecorator(withKnobs);
let option = ['first', 'second', 'third'];
const handleSearch = () => {};
stories.add(
  'AutoComplete',
  withInfo('Basic usage AutoComplete')(() => (
    <AutoComplete
      dataSource={option}
      style={{ width: 200 }}
      onSelect={() => {}}
      onSearch={handleSearch}
      placeholder="input here"
    />
  ))
);
