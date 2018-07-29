import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import AntPopover from 'antd/lib/popover';
import 'antd/lib/popover/style/index.css';
import './index.scss';

class Popover extends Component {
  static propTypes = {};

  render() {
    return <AntPopover {...this.props} />;
  }
}

export default Popover;
