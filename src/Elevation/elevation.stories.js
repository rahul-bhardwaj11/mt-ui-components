import React from 'react';

import { storiesOf } from '@storybook/react';
import Elevation from './index';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Elevation', module);
stories.addDecorator(withKnobs);

stories.add(
  'Elevation',
  withInfo('Basic usage Elevation')(() => (
    <Elevation level={1}>Hello All</Elevation>
  ))
);
