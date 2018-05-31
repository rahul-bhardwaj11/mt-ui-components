import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntInput from 'antd/lib/input';
import 'antd/lib/input/style/index.css'



class Input extends Component {

  static propTypes = {
    placeholder: PropTypes.string
  };


  render() {
      return (
        <AntInput {...this.props} />
    )
  }
}
Input.TextArea = AntInput.TextArea;
export default Input;
