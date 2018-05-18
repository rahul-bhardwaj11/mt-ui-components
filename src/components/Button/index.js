import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import style from './index.scss';

const noop = () => undefined;

class Button extends Component {
  static propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool
  };
  static defaultProps = {
    onClick: noop,
    type: 'Primary',
    children: 'Submit',
    disabled: false
  };

  getBtnStyle = (type) => {
    switch (type) {
      case 'PrimarySm':
        return `${style.primaryBtnSm} ${style.smbtn}`;
      case 'DefaultSm':
        return `${style.defaultBtnSm} ${style.smbtn}`;
      case 'YellowBtnSm':
        return `${style.yellowBtnLg} ${style.smbtn}`;
      case 'PrimaryLg':
        return `${style.primaryBtnLg} ${style.lgbtn}`;
      case 'DefaultLg':
        return `${style.defaultBtnLg} ${style.lgbtn}`;
      case 'YellowBtnLg':
        return `${style.yellowBtnLg} ${style.lgbtn}`;
      case 'PrimaryRoundBtn':
        return `${style.roundBtn} ${style.primaryBtn}`;
      case 'DefaultRoundBtn':
        return `${style.roundBtn} ${style.defaultBtn}`;
      case 'OkBtnSm':
        return style.okBtnSm;
      default:
        return '';
    }
  };

  render() {
    return (
      <button
        disabled={this.props.disabled}
        name={this.props.name}
        onClick={this.props.onClick}
        className={classnames(
          this.getBtnStyle(this.props.type),
          this.props.className,
          style.commonButtonStyle
        )}
      >
        {this.props.children}
        {/* <Icon type="close" className={classnames(style.icon)} /> */}
      </button>
    );
  }
}
export default Button;
