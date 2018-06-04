import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntRadio from 'antd/lib/radio';
import 'antd/lib/radio/style/index.css'



class Radio extends Component {

  static propTypes = {
    children: PropTypes.any,
    checked: PropTypes.bool
  };


  render() {
    let { children } = this.props;
      return (
        <AntRadio >{children}</AntRadio>
      );
  }
}
Radio.Group = AntRadio.Group;
export default Radio;
