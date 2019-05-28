import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import svgIcons from './svgIcons';
import '../styles/icons.scss';

const noop = () => undefined;
export default class Icon extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    gradient: PropTypes.bool,
    style: PropTypes.object
  };
  static defaultProps = {
    onClick: noop,
    gradient: false,
    style: {}
  };

  render() {
    const { type, onClick, gradient, title } = this.props;
    let { style, className } = this.props;
    let svgIcon = {};
    if (gradient) {
      svgIcon = svgIcons[type](style);
    }
    style = gradient ? { ...style, ...svgIcon } : style;
    className = gradient ? className : classnames(`icon-${type}`, className);
    const iconProps = {
      className,
      style,
      onClick,
      title
    };
    return (
      <React.Fragment>
        {gradient && <div {...iconProps} />}
        {!gradient && <span {...iconProps} />}
      </React.Fragment>
    );
  }
}
