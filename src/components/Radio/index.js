import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntRadio from 'antd/lib/radio';
import 'antd/lib/radio/style/css'



class Radio extends Component {

  static propTypes = {
    label: PropTypes.string,
    checked: PropTypes.bool
  };


  render() {
    let {label,checked} = this.props;
      return (
        <AntRadio checked={checked}>{label}</AntRadio>
      );
  }
}
export default Radio;
