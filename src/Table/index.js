import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntTable from 'antd/lib/table';
import 'antd/lib/table/style/index.css';
import styled from 'styled-components';
import theme from '../styles/theme';
import ActionBar from '../ActionBar';

const TdWrapper = styled.div`
  padding: ${props => (props.last ? '12px 24px 12px' : '12px 0px 12px 24px')};
  margin: 0px;
`;

const MtTable = styled.div`
  border-radius: 8px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  counter-reset: rowNumber;


  .ant-table-fixed-header .ant-table-scroll {

  }

  // .ant-table-fixed-header .ant-table-scroll .ant-table-header {
  //   padding: 0px;
  // }
  .emptyRow {
    padding: 0px;
    width: 8px;
  }

  .ant-table-thead > tr > th {
    padding: 16px 0px 16px 24px;
    &:first-child, &:last-child{
      padding: 0px 0px 0px 8px;
    }
  }
  
  .ant-table-tbody > tr > td {
    padding: 0px;
  }

  // .ant-table-fixed-header > .ant-table-content > .ant-table-fixed-left > .ant-table-header > table > tr {
  //   th {
  //     padding: 0px;
  //   }
  // }
  // .ant-table-fixed-header > .ant-table-content > .ant-table-fixed-right > table > tr ,
  // .ant-table-fixed-header > .ant-table-content > .ant-table-scroll > table > tr {
  //   th, td {
  //     padding: 0px;
  //   }
  // }
  
  .ant-table-middle > .ant-table-content > .ant-table-body > table,
  .ant-table-small > .ant-table-content > .ant-table-body > table {
    padding: 0px;
    .ant-table-thead {
      & > tr {
        color: ${theme.colors.DARK_OUTER_SPACE};
        & > th {
          background-color: white;
          border-bottom: 1px solid ${theme.colors.PEARL};
          padding: 16px 0px 16px 24px;
        }
        .emptyRow {
          padding: 0px;
          width: 8px;
        }
      }
    }

    .ant-table-row {
      counter-increment: rowNumber;
      &:hover {
        .ant-table-selection-column {
          ${props =>
            !props.showMultiSelect &&
            `&:before {
            visibility: hidden;
          }
          & > span {
            visibility: visible;
          }`};
        }
      }
    }

    .ant-table-tbody {
      .ant-table-selection-column {
        ${props =>
          !props.showMultiSelect &&
          `&:before {
          content: counter(rowNumber);
          margin-left: 5px;
          position: absolute;
          color: ${theme.colors.OUTER_SPACE};
          font-size: 12px;
        }
        & > span {
          visibility: hidden;
        }`};
      }
      & > tr {
        color: ${theme.colors.DARK_OUTER_SPACE};
        td {
          border-bottom: 1px solid ${theme.colors.PEARL};
          padding: 0px;
        }
        .emptyRow {
          padding: 0px;
          width: 8px;
          border-bottom: none;
        }
        &:last-child {
          td {
            border-bottom: 0px;
          }
        }
        &:hover {
          & > td {
            background: ${theme.colors.PORCELAIN};
            cursor: pointer;
          }
        }
        &:active {
          & > td {
            background: ${theme.colors.TROPICAL_BLUE};
            cursor: pointer;
          }
        }
      }
`;

class Table extends Component {
  static propTypes = {
    children: PropTypes.node,
    actionBar: PropTypes.shape({
      countText: PropTypes.string.isRequired,
      actionItem: PropTypes.arrayOf(PropTypes.node)
    }),
    onChange: PropTypes.func,
    rowSelection: PropTypes.object,
    columns: PropTypes.array
  };
  state = {
    showActionBar: false,
    showMultiSelect: false
  };

  onChange = (selectedRowKeys, selectedRows) => {
    let {
      actionBar,
      rowSelection: { onChange }
    } = this.props;
    this.setState(() => ({
      showActionBar: actionBar && selectedRows.length > 0,
      showMultiSelect: actionBar && selectedRows.length > 0
    }));
    onChange && onChange(selectedRowKeys, selectedRows);
  };

  render() {
    let { rowSelection, actionBar, children } = this.props;
    let { showActionBar, showMultiSelect } = this.state;

    const renderContent = function(lastColumn) {
      if (lastColumn) {
        return value => {
          return {
            children: <TdWrapper last>{value}</TdWrapper>
          };
        };
      }
      return value => {
        return {
          children: <TdWrapper>{value}</TdWrapper>
        };
      };
    };

    this.props.columns.forEach((tableCell, index) => {
      if (!tableCell.render) {
        tableCell.render =
          index === this.props.columns.length - 1
            ? renderContent(true)
            : renderContent(false);
      }
      // else{
      //   const tdContent = tableCell.render();
      //   tableCell.render = () => {
      //       return (<TdWrapper last>{tdContent}</TdWrapper>);
      //   }
      // }
    });

    const columns = [
      {
        title: '',
        dataIndex: 'emptyFirst',
        className: 'emptyRow'
        //fixed: this.props.size ? false : 'left'
      },
      ...this.props.columns,
      {
        title: '',
        dataIndex: 'emptyLast',
        className: 'emptyRow'
        //fixed: this.props.size ? false : 'right'
      }
    ];
    //console.log(columns);

    /**
     * Check if rowSelection props is been passed, If yes override the onChange property of it.
     * Also if onChange prop is passed and the rowSelection is not available, create a new rowSelection object with onChange method.
     */
    const updatedRowSelection = rowSelection
      ? { ...rowSelection, onChange: this.onChange }
      : null;

    const antProps = updatedRowSelection
      ? {
          ...this.props,
          rowSelection: updatedRowSelection,
          columns: columns
        }
      : {
          ...this.props,
          columns: columns
        };
    return (
      <MtTable showMultiSelect={showMultiSelect}>
        <AntTable {...antProps}>{children}</AntTable>
        {showActionBar && (
          <ActionBar {...actionBar}>
            {actionBar ? actionBar.actionItem : false}
          </ActionBar>
        )}
      </MtTable>
    );
  }
}
export default Table;
