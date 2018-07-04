import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AntPopover from "antd/lib/popover";
import Button from "../Button";
import 'antd/lib/popover/style/index.css';
import style from "./index.scss";

class Popover extends Component {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string
  };


  render() {
      return (
        <AntPopover {...this.props}>
        </AntPopover>
    )
  }
}

export default Popover;
