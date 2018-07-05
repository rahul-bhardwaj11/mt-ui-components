import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntMenu from 'antd/lib/menu';
import 'antd/lib/menu/style/index.css';
import StringToHTML from '../StringToHTML';
import styled from 'styled-components';

const LIGHT_BLUE = '#4A90E2';

const MtMenu = styled.div`
  .ant-select-dropdown-menu-item {
    background: ${LIGHT_BLUE};
    color: #fff;
  }
}
.ant-dropdown-menu-item{
  background-color: #fff;
  color: #989CA6;
  padding: 0px 15px;
  margin: 8px;
  border-radius: 4px;
  height: 32px;
  line-height: 32px;
}

.ant-menu-horizontal
{

    & > .ant-menu-item{
      &:hover{
        color: #202A39;
      }
    }
    & > .ant-menu-submenu{
      &:hover{
        color: #202A39;
      }
    }



  & > .ant-menu-item-active,
  & > .ant-menu-submenu-active,
  & > .ant-menu-item-selected,
  & > .ant-menu-submenu-selected {
      border-bottom: 3px solid ${LIGHT_BLUE};
      color: #202a39;
    }
  }


.ant-menu-vertical {
  & > .ant-menu-item{
    color: #8E9194;

    &:hover{
      color: black;
    }

  }
}


.ant-menu-item{
  font-size: 15px;
  padding: 0px 8px;
  color: #8E9194;
  &:hover{
    color: #fff
  }
  b {
    font-weight: normal;
  }

}
.ant-dropdown-trigger{
  font-size:13px;
}
`;

class Menu extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    onClick: PropTypes.func,
    mode: PropTypes.string,
    prefixCls: PropTypes.any
  };

  onClick = ({ key }) => {
    if (this.props.onClick) {
      this.props.onClick(key);
    }
  };

  render() {
    let { options, mode, prefixCls } = this.props;
    return (
      <MtMenu>
        <AntMenu prefixCls={prefixCls} onClick={this.onClick} mode={mode}>
          {options.map(option => {
            return (
              <AntMenu.Item key={option.key}>
                { (typeof option.content === "string") ? <StringToHTML content={option.content} /> : option.content }
              </AntMenu.Item>
            );
          })}
        </AntMenu>
      </MtMenu>
    );
  }
}
export default Menu;
