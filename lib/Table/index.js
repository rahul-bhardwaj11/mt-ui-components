'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Table = (function(_Component) {
  (0, _inherits3.default)(Table, _Component);

  function Table() {
    var _ref,
      _this2 = this;

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
        selectedRowKeys: [],
        loading: _this.props.loading,
        loadingMore: false
      }),
      (_this.scrollElement = null),
      (_this.styleProps = {
        contentCellPadding: _this.props.contentCellPadding,
        headerCellPadding: _this.props.headerCellPadding
      }),
      (_this.tableRef = null),
      (_this.fetch = (0, _asyncToGenerator3.default)(
        /*#__PURE__*/ _regenerator2.default.mark(function _callee() {
          var fetchData, loading;
          return _regenerator2.default.wrap(
            function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    fetchData = _this.props.fetchData;
                    loading = _this.state.loading;

                    if (!loading) {
                      _context.next = 4;
                      break;
                    }

                    return _context.abrupt('return');

                  case 4:
                    _this.setState({ loadingMore: true });

                    if (!(typeof fetchData.then === 'function')) {
                      _context.next = 11;
                      break;
                    }

                    _context.next = 8;
                    return fetchData();

                  case 8:
                    _this.setState({ loadingMore: false });
                    _context.next = 12;
                    break;

                  case 11:
                    if (fetchData) {
                      fetchData();
                    }

                  case 12:
                  case 'end':
                    return _context.stop();
                }
              }
            },
            _callee,
            _this2
          );
        })
      )),
      (_this.onScroll = function() {
        var _this$props = _this.props,
          hasMore = _this$props.hasMore,
          threshold = _this$props.threshold,
          infiniteScroll = _this$props.infiniteScroll,
          windowScroll = _this$props.windowScroll,
          scroll = _this$props.scroll;

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
        var _this$props2 = _this.props,
          dataSource = _this$props2.dataSource,
          actionBar = _this$props2.actionBar,
          _this$props2$rowSelec = _this$props2.rowSelection;
        _this$props2$rowSelec =
          _this$props2$rowSelec === undefined ? {} : _this$props2$rowSelec;
        var onChange = _this$props2$rowSelec.onChange;

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
        var loadingMore = _this.state.loadingMore;

        var loaderProps = loadingMore
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
      (_this.getAntTableProps = function() {
        var _this$props3 = _this.props,
          rowSelection = _this$props3.rowSelection,
          dataSource = _this$props3.dataSource,
          parentKeys = _this$props3.selectedRowKeys,
          isMultiSelect = _this$props3.isMultiSelect;
        var _this$state = _this.state,
          selectAll = _this$state.selectAll,
          selectedRowKeys = _this$state.selectedRowKeys;

        var newSelectedRowskey = selectAll
          ? dataSource.map(function(v) {
              return v.key;
            })
          : parentKeys || selectedRowKeys;

        var updatedRowSelection = rowSelection
          ? (0, _extends3.default)({}, rowSelection, {
              onChange: _this.onChange,
              selectedRowKeys: newSelectedRowskey
            })
          : null;

        var antProps =
          updatedRowSelection && isMultiSelect
            ? (0, _extends3.default)({}, _this.props, {
                rowSelection: updatedRowSelection
              })
            : (0, _extends3.default)({}, _this.props, {
                rowSelection: null,
                onRow: function onRow(record) {
                  return {
                    onClick: function onClick() {
                      return _this.onChange([record.key], [record]);
                    },
                    className: newSelectedRowskey.some(function(v) {
                      return v === record.key;
                    })
                      ? (0, _classnames2.default)(
                          'ant-table-row-selected',
                          _this.props.selectRowClassName
                        )
                      : ''
                  };
                }
              });

        return {
          antTableProps: antProps,
          newSelectedRowskey: newSelectedRowskey
        };
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
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.loading !== this.state.loading) {
          this.setState(function(state) {
            return {
              loading: nextProps.loading,
              loadingMore: !nextProps.loading ? false : state.loadingMore
            };
          });
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
        var _this3 = this;

        var _props2 = this.props,
          actionBar = _props2.actionBar,
          children = _props2.children,
          infiniteScroll = _props2.infiniteScroll;
        var _state2 = this.state,
          showActionBar = _state2.showActionBar,
          loading = _state2.loading;

        var _getAntTableProps = this.getAntTableProps(),
          antTableProps = _getAntTableProps.antTableProps,
          newSelectedRowskey = _getAntTableProps.newSelectedRowskey;

        return _react2.default.createElement(
          _style2.default,
          (0, _extends3.default)(
            {
              innerRef: function innerRef(ele) {
                return (_this3.tableRef = ele);
              },
              showMultiSelect: newSelectedRowskey.length > 0
            },
            this.styleProps,
            {
              infiniteScroll: infiniteScroll,
              showActionBar: showActionBar
            }
          ),
          _react2.default.createElement(
            _table2.default,
            antTableProps,
            children
          ),
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
  scroll: _propTypes2.default.object,
  dataSource: _propTypes2.default.array,
  selectedRowKeys: _propTypes2.default.array,
  isMultiSelect: _propTypes2.default.bool,
  selectRowClassName: _propTypes2.default.string,
  loading: _propTypes2.default.bool
};
Table.defaultProps = {
  infiniteScroll: false,
  threshold: 0.9,
  windowScroll: false,
  size: 'default',
  isMultiSelect: false
};

Table.Column = _table2.default.Column;
exports.default = Table;
