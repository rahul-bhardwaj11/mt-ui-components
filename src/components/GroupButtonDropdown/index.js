import React, { Component } from "react";
import PropTypes from "prop-types";
import Dropdown from "../Dropdown";
import Button from "../Button";
import style from "./index.scss";
import classnames from "classnames";

class GroupButtonDropdown extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    trigger: PropTypes.string,
    onClick: PropTypes.func,
    label: PropTypes.string
  };

  static defaultProps = {
    trigger: "click"
  };

  onClick = ({ key }) => {
    if (this.props.onClick) {
      this.props.onClick(key);
    }
  };

  render() {
    let { options, trigger, label } = this.props;
    return (
      <div>
        <Button
          style={{
            "border-bottom-right-radius": 0,
            "border-top-right-radius": 0
          }}
        >
          {label}
        </Button>
        <Dropdown options={options} onClick={this.onClick} trigger={trigger}>
          <div style={{ display: "inline-block" }} className={classnames(style.rightBtn)}>
            <Button
              style={{
                "border-bottom-left-radius": 0,
                "border-top-left-radius": 0,
                "border-left": "1px solid"
              }}
            >
              <span>&#9660;</span>
            </Button>
          </div>
        </Dropdown>
      </div>
    );
  }
}
export default GroupButtonDropdown;
