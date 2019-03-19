import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntInputNumber from 'antd/lib/input-number';
import 'antd/lib/input-number/style/index.css';

class InputNumber extends Component {
  static propTypes = {
    onInputError: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    min: PropTypes.number,
    max: PropTypes.number,
    onError: PropTypes.func
  };

  state = {
    isError: false
  };

  checkForError = value => {
    const { min, max, onError } = this.props;
    let isError = false;
    if (this.props.hasOwnProperty('min')) {
      if (value < min) isError = true;
    }
    if (this.props.hasOwnProperty('max')) {
      if (value > max) isError = true;
    }
    isError && onError && onError();
    this.setState({ isError });
  };

  handleChange = value => {
    const { onChange } = this.props;
    this.checkForError(value);
    onChange(value);
  };

  render() {
    return <AntInputNumber {...this.props} onChange={this.handleChange} />;
  }
}

export default InputNumber;
