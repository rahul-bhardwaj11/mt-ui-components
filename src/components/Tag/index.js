import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntTag from 'antd/lib/tag';
import 'antd/lib/tag/style/index.css';
import styled from 'styled-components';
import { TAG_HOVER_TEXT_COLOR } from '../../colors';

const MtTag = styled.div`
  display: inline-block;

  .ant-tag {
    color: rgba(0, 0, 0, 0.65);
    border-radius: 16px;
    font-size: 12px;
    background: #f6f7f9;
    color: #606369;
    line-height: 24px;
    height: 24px;
    padding: 0 15px;
    margin-bottom: 12px;

    &:hover {
      border: 1px solid #468ee5;
      border-radius: 16px;
      background-color: #e4effb;
      color: ${TAG_HOVER_TEXT_COLOR};
    }
    a {
      &:hover {
        color: ${TAG_HOVER_TEXT_COLOR};
      }
    }
  }
`;

class Tag extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    let { children } = this.props;
    return (
      <MtTag>
        <AntTag {...this.props}>{children}</AntTag>
      </MtTag>
    );
  }
}
export default Tag;
