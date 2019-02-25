import React from 'react';

import { storiesOf } from '@storybook/react';
import ErrorPage, { PAGE_TYPES } from './index';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('ErrorPage', module);
stories.addDecorator(withKnobs);

stories.add(
  'Error Page',
  withInfo('Differnet Error Pages')(() => (
    <ErrorPage pageType={PAGE_TYPES['404']} />
  ))
);
