import React from 'react';

import { storiesOf } from '@storybook/react';
import DateFilter, { DATE_FILTER_OPTIONS } from './index';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('DateFilter', module);
stories.addDecorator(withKnobs);

stories
  .add(
    'DateFilter',
    withInfo('Default')(() => (
      <DateFilter onChange={console.log} /> //eslint-disable-line
    ))
  )
  .add(
    'Date filter with selected options',
    withInfo('With only yesterday, last month and last quarter options')(() => (
      <DateFilter
        onChange={console.log} //eslint-disable-line
        options={[
          DATE_FILTER_OPTIONS.DAY,
          DATE_FILTER_OPTIONS.MONTH,
          DATE_FILTER_OPTIONS.QUARTER
        ]}
      />
    ))
  );
