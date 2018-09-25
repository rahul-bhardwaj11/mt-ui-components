import React from 'react';

import { storiesOf } from '@storybook/react';
import Tooltip from './index';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import Button from '../Button';

const stories = storiesOf('Tooltip', module);
stories.addDecorator(withKnobs);

stories.add(
  'Tooltip',
  withInfo('Basic usage tooltip')(() => (
    <div>
      <Tooltip title={<div>ToolTip</div>}>
        <Button>Hover Me</Button>
      </Tooltip>
    </div>
  ))
);
