import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntMenu from 'antd/lib/menu';
import AntDropdown from 'antd/lib/dropdown';
import Menu from '../Menu';
import 'antd/lib/dropdown/style/css'



class Dropdown extends Component {

  static propTypes = {
    options: PropTypes.array.isRequired,
    trigger: PropTypes.string,
    children: PropTypes.node
  };

  static defaultProps = {
    trigger: 'hover'
  };


  onClick = function ({ key }) {
    this.props.onClick(key);
  };


  render() {
    let {options, trigger, children} = this.props;
    const menu = <Menu options={options} />
    return (
      <AntDropdown overlay={menu} >
      {children}
      </AntDropdown>
    );
  }
}
export default Dropdown;
