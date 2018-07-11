import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntMenu from 'antd/lib/menu';
import 'antd/lib/menu/style/index.css';
import StringToHTML from '../StringToHTML';
import styled from 'styled-components';
import { LIGHT_BLUE } from '../colors';

const MtMenu = styled.div`
  .ant-select-dropdown-menu-item {
    background-color: ${LIGHT_BLUE};
    color: #fff;
  }
  .ant-select-dropdown {
    background-color: ${LIGHT_BLUE};
    color: #fff;
  }
  .ant-select-dropdown-menu {
    background-color: #fff;
    color: #888;
    padding: 0px 5px;
    margin: 8px;
    border-radius: 4px;
    height: 32px;
    line-height: 32px;
  }
  .ant-dropdown-menu-submenu-title {
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    &:hover {
      background-color: #4a90e2;
      color: #fff;
    }
  }
  .ant-dropdown-menu-item {
    background-color: #fff;
    color: #989ca6;
    padding: 0px 15px;
    margin: 8px;
    border-radius: 4px;
    height: 32px;
    line-height: 32px;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    &:hover {
      background-color: #4a90e2;
      color: #fff;
    }
  }
  .ant-menu-horizontal {
    & > .ant-menu-item {
      &:hover {
        color: #202a39;
      }
    }
    & > .ant-menu-submenu {
      &:hover {
        color: #202a39;
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
    & > .ant-menu-item {
      color: #8e9194;
      &:hover {
        color: black;
      }
    }
  }
  .ant-menu-item {
    font-size: 15px;
    padding: 0px 8px;
    color: #8e9194;
    &:hover {
      color: #fff;
    }
    b {
      font-weight: normal;
    }
  }
  .ant-dropdown-trigger {
    font-size: 13px;
  }
`;

class Menu extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    onClick: PropTypes.func,
    mode: PropTypes.string,
    prefixCls: PropTypes.string
  };

  onClick = ({ key }) => {
    if (this.props.onClick) {
      this.props.onClick(key);
    }
  };

  render() {
    let { options } = this.props;
    return (
      <MtMenu>
        <AntMenu {...this.props} onClick={this.onClick}>
          {options.map(option => {
            return (
              <AntMenu.Item key={option.key}>
                {typeof option.content === 'string' ? (
                  <StringToHTML content={option.content} />
                ) : (
                  option.content
                )}
              </AntMenu.Item>
            );
          })}
        </AntMenu>
      </MtMenu>
    );
  }
}
export default Menu;
