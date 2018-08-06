import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntTable from 'antd/lib/table';
import 'antd/lib/table/style/index.css';
import styled from 'styled-components';

const MtHeader = styled.div`
  border-radius: 8px;
  color: #2a2e36;
  font-family: 'Open Sans';
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 24px 24px 8px 24px;
  background-color: #ffffff;
`;

const MtTable = styled.div`
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  margin: 24px 40px;
  .ant-table {
    color: #606369;
    font-family: 'Open Sans';
    &.ant-table-middle {
      padding: 0px 8px;
    }
    &.ant-table-small {
      border: 0px;
    }
    .ant-table-body {
      tr {
        th {
          height: 17px;
          width: 200px;
          font-size: 12px;
          line-height: 17px;
          padding: 24px !important;
          background-color: white;
          border-top: none;
        }
        td {
          height: 22px;
          width: 200px;
          font-size: 14px;
          line-height: 22px;
          padding: 21px 24px !important;
          background-color: white;
        }
      }
      tr:hover {
        & > td {
          background: #ddd;
          cursor: pointer;
        }
      }
      tr:last-child {
        td {
          border-bottom: 0px !important;
        }
      }
    }
  }
`;

class Table extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    headerText: PropTypes.string
  };

  render() {
    return (
      <MtTable>
        <MtHeader>{this.props.headerText}</MtHeader>
        <AntTable {...this.props} pagination={false}>
          {this.props.children}
        </AntTable>
      </MtTable>
    );
  }
}
export default Table;
