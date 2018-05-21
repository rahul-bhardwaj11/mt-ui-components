import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntInput from 'antd/lib/input';
import 'antd/lib/input/style/css'



class Input extends Component {

  static propTypes = {
    placeholder: PropTypes.string
  };


  render() {
      return (
        <AntInput placeholder={this.props.placeholder} />
    )
  }
}
export default Input;
