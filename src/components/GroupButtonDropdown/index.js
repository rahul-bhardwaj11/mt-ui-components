import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntDropdown from 'antd/lib/dropdown';
import 'antd/lib/dropdown/style/css';
import Menu from '../Menu';



class GroupButtonDropdown extends Component {

  static propTypes = {
    options: PropTypes.array.isRequired,
    trigger: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node
  };

  static defaultProps = {
    trigger: 'hover',
    children: 'Button'
  };


  onClick = function ({ key }) {
    if(this.props.onClick){
      this.props.onClick(key);
    }
  };


  render() {
    let {options, trigger, children} = this.props;
    const menu = <Menu options={options} />
    return (
      <AntDropdown.Button overlay={menu} >
      {children}
      </AntDropdown.Button>
    );
  }
}
export default GroupButtonDropdown;
