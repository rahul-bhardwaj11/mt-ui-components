import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntModal from 'antd/lib/modal';
import 'antd/lib/modal/style/index.css';
import './index.scss';

class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    width: PropTypes.num
  };

  render() {
    let { children, width } = this.props;
    return (
      <AntModal {...this.props} className="mtModal" width={width}>
        {children}
      </AntModal>
    );
  }
}
export default Modal;
