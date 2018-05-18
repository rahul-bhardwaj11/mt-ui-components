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
    return (
      <AntButton type={this.props.type} disabled={this.props.disabled}>{this.props.children}</AntButton>
      )
  }
}
export default Button;
