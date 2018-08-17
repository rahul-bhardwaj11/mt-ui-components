import React from 'react';
import { storiesOf } from '@storybook/react';
import CheckBox from './index';
import { withInfo } from '@storybook/addon-info';
import { boolean, withKnobs, text } from '@storybook/addon-knobs';

const stories = storiesOf('CheckBox', module);
stories.addDecorator(withKnobs);
stories
  .add(
    'Default CheckBox',
    withInfo('Basic usage of the Checkbox')(() => (
      <CheckBox label={text('label', 'Checkbox')} />
    ))
  )
  .add(
    'Checked CheckBox',
    withInfo('Checked checkbox')(() => (
      <CheckBox checked={boolean('checked', true)} label="Checkbox" />
    ))
  )
  .add(
    'Indeterminate CheckBox',
    withInfo('Indeterminate checkbox')(() => <CheckBox indeterminate={true} />)
  );
