import React from 'react';

import { storiesOf } from '@storybook/react';
import Tag from './index';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

const CheckableTag = Tag.CheckableTag;
const stories = storiesOf('Tag', module);
stories.addDecorator(withKnobs);

class SelectedTag extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: true
    };
  }
  handleChange = checked => {
    this.setState({ checked });
  };

  render() {
    return (
      <CheckableTag checked={this.state.checked} onChange={this.handleChange}>
        {text('children', 'tag')}
      </CheckableTag>
    );
  }
}

stories
  .add(
    'Default tag',
    withInfo('Basic usage of the Default tag')(() => (
      <Tag>{text('children', 'tag')}</Tag>
    ))
  )
  .add(
    'Selected tag',
    withInfo('Basic usage of the Selected tag')(() => <SelectedTag />)
  )
  .add(
    'Closeable Tag ',
    withInfo('Basic usage of tag with close option')(() => (
      <Tag closable color="blue">
        Tag Close
      </Tag>
    ))
  )
  .add(
    'Active tags',
    withInfo('Basic usage of the active tag')(() => <Tag color>Active</Tag>)
  );
