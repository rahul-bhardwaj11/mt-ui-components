'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends5 = require('babel-runtime/helpers/extends');

var _extends6 = _interopRequireDefault(_extends5);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

require('./index.scss');

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialCache = {
  options: [],
  hasMore: true,
  isLoading: false
};
//import Icon from "../Icon";

var SelectWithSyncSearch = function (_Component) {
  (0, _inherits3.default)(SelectWithSyncSearch, _Component);

  function SelectWithSyncSearch() {
    (0, _classCallCheck3.default)(this, SelectWithSyncSearch);
    return (0, _possibleConstructorReturn3.default)(this, (SelectWithSyncSearch.__proto__ || (0, _getPrototypeOf2.default)(SelectWithSyncSearch)).apply(this, arguments));
  }

  (0, _createClass3.default)(SelectWithSyncSearch, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactSelect2.default, this.props);
    }
  }]);
  return SelectWithSyncSearch;
}(_react.Component);

SelectWithSyncSearch.propTypes = {
  options: _propTypes2.default.arrayOf(_propTypes2.default.object)
};

var SelectWithAsyncSearch = function (_Component2) {
  (0, _inherits3.default)(SelectWithAsyncSearch, _Component2);

  function SelectWithAsyncSearch(props) {
    var _this3 = this;

    (0, _classCallCheck3.default)(this, SelectWithAsyncSearch);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (SelectWithAsyncSearch.__proto__ || (0, _getPrototypeOf2.default)(SelectWithAsyncSearch)).call(this, props));

    _this2.onMenuClose = function () {
      _this2.setState({
        search: '',
        menuIsOpen: false
      });
    };

    _this2.onMenuOpen = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var optionsCache;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this2.setState({
                menuIsOpen: true
              });

            case 2:
              optionsCache = _this2.state.optionsCache;

              if (optionsCache['']) {
                _context.next = 6;
                break;
              }

              _context.next = 6;
              return _this2.loadOptions();

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this3);
    }));

    _this2.onInputChange = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(search) {
        var optionsCache;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.setState({
                  search: search
                });

              case 2:
                optionsCache = _this2.state.optionsCache;

                if (optionsCache[search]) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 6;
                return _this2.loadOptions();

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this2.onMenuScrollToBottom = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var _this2$state, search, optionsCache, currentOptions;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this2$state = _this2.state, search = _this2$state.search, optionsCache = _this2$state.optionsCache;
              currentOptions = optionsCache[search];

              if (!currentOptions) {
                _context3.next = 5;
                break;
              }

              _context3.next = 5;
              return _this2.loadOptions();

            case 5:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3);
    }));

    _this2.__loadOptions = function (search, prevOptions) {
      var _this2$props = _this2.props,
          promiseOption = _this2$props.promiseOption,
          pageSize = _this2$props.pageSize;

      return new _promise2.default(function (resolve) {
        var offset = prevOptions.length;
        promiseOption({ search: search, offset: offset, pageSize: pageSize }).then(function (options) {

          resolve({ options: options, hasMore: options.length === pageSize });
        }, {});
      });
    };

    var initialOptionsCache = props.options ? {
      '': {
        isLoading: false,
        options: props.options,
        hasMore: true
      }
    } : {};

    _this2.state = {
      search: '',
      optionsCache: initialOptionsCache,
      menuIsOpen: false
    };
    return _this2;
  }

  (0, _createClass3.default)(SelectWithAsyncSearch, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(oldProps) {
      var cacheUniq = this.props.cacheUniq;


      if (oldProps.cacheUniq !== cacheUniq) {
        this.setState({
          optionsCache: {}
        });
      }
    }
  }, {
    key: 'loadOptions',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
        var _state, search, optionsCache, currentOptions, _loadOptions, _ref5, options, hasMore;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _state = this.state, search = _state.search, optionsCache = _state.optionsCache;
                currentOptions = optionsCache[search] || initialCache;

                if (!(currentOptions.isLoading || !currentOptions.hasMore)) {
                  _context4.next = 4;
                  break;
                }

                return _context4.abrupt('return');

              case 4:
                _context4.next = 6;
                return this.setState(function (prevState) {
                  return {
                    search: search,
                    optionsCache: (0, _extends6.default)({}, prevState.optionsCache, (0, _defineProperty3.default)({}, search, (0, _extends6.default)({}, currentOptions, {
                      isLoading: true
                    })))
                  };
                });

              case 6:
                _context4.prev = 6;
                _loadOptions = this.__loadOptions;
                _context4.next = 10;
                return _loadOptions(search, currentOptions.options);

              case 10:
                _ref5 = _context4.sent;
                options = _ref5.options;
                hasMore = _ref5.hasMore;
                _context4.next = 15;
                return this.setState(function (prevState) {
                  return {
                    optionsCache: (0, _extends6.default)({}, prevState.optionsCache, (0, _defineProperty3.default)({}, search, (0, _extends6.default)({}, currentOptions, {
                      options: currentOptions.options.concat(options),
                      hasMore: !!hasMore,
                      isLoading: false
                    })))
                  };
                });

              case 15:
                _context4.next = 21;
                break;

              case 17:
                _context4.prev = 17;
                _context4.t0 = _context4['catch'](6);
                _context4.next = 21;
                return this.setState(function (prevState) {
                  return {
                    optionsCache: (0, _extends6.default)({}, prevState.optionsCache, (0, _defineProperty3.default)({}, search, (0, _extends6.default)({}, currentOptions, {
                      isLoading: false
                    })))
                  };
                });

              case 21:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[6, 17]]);
      }));

      function loadOptions() {
        return _ref4.apply(this, arguments);
      }

      return loadOptions;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _state2 = this.state,
          search = _state2.search,
          optionsCache = _state2.optionsCache,
          menuIsOpen = _state2.menuIsOpen;


      var currentOptions = optionsCache[search] || initialCache;

      return _react2.default.createElement(_reactSelect.SelectBase, (0, _extends6.default)({}, this.props, {
        arrowRenderer: function arrowRenderer() {
          return null;
        },
        classNamePrefix: 'react-select-container',
        inputValue: search,
        menuIsOpen: menuIsOpen,
        onMenuClose: this.onMenuClose,
        onMenuOpen: this.onMenuOpen,
        onInputChange: this.onInputChange,
        onMenuScrollToBottom: this.onMenuScrollToBottom,
        isLoading: currentOptions.isLoading,
        options: currentOptions.options
      }));
    }
  }]);
  return SelectWithAsyncSearch;
}(_react.Component);

