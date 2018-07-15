import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntModal from 'antd/lib/modal';
import 'antd/lib/modal/style/index.css';

class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    let { children } = this.props;
    return <AntModal {...this.props}>{children}</AntModal>;
  }
}
export default Modal;
