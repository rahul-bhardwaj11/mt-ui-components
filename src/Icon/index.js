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
    gradient: false,
    display: 'inline-block'
  };

  render() {
    const { type, onClick, gradient } = this.props;
    let { style, className } = this.props;
    style = gradient ? { ...style, ...svgIcons[type] } : style;
    className = gradient ? className : classnames(`icon-${type}`, className);
    const iconProps = {
      className,
      style,
      onClick
    };
    return (
      <React.Fragment>
        {gradient && <div {...iconProps} />}
        {!gradient && <span {...iconProps} />}
      </React.Fragment>
    );
  }
}
