import React from 'react';

import { storiesOf } from '@storybook/react';
import TextArea from './index';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

const stories = storiesOf('TextArea', module);
stories.addDecorator(withKnobs);

// const Widthstyles = {
//   width: '300px'
// };
// const Heightstyles = {
//   height: '100px'
// };

stories
  // .add("Default TextArea", withInfo("Basic usage of the TextArea")(() => <div style={Widthstyles}><TextArea placeholder={text('Placeholder')} autosize={{ maxRows: 2 }} /></div>))
  .add(
    'Default TextArea',
    withInfo('Basic usage height based on content lines')(() => (
      <div>
        <TextArea
          placeholder={text('Placeholder')}
          autosize={{ minRows: 2, maxRows: 4 }}
        />
      </div>
    ))
  )
  .add(
    'Wide TextArea',
    withInfo(
      'Basic usage Autosize height with minimum and maximum number of lines'
    )(() => (
      <div>
        <TextArea placeholder={text('Placeholder')} autosize />
      </div>
    ))
  );
