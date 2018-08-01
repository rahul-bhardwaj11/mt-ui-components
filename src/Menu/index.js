import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntMenu from 'antd/lib/menu';
import 'antd/lib/menu/style/index.css';
import StringToHTML from '../StringToHTML';
import styled from 'styled-components';
import theme, { truncate } from '../styles/theme';

const MtMenu = styled.div`
  .ant-select-dropdown-menu-item {
    background-color: ${theme.colors.LIGHT_BLUE};
    color: #fff;
  }
  .ant-select-dropdown {
    background-color: ${theme.colors.LIGHT_BLUE};
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
      border-bottom: 3px solid ${theme.colors.LIGHT_BLUE};
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

  & {
    .ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
      text-align: left;
      padding-left: 0px !important;
      color: #989ca6;
      text-transform: uppercase;
      font-size: 11px;
      line-height: 16px;
      height: auto;
      .ant-menu-submenu-arrow {
        display: none;
      }
    }
  }
  & {
    .ant-menu-sub.ant-menu-inline > .ant-menu-item {
      padding-left: 0px !important;
      float: left;
      text-align: left;
      height: auto;
      line-height: 20px;
      margin: 0px;
      font-size: 12px;
    }
  }

  .ant-anchor-link {
    padding: 6px 0 6px 0px;
    line-height: 1;
    display: list-item;
    margin-left: 17px;
    list-style-type: disc;
    color: ${theme.colors.LIGHT_BLUE};

    a {
      color: ${theme.colors.LIGHT_BLUE};
      font-size: 12px;
      ${truncate('250px')};
    }
  }

  .ant-menu-inline {
    border-right: 0px;
  }
`;

class Menu extends Component {
  static propTypes = {
    options: PropTypes.array,
    onClick: PropTypes.func,
    mode: PropTypes.string,
    children: PropTypes.node,
    prefixCls: PropTypes.string,
    itemStyle: PropTypes.object
  };

  onClick = ({ key }) => {
    if (this.props.onClick) {
      this.props.onClick(key);
    }
  };
  static defaultProps = {
    style: { paddingLeft: '0px' }
  };

  render() {
    let { options, children, itemStyle } = this.props;
    return (
      <MtMenu>
        <AntMenu {...this.props} onClick={this.onClick}>
          {!options && children}
          {options &&
            options.map((option, index) => {
              return (
                <AntMenu.Item key={option.key || index} style={itemStyle}>
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

Menu.ItemGroup = AntMenu.ItemGroup;
Menu.SubMenu = AntMenu.SubMenu;
Menu.Item = AntMenu.Item;
export default Menu;
