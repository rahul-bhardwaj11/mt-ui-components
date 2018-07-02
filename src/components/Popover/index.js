import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AntPopover from "antd/lib/popover";
import Button from "antd/lib/button";
import 'antd/lib/popover/style/index.css';

const MtPopover = styled.div`
display: inline;
`

class Popover extends Component {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    content: PropTypes.string
  };


  render() {
    const {children, title, content} = this.props;

      return (
        <MtPopover>
          <AntPopover title={title} content={content} trigger="click" placement="bottom" >
            <Button> icon</Button>
            {children}
          </AntPopover>
        </MtPopover>
    )
  }
}

export default Popover;
