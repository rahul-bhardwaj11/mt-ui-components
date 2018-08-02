'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

<<<<<<< HEAD
var _Async = require('react-select/lib/Async');

var _Async2 = _interopRequireDefault(_Async);

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectWithSearch = function (_Component) {
  (0, _inherits3.default)(SelectWithSearch, _Component);
=======
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import AsyncSelect from "react-select/lib/Async";
//import { Icon } from 'antd';

var initialCache = {
  options: [],
  hasMore: true,
  isLoading: false
};
//import Button from '../Button';

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
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var _state, search, optionsCache, currentOptions, _loadOptions, _ref4, options, hasMore;

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
                _ref4 = _context3.sent;
                options = _ref4.options;
                hasMore = _ref4.hasMore;
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
        return _ref3.apply(this, arguments);
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
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactSelect2.default, (0, _extends6.default)({}, this.props, {
          onInputChange: this.onInputChange,
          isLoading: currentOptions.isLoading,
          options: currentOptions.options,
          onMenuOpen: this.onMenuOpen,
          autoload: false,
          onMenuScrollToBottom: this.onMenuScrollToBottom
        }))
      );
    }
  }]);
  return AsyncSelect;
}(_react.Component);

AsyncSelect.propTypes = {
  promiseOption: _propTypes2.default.func,
  cacheUniq: _propTypes2.default.any,
  pageSize: _propTypes2.default.number,
  options: _propTypes2.default.array
};
AsyncSelect.defaultProps = {
  cacheUniq: null,
  pageSize: 10
};

var SelectWithSearch = function (_Component2) {
  (0, _inherits3.default)(SelectWithSearch, _Component2);
>>>>>>> 8e9c71a8caaa1577aecb4d00b7d88af402f4a65e

  function SelectWithSearch() {
    (0, _classCallCheck3.default)(this, SelectWithSearch);
    return (0, _possibleConstructorReturn3.default)(this, (SelectWithSearch.__proto__ || (0, _getPrototypeOf2.default)(SelectWithSearch)).apply(this, arguments));
  }

  (0, _createClass3.default)(SelectWithSearch, [{
    key: 'render',
    value: function render() {
      var async = this.props.async;

      if (async) {
<<<<<<< HEAD
        return _react2.default.createElement(_Async2.default, this.props);
=======
        return _react2.default.createElement(AsyncSelect, this.props);
>>>>>>> 8e9c71a8caaa1577aecb4d00b7d88af402f4a65e
      }
      return _react2.default.createElement(_reactSelect2.default, this.props);
    }
  }]);
  return SelectWithSearch;
}(_react.Component);

// class SelectWithAsyncSearch extends Component {
//   static propTypes = {
//     promiseOption: PropTypes.func,
//     cacheUniq: PropTypes.any,
//     options: PropTypes.arrayOf(PropTypes.object),
//     pageSize: PropTypes.number
//   };

//   static defaultProps = {
//     cacheUniq: null,
//     options: null,
//     pageSize: 10
//   };

//   constructor(props) {
//     super(props);

//     const initialOptionsCache = props.options
//       ? {
//           '': {
//             isLoading: false,
//             options: props.options,
//             hasMore: true
//           }
//         }
//       : {};

//     this.state = {
//       search: '',
//       optionsCache: initialOptionsCache,
//       menuIsOpen: false
//     };
//   }

//   componentDidUpdate(oldProps) {
//     const { cacheUniq } = this.props;

//     if (oldProps.cacheUniq !== cacheUniq) {
//       this.setState({
//         optionsCache: {}
//       });
//     }
//   }

//   onMenuClose = () => {
//     this.setState({
//       search: '',
//       menuIsOpen: false
//     });
//   };

//   onMenuOpen = async () => {
//     await this.setState({
//       menuIsOpen: true
//     });

//     const { optionsCache } = this.state;

//     if (!optionsCache['']) {
//       await this.loadOptions();
//     }
//   };

//   onInputChange = async search => {
//     await this.setState({
//       search
//     });

//     const { optionsCache } = this.state;

//     if (!optionsCache[search]) {
//       await this.loadOptions();
//     }
//   };

