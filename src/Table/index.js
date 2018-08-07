import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntTable from 'antd/lib/table';
import 'antd/lib/table/style/index.css';
import styled from 'styled-components';
import theme from '../styles/theme';
import ActionBar from '../ActionBar';

const MtTable = styled.div`
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  padding: 15px 8px;
  counter-reset: rowNumber;
  .ant-table-thead {
    & > tr {
      color: ${theme.colors.DARK_OUTER_SPACE};
      & > th {
        background-color: white;
        border-bottom: 0px;
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
        padding: 16px !important;
      }
      &:last-child {
        td {
          border-bottom: 0px;
        }
      }
    }
  }

  .ant-table-tbody {
    & > tr {
      &:hover {
        & > td {
          background: ${theme.colors.PORCELAIN};
          cursor: pointer;
        }
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
    rowSelection: PropTypes.object
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

    const updatedRowSelection = rowSelection
      ? { ...rowSelection, onChange: this.onChange }
      : null;

    const antProps = updatedRowSelection
      ? {
          ...this.props,
          rowSelection: updatedRowSelection
        }
      : { ...this.props };

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
