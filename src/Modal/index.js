import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntModal from 'antd/lib/modal';
import 'antd/lib/modal/style/index.css';
import '../styles/override.scss';
import styled from 'styled-components';
import theme from '../styles/theme';
import mixins from '../styles/mixins';

const MtModal = styled(AntModal)`
  .ant-modal-content {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
  }
  .ant-modal-body {
    padding: 24px 32px;
    overflow: scroll;
  }
  .ant-modal-header {
    border-bottom: 0px;
    padding: 24px 32px;
    font-size: 20px;
    .ant-modal-title {
      color: ${theme.colors.SHARK};
      font-size: 20px;
      line-height: 27px;
    }
  }
  .ant-modal-close {
    height: 20px;
    width: 20px;
    margin: 24px 32px;
  }
  .ant-modal-close-x {
    font-size: 20px;
    line-height: 27px;
    height: 20px;
    width: 20px;
  }

  .ant-modal-footer {
    padding: 21px 32px;
    background: ${theme.colors.PORCELAIN};
    border-top: 0px;
    .ant-btn {
      ${mixins.textBtn()}
      ${mixins.button()}
      color: ${theme.colors.OUTER_SPACE};
      min-width: 75px;

      &.ant-btn-primary {
        ${mixins.primaryBtn()}
        ${mixins.button()}
        color: #fff;
        &:hover {
          ${mixins.primaryBtnHover()}
          color: #fff;
        }
        &:focus,
        &.active {
          ${mixins.primaryBtnHover()};
          color: #fff;
        }
      }
      &:hover,
      &:focus {
        ${mixins.textBtn()}
        color: ${theme.colors.GREY}
      }
    }
  }
`;

const MODAL_WIDTH_MAP = {
  small: 500,
  medium: 600,
  large: 720,
  full: '100%'
};

class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['small', 'medium', 'large', 'full'])
  };

  static defaultProps = {
    type: 'medium'
  };

  render() {
    let { children, type, width } = this.props;
    let customProps = {
      ...this.props,
      width: width || MODAL_WIDTH_MAP[type],
      style: {
        top: type === 'full' ? 0 : undefined,
        ...this.props.style
      }
    };
    return <MtModal {...customProps}>{children}</MtModal>;
  }
}
Modal.confirm = AntModal.confirm;
export default Modal;
