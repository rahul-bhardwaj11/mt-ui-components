import React, { Component } from 'react';
import AntPopover from 'antd/lib/popover';
import 'antd/lib/popover/style/index.css';
import styled from 'styled-components';
import theme from '../styles/theme.js';
import mixins from '../styles/mixins.js';
import PropTypes from 'prop-types';
const StyledPopover = styled.div`
  .ant-popover {
    font-family: inherit;
    z-index: ${mixins.zIndex.POPOVER};
  }
  .ant-popover-title {
    border-bottom: 1px solid transparent;
    padding: 20px 20px 0px 20px;
    font-size: 14px;
  }
  .ant-popover-inner {
    border: 1px solid rgba(205, 210, 217, 0.5);
    border-radius: 4px;
    background-color: ${theme.colors.WHITE};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
  }
  .ant-popover-inner-content {
    text-align: left;
    padding: 20px;
    button {
      margin-left: 15px;
    }
  }
`;
class Popover extends Component {
  static propTypes = {
    className: PropTypes.string
  };

  render() {
    const { className } = this.props;
    return (
      <React.Fragment>
        <StyledPopover
          className={className}
          innerRef={e => (this.popoverContainer = e)}
        />
        <AntPopover
          {...this.props}
          getPopupContainer={() => this.popoverContainer}
        />
      </React.Fragment>
    );
  }
}

export default Popover;
