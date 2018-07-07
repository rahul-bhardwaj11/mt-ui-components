import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import styled from "styled-components";
import AntPopconfirm from 'antd/lib/popconfirm';
import 'antd/lib/popconfirm/style/css';

// const MtConfirmBox = styled.div`
//   .actionButtons {
//     text-align: right;
//     margin-top: 25px;
//     div {
//       display: inline-block;
//     }
//   }
//   h2 {
//     color: #2a2e36;
//     font-size: 14px;
//     font-weight: 600;
//     text-align: left;
//   }
// `;

class ConfirmBox extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    okText: PropTypes.string,
    cancelText: PropTypes.string
  };

  render() {
    let { children } = this.props;
    return <AntPopconfirm {...this.props}>{children}</AntPopconfirm>;
  }
}
export default ConfirmBox;
