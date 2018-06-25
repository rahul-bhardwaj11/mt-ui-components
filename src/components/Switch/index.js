import React, { Component } from "react";
import PropTypes from "prop-types";
import AntSwitch from "antd/lib/switch";
import "antd/lib/switch/style/index.css";
import styled from 'styled-components';


const MtSwitch = styled.div`
.ant-switch-checked {
  background-color: #4A90E2;
}

.ant-switch{
  min-width:36px;
  height: 20px;
  &:after{
    width: 14px;
    height: 14px;
    top: 2px;
    margin-left:0px;
  }
}

.ant-switch-checked{
  &:after{
    width: 14px;
    height: 14px;
    top: 2px;
    margin-left: -16px;
  }
}
`;


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
    return (
        <MtSwitch>
          <AntSwitch checked={checked} onChange={this.onChange} />
        </MtSwitch>
    );
  }
}
export default Switch;
