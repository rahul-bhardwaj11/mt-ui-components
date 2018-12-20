import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Preview from './components/preview';
import Editor from './components/editor';
import { MODES } from './constants';
import { errorToast } from '../Toast';
import classnames from 'classnames';
import StyledDescription from './css';

const trimNewLine = text => {
  return text ? text.replace(/^\n|\n$/g, '') : text;
};

const noop = () => {};

export default class Description extends Component {
  static propTypes = {
    content: PropTypes.string,
    className: PropTypes.string,
    heading: PropTypes.string,
    placeholder: PropTypes.string,
    preview: PropTypes.bool,
    onChange: PropTypes.func,
    maxLength: PropTypes.number,
    ok: PropTypes.func,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    scrollingContainer: PropTypes.string
  };
  static defaultProps = {
    content: '',
    placeholder: 'Type here...',
    onChange: noop,
    ok: noop,
    maxLength: 1000,
    preview: false
  };

  state = {
    content: this.props.content,
    availableLength: this.props.maxLength,
    mode: this.props.preview ? MODES.PREVIEW : MODES.EDIT
  };

  onChange = (value, editor, trigger = true) => {
    //const { content } = this.state;
    const { maxLength, required } = this.props;
    let text = trimNewLine(editor.getText().trim());
    let contentLength = text.length;
    if (contentLength > maxLength && editor.deleteText) {
      editor.deleteText(maxLength, contentLength);
      value = editor.root.innerHTML;
      contentLength = trimNewLine(editor.getText()).length;
    }
    this.setState({
      content: value,
      availableLength: maxLength - contentLength
    });
    contentLength && this.props.onChange(value);
    !contentLength &&
      trigger &&
      required &&
      errorToast({ message: 'Description can not be empty' });
  };

  editorHelpers = {
    onOk: () => {
      this.props.ok(this.state.content);
      this.editorHelpers.onCancel();
    },
    onCancel: () => {
      this.setState({
        mode: MODES.PREVIEW,
        content: this.props.content,
        availableLength: this.props.maxLength
      });
    }
  };

  onEdit = () => {
    this.setState({
      mode: MODES.EDIT
    });
  };

  renderContent = () => {
    const { content, mode, availableLength } = this.state;
    const {
      placeholder,
      preview,
      heading,
      className,
      readOnly,
      scrollingContainer
    } = this.props;

    return mode == MODES.EDIT ? (
      <div className={classnames('desc_editor', 'pos_rel')}>
        <Editor
          id="task-description"
          readOnly={readOnly}
          value={content}
          onChange={this.onChange}
          placeholder={placeholder}
          showButtons={preview}
          helpers={this.editorHelpers}
          availableLength={availableLength}
          className={className}
          onMount={this.onChange.bind(this)}
          scrollingContainer={scrollingContainer}
        />
      </div>
    ) : (
      <Preview
        content={content ? content.toString('html') : ''}
        heading={heading}
        onEdit={this.onEdit}
      />
    );
  };

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.content != this.props.content) {
  //     this.setState({
  //       content: nextProps.content
  //     });
  //   }
  // }

  render() {
    const { heading, className } = this.props;
    return (
      <StyledDescription className={classnames('clearfix', className)}>
        {heading && <span className="desc_Heading">{heading}</span>}
        {this.renderContent()}
      </StyledDescription>
    );
  }
}
