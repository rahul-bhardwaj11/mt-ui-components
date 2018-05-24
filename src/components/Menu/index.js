import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntMenu from 'antd/lib/menu';
import 'antd/lib/menu/style/css'



class Menu extends Component {

  static propTypes = {
    options: PropTypes.array.isRequired,
    onClick: PropTypes.func
  };


  onClick = ({ key }) => {
    if(this.props.onClick){
      this.props.onClick(key);
    }
  };


  render() {
    let {options} = this.props;
      return (
        <AntMenu prefixCls={"ant-dropdown-menu"} onClick={this.onClick}>
          {options.map((option, index) => {
            return (
              <AntMenu.Item key={option.key} >{option.content}</AntMenu.Item>
            );
          })}
        </AntMenu>
    )
  }
}
export default Menu;
