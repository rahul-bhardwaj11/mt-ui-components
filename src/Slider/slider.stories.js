import React from 'react';
import { storiesOf } from '@storybook/react';
import Slider from '.';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

function formatter(value) {
  return `${value}%`;
}
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

const stories = storiesOf('Slider', module);
stories.addDecorator(withKnobs);

stories.add(
  'Slider Empty',
  withInfo('Slider without tooltip')(() => (
    <Slider step={2} min={0} max={10} value={null} marks={marks} />
  ))
);
stories.add(
  'Slider filled with marker',
  withInfo('Slider with  tooltip on every step')(() => (
    <Slider
      dots={true}
      step={2}
      min={0}
      max={10}
      marks={marks}
      defaultValue={6}
    />
  ))
);
stories.add(
  'Slider disabled filled without marker',
  withInfo('Slider with tooltip')(() => (
    <Slider tipFormatter={formatter} disabled value={30} />
  ))
);

stories.add(
  'Slider disabled without marker',
  withInfo('Slider with tooltip ')(() => (
    <Slider tipFormatter={formatter} disabled />
  ))
);

stories.add(
  'Slider Disabled  with marker',
  withInfo('Slider with  tooltip on every step')(() => (
    <Slider dots={true} step={1} min={0} max={10} marks={marks} disabled />
  ))
);
stories.add(
  'Slider Disabled Filled with marker',
  withInfo('Slider with  tooltip on every step')(() => (
    <Slider
      dots={true}
      step={1}
      min={0}
      max={10}
      marks={marks}
      disabled
      defaultValue={6}
    />
  ))
);
