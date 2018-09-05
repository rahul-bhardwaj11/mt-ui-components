import React from 'react';

import { storiesOf } from '@storybook/react';
import Slider from '.';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

function formatter(value) {
  return `${value}%`;
}

const stories = storiesOf('Slider', module);
stories.addDecorator(withKnobs);

stories.add(
  'Slider',
  withInfo('Slider without tooltip')(() => <Slider tipFormatter={null} />)
);
stories.add(
  'Slider tooltip',
  withInfo('Slider with tooltip')(() => <Slider tipFormatter={formatter} />)
);
