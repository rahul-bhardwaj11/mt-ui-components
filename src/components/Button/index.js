import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import AntButton from "antd/lib/button";
import "antd/lib/button/style/index.css";
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
var LIGHT_BLUE= '4A90E2',
    HELP: '#BBB'

const MtButton = styled.div`
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
  }

  &:hover{
	border: 1px solid ${HELP};
  }
  &:focus, &.active{
    border: 1px solid ${LIGHT_BLUE};
    color: ${LIGHT_BLUE};
  }
}
.ant-btn{
  &.disabled{
    border: 1px solid #E8E8E8;
    border-radius: 4px;
    background-color: #F8F8F8;
    color: ${HELP};
  }
}

/* Primary Button styles */
.ant-btn-primary{
	border: 1px solid ${LIGHT_BLUE};
  background-color: ${LIGHT_BLUE};
  color: #FFF;
  font-size: 14px;
  height: 32px;
  padding: 0px 12px;

  &.ant-btn-sm{
    color: #FFF;
    font-size: 12px;
    padding: 0px 12px;
  }

  &:hover{
  	border: 1px solid #53A2FC;
    background: #53A2FC;
  }
  &:focus, &.active{
    border: 1px solid #4281C9;
    background: #4281C9;
    color: #FFF;
  }
}
.ant-btn{
  &.disabled{
    border: 1px solid #CED2DB;
    border-radius: 4px;
    background-color: #CED2DB;
    color: #FFF;
  }
}

.ant-btn-pills {
}

/* Dashed Button styles */
.ant-btn-dashed{
	border: 1px dashed #DDD;
  background-color: rgba(255,255,255,0);
  color: #989CA6;
  font-size: 14px;
  height: 32px;
  padding: 0px 12px;

  &.ant-btn-sm{
    color: #FFF;
    font-size: 12px;
    padding: 0px 12px;
  }

  &:hover{
    color: #2A2E36;
  }
  &:focus, &.active{
    color: #2A2E36;
  }
}
.ant-btn{
  &.disabled{
    color: ${HELP};
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
  pills: "pills"
}

class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['primary', 'default','dashed','pills']),
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    size: PropTypes.number,
    style: PropTypes.object
  };
  static defaultProps = {
    onClick: noop,
    children: "Submit",
    disabled: false,
    type: "primary"
  };

  render() {
    const { style, size, disabled, children, type, onClick } = this.props;
    let antdType = typeMap[type];
    return (
      <MtButton>
        <AntButton type={antdType} style={style} size={size} disabled={disabled} onClick={onClick} >
          {children}
        </AntButton>
       </MtButton>
    );
  }
}
export default Button;
