import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntDrawer from 'antd/lib/drawer';
import styled from 'styled-components';
import 'antd/lib/drawer/style/index.css';
// import mixins from "../styles/mixins";
// import theme from "../styles/theme";

const MtDrawer = styled(AntDrawer)``;

class Drawer extends Component {
  static propTypes = {
    children: PropTypes.node
  };
  render() {
    const { children } = this.props;
    return <MtDrawer {...this.props}>{children}</MtDrawer>;
  }
}
export default Drawer;
