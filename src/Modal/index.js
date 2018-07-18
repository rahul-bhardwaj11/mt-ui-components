import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntModal from 'antd/lib/modal';
import 'antd/lib/modal/style/index.css';
import './index.scss';

const MODAL_WIDTH_MAP = {
  small: 500,
  medium: 600,
  large: 800
};

class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['small', 'medium', 'large'])
  };

  static defaultProps = {
    type: 'medium'
  };

  render() {
    let { children, type } = this.props;
    let width = MODAL_WIDTH_MAP[type];
    return (
      <AntModal {...this.props} className="mtModal" width={width}>
        {children}
      </AntModal>
    );
  }
}
export default Modal;
