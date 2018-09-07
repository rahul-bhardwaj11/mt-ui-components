import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntModal from 'antd/lib/modal';
import 'antd/lib/modal/style/index.css';
import '../styles/override.scss';

const MODAL_WIDTH_MAP = {
  small: 500,
  medium: 600,
  large: 800,
  full: '100%'
};

class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['small', 'medium', 'large', 'full'])
  };

  render() {
    let { children, type } = this.props;
    let customProps = {
      ...this.props,
      width: MODAL_WIDTH_MAP[type],
      style: {
        ...this.props.style,
        top: type === 'full' ? 0 : undefined
      }
    };
    return <AntModal {...customProps}>{children}</AntModal>;
  }
}
export default Modal;
