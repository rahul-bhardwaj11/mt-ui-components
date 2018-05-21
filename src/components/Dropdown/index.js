import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntMenu from 'antd/lib/menu';
import AntDropdown from 'antd/lib/dropdown';
import Menu from '../Menu';
import 'antd/lib/dropdown/style/css'



class Dropdown extends Component {

  static propTypes = {
    options: PropTypes.array.isRequired
  };


  onClick = function ({ key }) {
    this.props.onClick(key);
  };


  render() {
    let {options} = this.props;
    const menu = <Menu options={options} />
    return (
      <AntDropdown overlay={menu}>
        <a className="ant-dropdown-link" href="#">
          Hover here
        </a>
      </AntDropdown>
    );
  }
}
export default Dropdown;
