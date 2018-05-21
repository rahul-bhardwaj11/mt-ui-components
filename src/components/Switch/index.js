import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntSwitch from 'antd/lib/switch';
import 'antd/lib/switch/style/css'



class Switch extends Component {

  static propTypes = {
    checked: PropTypes.bool
  };

  render() {
      return (
        <AntSwitch checked={this.props.checked || false} />
    )
  }
}
export default Switch;
