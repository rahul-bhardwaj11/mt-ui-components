import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntDropdown from 'antd/lib/dropdown';
import Menu from '../Menu';
import 'antd/lib/dropdown/style/index.css';
import Button from 'antd/lib/button';
import 'antd/lib/button/style/index.css';

class Dropdown extends Component {
  static propTypes = {
    options: PropTypes.any.isRequired,
    trigger: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
    type: PropTypes.string,
    label: PropTypes.string,
    getPopupContainer: PropTypes.func
  };

  static defaultProps = {
    trigger: 'hover'
  };

  onClick = key => {
    if (this.props.onClick) {
      this.props.onClick(key);
    }
  };

  render() {
    let {
      options,
      trigger,
      children,
      type,
      label,
      onClick,
      getPopupContainer
    } = this.props;
    let overlay;
    if (options instanceof Array) {
      overlay = <Menu options={options} onClick={this.onClick} />;
    } else {
      overlay = options;
    }
    if (type === 'button') {
      children = <Button>{label || 'Button'}</Button>;
    }
    return (
      <AntDropdown
        overlay={overlay}
        trigger={[trigger]}
        prefixCls={'ant-dropdown'}
        onClick={onClick}
        getPopupContainer={getPopupContainer}
      >
        <div> {children} </div>
      </AntDropdown>
    );
  }
}
export default Dropdown;
