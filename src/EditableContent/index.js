import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Tag from '../Tag';
import Icon from '../Icon';
import styled from 'styled-components';

const StyledEditableContent = styled.div`
  padding: 6px 12px;
  .editableText {
    float: left;
    cursor: pointer;
    margin-right: 12px;
  }

  .icon-edit {
    cursor: pointer;
  }
`;

const StyledEditableInput = styled.div`
  .editableInputControl {
    width: 40%;
    float: left;
    .icon-close {
      font-size: 10px;
    }
  }

  .editableContentSaveBtn,
  .editableContentCancelBtn {
    margin: 4px 0px 0px 12px;
    padding: 0px 12px;
  }
`;

class EditableContent extends Component {
  state = {
    editing: !this.props.value,
    nextValue: this.props.value
  };

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    editOnEnter: PropTypes.bool,
    className: PropTypes.string
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
      <StyledEditableInput>
        <div className="editableInputControl">
          <Input
            {...inputProps}
            value={this.state.nextValue}
            onChange={this.handleInputChange}
          />
        </div>
        {!editOnEnter && (
          <React.Fragment>
            <Tag
              className="editableContentSaveBtn"
              type="action"
              onClick={this.handleSave}
            >
              Save
            </Tag>
            <Tag
              className="editableContentCancelBtn"
              onClick={this.handleCancel}
            >
              Cancel
            </Tag>
          </React.Fragment>
        )}
      </StyledEditableInput>
    );
  }

  renderStaticComponent() {
    //const {className} = this.props;
    return (
      <StyledEditableContent className="editableContentWrapper">
        <div onClick={this.toggleEditMode}>
          <div className="editableText">{this.props.value}</div>
          <Icon type="edit" />
        </div>
      </StyledEditableContent>
    );
  }

  render() {
    return this.state.editing
      ? this.renderEditingComponent()
      : this.renderStaticComponent();
  }
}

export default EditableContent;
