import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntTable from 'antd/lib/table';
import 'antd/lib/table/style/index.css';
import 'antd/lib/checkbox/style/index.css';
import ActionBar from '../ActionBar';
import Loader from '../Loader';
import MtTable, { DEFAULT_LOADER_PROPS } from './style';
import classnames from 'classnames';

class Table extends Component {
  static propTypes = {
    children: PropTypes.node,
    emptyTableData: PropTypes.node,
    emptyTableMsg: PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string
    }),
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
    scroll: PropTypes.object,
    dataSource: PropTypes.array,
    selectedRowKeys: PropTypes.array,
    isMultiSelect: PropTypes.bool,
    selectRowClassName: PropTypes.string,
    loading: PropTypes.bool
  };
  static defaultProps = {
    infiniteScroll: false,
    threshold: 0.9,
    windowScroll: false,
    size: 'default',
    isMultiSelect: false,
    emptyTableMsg: { title: 'No Results Found.', subtitle: '' }
  };
  state = {
    showActionBar: false,
    selectAll: false,
    selectedRowKeys: [],
    loading: this.props.loading,
    loadingMore: false
  };
  scrollElement = null;
  styleProps = {
    contentCellPadding: this.props.contentCellPadding,
    headerCellPadding: this.props.headerCellPadding
  };
  tableRef = null;

  fetch = async () => {
    const { fetchData } = this.props;
    const { loading } = this.state;
    if (loading) {
      return;
    }
    this.setState({ loadingMore: true });
    if (typeof fetchData.then === 'function') {
      await fetchData();
      this.setState({ loadingMore: false });
    } else if (fetchData) {
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.loading !== this.state.loading) {
      this.setState(state => {
        return {
          loading: nextProps.loading,
          loadingMore: !nextProps.loading ? false : state.loadingMore
        };
      });
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
      selectedRowKeys: selectedRowKeys,
      selectAll: dataSource.length === selectedRowKeys.length
    }));
    onChange && onChange(selectedRowKeys, selectedRows);
  };

  getLoader = () => {
    let { loadingMore } = this.state;
    const loaderProps = loadingMore
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

  getEmptyData = () => {
    const {
      emptyTableMsg: { title, subtitle }
    } = this.props;
    return (
      <div className="emptyTableContainer">
        <div className="emptyTableTitle">{title}</div>
        {subtitle && <div className="emptyTableSubtitle">{subtitle}</div>}
      </div>
    );
  };

  getAntTableProps = () => {
    let {
      rowSelection,
      dataSource,
      selectedRowKeys: parentKeys,
      isMultiSelect,
      emptyTableData
    } = this.props;
    let { selectAll, selectedRowKeys } = this.state;
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

    const antProps =
      updatedRowSelection && isMultiSelect
        ? {
            ...this.props,
            rowSelection: updatedRowSelection
          }
        : {
            ...this.props,
            rowSelection: null,
            onRow: record => ({
              onClick: () => this.onChange([record.key], [record]),
              className: newSelectedRowskey.some(v => v === record.key)
                ? classnames(
                    'ant-table-row-selected',
                    this.props.selectRowClassName
                  )
                : ''
            })
          };

    const locale = {
      emptyText: emptyTableData ? emptyTableData : this.getEmptyData()
    };

    return {
      antTableProps: { ...antProps, locale },
      newSelectedRowskey
    };
  };

  render() {
    let { actionBar, children, infiniteScroll } = this.props;
    let { showActionBar, loading } = this.state;
    const { antTableProps, newSelectedRowskey } = this.getAntTableProps();

    return (
      <MtTable
        innerRef={ele => (this.tableRef = ele)}
        showMultiSelect={newSelectedRowskey.length > 0}
        {...this.styleProps}
        infiniteScroll={infiniteScroll}
        showActionBar={showActionBar}
      >
        <AntTable {...antTableProps}>{children}</AntTable>
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
