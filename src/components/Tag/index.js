import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntTag from 'antd/lib/tag';
import 'antd/lib/tag/style/index.css'
import styled from 'styled-components';

var taghoverBorder = '#468EE5',
    taghoverBg = '#E4EFFB',
    tagHoverTextColor= '#4A90E2'

const MtTag = styled.div`
  display: inline-block;

.ant-tag{
    color: rgba(0, 0, 0, 0.65);
    border-radius: 16px;
    font-size: 12px;
    background: #F6F7F9;
    color: #606369;
    line-height: 24px;
    height: 24px;
    padding: 0 15px;

    &:hover{
      	border: 1px solid ${taghoverBorder};
        border-radius: 16px;
        background-color: ${taghoverBg};
        color: ${tagHoverTextColor};
      }
      a{
        &:hover{
          color: ${tagHoverTextColor};
        }
      }
}
`;

class Tag extends Component {

  static propTypes = {
    children: PropTypes.any
  };


  render() {
    let { children } = this.props;
      return (
        <MtTag>
          <AntTag {...this.props} >{children}</AntTag>
        </MtTag>
    );
  }
}
export default Tag;
