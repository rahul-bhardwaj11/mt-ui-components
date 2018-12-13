import React from 'react';

import { storiesOf } from '@storybook/react';
import FileViewer from './index';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('FileViewer', module);
stories.addDecorator(withKnobs);

stories.add(
  'FileViewer component',
  withInfo('Basic usage of the FileViewer')(() => (
    <FileViewer
      src={'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'}
    />
  ))
);
