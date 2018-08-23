import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntTable from 'antd/lib/table';
import 'antd/lib/table/style/index.css';
import 'antd/lib/checkbox/style/index.css';
import styled from 'styled-components';
import theme from '../styles/theme';
import mixins from '../styles/mixins.js';
import ActionBar from '../ActionBar';

const DEFAULT_TH_PADDING = {
  pTop: '16px',
  pRight: '0',
  pBottom: '16px',
  pLeft: '32px'
};

const DEFAULT_TD_PADDING = {
  pTop: '12px',
  pRight: '0',
  pBottom: '12px',
  pLeft: '32px'
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
    > .ant-table-body-outer
    > .ant-table-body-inner
    > .ant-table-fixed,
  .ant-table-default
    > .ant-table-content
    > .ant-table-fixed-right
    > .ant-table-header
    > .ant-table-fixed,
  .ant-table-default
    > .ant-table-content
    > .ant-table-fixed-right
    > .ant-table-body-outer
    > .ant-table-body-inner
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
          ${mixins.darkText()};
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
      counter-reset: rowNumber;
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
        &:focus-within {
          & > td {
            background: ${theme.colors.PORCELAIN};
            cursor: pointer;
          }
        }
        td {
          ${mixins.darkText()};
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
        &.ant-table-row-selected {
          & > td {
            background: ${theme.colors.TROPICAL_BLUE};
            cursor: pointer;
          }
          &:hover {
            & > td {
              background: ${theme.colors.TROPICAL_BLUE};
              cursor: pointer;
            }
          }
        }
        &.ant-table-row-hover {
          & > td {
            background: ${theme.colors.PORCELAIN};
            cursor: pointer;
          }
          &:hover {
            & > td {
              background: ${theme.colors.PORCELAIN};
              cursor: pointer;
            }
          }
        }
        &:hover {
          & > td {
            background: ${theme.colors.PORCELAIN};
            cursor: pointer;
          }
        }
      }
    }
  }

  .ant-table-thead > tr > th.ant-table-selection-column,
  .ant-table-tbody > tr > td.ant-table-selection-column {
    min-width: auto;
    width: auto;
  }

  .ant-checkbox-wrapper {
    & .ant-checkbox > .ant-checkbox-inner {
      width: 14px;
      height: 14px;
      border-radius: 3px;
      &:after {
        left: 3.5px;
        top: 1.2px;
      }
    }
    & > .ant-checkbox-checked {
      & > .ant-checkbox-inner {
        background-color: ${theme.colors.INDIGO};
        border-color: ${theme.colors.INDIGO};
        &:after {
          left: 3.5px;
          top: 1.2px;
        }
      }
    }
    & > .ant-checkbox-indeterminate {
      & > .ant-checkbox-inner {
        background-color: ${theme.colors.INDIGO};
        border-color: ${theme.colors.INDIGO};
        &:after {
          left: 1.5px;
          top: 5px;
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
    size: PropTypes.string,
    headerCellPadding: PropTypes.shape({
      pTop: PropTypes.string,
      pRight: PropTypes.string,
      pBottom: PropTypes.string,
      pLeft: PropTypes.string
    }),
    contentCellPadding: PropTypes.shape({
      pTop: PropTypes.string,
      pRight: PropTypes.string,
      pBottom: PropTypes.string,
      pLeft: PropTypes.string
    }),
    fetchData: PropTypes.func,
    infiniteScroll: PropTypes.bool,
    threshold: PropTypes.number,
    windowScroll: PropTypes.bool,
    hasMore: PropTypes.bool,
    loading: PropTypes.bool,
    scroll: PropTypes.object
  };
  static defaultProps = {
    infiniteScroll: false,
    threshold: 0.9,
    windowScroll: false
  };
  state = {
    showActionBar: false,
    showMultiSelect: false
  };
  scrollElement = null;
  styleProps = {
    contentCellPadding: this.props.contentCellPadding,
    headerCellPadding: this.props.headerCellPadding
  };
  fetch = () => {
    const { loading, fetchData } = this.props;
    if (!loading && fetchData) {
      fetchData();
    }
  };
  onScroll = () => {
    const {
      hasMore,
      threshold,
      infiniteScroll,
      windowScroll,
      scroll
    } = this.props;
    const body = document.body,
      html = document.documentElement;
    const height = windowScroll
      ? Math.max(
          body.scrollHeight,
          body.offsetHeight,
          html.clientHeight,
          html.scrollHeight,
          html.offsetHeight
        )
      : Math.max(
          this.scrollElement.scrollHeight,
          this.scrollElement.clientHeight
        );

    const innerHeight = windowScroll
      ? window.innerHeight + window.scrollY
      : scroll.y + this.scrollElement.scrollTop;

    if (innerHeight >= height * threshold) {
      if (infiniteScroll && hasMore) {
        this.fetch();
      } else {
        window.removeEventListener('scroll', this.onScroll, false);
      }
    }
  };

  componentDidMount() {
    const { infiniteScroll, windowScroll } = this.props;
    if (infiniteScroll) {
      this.scrollElement = windowScroll
        ? window
        : document.getElementsByClassName('ant-table-body')[0];
      if (this.scrollElement) {
        this.scrollElement.addEventListener('scroll', this.onScroll, false);
      }
    }
  }

  componentWillUnmount() {
    const { infiniteScroll } = this.props;
    if (infiniteScroll && this.scrollElement) {
      this.scrollElement.removeEventListener('scroll', this.onScroll, false);
    }
  }
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
      <MtTable showMultiSelect={showMultiSelect} {...this.styleProps}>
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
