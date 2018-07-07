import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import 'antd/lib/input/style/index.css';
const AntTextArea = Input.TextArea;

class TextArea extends Component {
  static propTypes = {
    placeholder: PropTypes.string
  };

  render() {
    return <AntTextArea {...this.props} />;
  }
}

export default TextArea;
