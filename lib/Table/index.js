'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _table = require('antd/lib/table');

var _table2 = _interopRequireDefault(_table);

require('antd/lib/table/style/index.css');

require('antd/lib/checkbox/style/index.css');

var _ActionBar = require('../ActionBar');

var _ActionBar2 = _interopRequireDefault(_ActionBar);

var _Loader = require('../Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Table = (function(_Component) {
  (0, _inherits3.default)(Table, _Component);

  function Table() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Table);

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret = ((_temp = ((_this = (0, _possibleConstructorReturn3.default)(
        this,
        (_ref =
          Table.__proto__ || (0, _getPrototypeOf2.default)(Table)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.state = {
        showActionBar: false,
        selectAll: false,
        selectedRowKeys: []
      }),
      (_this.scrollElement = null),
      (_this.styleProps = {
        contentCellPadding: _this.props.contentCellPadding,
        headerCellPadding: _this.props.headerCellPadding
      }),
      (_this.tableRef = null),
      (_this.fetch = function() {
        var _this$props = _this.props,
          loading = _this$props.loading,
          fetchData = _this$props.fetchData;

        if (!loading && fetchData) {
          fetchData();
        }
      }),
      (_this.onScroll = function() {
        var _this$props2 = _this.props,
          hasMore = _this$props2.hasMore,
          threshold = _this$props2.threshold,
          infiniteScroll = _this$props2.infiniteScroll,
          windowScroll = _this$props2.windowScroll,
          scroll = _this$props2.scroll;

        var body = document.body,
          html = document.documentElement;
        var height = windowScroll
          ? Math.max(
              body.scrollHeight,
              body.offsetHeight,
              html.clientHeight,
              html.scrollHeight,
              html.offsetHeight
            )
          : Math.max(
              _this.scrollElement.scrollHeight,
              _this.scrollElement.clientHeight
            );

        var innerHeight = windowScroll
          ? window.innerHeight + window.scrollY
          : scroll.y + _this.scrollElement.scrollTop;

        if (innerHeight >= height * threshold) {
          if (infiniteScroll && hasMore) {
            _this.fetch();
          } else {
            window.removeEventListener('scroll', _this.onScroll, false);
          }
        }
      }),
      (_this.onChange = function(selectedRowKeys, selectedRows) {
        var _this$props3 = _this.props,
          dataSource = _this$props3.dataSource,
          actionBar = _this$props3.actionBar,
          _this$props3$rowSelec = _this$props3.rowSelection;
        _this$props3$rowSelec =
          _this$props3$rowSelec === undefined ? {} : _this$props3$rowSelec;
        var onChange = _this$props3$rowSelec.onChange;

        _this.setState(function() {
          return {
            showActionBar: actionBar && selectedRowKeys.length > 0,
            selectedRowKeys: selectedRowKeys,
            selectAll: dataSource.length === selectedRowKeys.length
          };
        });
        onChange && onChange(selectedRowKeys, selectedRows);
      }),
      (_this.getLoader = function() {
        var infiniteScroll = _this.props.infiniteScroll;

        var loaderProps = infiniteScroll
          ? (0, _extends3.default)({}, _style.DEFAULT_LOADER_PROPS, {
              size: 'sizeXSmall',
              type: 'Small',
              style: {
                padding: '12px 0px',
                backgroundColor: '#ffffff',
                position: 'absolute',
                width: '100%',
                bottom: '0'
              }
            })
          : _style.DEFAULT_LOADER_PROPS;
        return _react2.default.createElement(_Loader2.default, loaderProps);
      }),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    );
  }

  (0, _createClass3.default)(Table, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _props = this.props,
          infiniteScroll = _props.infiniteScroll,
          windowScroll = _props.windowScroll;

        if (infiniteScroll && this.tableRef) {
          this.scrollElement = windowScroll
            ? window
            : this.tableRef.getElementsByClassName('ant-table-body')[0];
          if (this.scrollElement) {
            this.scrollElement.addEventListener('scroll', this.onScroll, false);
          }
        }
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        var infiniteScroll = this.props.infiniteScroll;

        if (infiniteScroll && this.scrollElement) {
          this.scrollElement.removeEventListener(
            'scroll',
            this.onScroll,
            false
          );
        }
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        var _state = this.state,
          selectAll = _state.selectAll,
          selectedRowKeys = _state.selectedRowKeys;
        var dataSource = this.props.dataSource;

        if (selectAll && selectedRowKeys.length !== dataSource.length) {
          this.onChange(
            dataSource.map(function(v) {
              return v.key;
            }),
            dataSource
          );
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props2 = this.props,
          rowSelection = _props2.rowSelection,
          actionBar = _props2.actionBar,
          children = _props2.children,
          loading = _props2.loading,
          dataSource = _props2.dataSource,
          infiniteScroll = _props2.infiniteScroll,
          parentKeys = _props2.selectedRowKeys,
          isMultiSelect = _props2.isMultiSelect;
        var _state2 = this.state,
          showActionBar = _state2.showActionBar,
          selectAll = _state2.selectAll,
          selectedRowKeys = _state2.selectedRowKeys;

        /**
         * Check if rowSelection props is been passed, If yes override the onChange property of it.
         * Also if onChange prop is passed and the rowSelection is not available, create a new rowSelection object with onChange method.
         */

        var newSelectedRowskey = selectAll
          ? dataSource.map(function(v) {
              return v.key;
            })
          : parentKeys || selectedRowKeys;

        var updatedRowSelection = rowSelection
          ? (0, _extends3.default)({}, rowSelection, {
              onChange: this.onChange,
              selectedRowKeys: newSelectedRowskey
            })
          : null;

        var antProps =
          updatedRowSelection && isMultiSelect
            ? (0, _extends3.default)({}, this.props, {
                rowSelection: updatedRowSelection
              })
            : (0, _extends3.default)({}, this.props, {
                rowSelection: null,
                onRow: function onRow(record) {
                  return {
                    onClick: function onClick() {
                      return _this2.onChange([record.key], [record]);
                    },
                    className: newSelectedRowskey.some(function(v) {
                      return v === record.key;
                    })
                      ? 'ant-table-row-selected'
                      : ''
                  };
                }
              });
        return _react2.default.createElement(
          _style2.default,
          (0, _extends3.default)(
            {
              innerRef: function innerRef(ele) {
                return (_this2.tableRef = ele);
              },
              showMultiSelect: newSelectedRowskey.length > 0
            },
            this.styleProps,
            {
              infiniteScroll: infiniteScroll,
              showActionBar: showActionBar
            }
          ),
          _react2.default.createElement(_table2.default, antProps, children),
          loading && this.getLoader(),
          showActionBar &&
            _react2.default.createElement(
              _ActionBar2.default,
              actionBar,
              actionBar ? actionBar.actionItem : false
            )
        );
      }
    }
  ]);
  return Table;
})(_react.Component);

