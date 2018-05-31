import React, { Component } from "react";
import PropTypes from "prop-types";
import AntSwitch from "antd/lib/switch";
import "antd/lib/switch/style/index.css";

class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked || false
    };
  }
  static propTypes = {
    checked: PropTypes.bool
  };

  onChange = (checked) => {
    this.setState({
      checked: checked
    });
  };

  render() {
    let { checked } = this.state;
    return <AntSwitch checked={checked} onChange={this.onChange} />;
  }
}
export default Switch;
