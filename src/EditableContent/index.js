import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';
import Button from '../Button';
import Icon from '../Icon';

class EditableContent extends Component {
  state = {
    editing: !this.props.value,
    nextValue: this.props.value
  };

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    editOnEnter: PropTypes.bool
  };

  static defaultProps = {
    placeholder: 'Add Content',
    editOnEnter: false,
    value: ''
  };

  toggleEditMode = () =>
    this.setState(prevState => ({ editing: !prevState.editing }));

  handleSave = () => {
    this.props.onChange(this.state.nextValue);
    this.toggleEditMode();
  };

  handleCancel = () => {
    this.setState({ nextValue: this.props.value }); // resetting to older value
    this.toggleEditMode();
  };

  handleInputChange = event => {
    this.setState({ nextValue: event.target.value });
  };

  handleClear = () => this.setState({ nextValue: '' });

  renderEditingComponent() {
    const { editOnEnter, ...inputProps } = this.props;
    if (editOnEnter) {
      inputProps.onPressEnter = this.handleSave;
      inputProps.onBlur = this.handleSave;
      inputProps.suffix = <Icon type="close" onClick={this.handleClear} />;
    }
    return (
      <div>
        <Input
          {...inputProps}
          value={this.state.nextValue}
          onChange={this.handleInputChange}
        />
        {!editOnEnter && (
          <div>
            <Button size="small" onClick={this.handleSave}>
              Save
            </Button>
            <Button size="small" type="secondary" onClick={this.handleCancel}>
              Cancel
            </Button>
          </div>
        )}
      </div>
    );
  }

  renderStaticComponent() {
    return (
      <div onClick={this.toggleEditMode}>
        <div>{this.props.value}</div>
        <Icon type="edit" />
      </div>
    );
  }

  render() {
    return this.state.editing
      ? this.renderEditingComponent()
      : this.renderStaticComponent();
  }
}

export default EditableContent;
