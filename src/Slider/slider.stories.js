import React from 'react';
import { storiesOf } from '@storybook/react';
import Slider from '.';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean } from '@storybook/addon-knobs';

const marks = {
  0: {
    label: '0',
    tooltip: 'score is 0 here'
  },
  2: {
    tooltip: 'score is 2 here'
  },
  4: {
    tooltip: 'score is 4 here'
  },
  8: {
    tooltip: 'score is 8 here'
  },
  10: {
    label: '10',
    tooltip: 'score is 10 here'
  }
};

class ControlledSlider extends React.Component {
  state = {
    value: 6
  };
  onChange = value => {
    this.setState({ value });
  };
  render() {
    return (
      <Slider
        min={0}
        max={10}
        marks={marks}
        value={this.state.value}
        onChange={this.onChange}
        disabled={boolean('disabled', false)}
        dots={true}
        step={1}
      />
    );
  }
}

const stories = storiesOf('Slider', module);
stories.addDecorator(withKnobs);

stories.add(
  'Slider with dots',
  withInfo('Slider without tooltip')(() => <ControlledSlider />)
);
stories.add(
  'Slider without dots',
  withInfo('Slider without tooltip')(() => (
    <Slider
      min={0}
      max={10}
      //marks={marks}
      defaultValue={6}
      //step={1}
      //disabled={boolean('disabled', false)}
    />
  ))
);
stories.add(
  'Slider with only value',
  withInfo('Slider without tooltip')(() => (
    <Slider disabled={true} value={30} />
  ))
);
