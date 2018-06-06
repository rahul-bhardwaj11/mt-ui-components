import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntTag from 'antd/lib/tag';
import 'antd/lib/tag/style/index.css'
import styled from 'styled-components';

const MtTag = styled.div`

.ant-tag{

  a{
      color: rgba(0, 0, 0, 0.65);
      border-radius: 16px;
      font-size: 12px;
      background: #fff;
      color: #606369;
      line-height: 24px;
      height: 24px;
      &:hover, &:selected{
        border: 1px solid #468EE5;
      	border-radius: 16px;
        background-color: #E4EFFB;
        color: #4A90E2;
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
