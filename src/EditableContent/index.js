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
  getInitialState = () => ({
    editing: false,
    nextValue: this.props.value
  });

  state = this.getInitialState();

  static propTypes = {
    editOnEnter: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func
  };

  static defaultProps = {
    placeholder: 'Add Content',
    editOnEnter: false,
    value: ''
  };

  componentDidUpdate(oldProps) {
    const newProps = this.props;
    if (oldProps.value !== newProps.value) {
      this.setState(this.getInitialState()); // reset to older state
    }
  }

  toggleEditMode = editing =>
    this.setState(prevState => ({
      editing: typeof editing === 'undefined' ? !prevState.editing : editing
    }));

  handleSave = () => {
    if (this.state.nextValue) {
      // do not save empty value in edit mode
      this.props.onSave(this.state.nextValue);
      this.toggleEditMode();
    } else {
      // set the initial state when we click on close with empty value
      this.setState(this.getInitialState());
    }
  };

  handleCancel = () => {
    const { onCancel } = this.props;
    this.setState({ nextValue: this.props.value }); // resetting to older value
    this.toggleEditMode();
    onCancel && onCancel();
  };

  handleInputChange = event => {
    const { onChange } = this.props;
    this.setState({ nextValue: event.target.value });
    onChange && onChange(event.target.value);
  };

  handleClear = () => this.setState({ nextValue: '' });

  renderEditingComponent() {
    const { editOnEnter, ...inputProps } = this.props;
    if (editOnEnter) {
      inputProps.onPressEnter = this.handleSave;
      inputProps.onBlur = this.handleSave;
      inputProps.suffix = <Icon type="close" onClick={this.handleClear} />;
    }
    inputProps.maxLength = false;
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
    return (
      <StyledEditableContent className="editableContentWrapper">
        <div className="clearfix" onClick={this.toggleEditMode}>
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
