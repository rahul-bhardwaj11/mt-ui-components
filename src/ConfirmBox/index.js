import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntPopconfirm from 'antd/lib/popconfirm';
import 'antd/lib/popconfirm/style/css';

class ConfirmBox extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    okText: PropTypes.string,
    cancelText: PropTypes.string
  };

  render() {
    let { children } = this.props;
    return <AntPopconfirm {...this.props}>{children}</AntPopconfirm>;
  }
}
export default ConfirmBox;
