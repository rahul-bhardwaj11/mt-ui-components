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
    tooltip: 'score is 10 here'
  }
};

const stories = storiesOf('Slider', module);
stories.addDecorator(withKnobs);

stories.add(
  'Slider',
  withInfo('Slider without tooltip')(() => <Slider defaultValue={6} />)
);
stories.add(
  'Slider step tooltip',
  withInfo('Slider with  tooltip on every step')(() => (
    <Slider dots={true} step={2} min={0} max={10} marks={marks} />
  ))
);
stories.add(
  'Slider tooltip',
  withInfo('Slider with tooltip')(() => <Slider tipFormatter={formatter} />)
);
