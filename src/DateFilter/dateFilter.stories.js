import React from 'react';

import { storiesOf } from '@storybook/react';
import DateFilter, { DATE_FILTER_OPTIONS } from './index';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

const stories = storiesOf('DateFilter', module);
stories.addDecorator(withKnobs);

stories.add(
  'Date filter with selected options',
  withInfo('')(() => {
    const mappedObject = Object.keys(DATE_FILTER_OPTIONS).reduce((map, v) => {
      map[v] = boolean(v, true);
      return map;
    }, {});
    return (
      <DateFilter
        onChange={action('Date Filter Selected')}
        options={Object.keys(mappedObject)
          .map(v => mappedObject[v] && DATE_FILTER_OPTIONS[v])
          .filter(v => v)}
      />
    );
  })
);
