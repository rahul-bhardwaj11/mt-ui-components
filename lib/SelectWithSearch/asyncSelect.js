'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends6 = require('babel-runtime/helpers/extends');

var _extends7 = _interopRequireDefault(_extends6);

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

var _CheckBox = require('../CheckBox');

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Loader = require('../Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialCache = {
  options: [],
  hasMore: true,
  isLoading: false
};

var AsyncSelect = function (_Component) {
  (0, _inherits3.default)(AsyncSelect, _Component);

  function AsyncSelect(props) {
    (0, _classCallCheck3.default)(this, AsyncSelect);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AsyncSelect.__proto__ || (0, _getPrototypeOf2.default)(AsyncSelect)).call(this, props));

    _initialiseProps.call(_this);

    var initialOptionsCache = props.options ? {
      '': {
        isLoading: false,
        options: props.options || [],
        hasMore: true
      }
    } : {};
    _this.state = {
      search: '',
      optionsCache: initialOptionsCache,
      selectedItems: [],
      menuIsOpen: false,
      showSelect: true,
      showInput: false,
      inputValue: ''
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
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _state, search, optionsCache, currentOptions, _loadOptions, _ref2, options, hasMore;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _state = this.state, search = _state.search, optionsCache = _state.optionsCache;
                currentOptions = optionsCache[search] || initialCache;

                if (!(currentOptions.isLoading || !currentOptions.hasMore)) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt('return');

              case 4:
                _context.next = 6;
                return this.setState(function (prevState) {
                  return {
                    search: search,
                    optionsCache: (0, _extends7.default)({}, prevState.optionsCache, (0, _defineProperty3.default)({}, search, (0, _extends7.default)({}, currentOptions, {
                      isLoading: true
                    })))
                  };
                });

              case 6:
                _context.prev = 6;
                _loadOptions = this.__loadOptions;
                _context.next = 10;
                return _loadOptions(search, currentOptions.options);

              case 10:
                _ref2 = _context.sent;
                options = _ref2.options;
                hasMore = _ref2.hasMore;
                _context.next = 15;
                return this.setState(function (prevState) {
                  return {
                    optionsCache: (0, _extends7.default)({}, prevState.optionsCache, (0, _defineProperty3.default)({}, search, (0, _extends7.default)({}, currentOptions, {
                      options: currentOptions.options.concat(options),
                      hasMore: !!hasMore,
                      isLoading: false
                    })))
                  };
                });

              case 15:
                _context.next = 21;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context['catch'](6);
                _context.next = 21;
                return this.setState(function (prevState) {
                  return {
                    optionsCache: (0, _extends7.default)({}, prevState.optionsCache, (0, _defineProperty3.default)({}, search, (0, _extends7.default)({}, currentOptions, {
                      isLoading: false
                    })))
                  };
                });

              case 21:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[6, 17]]);
      }));

      function loadOptions() {
        return _ref.apply(this, arguments);
      }

      return loadOptions;
    }()
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state2 = this.state,
          search = _state2.search,
          optionsCache = _state2.optionsCache,
          selectedItems = _state2.selectedItems,
          menuIsOpen = _state2.menuIsOpen,
          showSelect = _state2.showSelect,
          showInput = _state2.showInput,
          inputValue = _state2.inputValue;
      var _props = this.props,
          isMulti = _props.isMulti,
          isButton = _props.isButton,
          buttonMaxWidth = _props.buttonMaxWidth,
          buttonMinWidth = _props.buttonMinWidth;

      var currentOptions = optionsCache[search] || initialCache;
      var options = this.normalizeOption([].concat((0, _toConsumableArray3.default)(currentOptions.options)));
      var selectProps = isMulti ? {
        onChange: this.onCheckboxClick,
        hideSelectedOptions: false,
        components: {
          Option: this.optionWithCheckBox,
          MultiValueContainer: this.handleDisplayValue,
          Menu: this.buildMenu,
          Control: this.handleControl
        },
        value: selectedItems,
        closeMenuOnSelect: false,
        controlShouldRenderValue: !showInput,
        menuIsOpen: menuIsOpen,
        isSearchable: showInput,
        autoFocus: showInput,
        onBlur: this.onDone,
        inputValue: inputValue
      } : {
        components: {
          Option: this.optionWithCheckBox,
          Control: this.handleControl,
          SingleValue: this.handleSingleValue,
          Menu: this.buildMenu
        },
        onChange: function onChange(data) {
          _this2.setState({ showInput: false, selectedItems: [data], menuIsOpen: false, showSelect: !isButton });
          _this2.props.onChange(data.value);
        },
        onBlur: function onBlur() {
          _this2.isBlurActive = true;
          _this2.setState({ showInput: false, menuIsOpen: false, showSelect: !isButton });
        },
        autoFocus: showInput,
        backspaceRemovesValue: false,
        controlShouldRenderValue: !showInput,
        menuIsOpen: menuIsOpen
      };

      return _react2.default.createElement(
        'div',
        null,
        isButton && _react2.default.createElement(
          'div',
          {
            ref: function ref(e) {
              if (e) {
                _this2.buttonRef = e;
              }
            }
          },
          _react2.default.createElement(
            _Button2.default,
            {
              type: 'secondary',
              onClick: this.toggleButton,
              style: { maxWidth: buttonMaxWidth, minWidth: buttonMinWidth }
            },
            this.getButtonText()
          )
        ),
        showSelect && _react2.default.createElement(_reactSelect2.default, (0, _extends7.default)({}, this.props, {
          classNamePrefix: 'mt-react-select',
          onInputChange: this.onInputChange,
          options: options,
          onMenuOpen: this.onMenuOpen,
          autoload: false,
          onMenuScrollToBottom: this.onMenuScrollToBottom
        }, selectProps))
      );
    }
  }]);
  return AsyncSelect;
}(_react.Component);

