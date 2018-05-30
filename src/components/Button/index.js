import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import AntButton from "antd/lib/button";
import "antd/lib/button/style/css";

const noop = () => undefined;

class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    size: PropTypes.number,
    style: PropTypes.object
  };
  static defaultProps = {
    onClick: noop,
    children: "Submit",
    disabled: false,
    type: "primary"
  };

  render() {
    const { style, size, disabled, children, type } = this.props;
    return (
      <AntButton type={type} style={style} size={size} disabled={disabled} className={classnames("ant-dropdown-trigger")}>
        {children}
      </AntButton>
    );
  }
}
export default Button;
