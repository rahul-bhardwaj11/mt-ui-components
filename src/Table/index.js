import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntTable from 'antd/lib/table';
import 'antd/lib/table/style/index.css';
import styled from 'styled-components';

// const MtHeader = styled.div`
//   border-radius: 8px;
//   color: #2a2e36;
//   font-size: 14px;
//   font-weight: 600;
//   line-height: 20px;
//   padding: 32px 32px 8px 32px;
//   background-color: #ffffff;
// `;

const MtTable = styled.div`
  background-color: #ffffff;

  .ant-table {
    color: #606369;
    font-family: 'Open Sans';

    &.ant-table-small {
      border: 0px;
    }
    .ant-table-body {
      tr {
        th {
          height: 17px;
          font-size: 12px;
          line-height: 17px;
          padding: 16px 24px !important;
          background-color: white;
          border-top: none;
          border-bottom: 1px solid #e8eaed;

          &:first-child {
            width: 0px !important;
            padding: 0px 0px 0px 8px !important;
          }

          &:last-child {
            width: 0px !important;
            padding: 0px 0px 0px 8px !important;
          }
        }
        td {
          height: 22px;
          font-size: 14px;
          line-height: 22px;
          padding: 12px 24px !important;
          background-color: white;
          border-bottom: 1px solid #e8eaed;

          &:first-child {
            width: 0px !important;
            padding: 0px 0px 0px 8px !important;
            border-bottom: none;
          }

          &:last-child {
            width: 0px !important;
            padding: 0px 0px 0px 8px !important;
            border-bottom: none;
          }
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
    headerText: PropTypes.string,
    columns: PropTypes.array
  };

  render() {
    const columns = this.props.columns;
    const emptyColumnFirst = { title: '', dataIndex: 'emptyFirst' };
    const emptyColumnlast = { title: '', dataIndex: 'emptyLast' };

    columns.unshift(emptyColumnFirst);
    columns.push(emptyColumnlast);

    return (
      <MtTable>
        {/* <MtHeader>{this.props.headerText}</MtHeader> */}
        <AntTable {...this.props}>{this.props.children}</AntTable>
      </MtTable>
    );
  }
}
export default Table;
