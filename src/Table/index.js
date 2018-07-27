import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntTable from 'antd/lib/table';
import 'antd/lib/table/style/index.css';
import styled from 'styled-components';
import theme from '../theme';

const MtTable = styled.div`
  
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  padding:15px 8px;

  .ant-table-thead{
    & > tr{
      & > th{
        background-color:white;
        border-bottom:0px;

        span{
        }
      }
    }
  }

  .ant-table-tbody{
    & > tr{

    td{
      border-bottom:1px solid ${theme.colors.PEARL};
    }
    &:last-child{
      td{
        border-bottom:0px;
    }
   }
  }
  .ant-table-tbody{
    & > tr{
      &:hover{
        & > td{
          background:#ddd;
          cursor:pointer;
      }
    }
 }

`;

class Table extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    return (
      <MtTable>
        <AntTable {...this.props}>{this.props.children}</AntTable>
      </MtTable>
    );
  }
}
export default Table;
