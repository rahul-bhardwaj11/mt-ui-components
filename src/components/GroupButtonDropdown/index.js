import React, { Component } from "react";
import PropTypes from "prop-types";
import Dropdown from "../Dropdown";
import Button from "../Button";
import style from "./index.scss";
import classnames from "classnames";
//import Dropdown from 'antd/lib/dropdown';
//import 'antd/lib/dropdown/style/css'
//import Menu from '../Menu';
import './index.scss'


class GroupButtonDropdown extends Component {
  static propTypes = {
    options: PropTypes.any.isRequired,
    trigger: PropTypes.string,
    onClick: PropTypes.func,
    label: PropTypes.string
  };

  static defaultProps = {
    trigger: "click"
  };

  onClick = (key) => {
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
            "borderBottomRightRadius": 0,
            "borderTopRightRadius": 0
          }}
        >
          {label}
        </Button>
        <Dropdown options={options} onClick={this.onClick} trigger={trigger}>
          <div style={{ display: "inline-block" }} className={classnames(style.rightBtn)}>
            <Button
              style={{
                "borderBottomLeftRadius": 0,
                "borderTopLeftRadius": 0,
                "borderLeft": "1px solid"
              }}
            >
              <span>&#9660;</span>
            </Button>
          </div>
        </Dropdown>
      </div>
    );
  }

  // render(){
  //   let { options, trigger, label } = this.props;
  //   let overlay;
  //   if(options instanceof Array){
  //     overlay = (<Menu options={options} onClick={this.onClick}/>);
  //   } else {
  //     overlay = options;
  //   }
  //   return (
  //     <Dropdown.Button overlay={overlay}>
  //       Dropdown
  //     </Dropdown.Button>
  //   );
  // }
}
export default GroupButtonDropdown;
