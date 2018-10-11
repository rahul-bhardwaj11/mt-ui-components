import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AntTooltip from 'antd/lib/tooltip';
import 'antd/lib/tooltip/style/index.css';
import mixins from '../styles/mixins.js';

const MtTooltip = styled.div`
  //display: inline-block;
  .ant-tooltip-inner {
    min-height: unset;
    padding: 4px 8px 6px;
    ${mixins.smallInactiveLink()};
    color: #ffffff;
    font-weight: 600;
    text-align: center;
  }
`;
class Tooltip extends Component {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
  };

  render() {
    const { children } = this.props;

    return (
      <MtTooltip innerRef={ele => (this.popUpContainer = ele)}>
        <AntTooltip
          {...this.props}
          getPopupContainer={() => this.popUpContainer}
        >
          {children}
        </AntTooltip>
      </MtTooltip>
    );
  }
}

export default Tooltip;
