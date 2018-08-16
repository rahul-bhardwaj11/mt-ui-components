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

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  .mt-react-select__single-value {\n    padding-left: 30px;\n  }\n  .mt-react-select__value-container::before {\n    content: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5zZWFyY2g8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM+PC9kZWZzPiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJEZXNrdG9wLUhEIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzg1LjAwMDAwMCwgLTg0LjAwMDAwMCkiIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyI+ICAgICAgICAgICAgPHBhdGggZD0iTTM5Ny4yMDY2NzIsOTQuOTcyNDQ5MyBMNDAwLjc0NDM4NCw5OC41MTAxNjE0IEM0MDEuMDg1MjA1LDk4Ljg1MDk4MjYgNDAxLjA4NTIwNSw5OS40MDM1NjI5IDQwMC43NDQzODQsOTkuNzQ0Mzg0MSBDNDAwLjQwMzU2MywxMDAuMDg1MjA1IDM5OS44NTA5ODMsMTAwLjA4NTIwNSAzOTkuNTEwMTYxLDk5Ljc0NDM4NDEgTDM5NS45NzI0NDksOTYuMjA2NjcyIEMzOTQuODIxNjczLDk3LjA5NTQ2OTcgMzkzLjM3ODY0OCw5Ny42MjQyNDI0IDM5MS44MTIxMjEsOTcuNjI0MjQyNCBDMzg4LjA0OTg5MSw5Ny42MjQyNDI0IDM4NSw5NC41NzQzNTE5IDM4NSw5MC44MTIxMjEyIEMzODUsODcuMDQ5ODkwNiAzODguMDQ5ODkxLDg0IDM5MS44MTIxMjEsODQgQzM5NS41NzQzNTIsODQgMzk4LjYyNDI0Miw4Ny4wNDk4OTA2IDM5OC42MjQyNDIsOTAuODEyMTIxMiBDMzk4LjYyNDI0Miw5Mi4zNzg2NDggMzk4LjA5NTQ3LDkzLjgyMTY3MzMgMzk3LjIwNjY3Miw5NC45NzI0NDkzIFogTTM5MS44MTIxMjEsOTUuODc4Nzg3OSBDMzk0LjYxMDM2NCw5NS44Nzg3ODc5IDM5Ni44Nzg3ODgsOTMuNjEwMzYzOSAzOTYuODc4Nzg4LDkwLjgxMjEyMTIgQzM5Ni44Nzg3ODgsODguMDEzODc4NSAzOTQuNjEwMzY0LDg1Ljc0NTQ1NDUgMzkxLjgxMjEyMSw4NS43NDU0NTQ1IEMzODkuMDEzODc4LDg1Ljc0NTQ1NDUgMzg2Ljc0NTQ1NSw4OC4wMTM4Nzg1IDM4Ni43NDU0NTUsOTAuODEyMTIxMiBDMzg2Ljc0NTQ1NSw5My42MTAzNjM5IDM4OS4wMTM4NzgsOTUuODc4Nzg3OSAzOTEuODEyMTIxLDk1Ljg3ODc4NzkgWiIgaWQ9InNlYXJjaCI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);\n    //content: url(\'./assets/search.svg\')\n    padding-left: 5px;\n    padding-top: 5px;\n    position: absolute;\n    opacity: 0.6;\n  }\n  .mt-react-select__menu-list {\n    padding: 8px;\n  }\n  .mt-react-select__control {\n    border: 1px solid ', ';\n    width: ', ';\n  }\n  .mt-react-select__control--is-focused {\n    box-shadow: none;\n    border: 1px solid ', ';\n  }\n  .mt-react-select__control--is-focused:hover {\n    border: 1px solid ', ';\n  }\n  .mt-react-select__option {\n    border-radius: 4px;\n    padding: 6px 20px 8px 16px;\n    color: #989ca6;\n    height: 32px;\n  }\n  // .mt-react-select__option:hover{\n  //   background-color: ', ';\n  //   color: #ffffff;\n  //   cursor: pointer;\n  // }\n  .mt-react-select__option--is-selected {\n    background-color: #ffffff;\n    color: ', ';\n  }\n  .mt-react-select__option--is-focused {\n    background-color:  ', ';\n    color: #ffffff;\n    cursor: pointer;\n  }\n  .mt-react-select__input {\n    padding-left: 30px;\n  }\n  .mt-react-select__placeholder {\n    padding-left: 30px;\n  }\n  .mt-react-select__indicators {\n    display: none;\n  }\n'], ['\n  .mt-react-select__single-value {\n    padding-left: 30px;\n  }\n  .mt-react-select__value-container::before {\n    content: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5zZWFyY2g8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM+PC9kZWZzPiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJEZXNrdG9wLUhEIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzg1LjAwMDAwMCwgLTg0LjAwMDAwMCkiIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyI+ICAgICAgICAgICAgPHBhdGggZD0iTTM5Ny4yMDY2NzIsOTQuOTcyNDQ5MyBMNDAwLjc0NDM4NCw5OC41MTAxNjE0IEM0MDEuMDg1MjA1LDk4Ljg1MDk4MjYgNDAxLjA4NTIwNSw5OS40MDM1NjI5IDQwMC43NDQzODQsOTkuNzQ0Mzg0MSBDNDAwLjQwMzU2MywxMDAuMDg1MjA1IDM5OS44NTA5ODMsMTAwLjA4NTIwNSAzOTkuNTEwMTYxLDk5Ljc0NDM4NDEgTDM5NS45NzI0NDksOTYuMjA2NjcyIEMzOTQuODIxNjczLDk3LjA5NTQ2OTcgMzkzLjM3ODY0OCw5Ny42MjQyNDI0IDM5MS44MTIxMjEsOTcuNjI0MjQyNCBDMzg4LjA0OTg5MSw5Ny42MjQyNDI0IDM4NSw5NC41NzQzNTE5IDM4NSw5MC44MTIxMjEyIEMzODUsODcuMDQ5ODkwNiAzODguMDQ5ODkxLDg0IDM5MS44MTIxMjEsODQgQzM5NS41NzQzNTIsODQgMzk4LjYyNDI0Miw4Ny4wNDk4OTA2IDM5OC42MjQyNDIsOTAuODEyMTIxMiBDMzk4LjYyNDI0Miw5Mi4zNzg2NDggMzk4LjA5NTQ3LDkzLjgyMTY3MzMgMzk3LjIwNjY3Miw5NC45NzI0NDkzIFogTTM5MS44MTIxMjEsOTUuODc4Nzg3OSBDMzk0LjYxMDM2NCw5NS44Nzg3ODc5IDM5Ni44Nzg3ODgsOTMuNjEwMzYzOSAzOTYuODc4Nzg4LDkwLjgxMjEyMTIgQzM5Ni44Nzg3ODgsODguMDEzODc4NSAzOTQuNjEwMzY0LDg1Ljc0NTQ1NDUgMzkxLjgxMjEyMSw4NS43NDU0NTQ1IEMzODkuMDEzODc4LDg1Ljc0NTQ1NDUgMzg2Ljc0NTQ1NSw4OC4wMTM4Nzg1IDM4Ni43NDU0NTUsOTAuODEyMTIxMiBDMzg2Ljc0NTQ1NSw5My42MTAzNjM5IDM4OS4wMTM4NzgsOTUuODc4Nzg3OSAzOTEuODEyMTIxLDk1Ljg3ODc4NzkgWiIgaWQ9InNlYXJjaCI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);\n    //content: url(\'./assets/search.svg\')\n    padding-left: 5px;\n    padding-top: 5px;\n    position: absolute;\n    opacity: 0.6;\n  }\n  .mt-react-select__menu-list {\n    padding: 8px;\n  }\n  .mt-react-select__control {\n    border: 1px solid ', ';\n    width: ', ';\n  }\n  .mt-react-select__control--is-focused {\n    box-shadow: none;\n    border: 1px solid ', ';\n  }\n  .mt-react-select__control--is-focused:hover {\n    border: 1px solid ', ';\n  }\n  .mt-react-select__option {\n    border-radius: 4px;\n    padding: 6px 20px 8px 16px;\n    color: #989ca6;\n    height: 32px;\n  }\n  // .mt-react-select__option:hover{\n  //   background-color: ', ';\n  //   color: #ffffff;\n  //   cursor: pointer;\n  // }\n  .mt-react-select__option--is-selected {\n    background-color: #ffffff;\n    color: ', ';\n  }\n  .mt-react-select__option--is-focused {\n    background-color:  ', ';\n    color: #ffffff;\n    cursor: pointer;\n  }\n  .mt-react-select__input {\n    padding-left: 30px;\n  }\n  .mt-react-select__placeholder {\n    padding-left: 30px;\n  }\n  .mt-react-select__indicators {\n    display: none;\n  }\n']);
//import Button from '../Button';

