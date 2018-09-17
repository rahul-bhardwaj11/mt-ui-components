import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntTable from 'antd/lib/table';
import 'antd/lib/table/style/index.css';
import 'antd/lib/checkbox/style/index.css';
import styled from 'styled-components';
import theme from '../styles/theme';
import mixins from '../styles/mixins.js';
import ActionBar from '../ActionBar';
import Loader from '../Loader';

const DEFAULT_LOADER_PROPS = {
  type: 'Full',
  size: 'sizeSmall',
  style: { opacity: 0.5 }
};

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
  .ant-table-default > .ant-table-content > .ant-table-scroll > .ant-table-body,
  .ant-table-default
    > .ant-table-content
    > .ant-table-scroll
    > .ant-table-header,
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
    .ant-table-thead {
      & > tr {
        color: ${theme.colors.DARK_OUTER_SPACE};
        & > th {
          ${mixins.smallDarkLink()};
          background-color: white;
          border-bottom: 1px solid ${theme.colors.ALTO};
          padding: ${props => {
            let {
              headerCellPadding: {
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
                headerCellPadding: { pTop, pBottom, pLeft } = DEFAULT_TH_PADDING
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
          }
          &:hover {
            & > td {
              background: ${theme.colors.TROPICAL_BLUE};
            }
          }
        }
        &.ant-table-row-hover {
          & > td {
            background: ${theme.colors.PORCELAIN};
          }
          &:hover {
            & > td {
              background: ${theme.colors.PORCELAIN};
            }
          }
        }
        &:hover {
          & > td {
            background: ${theme.colors.PORCELAIN};
          }
        }
      }
    }
  }
  .ant-table-thead > tr > th.ant-table-selection-column,
  .ant-table-tbody > tr > td.ant-table-selection-column {
    min-width: auto;
  }

  .ant-checkbox-wrapper {
    &:hover .ant-checkbox-inner {
      border-color: ${theme.colors.INDIGO};
    }
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
        border-color: ${theme.colors.INDIGO};
        background-color: ${theme.colors.INDIGO};
        &:after {
          left: 1.45px;
          top: 5px;
        }
      }
    }

    .ant-checkbox:hover .ant-checkbox-inner,
    .ant-checkbox-input:focus + .ant-checkbox-inner {
      border-color: ${theme.colors.INDIGO};
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
    scroll: PropTypes.object,
    dataSource: PropTypes.array
  };
  static defaultProps = {
    infiniteScroll: false,
    threshold: 0.9,
    windowScroll: false
  };
  state = {
    showActionBar: false,
    showMultiSelect: false,
    selectAll: false,
    selectedRowKeys: []
  };
  scrollElement = null;
  styleProps = {
    contentCellPadding: this.props.contentCellPadding,
    headerCellPadding: this.props.headerCellPadding
  };
  tableRef = null;
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
    if (infiniteScroll && this.tableRef) {
      this.scrollElement = windowScroll
        ? window
        : this.tableRef.getElementsByClassName('ant-table-body')[0];
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
  componentWillReceiveProps(nextProp) {
    const { dataSource } = nextProp;
    const { selectAll, selectedRowKeys } = this.state;
    let selectedRows = dataSource.filter(v => selectedRowKeys.includes(v.key));

    if (selectAll && dataSource.length > selectedRows.length) {
      selectedRows = dataSource;
    }
    if (selectedRowKeys.length !== selectedRows.length)
      this.onChange(selectedRows.map(row => row.key), selectedRows);
  }
  onChange = (selectedRowKeys, selectedRows) => {
    let {
      dataSource,
      actionBar,
      rowSelection: { onChange }
    } = this.props;
    this.setState(() => ({
      showActionBar: actionBar && selectedRowKeys.length > 0,
      showMultiSelect: selectedRowKeys.length > 0,
      selectedRowKeys: selectedRowKeys,
      selectAll: dataSource.length === selectedRowKeys.length
    }));
    onChange && onChange(selectedRowKeys, selectedRows);
  };

  getLoader = () => {
    let { infiniteScroll } = this.props;
    const loaderProps = infiniteScroll
      ? {
          ...DEFAULT_LOADER_PROPS,
          size: 'sizeXSmall',
          type: 'Small',
          style: {
            padding: '12px 0px'
          }
        }
      : DEFAULT_LOADER_PROPS;
    return <Loader {...loaderProps} />;
  };

  render() {
    let { rowSelection, actionBar, children, loading } = this.props;
    let { showActionBar, showMultiSelect, selectedRowKeys } = this.state;

    /**
     * Check if rowSelection props is been passed, If yes override the onChange property of it.
     * Also if onChange prop is passed and the rowSelection is not available, create a new rowSelection object with onChange method.
     */
    const updatedRowSelection = rowSelection
      ? {
          ...rowSelection,
          onChange: this.onChange,
          selectedRowKeys
        }
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
      <MtTable
        innerRef={ele => (this.tableRef = ele)}
        showMultiSelect={showMultiSelect}
        {...this.styleProps}
      >
        <AntTable {...antProps}>{children}</AntTable>
        {loading && this.getLoader()}
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
