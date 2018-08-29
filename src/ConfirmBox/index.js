import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntPopconfirm from 'antd/lib/popconfirm';
import 'antd/lib/popconfirm/style/css';

class ConfirmBox extends Component {
  static propTypes = {
    children: PropTypes.node,
    placement: PropTypes.string
  };

  render() {
    let { children } = this.props;
    return <AntPopconfirm {...this.props}>{children}</AntPopconfirm>;
  }
}
export default ConfirmBox;
