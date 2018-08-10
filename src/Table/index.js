import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntTable from 'antd/lib/table';
import 'antd/lib/table/style/index.css';
import styled from 'styled-components';
import theme from '../styles/theme';
import mixins from '../styles/mixins.js';
import ActionBar from '../ActionBar';

const DEFAULT_TH_PADDING = {
  pTop: '16px',
  pRight: '0',
  pBottom: '16px',
  pLeft: '24px'
};

const DEFAULT_TD_PADDING = {
  pTop: '12px',
  pRight: '0',
  pBottom: '12px',
  pLeft: '24px'
};

const MtTable = styled.div`
  counter-reset: rowNumber;

  .ant-table-default > .ant-table-content > .ant-table-body > table,
  .ant-table-middle > .ant-table-content > .ant-table-body > table,
  .ant-table-small > .ant-table-content > .ant-table-body > table,
  .ant-table-default
    > .ant-table-content
    > .ant-table-scroll
    > .ant-table-header
    > .ant-table-fixed,
  .ant-table-default
    > .ant-table-content
    > .ant-table-scroll
    > .ant-table-body
    > .ant-table-fixed,
  .ant-table-default
    > .ant-table-content
    > .ant-table-fixed-left
    > .ant-table-header
    > .ant-table-fixed,
  .ant-table-default
    > .ant-table-content
    > .ant-table-fixed-left
    > .ant-table-body
    > .ant-table-fixed,
  .ant-table-default
    > .ant-table-content
    > .ant-table-fixed-right
    > .ant-table-header
    > .ant-table-fixed,
  .ant-table-default
    > .ant-table-content
    > .ant-table-fixed-right
    > .ant-table-body
    > .ant-table-fixed {
    padding: 0px;
    .ant-table-thead {
      & > tr {
        color: ${theme.colors.DARK_OUTER_SPACE};
        & > th {
          ${mixins.smallDarkLink()};
          background-color: white;
          border-bottom: 1px solid ${theme.colors.ALTO};
          padding: ${props => {
            debugger; //eslint-disable-line
            let {
              contentCellPadding: {
                pTop,
                pRight,
                pBottom,
                pLeft
              } = DEFAULT_TH_PADDING
            } = props;
            return `${pTop} ${pRight} ${pBottom}  ${pLeft}`;
          }};
          &:last-child {
            padding: ${props => {
              let {
                contentCellPadding: {
                  pTop,
                  pBottom,
                  pLeft
                } = DEFAULT_TH_PADDING
              } = props;
              return `${pTop} ${pLeft} ${pBottom}  ${pLeft}`;
            }};
          }
        }
      }
    }
    .ant-table-tbody {
      & > tr {
        color: ${theme.colors.DARK_OUTER_SPACE};
        & > td {
          ${mixins.blackText()};
          background-color: white;
          border-bottom: 1px solid ${theme.colors.PEARL};
          padding: ${props => {
            let {
              contentCellPadding: {
                pTop,
                pRight,
                pBottom,
                pLeft
              } = DEFAULT_TD_PADDING
            } = props;
            return `${pTop} ${pRight} ${pBottom} ${pLeft}`;
          }};
          &:last-child {
            padding: ${props => {
              let {
                contentCellPadding: {
                  pTop,
                  pBottom,
                  pLeft
                } = DEFAULT_TD_PADDING
              } = props;
              return `${pTop} ${pLeft} ${pBottom} ${pLeft}`;
            }};
          }
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
          ${mixins.blackText()};
          border-bottom: 1px solid ${theme.colors.PEARL};
          padding: ${props => {
            let {
              contentCellPadding: {
                pTop,
                pRight,
                pBottom,
                pLeft
              } = DEFAULT_TD_PADDING
            } = props;
            return `${pTop} ${pRight} ${pBottom} ${pLeft}`;
          }};
          &:last-child {
            padding: ${props => {
              let {
                contentCellPadding: {
                  pTop,
                  pBottom,
                  pLeft
                } = DEFAULT_TD_PADDING
              } = props;
              return `${pTop} ${pLeft} ${pBottom} ${pLeft}`;
            }};
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
    columns: PropTypes.array,
    size: PropTypes.string
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
          rowSelection: updatedRowSelection
        }
      : {
          ...this.props
        };
    return (
      <MtTable showMultiSelect={showMultiSelect} {...this.props}>
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
Table.Column = AntTable.Column;
export default Table;