//import AsyncSelect from "react-select/lib/Async";
//import { Icon } from 'antd';


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectBox = _styledComponents2.default.div(_templateObject, _theme2.default.colors.ALTO, function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 'auto' : _ref$width;
  return width;
}, _theme2.default.colors.SILVER, _theme2.default.colors.SILVER, _theme2.default.colors.LIGHT_BLUE, _theme2.default.colors.OUTER_SPACE, _theme2.default.colors.LIGHT_BLUE);

var initialCache = {
  options: [],
  hasMore: true,
  isLoading: false
};

var AsyncSelect = function (_Component) {
  (0, _inherits3.default)(AsyncSelect, _Component);

  function AsyncSelect(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, AsyncSelect);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AsyncSelect.__proto__ || (0, _getPrototypeOf2.default)(AsyncSelect)).call(this, props));

    _this.onInputChange = function (search) {
      _this.setState({
        search: search
      });

      var optionsCache = _this.state.optionsCache;


      if (!optionsCache[search]) {
        _this.loadOptions();
      }
    };

    _this.onMenuScrollToBottom = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var _this$state, search, optionsCache, currentOptions;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$state = _this.state, search = _this$state.search, optionsCache = _this$state.optionsCache;
              currentOptions = optionsCache[search];

              if (!currentOptions) {
                _context.next = 5;
                break;
              }

              _context.next = 5;
              return _this.loadOptions();

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }));

    _this.__loadOptions = function (search, prevOptions) {
      var _this$props = _this.props,
          promiseOption = _this$props.promiseOption,
          pageSize = _this$props.pageSize;

      return new _promise2.default(function (resolve) {
        var offset = prevOptions.length;
        promiseOption({ search: search, offset: offset, pageSize: pageSize }).then(function (options) {
          resolve({ options: options, hasMore: options.length === pageSize });
        }, {});
      });
    };

    _this.onMenuOpen = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var optionsCache;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              optionsCache = _this.state.optionsCache;

              if (optionsCache['']) {
                _context2.next = 4;
                break;
              }

              _context2.next = 4;
              return _this.loadOptions();

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }));

    var initialOptionsCache = props.options ? {
      '': {
        isLoading: false,
        options: props.options || [],
        hasMore: true
      }
    } : {};
    _this.state = {
      search: '',
      optionsCache: initialOptionsCache
    };
    return _this;
  }

  (0, _createClass3.default)(AsyncSelect, [{
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
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var _state, search, optionsCache, currentOptions, _loadOptions, _ref5, options, hasMore;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _state = this.state, search = _state.search, optionsCache = _state.optionsCache;
                currentOptions = optionsCache[search] || initialCache;

                if (!(currentOptions.isLoading || !currentOptions.hasMore)) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt('return');

              case 4:
                _context3.next = 6;
                return this.setState(function (prevState) {
                  return {
                    search: search,
                    optionsCache: (0, _extends6.default)({}, prevState.optionsCache, (0, _defineProperty3.default)({}, search, (0, _extends6.default)({}, currentOptions, {
                      isLoading: true
                    })))
                  };
                });

              case 6:
                _context3.prev = 6;
                _loadOptions = this.__loadOptions;
                _context3.next = 10;
                return _loadOptions(search, currentOptions.options);

              case 10:
                _ref5 = _context3.sent;
                options = _ref5.options;
                hasMore = _ref5.hasMore;
                _context3.next = 15;
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
                _context3.next = 21;
                break;

              case 17:
                _context3.prev = 17;
                _context3.t0 = _context3['catch'](6);
                _context3.next = 21;
                return this.setState(function (prevState) {
                  return {
                    optionsCache: (0, _extends6.default)({}, prevState.optionsCache, (0, _defineProperty3.default)({}, search, (0, _extends6.default)({}, currentOptions, {
                      isLoading: false
                    })))
                  };
                });

              case 21:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[6, 17]]);
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
          optionsCache = _state2.optionsCache;

      var currentOptions = optionsCache[search] || initialCache;
      return _react2.default.createElement(_reactSelect2.default, (0, _extends6.default)({}, this.props, {
        classNamePrefix: 'mt-react-select',
        onInputChange: this.onInputChange,
        isLoading: currentOptions.isLoading,
        options: currentOptions.options,
        onMenuOpen: this.onMenuOpen,
        autoload: false,
        onMenuScrollToBottom: this.onMenuScrollToBottom
      }));
    }
  }]);
  return AsyncSelect;
}(_react.Component);

