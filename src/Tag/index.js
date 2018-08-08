import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntTag from 'antd/lib/tag';
import 'antd/lib/tag/style/index.css';
import styled from 'styled-components';
import theme from '../styles/theme';

const MtTag = styled.div`
  display: inline-block;
  .ant-tag {
    color: ${theme.colors.OUTER_SPACE};
    font-size: 12px;
    line-height: 24px;
    border-radius: 16px;
    background: #fff;
    height: 24px;
    padding: 0 15px;
    margin-bottom: 12px;
    &:hover {
      border: 1px solid ${theme.colors.SILVER};
      border-radius: 16px;
      background: #fff;
      color: ${theme.colors.OUTER_SPACE};
      .anticon-cross {
        color: ${theme.colors.OUTER_SPACE};
      }
    }
  }
  .ant-tag-has-color {
    color: ${theme.colors.TAG_HOVER_TEXT_COLOR};
    border: 1px solid ${theme.colors.TAG_HOVER_TEXT_COLOR};
    background: #fff;
    &:hover {
      border: 1px solid ${theme.colors.TAG_HOVER_TEXT_COLOR};
      border-radius: 16px;
      background-color: ${theme.colors.TROPICAL_BLUE};
      color: ${theme.colors.TAG_HOVER_TEXT_COLOR};
    }
  }
  .ant-tag-blue {
    border: 1px solid ${theme.colors.ALTO};
    border-radius: 16px;
    background-color: ${theme.colors.PORCELAIN};
    .anticon-cross {
      color: ${theme.colors.SILVER};
    }
    &:hover {
      border: 1px solid ${theme.colors.SILVER};
      background-color: ${theme.colors.PORCELAIN};
      .anticon-cross {
        color: ${theme.colors.SILVER};
      }
    }
    &:active {
      color: ${theme.colors.DARK_OUTER_SPACE};
      border: 1px solid ${theme.colors.SILVER};
      background-color: ${theme.colors.PORCELAIN};
      .anticon-cross {
        color: ${theme.colors.DARK_OUTER_SPACE};
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

Tag.CheckableTag = AntTag.CheckableTag;
export default Tag;
