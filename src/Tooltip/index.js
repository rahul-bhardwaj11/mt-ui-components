import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AntTooltip from 'antd/lib/tooltip';
import 'antd/lib/tooltip/style/index.css';
import mixins from '../styles/mixins.js';

const MtTooltip = styled.div`
  display: inline-block;
  .ant-tooltip-inner {
    min-height: unset;
    padding: 4px 8px 6px;
    ${mixins.smallInactiveLink()};
    color: #ffffff;
    font-weight: 600;
    background-color: #000000;
  }
`;
class Tooltip extends Component {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    className: PropTypes.string,
    getPopupContainer: PropTypes.func
  };

  getRef = ele => (this.popUpContainer = ele);

  render() {
    const { children, className, getPopupContainer } = this.props;
    return (
      <MtTooltip className={className} innerRef={this.getRef}>
        <AntTooltip
          {...this.props}
          getPopupContainer={() => {
            const container = getPopupContainer
              ? getPopupContainer()
              : this.popUpContainer;
            return container;
          }}
        >
          {children}
        </AntTooltip>
      </MtTooltip>
    );
  }
}

export default Tooltip;
