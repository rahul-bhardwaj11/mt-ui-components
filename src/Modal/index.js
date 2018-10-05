import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntModal from 'antd/lib/modal';
import 'antd/lib/modal/style/index.css';
import styled from 'styled-components';
import theme from '../styles/theme';
import mixins from '../styles/mixins';
import ReactDOM from 'react-dom';

const MtModal = styled(AntModal)`
&.ant-modal{
  font-family: inherit;
  z-index: ${mixins.zIndex.MODAL};
  .ant-modal-content {
    border-radius:8px;
  }
  .ant-modal-body {
    padding: 24px 32px;
    overflow: auto;
  }
  .ant-modal-header {
    border-bottom: 0px;
    padding: 24px 32px;
    font-size: 20px;
    border-radius: 8px 8px 0 0;

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
    padding: 15px 32px 16px 32px;
    background: ${theme.colors.PORCELAIN};
    border-top: 1px solid ${theme.colors.ALTO};;
    border-radius: 0 0 8px 8px;
    margin-top: 15px;
    
    .ant-btn {
      ${mixins.textBtn()}      
      color: ${theme.colors.OUTER_SPACE};
      min-width: 75px;

      &.ant-btn-primary {
        ${mixins.primaryBtn()}        
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
        &:disabled {
          border: 1px solid ${theme.colors.DISABLE};
          border-radius: 4px;
          color: #fff;
          background: ${theme.colors.ALTO};
        }
      }
      &:hover,
      &:focus {
        ${mixins.textBtn()};
        color: ${theme.colors.GREY}
      }
    }
  }

  @media (max-width: 576px){
    margin: 0px;
    top:0px;
    height: 100vh;
    background: #fff;

    .ant-modal-header{
      border-radius:0px;
    }

    .ant-modal-footer {
      position: fixed;
      bottom: 0px;
      width: 100%;
      border-radius: 0px;
  }
  .ant-modal-content{
    border-radius:0px;
    box-shadow:0 0px 0px rgba(0, 0, 0, 0.15);
  }  

}
}
.ant-confirm-body > .anticon {
  display: none;
}
`;

const MtConfirmModal = styled.div`
  .ant-modal {
    font-family: inherit;
  }

  .ant-modal-body {
  }
  .ant-confirm-body {
    .ant-confirm-content {
      margin-left: 0px;
    }
  }

  .ant-modal-content {
    border-radius: 8px;
  }
  .ant-confirm-btns {
    display: ${({ showFooter = true }) => {
      return showFooter ? 'block' : 'none';
    }};
  }
  .ant-confirm-confirm .ant-confirm-body > .anticon {
    display: none;
  }
  .ant-confirm-body .ant-confirm-content {
    margin-left: 0px;
  }
  .ant-confirm .ant-confirm-btns button + button {
    background: ${theme.colors.INDIGO};
    border: 1px solid ${theme.colors.INDIGO};
  }
  .ant-confirm-body .ant-confirm-title {
    ${mixins.blackLink()};
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
    type: PropTypes.oneOf(['small', 'medium', 'large', 'full']),
    style: PropTypes.object,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };

  static defaultProps = {
    type: 'medium'
  };

  static confirm = props => {
    const { showFooter } = props;
    const containerEl = document.body.appendChild(
      document.createElement('div')
    );
    let MountNode;
    ReactDOM.render(
      <MtConfirmModal
        showFooter={showFooter}
        innerRef={e => (MountNode = e)}
      />,
      containerEl
    );
    let confirmModalProps = {
      ...props,
      getContainer: () => {
        return MountNode;
      },
      onCancel: (...cancelProps) => {
        document.body.removeChild(containerEl);
        props.onCancel && props.onCancel(cancelProps);
      }
    };
    AntModal.confirm(confirmModalProps);
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

export default Modal;
