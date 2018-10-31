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
  )
  .add(
    'Async Select',
    withInfo('Basic usage of Async Select')(() => (
      <Select.Async
        mode="multiple"
        placeholder="Search any artist"
        handleSearch={handleSearch}
        handleChange={console.log} //eslint-disable-line
        notFoundContent={null}
      />
    ))
  );

function handleSearch(value) {
  const url = 'https://itunes.apple.com/search?term=';
  return fetch(`${url}${value}`)
    .then(response => response.json())
    .then(({ results }) =>
      results.map(v => ({
        content: `${v.trackName} by ${v.artistName}`,
        key: `${v.trackId}-${v.artistId}`
      }))
    );
}
