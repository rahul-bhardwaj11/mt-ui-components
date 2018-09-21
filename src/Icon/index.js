import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import svgIcons from './svgIcons';

const noop = () => undefined;
export default class Icon extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
    gradient: PropTypes.bool,
    style: PropTypes.object
  };
  static defaultProps = {
    onClick: noop,
    gradient: false
  };

  render() {
    const { type, className, onClick, gradient } = this.props;
    let { style } = this.props;
    style = gradient ? { ...style, ...svgIcons[type] } : style;
    return (
      <div
        className={classnames(
          {
            [`icon-${type}`]: !gradient
          },
          className
        )}
        style={style}
        onClick={onClick}
      />
    );
  }
}
