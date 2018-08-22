import React from 'react';

import { storiesOf } from '@storybook/react';
import Button from './index';
import { withInfo } from '@storybook/addon-info';
import { text, withKnobs, number } from '@storybook/addon-knobs';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories
  .add(
    'Primary button',
    withInfo('Adding type primary to button')(() => (
      <Button type={text('type', 'primary')} size={text('size', 'large')}>
        {text('children', 'Submit')}
      </Button>
    ))
  )
  .add(
    'Secondary button',
    withInfo('Adding type secondary to button')(() => (
      <Button type={text('type', 'default')} size={text('size', 'large')}>
        {text('children', 'Submit')}
      </Button>
    ))
  )
  .add(
    'Tertiary button',
    withInfo('Adding type tertiary to button')(() => (
      <Button type={text('type', 'tertiary')}>
        {text('children', 'Submit')}
      </Button>
    ))
  )
  .add(
    'Text button',
    withInfo('Adding type Text to button')(() => (
      <Button active={number('active', 0)} type={text('type', 'text')}>
        {text('children', 'Submit')}
      </Button>
    ))
  )

  .add(
    'Link button',
    withInfo('Adding type Link to button for default blue')(() => (
      <Button type={text('type', 'link')}>{text('children', 'Submit')}</Button>
    ))
  )

  .add(
    'Edit button',
    withInfo('Edit type button')(() => (
      <Button type={text('type', 'edit')}>{text('children', 'Submit')}</Button>
    ))
  );
