import React from 'react';
import { storiesOf } from '@storybook/react';
import Popover from './index';
import ConfirmBox from '../ConfirmBox';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Popover', module);
stories.addDecorator(withKnobs);

stories
  .add(
    'Popover',
    withInfo('Basic usage popover')(() => (
      <Popover title="text will come here" trigger="hover">
        hover me
      </Popover>
    ))
  )
  .add(
    'Pop with contentover',
    withInfo('Basic usage popover')(() => (
      <Popover
        trigger="click"
        content={
          <ConfirmBox title="Are you sure you want to delete this Parameter?" />
        }
      >
        hover me
      </Popover>
    ))
  );
