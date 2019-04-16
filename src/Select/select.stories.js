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
  { key: '3', content: 'Third Item' },
  { key: '4', content: 'First Item' },
  { key: '5', content: 'Second Item' },
  { key: '6', content: 'Third Item' },
  { key: '7', content: 'First Item' },
  { key: '8', content: 'Second Item' },
  { key: '9', content: 'Third Item' },
  { key: '10', content: 'First Item' },
  { key: '11', content: 'Second Item' },
  { key: '12', content: 'Third Item' },
  { key: '13', content: 'First Item' },
  { key: '14', content: 'Second Item' },
  { key: '15', content: 'Third Item' },
  { key: '3', content: 'First Item' },
  { key: '17', content: 'Second Item' },
  { key: '18', content: 'Third Item' },
  { key: '19', content: 'First Item' },
  { key: '20', content: 'Second Item' },
  { key: '21', content: 'Third Item' },
  { key: '22', content: 'First Item' },
  { key: '23', content: 'Second Item' },
  { key: '24', content: 'Third Item' },
  { key: '25', content: 'First Item' },
  { key: '26', content: 'Second Item' },
  { key: '27', content: 'Third Item' },
  { key: '28', content: 'First Item' },
  { key: '29', content: 'Second Item' },
  { key: '30', content: 'Third Item' }
];

class ControlledSelect extends React.Component {
  componentDidMount() {
    const t = () => {
      this.forceUpdate();
      setTimeout(t, 2000);
    };
    setTimeout(t, 2000);
  }
  state = {
    value: '3'
  };
  render() {
    return (
      <Select
        options={object('options', options)}
        value={this.state.value}
        onSelect={key => {
          this.setState({ value: key });
        }}
      />
    );
  }
}
stories.add(
  'Default Select',
  withInfo('Basic usage of the Select')(() => (
    <Select
      options={object('options', options)}
      defaultValue="Select"
      showTick={true}
    />
  ))
);

stories
  .add(
    'Controlled Select',
    withInfo('Basic usage of the Select')(() => <ControlledSelect />)
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
stories.add(
  'Select with different dropdown width',
  withInfo('Basic usage of the Select')(() => (
    <Select
      options={object('options', options)}
      defaultValue="Select"
      dropdownMatchSelectWidth={false}
      dropdownStyle={{ width: '150px' }}
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
