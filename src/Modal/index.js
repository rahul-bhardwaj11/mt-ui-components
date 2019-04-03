import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import AntModal from 'antd/lib/modal';
import 'antd/lib/modal/style/index.css';
import styled from 'styled-components';
import theme from '../styles/theme';
import mixins from '../styles/mixins';
import './index.css';

const StyledModalWrapper = styled.div`
  .modalWrapper {
    z-index: ${mixins.zIndex.MODAL_WRAPPER};
  }
  .ant-modal-mask {
    z-index: ${mixins.zIndex.MODAL_MASK};
  }
`;

const MtModal = styled(AntModal)`
&.ant-modal{
  font-family: inherit;
  z-index: ${mixins.zIndex.MODAL};
  .ant-modal-content {
    border-radius:8px;
  }

  .ant-modal-body {
    padding: 0px 32px;
    overflow: auto;
  }
   .ant-modal-header {
    border-bottom: 0px;
    padding: 24px 32px;
    font-size: 20px;
    border-radius: 8px 8px 0 0;

    .ant-modal-title {
      ${mixins.h2()};
    }
  }
  .ant-modal-close {
    height: 20px;
    width: 20px;
    margin: 24px 32px;
  }
  .ant-modal-close-x {
    ${mixins.h2()};
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
        color: ${theme.colors.WHITE};
        &:hover {
          ${mixins.primaryBtnHover()}
          color: ${theme.colors.WHITE};
        }
        &:focus,
        &.active {
          ${mixins.primaryBtnHover()};
          color: ${theme.colors.WHITE};
        }
        &:disabled {
          border: 1px solid ${theme.colors.DISABLE};
          border-radius: 4px;
          color: ${theme.colors.WHITE};
          background: ${theme.colors.ALTO};
        }
      }
      &:hover,
      &:focus {
        ${mixins.textBtn()};
        color: ${theme.colors.GREY};
      }
    }
  }
  ${({ fullScreenMobile }) => {
    if (!fullScreenMobile) return;
    return `
    @media (max-width: 576px){
      margin: 0px;
      top:0px;
      height: 100vh;
      background: ${theme.colors.WHITE};
  
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
    }`;
  }}
}

.ant-confirm-body > .anticon {
  display: none;
}
`;

const MtConfirmModal = styled.div`
  .ant-modal-wrap {
    z-index: ${mixins.zIndex.MODAL_WRAPPER};
  }
  .ant-modal-mask {
    z-index: ${mixins.zIndex.MODAL_MASK};
  }
  .ant-modal {
    font-family: inherit;
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
  .ant-confirm .ant-modal-close {
    display: block;
  }
`;

const MODAL_WIDTH_MAP = {
  small: 500,
  medium: 600,
  large: 720,
  extraLarge: 856,
  full: '100%'
};

class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(Object.keys(MODAL_WIDTH_MAP)),
    style: PropTypes.object,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    fullScreenMobile: PropTypes.bool,
    getPopupContainer: PropTypes.func,
    renderInPortal: PropTypes.bool.isRequired,
    className: PropTypes.string
  };

  static defaultProps = {
    type: 'medium',
    fullScreenMobile: true,
    renderInPortal: false
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
    return AntModal.confirm(confirmModalProps);
  };

  defaultElement = document.createElement('div');
  modalContainer = null;

  componentDidMount() {
    document.body.appendChild(this.defaultElement);
    this.modalContainer =
      this.props.getPopupContainer && this.props.getPopupContainer();
  }

  componentWillUnmount() {
    document.body.removeChild(this.defaultElement);
  }

  render() {
    let {
      children,
      type,
      width,
      fullScreenMobile,
      renderInPortal,
      className
    } = this.props;
    let customProps = {
      ...this.props,
      width: width || MODAL_WIDTH_MAP[type],
      fullScreenMobile,
      style: {
        top: type === 'full' ? 0 : undefined,
        ...this.props.style
      }
    };
    const modalFragment = (
      <React.Fragment>
        <StyledModalWrapper
          className={className}
          innerRef={el => {
            if (el) {
              this.modalWrapRef = el;
            }
          }}
        />
        <MtModal
          {...customProps}
          getContainer={() => {
            return this.modalWrapRef;
          }}
          wrapClassName="modalWrapper"
        >
          {children}
        </MtModal>
      </React.Fragment>
    );
    const comp = renderInPortal
      ? ReactDOM.createPortal(
          <div onClick={e => e.stopPropagation()}>{modalFragment}</div>,
          this.modalContainer || this.defaultElement
        )
      : modalFragment;
    return comp;
  }
}

export default Modal;
