import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './index';
import { withInfo } from '@storybook/addon-info';

storiesOf('Button', module)
  .add(
    'simple info',
    withInfo('Basic usage of the button')(() => (
      <Button onClick={action('clicked')}>Hello Button</Button>
    )),
  );
