import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntDropdown from 'antd/lib/dropdown';
import Menu from '../Menu';
import 'antd/lib/dropdown/style/index.css'



class Dropdown extends Component {

  static propTypes = {
    options: PropTypes.any.isRequired,
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
    let {options, trigger, children, prefixCls} = this.props;
    let overlay;
    if(options instanceof Array){
      overlay = (<Menu options={options} onClick={this.onClick}/>);
    } else {
      overlay = options;
    }
    return (
      <AntDropdown overlay={overlay} trigger={[trigger]} prefixCls={prefixCls}>
      {children}
      </AntDropdown>
    );
  }
}
export default Dropdown;
