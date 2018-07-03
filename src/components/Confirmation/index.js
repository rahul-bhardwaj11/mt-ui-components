import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AntPopover from "antd/lib/popover";
import Button from "../Button";
import 'antd/lib/popover/style/index.css';
import style from "./index.scss";

class Popover extends Component {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    content: PropTypes.string
  };


  render() {
    const {children, title, content} = this.props;

      return (
        <AntPopover title={title} content={content} trigger="click" placement="bottomLeft" >
          <Button type="default">i</Button>
          {children}
        </AntPopover>
    )
  }
}

export default Popover;
