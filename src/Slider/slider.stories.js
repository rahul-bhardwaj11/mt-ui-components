import React from 'react';
import { storiesOf } from '@storybook/react';
import Slider from '.';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean } from '@storybook/addon-knobs';

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
  'Slider with dots',
  withInfo('Slider without tooltip')(() => (
    <Slider
      min={0}
      max={10}
      marks={marks}
      defaultValue={6}
      tipFormatter={formatter}
      disabled={boolean('disabled', false)}
      dots={true}
      step={2}
    />
  ))
);
stories.add(
  'Slider without dots',
  withInfo('Slider without tooltip')(() => (
    <Slider
      min={0}
      max={10}
      marks={marks}
      defaultValue={6}
      tipFormatter={formatter}
      disabled={boolean('disabled', false)}
    />
  ))
);
stories.add(
  'Slider with only value',
  withInfo('Slider without tooltip')(() => (
    <Slider tipFormatter={formatter} disabled value={30} />
  ))
);
