import React from 'react';

import { storiesOf } from '@storybook/react';
import Tag from './index';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

const stories = storiesOf('Tag', module);
stories.addDecorator(withKnobs);

stories
  .add(
    'Default tag',
    withInfo('Basic usage of the Default tag')(() => (
      <Tag>{text('children', 'tag')}</Tag>
    ))
  )
  .add(
    'Tag with close option',
    withInfo('Basic usage of tag with close option')(() => (
      <Tag closable>Tag Close</Tag>
    ))
  );
