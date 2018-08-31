import React from 'react';
import { storiesOf } from '@storybook/react';
import Loader, { LOADING_SIZE, LOADER_TYPE } from './index';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select } from '@storybook/addon-knobs';
const stories = storiesOf('Loader', module);
stories.addDecorator(withKnobs);

stories.add(
  'Loader',
  withInfo('Add Basic loader')(() => (
    <Loader
      type={select('type', Object.keys(LOADER_TYPE))}
      size={select('size', Object.keys(LOADING_SIZE))}
      vCenter={true}
    />
  ))
);
