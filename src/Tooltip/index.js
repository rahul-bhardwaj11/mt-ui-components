import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AntTooltip from 'antd/lib/tooltip';
import 'antd/lib/tooltip/style/index.css';

const MtTooltip = styled.div`
  display: inline;
`;

class Tooltip extends Component {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string
  };

  render() {
    const { children } = this.props;

    return (
      <MtTooltip>
        <AntTooltip {...this.props}>{children}</AntTooltip>
      </MtTooltip>
    );
  }
}

export default Tooltip;
