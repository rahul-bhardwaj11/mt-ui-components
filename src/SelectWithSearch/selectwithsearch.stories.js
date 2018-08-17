import React from 'react';
import { storiesOf } from '@storybook/react';
import SelectWithSearch from './index';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
//import Menu from '../Menu';

const stories = storiesOf('SelectWithSearch', module);
stories.addDecorator(withKnobs);

const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
  { value: 'blue', label: 'Blue', color: '#0052CC', disabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630' },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' }
];

// const CustomMenu = obj => {
//   let { options, isLoading } = obj;
//   if (isLoading) {
//     return <div>Loading...</div>;
//   } else if (!options.length) {
//     return <div>No content found</div>;
//   }
//   return <Menu options={options} />;
// };

//function onChange() {}

// const promiseOption = ({ search, offset, pageSize }) => {
//   //console.log('Fetching for ', offset, pageSize, search);
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(getOptions(search, offset, pageSize));
//     }, 1000);
//   });
// };

const filterColors = search =>
  colourOptions.filter(i =>
    i.label.toLowerCase().includes(search.toLowerCase())
  );

const promiseOption = ({ search }) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(filterColors(search));
    }, 1000);
  });

stories.add(
  'Sync Select',
  withInfo('Basic usage of the SelectWithSearch')(() => (
    <SelectWithSearch
      defaultValue={colourOptions[2]}
      label="Select..."
      options={colourOptions}
    />
  ))
);

stories.add(
  'Sync MultiSelect',
  withInfo('Basic usage of the SelectWithSearch')(() => (
    <SelectWithSearch
      defaultValue={colourOptions[2]}
      label="Select..."
      options={colourOptions}
      onChange={() => {}}
      isMulti
    />
  ))
);

stories.add(
  'Sync MultiSelect with initially Button',
  withInfo('Basic usage of the SelectWithSearch')(() => (
    <SelectWithSearch
      defaultValue={colourOptions[2]}
      label="Select..."
      options={colourOptions}
      onChange={() => {}}
      isMulti
      initialType="button"
    />
  ))
);

stories.add(
  'Async Select',
  withInfo('Usage of the Async Infinite Select')(() => (
    <SelectWithSearch
      async
      promiseOption={promiseOption}
      defaultValue={colourOptions[2]}
    />
  ))
);

stories.add(
  'Async MultiSelect',
  withInfo('Usage of the Async Infinite Select')(() => (
    <SelectWithSearch
      async
      promiseOption={promiseOption}
      defaultValue={colourOptions[2]}
      isMulti
      //initialType='button'
    />
  ))
);
