import React from 'react';
import { storiesOf } from '@storybook/react';
import ReadMore from './index';
import StringToHTML from '../StringToHTML';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('ReadMore', module);
stories.addDecorator(withKnobs);

stories.add(
  'ReadMore',
  withInfo('Basic usage of the ReadMore')(() => (
    <ReadMore>
      <StringToHTML content="jahkahahajhajhaj jahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahaha jhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahaha jhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahaj hajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajh ajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajh ajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhajjahkahahajhajh ajjahkahahajhajhajjahkahahajhajhajjahkahahajhajhaj" />
    </ReadMore>
  ))
);
