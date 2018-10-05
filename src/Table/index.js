import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntTable from 'antd/lib/table';
import 'antd/lib/table/style/index.css';
import 'antd/lib/checkbox/style/index.css';
import ActionBar from '../ActionBar';
import Loader from '../Loader';
import MtTable, { DEFAULT_LOADER_PROPS } from './style';

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
    dataSource: PropTypes.array,
    selectedRowKeys: PropTypes.array
  };
  static defaultProps = {
    infiniteScroll: false,
    threshold: 0.9,
    windowScroll: false,
    size: 'default'
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

  onChange = (selectedRowKeys, selectedRows) => {
    let { dataSource, actionBar, rowSelection: { onChange } = {} } = this.props;
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
            padding: '12px 0px',
            backgroundColor: '#ffffff',
            position: 'absolute',
            width: '100%',
            bottom: '0'
          }
        }
      : DEFAULT_LOADER_PROPS;
    return <Loader {...loaderProps} />;
  };
  componentDidUpdate() {
    const { selectAll, selectedRowKeys } = this.state;
    const { dataSource } = this.props;
    if (selectAll && selectedRowKeys.length !== dataSource.length) {
      this.onChange(dataSource.map(v => v.key), dataSource);
    }
  }
  render() {
    let {
      rowSelection,
      actionBar,
      children,
      loading,
      dataSource,
      infiniteScroll,
      selectedRowKeys: parentKeys
    } = this.props;
    let {
      showActionBar,
      showMultiSelect,
      selectAll,
      selectedRowKeys
    } = this.state;

    /**
     * Check if rowSelection props is been passed, If yes override the onChange property of it.
     * Also if onChange prop is passed and the rowSelection is not available, create a new rowSelection object with onChange method.
     */
    const newSelectedRowskey = selectAll
      ? dataSource.map(v => v.key)
      : parentKeys || selectedRowKeys;

    const updatedRowSelection = rowSelection
      ? {
          ...rowSelection,
          onChange: this.onChange,
          selectedRowKeys: newSelectedRowskey
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
        infiniteScroll={infiniteScroll}
        showActionBar={showActionBar}
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
