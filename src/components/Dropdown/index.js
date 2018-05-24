import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntDropdown from 'antd/lib/dropdown';
import Menu from '../Menu';
import 'antd/lib/dropdown/style/css'



class Dropdown extends Component {

  static propTypes = {
    options: PropTypes.array.isRequired,
    trigger: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func
  };

  static defaultProps = {
    trigger: 'hover'
  };


  onClick = (key) => {
    if(this.props.onClick){
      this.props.onClick(key);
    }
  };


  render() {
    let {options, trigger, children} = this.props;
    const menu = (<Menu options={options} onClick={this.onClick}/>);
    return (
      <AntDropdown overlay={menu} trigger={[trigger]} >
      {children}
      </AntDropdown>
    );
  }
}
export default Dropdown;
