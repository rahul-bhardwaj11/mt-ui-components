import React from 'react';

import { storiesOf } from '@storybook/react';
import ErrorPage from './index';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('ErrorPage', module);
stories.addDecorator(withKnobs);

stories.add(
  'Error Page',
  withInfo('Differnet Error Pages')(() => <ErrorPage />)
);
