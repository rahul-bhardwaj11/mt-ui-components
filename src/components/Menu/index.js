import React, { Component } from "react";
import PropTypes from "prop-types";
import AntMenu from "antd/lib/menu";
import "antd/lib/menu/style/css";
import StringToHTML from "../StringToHTML";

class Menu extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    onClick: PropTypes.func
  };

  onClick = ({ key }) => {
    if (this.props.onClick) {
      this.props.onClick(key);
    }
  };

  render() {
    let { options, mode, prefixCls } = this.props;
    return (
      <AntMenu prefixCls={prefixCls} onClick={this.onClick} mode={mode}>
        {options.map((option, index) => {
          return (
            <AntMenu.Item key={option.key}>
              <StringToHTML content={option.content} />
            </AntMenu.Item>
          );
        })}
      </AntMenu>
    );
  }
}
export default Menu;
