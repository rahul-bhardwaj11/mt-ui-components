import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import svgIcons from './svgIcons';
import '../styles/icons.scss';

const noop = () => undefined;
export default class Icon extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
    gradient: PropTypes.bool,
    style: PropTypes.object,
    styleProps: PropTypes.object
  };
  static defaultProps = {
    onClick: noop,
    gradient: false,
    styleProps: {}
  };

  render() {
    const { type, onClick, gradient, styleProps } = this.props;
    let { style, className } = this.props;
    let svgIcon = svgIcons[type];
    if (typeof svgIcons[type] == 'function') {
      svgIcon = svgIcons[type](styleProps);
    }
    style = gradient ? { ...style, ...svgIcon } : style;
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