Table.propTypes = {
  children: _propTypes2.default.node,
  actionBar: _propTypes2.default.shape({
    countText: _propTypes2.default.string.isRequired,
    actionItem: _propTypes2.default.arrayOf(_propTypes2.default.node)
  }),
  onChange: _propTypes2.default.func,
  rowSelection: _propTypes2.default.object,
  columns: _propTypes2.default.array,
  size: _propTypes2.default.string,
  headerCellPadding: _propTypes2.default.shape({
    pTop: _propTypes2.default.string,
    pRight: _propTypes2.default.string,
    pBottom: _propTypes2.default.string,
    pLeft: _propTypes2.default.string
  }),
  contentCellPadding: _propTypes2.default.shape({
    pTop: _propTypes2.default.string,
    pRight: _propTypes2.default.string,
    pBottom: _propTypes2.default.string,
    pLeft: _propTypes2.default.string
  }),
  fetchData: _propTypes2.default.func,
  infiniteScroll: _propTypes2.default.bool,
  threshold: _propTypes2.default.number,
  windowScroll: _propTypes2.default.bool,
  hasMore: _propTypes2.default.bool,
  loading: _propTypes2.default.bool,
  scroll: _propTypes2.default.object,
  dataSource: _propTypes2.default.array,
  selectedRowKeys: _propTypes2.default.array,
  isMultiSelect: _propTypes2.default.bool
};
Table.defaultProps = {
  infiniteScroll: false,
  threshold: 0.9,
  windowScroll: false,
  size: 'default',
  isMultiSelect: true
};

Table.Column = _table2.default.Column;
exports.default = Table;