//   onMenuScrollToBottom = async () => {
//     const { search, optionsCache } = this.state;

//     const currentOptions = optionsCache[search];

//     if (currentOptions) {
//       await this.loadOptions();
//     }
//   };

//   async loadOptions() {
//     const { search, optionsCache } = this.state;

//     const currentOptions = optionsCache[search] || initialCache;

//     if (currentOptions.isLoading || !currentOptions.hasMore) {
//       return;
//     }

//     await this.setState(prevState => ({
//       search,
//       optionsCache: {
//         ...prevState.optionsCache,
//         [search]: {
//           ...currentOptions,
//           isLoading: true
//         }
//       }
//     }));

//     try {
//       const loadOptions = this.__loadOptions;

//       const { options, hasMore } = await loadOptions(
//         search,
//         currentOptions.options
//       );

//       await this.setState(prevState => ({
//         optionsCache: {
//           ...prevState.optionsCache,
//           [search]: {
//             ...currentOptions,
//             options: currentOptions.options.concat(options),
//             hasMore: !!hasMore,
//             isLoading: false
//           }
//         }
//       }));
//     } catch (e) {
//       await this.setState(prevState => ({
//         optionsCache: {
//           ...prevState.optionsCache,
//           [search]: {
//             ...currentOptions,
//             isLoading: false
//           }
//         }
//       }));
//     }
//   }

//   __loadOptions = (search, prevOptions) => {
//     let { promiseOption, pageSize } = this.props;
//     return new Promise(resolve => {
//       let offset = prevOptions.length;
//       promiseOption({ search, offset, pageSize }).then(options => {
//         resolve({ options, hasMore: options.length === pageSize });
//       }, {});
//     });
//   };

//   render() {
//     const { search, optionsCache, menuIsOpen } = this.state;

//     const currentOptions = optionsCache[search] || initialCache;

//     return (
//       <SelectBase
//         {...this.props}
//         arrowRenderer={() => null}
//         classNamePrefix="react-select-container"
//         inputValue={search}
//         menuIsOpen={menuIsOpen}
//         onMenuClose={this.onMenuClose}
//         onMenuOpen={this.onMenuOpen}
//         onInputChange={this.onInputChange}
//         onMenuScrollToBottom={this.onMenuScrollToBottom}
//         isLoading={currentOptions.isLoading}
//         options={currentOptions.options}
//       />
//     );
//   }
// }

// class SelectWithSearch extends Component {
//   static propTypes = {
//     promiseOption: PropTypes.func,
//     async: PropTypes.bool,
//     cacheUniq: PropTypes.any,
//     selectedOption: PropTypes.object,
//     options: PropTypes.arrayOf(PropTypes.object),
//     placeholder: PropTypes.string,
//     pageSize: PropTypes.number,
//     style: PropTypes.object,
//     onSelect: PropTypes.func
//   };
//   static defaultProps = {
//     style: { width: 200 }
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       showSelect: false,
//       selectedOption: props.selectedOption
//     };
//   }

//   handleChange = selectedOption => {
//     this.setState({ selectedOption, showSelect: false });
//     this.props.onSelect(selectedOption.value);
//   };

//   render() {
//     let { async, style } = this.props;
//     let SelectComponent;
//     if (async) {
//       SelectComponent = SelectWithAsyncSearch;
//     } else {
//       SelectComponent = SelectWithSyncSearch;
//     }
//     let { showSelect, selectedOption } = this.state;
//     let { width } = style;
//     return (
//       <div style={style}>
//         <Button
//           type="default"
//           style={{ width }}
//           onClick={() => {
//             this.setState({
//               showSelect: !showSelect
//             });
//           }}
//         >
//           {selectedOption.label}
//           <Icon type="down" />
//         </Button>
//         {showSelect && (
//           <SelectComponent {...this.props} onChange={this.handleChange} />
//         )}
//       </div>
//     );
//   }
// }

SelectWithSearch.propTypes = {
  options: _propTypes2.default.arrayOf(_propTypes2.default.object),
  async: _propTypes2.default.bool
};
exports.default = SelectWithSearch;
//# sourceMappingURL=index.js.map