AsyncSelect.propTypes = {
  promiseOption: _propTypes2.default.func,
  cacheUniq: _propTypes2.default.any,
  pageSize: _propTypes2.default.number,
  options: _propTypes2.default.array,
  width: _propTypes2.default.string
};
AsyncSelect.defaultProps = {
  cacheUniq: null,
  pageSize: 10
};

var SelectWithSearch = function (_Component2) {
  (0, _inherits3.default)(SelectWithSearch, _Component2);

  function SelectWithSearch() {
    (0, _classCallCheck3.default)(this, SelectWithSearch);
    return (0, _possibleConstructorReturn3.default)(this, (SelectWithSearch.__proto__ || (0, _getPrototypeOf2.default)(SelectWithSearch)).apply(this, arguments));
  }

  (0, _createClass3.default)(SelectWithSearch, [{
    key: 'render',
    value: function render() {
      var async = this.props.async;

      if (async) {
        return _react2.default.createElement(
          SelectBox,
          this.props,
          _react2.default.createElement(AsyncSelect, this.props)
        );
      }
      return _react2.default.createElement(
        SelectBox,
        this.props,
        _react2.default.createElement(_reactSelect2.default, (0, _extends6.default)({}, this.props, { classNamePrefix: 'mt-react-select' }))
      );
    }
  }]);
  return SelectWithSearch;
}(_react.Component);

SelectWithSearch.propTypes = {
  options: _propTypes2.default.arrayOf(_propTypes2.default.object),
  async: _propTypes2.default.bool,
  placeholder: _propTypes2.default.string
  // width: PropTypes.string
};
SelectWithSearch.defaultProps = {
  placeholder: 'Search'
};
exports.default = SelectWithSearch;
//# sourceMappingURL=index.js.map