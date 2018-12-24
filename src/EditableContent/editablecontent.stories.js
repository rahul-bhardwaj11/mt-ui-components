import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { storiesOf } from '@storybook/react';
import EditableContent from './index';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('EditableContent', module);
stories.addDecorator(withKnobs);

class EditableContentWrapper extends Component {
  state = {
    value: this.props.value
  };

  static propTypes = {
    value: PropTypes.string,
    editOnEnter: PropTypes.bool
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    return (
      <EditableContent
        onChange={this.handleChange}
        value={this.state.value}
        editOnEnter={this.props.editOnEnter}
      />
    );
  }
}

stories
  .add(
    'Default EditableContent',
    withInfo('Editable Content with Save and Cancel')(() => (
      <EditableContentWrapper value="Hello World" />
    ))
  )
  .add(
    'Enter EditableContent',
    withInfo('Basic usage of the Dropdown')(() => (
      <EditableContentWrapper
        value="Try to edit this content"
        editOnEnter={true}
      />
    ))
  );
