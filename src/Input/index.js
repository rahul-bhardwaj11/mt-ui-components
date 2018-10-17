import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntInput from 'antd/lib/input';
import 'antd/lib/input/style/index.css';
import styled from 'styled-components';
import theme from '../styles/theme';
import classnames from 'classnames';

const noop = () => undefined;

const isString = value => {
  return typeof value === 'string';
};

const MtInput = styled.div`
  .counterStyle {
    color: #696969;
    font-size: 12px;
    margin-left: 0;
    padding: 4px 8px;
    border: 1px solid #ccc;
    border-left: none;
    line-height: 20px;
    float: left;
  }
  .displayN {
    display: none;
  }

  .error {
    font-size: 12px;
    bottom: -24px;
    left: 8px;
    position: absolute;
    color: #c63434;
    font-weight: bold;
  }
  .ant-input {
    border: 1px solid ${theme.colors.ALTO};
  }
  .ant-input {
    &:hover {
      border-color: ${theme.colors.SILVER};
    }
  }
  .ant-input {
    &:focus {
      border-color: ${theme.colors.SILVER};
      outline: 0;
      box-shadow: 0 0 0 0px rgba(24, 144, 255, 0.2);
    }
  }
  .ant-input-disabled {
    border-color: ${theme.colors.DISABLE};
    background-color: #f8f8f8;
    color: ${theme.colors.SILVER};
    &:hover {
      border-color: ${theme.colors.DISABLE};
    }
  }
  .ant-input-error {
    border-color: #ff6060;
  }
`;

class Input extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    maxLength: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    maxLengthClassName: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    type: PropTypes.oneOf(['text', 'number', 'password', 'file']),
    errors: PropTypes.array
  };

  static defaultProps = {
    onChange: noop,
    onFocus: noop,
    errors: [],
    type: 'text'
  };

  constructor(props) {
    super(props);
    this.state = {
      value: this.handleValue(this.props.value)
    };
  }

  handleValue = value => {
    let trimmedValue = isString(value) ? value.trim() : value;
    trimmedValue = trimmedValue || '';
    value = trimmedValue.length ? value : trimmedValue;
    const { maxLength } = this.props;
    if (maxLength) {
      return maxLength <= value.length ? value : value.substring(0, maxLength);
    }
    return value;
  };

  onChange = event => {
    const { onChange } = this.props;
    const value = this.handleValue(event.target.value);
    this.setState({ value });
    onChange(event, value);
  };

  moveCaretAtEnd = e => {
    var temp_value = e.target.value;
    e.target.value = '';
    e.target.value = temp_value;
    this.props.onFocus(e);
  };

  componentWillMount() {
    const { value = '' } = this.props;
    this.setState({ value: this.handleValue(value) });
  }

  componentWillReceiveProps(newProps) {
    const { value } = this.props;
    let { value: newValue } = newProps;
    if (newValue !== value) {
      this.setState({ value: this.handleValue(newValue) });
    }
  }

  render() {
    const { errors, maxLength, maxLengthClassName } = this.props;
    const { value } = this.state;
    return (
      <MtInput>
        <AntInput
          {...this.props}
          value={value}
          onChange={this.onChange}
          onFocus={this.moveCaretAtEnd}
        />
        <div
          key="maxLength"
          className={classnames(
            { ['counterStyle']: maxLength, displayN: !maxLength },
            maxLengthClassName
          )}
        >
          {maxLength && maxLength - value.length}
        </div>
        <div
          key="error"
          className={classnames(errors[0] ? 'error' : 'displayN')}
        >
          {errors[0]}
        </div>
      </MtInput>
    );
  }
}

class TextArea extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange: noop
  };

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }

  onChange = event => {
    const { onChange } = this.props;
    const value = event.target.value;
    this.setState({ value });
    onChange(event, value);
  };

  componentWillReceiveProps(newProps) {
    const { value } = this.props;
    let { value: newValue } = newProps;
    if (newValue !== value) {
      this.setState({ value: newValue });
    }
  }

  render() {
    const { value } = this.state;
    return (
      <AntInput.TextArea
        {...this.props}
        value={value}
        onChange={this.onChange}
      />
    );
  }
}

Input.TextArea = TextArea;
export default Input;
