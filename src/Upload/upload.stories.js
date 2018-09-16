import React from 'react';
import { storiesOf } from '@storybook/react';
import Upload from './index';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/';
const stories = storiesOf('Upload', module);

stories.addDecorator(withKnobs);
stories.add(
  'Upload',
  withInfo('Adding type primary to button')(() => <Upload />)
);
