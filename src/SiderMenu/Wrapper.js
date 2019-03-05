import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import Menu from 'mt-ui-components/Menu';
import Layout from 'mt-ui-components/Layout';

const { Item, ItemGroup: Group, SubMenu } = Menu;
const { Sider } = Layout;

const renderItems = items => {
  //eslint-disable-next-line
  return items.map(({ type, children = [], title, key, scroll, ...rest }) => {
    switch (type) {
      case 'Group':
        return (
          <Group {...rest} title={title} key={key}>
            {renderItems(children)}
          </Group>
        );
      case 'SubMenu':
        return (
          <SubMenu {...rest} title={title} key={key}>
            {renderItems(children)}
          </SubMenu>
        );
      case 'Item':
        return (
          <Item {...rest} key={key}>
            <span>{title}</span>
          </Item>
        );
      default:
        break;
    }
  });
};

const SiderWrapper = ({
  items,
  width,
  height,
  onClick,
  selected,
  className
}) => {
  let style = {};
  if (height) {
    style = { height };
  }
  return (
    <Sider
      width={width}
      className={classnames('siderStyling', className)}
      style={style}
    >
      <Menu
        theme="dark"
        mode="inline"
        inlineIndent={20}
        onClick={onClick}
        selectedKeys={selected}
      >
        {renderItems(items)}
      </Menu>
    </Sider>
  );
};

SiderWrapper.propTypes = {
  items: PropTypes.array.isRequired,
  selected: PropTypes.array.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default SiderWrapper;
