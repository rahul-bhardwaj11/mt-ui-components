import React from 'react';

import { storiesOf } from '@storybook/react';
import SelectWithSearch from './index';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
//import Menu from '../Menu';

const stories = storiesOf('SelectWithSearch', module);
stories.addDecorator(withKnobs);

function getOptions(search, offset = 0, pageSize = 10) {
  let options = [];
  for (let i = offset; i < offset + pageSize; ++i) {
    options.push({
      value: i + 1,
      meta: 'i',
      search,
      label: `Option ${i + 1}`,
      content: `Option ${i + 1}`
    });
  }
  return options;
}

// const CustomMenu = obj => {
//   let { options, isLoading } = obj;
//   if (isLoading) {
//     return <div>Loading...</div>;
//   } else if (!options.length) {
//     return <div>No content found</div>;
//   }
//   return <Menu options={options} />;
// };

function onChange() {}

const promiseOption = ({ search, offset, pageSize }) => {
  //console.log('Fetching for ', offset, pageSize, search);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(getOptions(search, offset, pageSize));
    }, 1000);
  });
};

stories.add(
  'SelectWithSearch',
  withInfo('Basic usage of the SelectWithSearch')(() => (
    <SelectWithSearch
      options={getOptions()}
      onSelect={onChange}
      selectedOption={{ label: 'Select Reviewer' }}
      placeholder={'Search People'}
    />
  ))
);

stories.add(
  'Async Select',
  withInfo('Usage of the Infinite Select')(() => (
    <SelectWithSearch
      async
      isClearable
      promiseOption={promiseOption}
      onSelect={onChange}
      placeholder={'Search People'}
      selectedOption={{ label: 'Select Reviewer' }}
    />
  ))
);
