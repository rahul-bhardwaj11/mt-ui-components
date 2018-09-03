import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntModal from 'antd/lib/modal';
import 'antd/lib/modal/style/index.css';
import '../styles/override.scss';
import styled from 'styled-components';
import theme from '../styles/theme';

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
      font-weight: 600;
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
      @include textBtn;
      @include button;
      color: ${theme.colors.OUTER_SPACE};
      min-width: 75px;

      &.ant-btn-primary {
        @include primaryBtn;
        @include button;
        color: #fff;
        &:hover {
          @include primaryBtnHover;
          color: #fff;
        }
        &:focus,
        &.active {
          @include primaryBtnHover;
          color: #fff;
        }
      }
      &:hover,
      &:focus {
        @include textBtn;
        color: get('colors.GREY');
      }
    }
  }
`;

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
      <MtModal {...this.props} width={width}>
        {children}
      </MtModal>
    );
  }
}
export default Modal;
