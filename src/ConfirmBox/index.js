import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import AntPopconfirm from 'antd/lib/popconfirm';
import 'antd/lib/popconfirm/style/css';
import styled from 'styled-components';
import theme from '../styles/theme';
import mixins from '../styles/mixins';

const StyledPopconfirm = styled.div`
  font-family: inherit;
  .ant-popover-message-title {
    ${mixins.blackLink()};
    padding-left: 0px;
  }
  .ant-popover-inner-content {
    padding: 22px 26px;
  }
  .ant-popover-message > .anticon {
    display: none;
  }
  .ant-popover-buttons {
    .ant-btn {
      ${mixins.textBtn()};
      ${mixins.button()};
      color: ${theme.colors.OUTER_SPACE};
      min-width: 75px;

      &.ant-btn-primary {
        ${mixins.primaryBtn()};
        ${mixins.button()};
        color: #fff;
        &:hover {
          ${mixins.primaryBtnHover()};
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
        ${mixins.textBtn()};
        color: ${theme.colors.ICON};
      }
    }
  }
`;

class ConfirmBox extends Component {
  static propTypes = {
    children: PropTypes.node,
    placement: PropTypes.string,
    getPopupContainer: PropTypes.func
  };
  datePickerContainer = null;
  constructor(p) {
    super(p);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    let { children } = this.props;
    const n = this.props.getPopupContainer && this.props.getPopupContainer();

    return (
      <React.Fragment>
        {ReactDOM.createPortal(
          <StyledPopconfirm
            innerRef={e => e && (this.datePickerContainer = e)}
          />,
          n || this.el
        )}
        <AntPopconfirm
          {...this.props}
          getPopupContainer={() => {
            return this.datePickerContainer;
          }}
        >
          {children}
        </AntPopconfirm>
      </React.Fragment>
    );
  }
}

export default ConfirmBox;
