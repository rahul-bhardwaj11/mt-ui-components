import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntButton from 'antd/lib/button';
import 'antd/lib/button/style/index.css';
import styled from 'styled-components';

// export function truncate(width) {
//   return `
//     width: ${width};
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//   `;
// }
// export function fsatck(fontsize, fontweight) {
//   return `
//     font-size: ${fontsize};
//     font-weight: ${fontweight};
//     font-family: 'Open Sans', sans-serif;
//   `;
// }
const LIGHT_BLUE= '#4D7CC7',
    SILVER= '#BBB'

const MtButton = styled.div`
  display: inline-block;
/* Default Button styles */
.ant-btn-default{
	border: 1px solid #ddd;
  color: #6F7583;
  height: 32px;
  padding: 0px 12px;
  &.ant-btn-sm{
    color: #888;
    font-size: 12px;
    padding: 0px 12px;
    &.ant-btn-sm {
      color: #888;
      font-size: 12px;
      padding: 0px 12px;
    }

    &:hover {
      border: 1px solid ${SILVER};
    }
    &:focus,
    &.active {
      border: 1px solid ${LIGHT_BLUE};
      color: ${LIGHT_BLUE};
    }
  }
  .ant-btn {
    &.disabled {
      border: 1px solid #e8e8e8;
      border-radius: 4px;
      background-color: #f8f8f8;
      color: ${SILVER};
    }
  }

  /* Primary Button styles */
  .ant-btn-primary {
    border: 1px solid ${LIGHT_BLUE};
    background-color: ${LIGHT_BLUE};
    color: #fff;
    font-size: 14px;
    height: 32px;
    padding: 0px 12px;

  &:hover{
  	border: 1px solid #588CE0;
    background: #588CE0;
  }
  &:focus, &.active{
    border: 1px solid #446CAD;
    background: #446CAD;
    color: #FFF;
  }
  .ant-btn {
    &.disabled {
      border: 1px solid #ced2db;
      border-radius: 4px;
      background-color: #ced2db;
      color: #fff;
    }
  }
}
/* Pills Button styles */
.ant-btn-pills{
  border: 1px solid #ddd;
  color: #6F7583;
  height: 24px;
  padding: 0px 12px;
  font-size: 11px;
  border-radius: 16px;
  &.ant-btn-sm{
    color: #888;
    font-size: 12px;
    padding: 0px 12px;
  }

  &:hover{
  border: 1px solid ${SILVER};
  }
  &:focus, &.active{
    border: 1px solid ${LIGHT_BLUE};
    color: ${LIGHT_BLUE};
  }
}
.ant-btn{
  &.disabled{
    border: 1px solid #E8E8E8;
    border-radius: 16px;
    background-color: #F8F8F8;
    color: ${SILVER};
  }
}

/* Dashed Button styles */
.ant-btn-dashed{
	border: 1px dashed #DDD;
  background-color: rgba(255,255,255,0);
  color: #989CA6;
  font-size: 14px;
  height: 32px;
  padding: 0px 12px;

  /* Dashed Button styles */
  .ant-btn-dashed {
    border: 1px dashed #ddd;
    background-color: rgba(255, 255, 255, 0);
    color: #989ca6;
    font-size: 14px;
    height: 32px;
    padding: 0px 12px;

    &.ant-btn-sm {
      color: #fff;
      font-size: 12px;
      padding: 0px 12px;
    }

    &:hover {
      color: #2a2e36;
    }
    &:focus,
    &.active {
      color: #2a2e36;
    }
  }
  .ant-btn {
    &.disabled {
      color: ${SILVER};
    }
  }


.ant-btn-clicked{
  outline: none;
  outline-style: none;
}


/* Dashed Button styles */
.ant-btn-link{
	border: 1px dashed transparent;
  background-color: transparent;
  font-size: 14px;
  height: 32px;
  padding: 0px 12px;

  &.ant-btn-sm{
    color: #FFF;
    font-size: 12px;
    padding: 0px 12px;
  }

  &:hover{
    ${'' /* color: red; */}
  }
  &:focus, &.active{
    ${'' /* color: red; */}
  }
}
.ant-btn{
  &.disabled{
    color: ${SILVER};
  }
}


.ant-btn-clicked{
  outline: none;
  outline-style: none;
}


`;

const noop = () => undefined;

const typeMap = {
  primary: "primary",
  secondary: "default",
  tertiary: "dashed",
  pills: "pills",
  link: "link"
}

class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['primary', 'default','dashed','pills', 'link']),
    children: PropTypes.node,
    disabled: PropTypes.bool,
    size: PropTypes.string,
    style: PropTypes.object,
    className:PropTypes.string
  };
  static defaultProps = {
    onClick: noop,
    children: 'Submit',
    disabled: false,
    type: 'primary'
  };

  render() {
    const { style, size, disabled, children, type, onClick, className} = this.props;
    let antdType = typeMap[type];
    return (
      <MtButton>
        <AntButton className={className} type={antdType} style={style} size={size} disabled={disabled} onClick={onClick} >
          {children}
        </AntButton>
      </MtButton>
    );
  }
}
export default Button;
