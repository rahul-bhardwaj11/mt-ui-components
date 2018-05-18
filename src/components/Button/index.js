import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import style from './index.scss';

import { Button as AntButton } from 'antd';
import 'antd/dist/antd.css';


const noop = () => undefined;

class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool
  };
  static defaultProps = {
    onClick: noop,
    children: 'Submit',
    disabled: false
  };


  render() {
    // return (
    //   <button
    //     disabled={this.props.disabled}
    //     name={this.props.name}
    //     onClick={this.props.onClick}
    //     className={classnames(
    //       this.getBtnStyle(this.props.type),
    //       this.props.className,
    //       style.commonButtonStyle
    //     )}
    //   >
    //     {this.props.children}
    //     {/* <Icon type="close" className={classnames(style.icon)} /> */}
    //   </button>
    // );
    return (
      <AntButton type={this.props.type} disabled={this.props.disabled}>{this.props.children}</AntButton>
      )
  }
}
export default Button;
