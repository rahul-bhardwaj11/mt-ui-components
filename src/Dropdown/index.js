import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntDropdown from 'antd/lib/dropdown';
import Menu from '../Menu';
import 'antd/lib/dropdown/style/index.css';
import Button from 'antd/lib/button';
import styled from 'styled-components';
import 'antd/lib/button/style/index.css';

const MtWrapper = styled.div`
  display: inline-block;
`;

class Dropdown extends Component {
  static propTypes = {
    options: PropTypes.any.isRequired,
    trigger: PropTypes.string,
    children: PropTypes.node,
    onSelect: PropTypes.func,
    type: PropTypes.string,
    label: PropTypes.string,
    getPopupContainer: PropTypes.func,
    placement: PropTypes.string,
    className: PropTypes.string,
    selectedKeys: PropTypes.array
  };

  static defaultProps = {
    trigger: 'hover',
    placement: 'bottomRight',
    onSelect: () => {}
  };
  dropdownRef = null;

  render() {
    let {
      options,
      trigger,
      children,
      type,
      label,
      onSelect,
      placement,
      className,
      selectedKeys,
      getPopupContainer = () => {
        return this.dropdownRef;
      },
      ...rest
    } = this.props;

    let overlay;
    if (options instanceof Array) {
      overlay = (
        <Menu
          options={options}
          onClick={onSelect}
          selectedKeys={selectedKeys}
        />
      );
    } else {
      overlay = options;
    }
    if (type === 'button') {
      children = <Button>{label || 'Button'}</Button>;
    }

    return (
      <React.Fragment>
        <MtWrapper
          className={className}
          innerRef={e => e && (this.dropdownRef = e)}
        >
          <AntDropdown
            overlay={overlay}
            trigger={[trigger]}
            prefixCls={'ant-dropdown'}
            getPopupContainer={getPopupContainer}
            placement={placement}
            {...rest}
          >
            {children}
          </AntDropdown>
        </MtWrapper>
      </React.Fragment>
    );
  }
}
export default Dropdown;