AsyncSelect.propTypes = {
  promiseOption: _propTypes2.default.func,
  cacheUniq: _propTypes2.default.any,
  pageSize: _propTypes2.default.number,
  options: _propTypes2.default.array,
  multiple: _propTypes2.default.bool,
  defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.array]),
  isMulti: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  isButton: _propTypes2.default.bool,
  buttonLabel: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  buttonMaxWidth: _propTypes2.default.number,
  buttonMinWidth: _propTypes2.default.number
};
AsyncSelect.defaultProps = {
  cacheUniq: null,
  pageSize: 10,
  isButton: false,
  buttonLabel: 'filter'
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onInputChange = function (search, event) {
    if (event.action == 'input-change') {
      _this3.setState({
        inputValue: search,
        search: search
      });
    }

    var optionsCache = _this3.state.optionsCache;


    if (!optionsCache[search]) {
      _this3.loadOptions();
    }
  };

  this.onMenuScrollToBottom = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
    var _state3, search, optionsCache, currentOptions;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _state3 = _this3.state, search = _state3.search, optionsCache = _state3.optionsCache;
            currentOptions = optionsCache[search];

            if (!currentOptions) {
              _context2.next = 5;
              break;
            }

            _context2.next = 5;
            return _this3.loadOptions();

          case 5:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this3);
  }));

  this.__arrangeOptions = function (selectedItems, options) {
    var optionsThatAreNotSelected = options.filter(function (option) {
      return selectedItems.indexOf(option) < 0;
    });
    var newOptions = [].concat((0, _toConsumableArray3.default)(selectedItems), (0, _toConsumableArray3.default)(optionsThatAreNotSelected));
    return newOptions;
  };

  this.__loadOptions = function (search, prevOptions) {
    var _props2 = _this3.props,
        promiseOption = _props2.promiseOption,
        pageSize = _props2.pageSize;

    return new _promise2.default(function (resolve) {
      var offset = prevOptions.length;
      promiseOption({ search: search, offset: offset, pageSize: pageSize }).then(function (options) {
        resolve({ options: options, hasMore: options.length === pageSize });
      }, {});
    });
  };

  this.componentDidMount = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
    var _props3, defaultValue, isButton, _state4, optionsCache, search, currentOptions, selectedItems, arrangedOptions;

    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _props3 = _this3.props, defaultValue = _props3.defaultValue, isButton = _props3.isButton;
            _state4 = _this3.state, optionsCache = _state4.optionsCache, search = _state4.search;
            currentOptions = optionsCache[search] || initialCache;

            if (isButton) {
              _this3.setState({ showSelect: false });
            }
            selectedItems = [];

            if (defaultValue) {
              if (defaultValue.length) {
                defaultValue.map(function (option) {
                  selectedItems.push(option);
                });
              } else {
                selectedItems.push(defaultValue);
              }
            }

            arrangedOptions = _this3.__arrangeOptions(selectedItems, currentOptions.options);

            _this3.setState(function (prevState) {
              return {
                selectedItems: selectedItems,
                optionsCache: (0, _extends7.default)({}, prevState.optionsCache, (0, _defineProperty3.default)({}, search, {
                  isLoading: false,
                  options: arrangedOptions,
                  hasMore: true
                }))
              };
            });

            if (!(!optionsCache[''] || optionsCache[''].hasMore)) {
              _context3.next = 11;
              break;
            }

            _context3.next = 11;
            return _this3.loadOptions();

          case 11:
            document.addEventListener('mousedown', _this3.handleClickOutside);

          case 12:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this3);
  }));

  this.handleClickOutside = function (event) {
    if (_this3.buttonRef && _this3.buttonRef.contains(event.target)) {
      _this3.isBlurActive = false;
    }
  };

  this.onCheckboxClick = function (data) {
    var selectedItems = [].concat((0, _toConsumableArray3.default)(_this3.state.selectedItems));
    var index = selectedItems.indexOf(data);
    if (index < 0) {
      selectedItems.push(data);
    } else {
      selectedItems.splice(index, 1);
    }
    _this3.setState({ selectedItems: selectedItems });
  };

  this.onClearAll = function () {
    var selectedItems = [];
    _this3.setState({ selectedItems: selectedItems });
  };

  this.onDone = function () {
    _this3.isBlurActive = true;
    var _state5 = _this3.state,
        selectedItems = _state5.selectedItems,
        optionsCache = _state5.optionsCache;
    var _props4 = _this3.props,
        isButton = _props4.isButton,
        onChange = _props4.onChange;

    var options = optionsCache[''].options;
    var selectedValues = selectedItems.map(function (selectedItem) {
      return selectedItem.value;
    });
    onChange(selectedValues);
    var arrangedOptions = _this3.__arrangeOptions(selectedItems, options);
    _this3.setState(function (prevState) {
      var newState = {
        menuIsOpen: false,
        showInput: false,
        inputValue: '',
        optionsCache: (0, _extends7.default)({}, prevState.optionsCache, {
          '': (0, _extends7.default)({}, prevState.optionsCache[''], {
            options: arrangedOptions
          })
        })
      };
      newState = isButton ? (0, _assign2.default)(newState, { showSelect: false }) : newState;
      return newState;
    });
  };

  this.toggleButton = function () {
    if (_this3.isBlurActive) {
      _this3.isBlurActive = false;
      return;
    }
    _this3.setState(function (prevState) {
      return {
        showSelect: !prevState.showSelect,
        menuIsOpen: !prevState.menuIsOpen,
        showInput: !prevState.showInput
      };
    });
  };

  this.handleDisplayValue = function (_ref5) {
    var data = _ref5.data;
    var selectedItems = _this3.state.selectedItems;

    if (data.value == selectedItems[0].value) return _react2.default.createElement(
      'div',
      { className: 'selectedItem clearfix' },
      _react2.default.createElement(
        'span',
        { className: 'selectedItemLabel floatL' },
        '' + data.label
      ),
      _react2.default.createElement(
        'span',
        { className: 'floatL' },
        '' + (selectedItems.length > 1 ? '+' + (selectedItems.length - 1) : '')
      )
    );
    return null;
  };

  this.handleSingleValue = function (_ref6) {
    var data = _ref6.data,
        props = (0, _objectWithoutProperties3.default)(_ref6, ['data']);
    var placeholder = _this3.props.placeholder;

    return _react2.default.createElement(
      _reactSelect.components.SingleValue,
      props,
      data.value == 'None' ? placeholder : data.label
    );
  };

  this.optionWithCheckBox = function (params) {
    var isDisabled = params.isDisabled,
        data = params.data;
    var selectedItems = _this3.state.selectedItems;

    if (!_this3.props.isMulti) return _react2.default.createElement(
      'div',
      { title: data.label },
      _react2.default.createElement(_reactSelect.components.Option, params)
    );
    return !isDisabled ? _react2.default.createElement(
      'div',
      {
        onClick: function onClick() {
          return _this3.onCheckboxClick(data);
        },
        className: 'checkboxWrapper',
        title: data.label
      },
      _react2.default.createElement(_CheckBox2.default, { checked: selectedItems.indexOf(data) > -1 ? true : false }),
      _react2.default.createElement(
        'span',
        { className: 'dataLabel' },
        data.label
      )
    ) : null;
  };

  this.buildMenu = function (props) {
    var _state6 = _this3.state,
        selectedItems = _state6.selectedItems,
        search = _state6.search,
        optionsCache = _state6.optionsCache;

    var isLoading = optionsCache[search] && optionsCache[search].isLoading;
    var isMulti = _this3.props.isMulti;

    var loaderStyle = {
      position: 'absolute',
      bottom: isMulti ? 30 : 0,
      left: '50%'
    };
    return _react2.default.createElement(
      _reactSelect.components.Menu,
      props,
      props.children,
      !!isLoading && _react2.default.createElement(_Loader2.default, { size: 'sizeXSmall', vCenter: false, style: loaderStyle }),
      isMulti && _react2.default.createElement(
        'div',
        { className: 'componentWrapper' },
        _react2.default.createElement(
          'div',
          { className: 'buttonWrapperL' },
          _react2.default.createElement(
            _Button2.default,
            { type: 'text', onClick: _this3.onClearAll },
            'Clear All'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'buttonWrapperR' },
          _react2.default.createElement(
            _Button2.default,
            { type: 'text', onClick: _this3.onDone },
            'Done',
            _react2.default.createElement(
              'span',
              { className: 'doneMarginR' },
              selectedItems.length ? '(' + selectedItems.length + ')' : ''
            )
          )
        )
      )
    );
  };

  this.handleControl = function (arg) {
    var inputValue = _this3.state.inputValue;

    return _react2.default.createElement(
      'div',
      { className: 'selectBoxWrapper' },
      _react2.default.createElement(
        'div',
        {
          className: _this3.state.showInput ? 'activeSearch' : '',
          onClick: function onClick() {
            _this3.setState({
              menuIsOpen: true,
              showInput: true
            });
          }
        },
        _react2.default.createElement(_reactSelect.components.Control, arg),
        _react2.default.createElement(
          'div',
          { className: inputValue.length ? 'activeInput' : '' },
          _react2.default.createElement(_Icon2.default, {
            type: 'cross',
            onClick: function onClick() {
              return _this3.setState({ inputValue: '' });
            }
          })
        )
      )
    );
  };

  this.normalizeOption = function (options) {
    if (!_this3.props.isMulti && !_this3.state.search.length) {
      options.unshift({ label: 'None', value: 'None' });
    }
    return options;
  };

  this.getButtonText = function () {
    var selectedItems = _this3.state.selectedItems;
    var buttonLabel = _this3.props.buttonLabel;

    var selectedItemsLength = selectedItems.length;
    if (selectedItemsLength) {
      if (selectedItemsLength == 1) return '' + (selectedItems[0].label == 'None' ? buttonLabel : selectedItems[0].label);
      return buttonLabel + '.' + selectedItems.length;
    }
    return buttonLabel;
  };
};

exports.default = AsyncSelect;
//# sourceMappingURL=asyncSelect.js.map