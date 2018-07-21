import React from 'react';

import { storiesOf } from '@storybook/react';
import TreeSelect from './index';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, object } from '@storybook/addon-knobs';

const stories = storiesOf('TreeSelect', module);
stories.addDecorator(withKnobs);

const treeData = [
  { value: '1', title: 'About Company' },
  { value: '2', title: 'Company Culture' },
  { value: '3', title: 'Onboarding' },
  { value: '4', title: 'Mission' }
];

stories.add(
  'Default TreeSelect',
  withInfo('Basic usage of the TreeSelect')(() => (
    <TreeSelect
      treeData={object('treeData', treeData)}
      defaultValue="Search Program"
      onSearchInputChange={() => {
        const options = [
          { value: '1', title: 'About Company' },
          { value: '2', title: 'Company Culture' },
          { value: '3', title: 'Onboarding' },
          { value: '4', title: 'Mission' },
          { value: '5', title: 'Mission' }
        ];
        /* eslint-disable */
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(options);
          }, 1000);
        });
      }}
    />
  ))
);