SelectWithAsyncSearch.propTypes = {
  promiseOption: _propTypes2.default.func,
  cacheUniq: _propTypes2.default.any,
  options: _propTypes2.default.arrayOf(_propTypes2.default.object),
  pageSize: _propTypes2.default.number
};
SelectWithAsyncSearch.defaultProps = {
  cacheUniq: null,
  options: null,
  pageSize: 10
};

var SelectWithSearch = function (_Component3) {
  (0, _inherits3.default)(SelectWithSearch, _Component3);

  function SelectWithSearch(props) {
    (0, _classCallCheck3.default)(this, SelectWithSearch);

    var _this4 = (0, _possibleConstructorReturn3.default)(this, (SelectWithSearch.__proto__ || (0, _getPrototypeOf2.default)(SelectWithSearch)).call(this, props));

    _this4.handleChange = function (selectedOption) {
      _this4.setState({ selectedOption: selectedOption, showSelect: false });
      _this4.props.onSelect(selectedOption.value);
    };

    _this4.state = {
      showSelect: false,
      selectedOption: props.selectedOption
    };
    return _this4;
  }

  (0, _createClass3.default)(SelectWithSearch, [{
    key: 'render',
    value: function render() {
      var _this5 = this;

      var _props = this.props,
          async = _props.async,
          style = _props.style;

      var SelectComponent = void 0;
      if (async) {
        SelectComponent = SelectWithAsyncSearch;
      } else {
        SelectComponent = SelectWithSyncSearch;
      }
      var _state3 = this.state,
          showSelect = _state3.showSelect,
          selectedOption = _state3.selectedOption;
      var width = style.width;

      return _react2.default.createElement(
        'div',
        { style: style },
        _react2.default.createElement(
          _Button2.default,
          {
            type: 'default',
            style: { width: width },
            onClick: function onClick() {
              _this5.setState({
                showSelect: !showSelect
              });
            }
          },
          selectedOption.label,
          _react2.default.createElement(_antd.Icon, { type: 'down' })
        ),
        showSelect && _react2.default.createElement(SelectComponent, (0, _extends6.default)({}, this.props, { onChange: this.handleChange }))
      );
    }
  }]);
  return SelectWithSearch;
}(_react.Component);

SelectWithSearch.propTypes = {
  promiseOption: _propTypes2.default.func,
  async: _propTypes2.default.bool,
  cacheUniq: _propTypes2.default.any,
  selectedOption: _propTypes2.default.object,
  options: _propTypes2.default.arrayOf(_propTypes2.default.object),
  placeholder: _propTypes2.default.string,
  pageSize: _propTypes2.default.number,
  style: _propTypes2.default.object,
  onSelect: _propTypes2.default.func
};
SelectWithSearch.defaultProps = {
  style: { width: 200 }
};
exports.default = SelectWithSearch;
//# sourceMappingURL=index.js.map