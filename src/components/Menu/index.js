import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntMenu from 'antd/lib/menu';
//import 'antd/lib/menu/style/css'
import 'antd/dist/antd.css'



class Menu extends Component {

  static propTypes = {
    options: PropTypes.array.isRequired,
    onClick: PropTypes.func
  };


  onClick = function ({ key }) {
    this.props.onClick(key);
  };


  render() {
    let {options} = this.props;
      return (
        <AntMenu onClick={this.onClick}>
          {options.map((option, index) => {
            return (
              <AntMenu.Item key={index} >{option}</AntMenu.Item>
            );
          })}
        </AntMenu>
    )
  }
}
export default Menu;
