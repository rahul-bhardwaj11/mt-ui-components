import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntPopover from "antd/lib/popover";
import Button from "../Button";
import 'antd/lib/popover/style/index.css';
import "./index.scss";



class Popover extends Component {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.object
  };


  render() {
      return (
          <AntPopover {...this.props} >
          </AntPopover>
    )
  }
}

export default Popover;
