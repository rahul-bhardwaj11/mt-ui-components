import React, { Component } from 'react';
import AntInputNumber from 'antd/lib/input-number';
import 'antd/lib/input-number/style/index.css';
class InputNumber extends Component {
  render() {
    return <AntInputNumber {...this.props} />;
  }
}

export default InputNumber;
