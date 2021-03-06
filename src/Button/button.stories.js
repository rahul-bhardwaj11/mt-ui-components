import React from 'react';

import { storiesOf } from '@storybook/react';
import Button from './index';
import { withInfo } from '@storybook/addon-info';
import { text, withKnobs, select, boolean } from '@storybook/addon-knobs';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories
  .add(
    'Primary button',
    withInfo('Adding type primary to button')(() => (
      <Button
        type={select('type', [
          'primary',
          'secondary',
          'tertiary',
          'text',
          'link',
          'edit'
        ])}
        size={select('size', ['large', 'medium', 'small'])}
        disabled={boolean('disabled', false)}
        loading={boolean('loading', false)}
        danger={boolean('danger', false)}
      >
        {text('children', 'Submit')}
      </Button>
    ))
  )
  .add(
    'Secondary button',
    withInfo('Adding type secondary to button')(() => (
      <Button
        type={text('type', 'secondary')}
        size={select('size', ['large', 'medium', 'small'])}
        disabled={boolean('disabled', false)}
      >
        {text('children', 'Submit')}
      </Button>
    ))
  )
  .add(
    'Tertiary button',
    withInfo('Adding type tertiary to button')(() => (
      <Button
        type={text('type', 'tertiary')}
        size={select('size', ['large', 'medium', 'small'])}
        disabled={boolean('disabled', false)}
      >
        {text('children', 'Submit')}
      </Button>
    ))
  )
  .add(
    'Text button',
    withInfo('Adding type Text to button')(() => (
      <Button
        active={boolean('active', false)}
        type={text('type', 'text')}
        size={select('size', ['large', 'medium', 'small'])}
        disabled={boolean('disabled', false)}
        danger={boolean('danger', false)}
      >
        {text('children', 'Submit')}
      </Button>
    ))
  )

  .add(
    'Link button',
    withInfo('Adding type Link to button for default blue')(() => (
      <Button
        type={text('type', 'link')}
        size={select('size', ['large', 'medium', 'small'])}
        disabled={boolean('disabled', false)}
      >
        {text('children', 'Submit')}
      </Button>
    ))
  )
  .add(
    'Edit button',
    withInfo('Edit type button')(() => (
      <Button
        type={text('type', 'edit')}
        size={select('size', ['large', 'medium', 'small'])}
        disabled={boolean('disabled', false)}
      >
        {text('children', 'Submit')}
      </Button>
    ))
  )
  .add(
    'Loading button',
    withInfo('Loading type button')(() => (
      <Button type="secondary" loading={boolean('loading', false)}>
        Mindtickle
      </Button>
    ))
  );
