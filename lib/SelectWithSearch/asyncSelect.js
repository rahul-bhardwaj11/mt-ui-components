'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var initialCache = {
  options: [],
  hasMore: true,
  isLoading: false
};

var AsyncSelect = (function(_Component) {
  (0, _inherits3.default)(AsyncSelect, _Component);

  function AsyncSelect(props) {
    (0, _classCallCheck3.default)(this, AsyncSelect);

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (
        AsyncSelect.__proto__ || (0, _getPrototypeOf2.default)(AsyncSelect)
      ).call(this, props)
    );

    _initialiseProps.call(_this);

    var initialOptionsCache = props.options
      ? {
          '': {
            isLoading: false,
            options: props.options || [],
            hasMore: true
          }
        }
      : {};
    _this.state = {
      search: '',
      optionsCache: initialOptionsCache,
      selectedItems: [],
      prevSelectedItems: [],
      menuIsOpen: false,
      showSelect: true,
      showInput: false,
      inputValue: ''
    };
    return _this;
  }

  (0, _createClass3.default)(AsyncSelect, [
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(oldProps) {
        var _this2 = this;

        var cacheUniq = this.props.cacheUniq;

        if (oldProps.cacheUniq !== cacheUniq) {
          this.setState(
            {
              optionsCache: {}
            },
            function() {
              _this2.loadOptions();
            }
          );
        }
      }
    },
    {
      key: 'loadOptions',
      value: (function() {
        var _ref = (0, _asyncToGenerator3.default)(
          /*#__PURE__*/ _regenerator2.default.mark(function _callee() {
            var _state,
              search,
              optionsCache,
              currentOptions,
              _loadOptions,
              _ref2,
              _ref2$options,
              options,
              hasMore,
              uniqueOptions;

            return _regenerator2.default.wrap(
              function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      (_state = this.state),
                        (search = _state.search),
                        (optionsCache = _state.optionsCache);
                      currentOptions = optionsCache[search] || initialCache;

                      if (
                        !(currentOptions.isLoading || !currentOptions.hasMore)
                      ) {
                        _context.next = 4;
                        break;
                      }

                      return _context.abrupt('return');

                    case 4:
                      _context.next = 6;
                      return this.setState(function(prevState) {
                        return {
                          search: search,
                          optionsCache: (0, _extends7.default)(
                            {},
                            prevState.optionsCache,
                            (0, _defineProperty3.default)(
                              {},
                              search,
                              (0, _extends7.default)({}, currentOptions, {
                                isLoading: true
                              })
                            )
                          )
                        };
                      });

                    case 6:
                      _context.prev = 6;
                      _loadOptions = this.__loadOptions;
                      _context.next = 10;
                      return _loadOptions(search, currentOptions.options);

                    case 10:
                      _ref2 = _context.sent;
                      _ref2$options = _ref2.options;
                      options =
                        _ref2$options === undefined ? [] : _ref2$options;
                      hasMore = _ref2.hasMore;
                      uniqueOptions = [];

                      options.length &&
                        options.forEach(function(option) {
                          if (
                            !currentOptions.options.some(function(currOption) {
                              return option.value == currOption.value;
                            })
                          ) {
                            uniqueOptions.push(option);
                          }
                        });

                      _context.next = 18;
                      return this.setState(function(prevState) {
                        return {
                          optionsCache: (0, _extends7.default)(
                            {},
                            prevState.optionsCache,
                            (0, _defineProperty3.default)(
                              {},
                              search,
                              (0, _extends7.default)({}, currentOptions, {
                                options: currentOptions.options.concat(
                                  uniqueOptions
                                ),
                                hasMore: !!hasMore,
                                isLoading: false
                              })
                            )
                          )
                        };
                      });

                    case 18:
                      _context.next = 24;
                      break;

                    case 20:
                      _context.prev = 20;
                      _context.t0 = _context['catch'](6);
                      _context.next = 24;
                      return this.setState(function(prevState) {
                        return {
                          optionsCache: (0, _extends7.default)(
                            {},
                            prevState.optionsCache,
                            (0, _defineProperty3.default)(
                              {},
                              search,
                              (0, _extends7.default)({}, currentOptions, {
                                isLoading: false
                              })
                            )
                          )
                        };
                      });

                    case 24:
                    case 'end':
                      return _context.stop();
                  }
                }
              },
              _callee,
              this,
              [[6, 20]]
            );
          })
        );

        function loadOptions() {
          return _ref.apply(this, arguments);
        }

        return loadOptions;
      })()
    },
    {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var value = this.props.value;

        if (value != nextProps.value) {
          var selectedItems = [];
          if (value) {
            selectedItems = this.getSelectedItemsFromValue(nextProps.value);
          }
          this.setState({ selectedItems: selectedItems });
        }
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var _state2 = this.state,
          search = _state2.search,
          optionsCache = _state2.optionsCache,
          selectedItems = _state2.selectedItems,
          prevSelectedItems = _state2.prevSelectedItems,
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
        var options = this.normalizeOption(
          [].concat((0, _toConsumableArray3.default)(currentOptions.options))
        );
        var selectProps = isMulti
          ? {
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
              isFocused: true,
              //onBlur: this.handleMultiOnSelect,
              inputValue: inputValue
            }
          : {
              components: {
                Option: this.optionWithCheckBox,
                Control: this.handleControl,
                SingleValue: this.handleSingleValue,
                Menu: this.buildMenu
              },
              onChange: this.handleSingleOnSelect,
              //onBlur: this.handleSingleOnBlur,
              autoFocus: showInput,
              backspaceRemovesValue: false,
              controlShouldRenderValue: !showInput,
              menuIsOpen: menuIsOpen,
              inputValue: inputValue,
              value: selectedItems[0]
            };

        return _react2.default.createElement(
          _react2.default.Fragment,
          null,
          isButton &&
            _react2.default.createElement(
              'div',
              {
                ref: function ref(e) {
                  if (e) {
                    _this3.buttonRef = e;
                  }
                }
              },
              _react2.default.createElement(
                _Button2.default,
                {
                  type: 'secondary',
                  onClick: this.toggleButton,
                  style: {
                    maxWidth: buttonMaxWidth,
                    minWidth: buttonMinWidth
                  },
                  size: 'small',
                  className: (0, _classnames2.default)(
                    prevSelectedItems.length > 0 ? 'selectedItems' : '',
                    showSelect ? 'activeSelect' : ''
                  )
                },
                this.getButtonText()
              )
            ),
          showSelect &&
            _react2.default.createElement(
              'div',
              {
                ref: function ref(e) {
                  if (e) {
                    _this3.selectRef = e;
                  }
                }
              },
              _react2.default.createElement(
                _reactSelect2.default,
                (0, _extends7.default)(
                  {
                    styles: this.getStyle()
                  },
                  this.props,
                  {
                    classNamePrefix: 'mt-react-select',
                    onInputChange: this.onInputChange,
                    options: options,
                    onMenuOpen: this.onMenuOpen,
                    autoload: false,
                    onMenuScrollToBottom: this.onMenuScrollToBottom
                  },
                  selectProps,
                  {
                    backspaceRemovesValue: false
                  }
                )
              )
            )
        );
      }
    }
  ]);
  return AsyncSelect;
})(_react.Component);

AsyncSelect.propTypes = {
  promiseOption: _propTypes2.default.func,
  cacheUniq: _propTypes2.default.any,
  pageSize: _propTypes2.default.number,
  options: _propTypes2.default.array,
  multiple: _propTypes2.default.bool,
  defaultValue: _propTypes2.default.oneOfType([
    _propTypes2.default.shape({
      label: _propTypes2.default.string,
      value: _propTypes2.default.string
    }),
    _propTypes2.default.arrayOf(
      _propTypes2.default.shape({
        label: _propTypes2.default.string,
        value: _propTypes2.default.string
      })
    )
  ]),
  isMulti: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  isButton: _propTypes2.default.bool,
  isDisabled: _propTypes2.default.bool,
  buttonLabel: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  buttonMaxWidth: _propTypes2.default.string,
  buttonMinWidth: _propTypes2.default.string,
  sortOptions: _propTypes2.default.bool,
  value: _propTypes2.default.oneOfType([
    _propTypes2.default.shape({
      label: _propTypes2.default.string,
      value: _propTypes2.default.string
    }),
    _propTypes2.default.arrayOf(
      _propTypes2.default.shape({
        label: _propTypes2.default.string,
        value: _propTypes2.default.string
      })
    )
  ]),
  style: _propTypes2.default.object,
  optionRenderer: _propTypes2.default.func,
  showSearch: _propTypes2.default.bool
};
AsyncSelect.defaultProps = {
  cacheUniq: null,
  pageSize: 15,
  isButton: false,
  buttonLabel: 'filter'
};

var _initialiseProps = function _initialiseProps() {
  var _this4 = this;

  this.onInputChange = function(search, event) {
    if (event.action == 'input-change') {
      _this4.setState(
        {
          inputValue: search,
          search: search
        },
        function() {
          var optionsCache = _this4.state.optionsCache;

          if (!optionsCache[search]) {
            _this4.loadOptions();
          }
        }
      );
    }
  };

  this.onMenuScrollToBottom = (0, _asyncToGenerator3.default)(
    /*#__PURE__*/ _regenerator2.default.mark(function _callee2() {
      var _state3, search, optionsCache, currentOptions;

      return _regenerator2.default.wrap(
        function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                (_state3 = _this4.state),
                  (search = _state3.search),
                  (optionsCache = _state3.optionsCache);
                currentOptions = optionsCache[search];

                if (!currentOptions) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 5;
                return _this4.loadOptions();

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        },
        _callee2,
        _this4
      );
    })
  );

  this.__arrangeOptions = function(selectedItems, options) {
    //const { sortOptions } = this.props;
    //if (!sortOptions) return options;
    var optionsThatAreNotSelected = options.filter(function(option) {
      return !selectedItems.some(function(currOption) {
        return option.value == currOption.value;
      });
    });
    var newOptions = [].concat(
      (0, _toConsumableArray3.default)(selectedItems),
      (0, _toConsumableArray3.default)(optionsThatAreNotSelected)
    );
    return newOptions;
  };

  this.__loadOptions = function(search, prevOptions) {
    var _props2 = _this4.props,
      promiseOption = _props2.promiseOption,
      pageSize = _props2.pageSize;

    return new _promise2.default(function(resolve) {
      var offset = prevOptions.length;
      promiseOption({
        search: search,
        offset: offset,
        pageSize: pageSize
      }).then(function(options) {
        resolve({ options: options, hasMore: options.length === pageSize });
      }, {});
    });
  };

  this.componentDidMount = (0, _asyncToGenerator3.default)(
    /*#__PURE__*/ _regenerator2.default.mark(function _callee3() {
      var _props3,
        defaultValue,
        isButton,
        value,
        _state4,
        optionsCache,
        search,
        currentOptions,
        newValue,
        selectedItems,
        arrangedOptions;

      return _regenerator2.default.wrap(
        function _callee3$(_context3) {
          while (1) {
            switch ((_context3.prev = _context3.next)) {
              case 0:
                (_props3 = _this4.props),
                  (defaultValue = _props3.defaultValue),
                  (isButton = _props3.isButton),
                  (value = _props3.value);
                (_state4 = _this4.state),
                  (optionsCache = _state4.optionsCache),
                  (search = _state4.search);
                currentOptions = optionsCache[search] || initialCache;

                if (isButton) {
                  _this4.setState({ showSelect: false });
                }
                newValue = value ? value : defaultValue;
                selectedItems = _this4.getSelectedItemsFromValue(newValue);
                arrangedOptions = _this4.__arrangeOptions(
                  selectedItems,
                  currentOptions.options
                );
                _context3.next = 9;
                return _this4.setState(function(prevState) {
                  return {
                    selectedItems: selectedItems,
                    prevSelectedItems: selectedItems,
                    optionsCache: (0, _extends7.default)(
                      {},
                      prevState.optionsCache,
                      (0, _defineProperty3.default)({}, search, {
                        isLoading: false,
                        options: arrangedOptions,
                        hasMore: true
                      })
                    )
                  };
                });

              case 9:
                if (!(!optionsCache[''] || optionsCache[''].hasMore)) {
                  _context3.next = 12;
                  break;
                }

                _context3.next = 12;
                return _this4.loadOptions();

              case 12:
                document.addEventListener(
                  'mousedown',
                  _this4.handleClickOutside.bind(_this4)
                );

              case 13:
              case 'end':
                return _context3.stop();
            }
          }
        },
        _callee3,
        _this4
      );
    })
  );

  this.getSelectedItemsFromValue = function(value) {
    if (!value) {
      return [];
    }
    return Array.isArray(value) ? value : [value];
    // const { search, optionsCache } = this.state;
    // const currentOptions = optionsCache[search] || initialCache;
    // const options = this.normalizeOption([...currentOptions.options]);
    // const selectedItems = [];
    // if (value) {
    //   if (Array.isArray(value)) {
    //     value.forEach(item => {
    //       const option = options.filter(option => option.value == item.value);
    //       selectedItems.push(...option);
    //     });
    //   } else {
    //     const option = options.filter(option => option.value == value.value);
    //     selectedItems.push(...option);
    //   }
    // }
    // return selectedItems;
  };

  this.handleClickOutside = function(event) {
    if (_this4.buttonRef && _this4.buttonRef.contains(event.target)) {
      _this4.isBlurActive = false;
    }
    if (_this4.iconRef && _this4.iconRef.contains(event.target)) {
      _this4.setState({ inputValue: '', search: '' });
      _this4.isIconClicked = true;
    }
    if (_this4.selectRef && _this4.selectRef.contains(event.target)) {
      _this4.isBlurActive = false;
    }
    if (_this4.props.isButton) {
      if (
        !_this4.buttonRef.contains(event.target) &&
        !_this4.selectRef.contains(event.target)
      ) {
        _this4.props.isMulti
          ? _this4.handleMultiOnSelect()
          : _this4.handleSingleOnBlur();
      }
    } else {
      if (!_this4.selectRef.contains(event.target)) {
        _this4.props.isMulti
          ? _this4.handleMultiOnSelect()
          : _this4.handleSingleOnBlur();
      }
    }
  };

  this.onCheckboxClick = function(data, event) {
    if (event) {
      return;
    }
    var selectedItems = [].concat(
      (0, _toConsumableArray3.default)(_this4.state.selectedItems)
    );
    var index = selectedItems.indexOf(data);
    if (index < 0) {
      selectedItems.push(data);
    } else {
      selectedItems.splice(index, 1);
    }
    _this4.setState({ selectedItems: selectedItems });
  };

  this.onClearAll = function() {
    var selectedItems = [];
    _this4.setState({ selectedItems: selectedItems });
  };

  this.getNewStateAfterOnSelect = function() {
    var isButton = _this4.props.isButton;

    var newState = {
      menuIsOpen: false,
      showInput: false,
      inputValue: ''
    };
    newState = isButton
      ? (0, _assign2.default)(newState, { showSelect: false })
      : newState;
    return newState;
  };

  this.handleMultiOnSelect = function() {
    if (_this4.isIconClicked) {
      _this4.isIconClicked = false;
      return;
    }
    _this4.isBlurActive = true;
    var _state5 = _this4.state,
      selectedItems = _state5.selectedItems,
      optionsCache = _state5.optionsCache,
      prevSelectedItems = _state5.prevSelectedItems;
    var _props4 = _this4.props,
      isButton = _props4.isButton,
      onChange = _props4.onChange;

    var options = optionsCache[''].options;
    var isSelectedItemsChange = false;
    if (selectedItems.length == prevSelectedItems.length) {
      for (var index = 0; index < selectedItems.length; index++) {
        if (selectedItems[index].value != prevSelectedItems[index].value) {
          isSelectedItemsChange = true;
          break;
        }
      }
    } else {
      isSelectedItemsChange = true;
    }
    if (isSelectedItemsChange) {
      onChange(selectedItems);
      _this4.setState({ prevSelectedItems: selectedItems });
    }

    var arrangedOptions = _this4.__arrangeOptions(selectedItems, options);
    _this4.setState(function(prevState) {
      var newState = {
        menuIsOpen: false,
        showInput: false,
        inputValue: '',
        search: '',
        optionsCache: (0, _extends7.default)({}, prevState.optionsCache, {
          '': (0, _extends7.default)({}, prevState.optionsCache[''], {
            options: arrangedOptions
          })
        })
      };
      newState = isButton
        ? (0, _assign2.default)(newState, { showSelect: false })
        : newState;
      return newState;
    });
  };

  this.toggleButton = function() {
    if (_this4.isBlurActive) {
      _this4.isBlurActive = false;
      return;
    }
    _this4.setState(function(prevState) {
      return {
        showSelect: !prevState.showSelect,
        menuIsOpen: !prevState.menuIsOpen,
        showInput: !prevState.showInput
      };
    });
  };

  this.handleDisplayValue = function(_ref5) {
    var data = _ref5.data;
    var selectedItems = _this4.state.selectedItems;
    var _props5 = _this4.props,
      value = _props5.value,
      placeholder = _props5.placeholder;

    if (value) {
      selectedItems = _this4.getSelectedItemsFromValue(value);
    }
    if (!selectedItems.length) {
      selectedItems.push({ label: placeholder, value: 'None' });
    }
    if (data.value == selectedItems[0].value || value)
      return _react2.default.createElement(
        'div',
        { className: 'selectedItem clearfix' },
        _react2.default.createElement(
          'span',
          { className: 'selectedItemLabel floatL' },
          '' + selectedItems[0].label
        ),
        _react2.default.createElement(
          'span',
          { className: 'floatL' },
          '' +
            (selectedItems.length > 1 ? '+' + (selectedItems.length - 1) : '')
        )
      );
    return null;
  };

  this.handleSingleValue = function(props) {
    var selectedItems = _this4.state.selectedItems;
    var _props6 = _this4.props,
      value = _props6.value,
      placeholder = _props6.placeholder;

    if (value) {
      selectedItems = _this4.getSelectedItemsFromValue(value);
    }
    if (!selectedItems.length) {
      selectedItems.push({ label: placeholder, value: 'None' });
    }
    return _react2.default.createElement(
      _reactSelect.components.SingleValue,
      props,
      selectedItems[0].value == 'None' ? placeholder : selectedItems[0].label
    );
  };

  this.optionWithCheckBox = function(params) {
    var isDisabled = params.isDisabled,
      data = params.data;
    var optionRenderer = _this4.props.optionRenderer;
    var selectedItems = _this4.state.selectedItems;

    if (!_this4.props.isMulti)
      return optionRenderer
        ? _react2.default.createElement(
            'div',
            {
              title: data.label,
              onClick: function onClick() {
                _this4.handleSingleOnSelect(data);
              }
            },
            optionRenderer(data)
          )
        : _react2.default.createElement(
            'div',
            { title: data.label },
            _react2.default.createElement(
              _reactSelect.components.Option,
              params
            )
          );
    return !isDisabled
      ? _react2.default.createElement(
          'div',
          { className: 'checkboxWrapper', title: data.label },
          optionRenderer
            ? _react2.default.createElement(
                'div',
                {
                  onClick: function onClick() {
                    !data.disabled && _this4.onCheckboxClick(data);
                  }
                },
                optionRenderer(data)
              )
            : _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                  'div',
                  { className: 'subLabelText' },
                  data.subText
                ),
                _react2.default.createElement(
                  _CheckBox2.default,
                  {
                    disabled: data.disabled,
                    checked: selectedItems
                      .map(function(i) {
                        return i.value;
                      })
                      .includes(data.value),
                    className: 'labelText',
                    onChange: function onChange() {
                      !data.disabled && _this4.onCheckboxClick(data);
                    }
                  },
                  data.label
                )
              )
        )
      : null;
  };

  this.buildMenu = function(props) {
    var _state6 = _this4.state,
      selectedItems = _state6.selectedItems,
      search = _state6.search,
      optionsCache = _state6.optionsCache;

    var isLoading = optionsCache[search] && optionsCache[search].isLoading;
    var isMulti = _this4.props.isMulti;

    var loaderStyle = {
      bottom: isMulti ? 30 : 0
    };
    return _react2.default.createElement(
      _reactSelect.components.Menu,
      props,
      props.children,
      !!isLoading &&
        _react2.default.createElement(_Loader2.default, {
          size: 'sizeXSmall',
          type: 'Full',
          style: loaderStyle
        }),
      isMulti &&
        _react2.default.createElement(
          'div',
          { className: 'componentWrapper' },
          _react2.default.createElement(
            'div',
            { className: 'buttonWrapperL' },
            _react2.default.createElement(
              _Button2.default,
              { type: 'text', onClick: _this4.onClearAll },
              'Clear All'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'buttonWrapperR' },
            _react2.default.createElement(
              _Button2.default,
              {
                type: 'text',
                onClick: _this4.handleMultiOnSelect,
                className: selectedItems.length ? 'activeBtnState' : ' '
              },
              'Apply',
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

  this.handleControl = function(arg) {
    var inputValue = _this4.state.inputValue;
    var _props7 = _this4.props,
      isDisabled = _props7.isDisabled,
      showSearch = _props7.showSearch;

    return (
      showSearch &&
      _react2.default.createElement(
        'div',
        { className: 'selectBoxWrapper' },
        _react2.default.createElement(
          'div',
          {
            className: _this4.state.showInput ? 'activeSearch' : '',
            onClick: function onClick() {
              !isDisabled &&
                _this4.setState({
                  menuIsOpen: true,
                  showInput: true
                });
            }
          },
          _react2.default.createElement(_reactSelect.components.Control, arg),
          _react2.default.createElement(
            'div',
            {
              className: inputValue.length ? 'activeInput' : '',
              ref: function ref(e) {
                if (e) {
                  _this4.iconRef = e;
                }
              }
            },
            _react2.default.createElement(_Icon2.default, {
              type: 'cross',
              onClick: function onClick() {
                _this4.setState({ inputValue: '', search: '' });
              }
            })
          )
        )
      )
    );
  };

  this.normalizeOption = function(options) {
    if (!_this4.props.isMulti && !_this4.state.search.length) {
      options.unshift({ label: 'None', value: 'None' });
    }
    return options;
  };

  this.getButtonText = function() {
    var _props8 = _this4.props,
      buttonLabel = _props8.buttonLabel,
      value = _props8.value;
    var selectedItems = _this4.state.selectedItems;

    if (value) {
      selectedItems = _this4.getSelectedItemsFromValue(value);
    }
    var selectedItemsLength = selectedItems.length;
    if (selectedItemsLength) {
      if (selectedItemsLength == 1)
        return (
          '' +
          (selectedItems[0].label == 'None'
            ? buttonLabel
            : selectedItems[0].label)
        );
      return _react2.default.createElement(
        'span',
        { className: 'selectWithSearchText' },
        buttonLabel,
        _react2.default.createElement(_Icon2.default, {
          type: 'circle',
          className: 'discIcon'
        }),
        selectedItems.length
      );
    }
    return buttonLabel;
  };

  this.handleSingleOnSelect = function(data) {
    var onChange = _this4.props.onChange;

    var newState = _this4.getNewStateAfterOnSelect();
    newState.selectedItems = [data];
    _this4.setState((0, _extends7.default)({}, newState));
    onChange(data);
  };

  this.handleSingleOnBlur = function() {
    if (_this4.isIconClicked) {
      _this4.isIconClicked = false;
      return;
    }
    _this4.isBlurActive = true;
    var newState = _this4.getNewStateAfterOnSelect();
    _this4.setState((0, _extends7.default)({}, newState));
  };

  this.getStyle = function() {
    var _props9 = _this4.props,
      isButton = _props9.isButton,
      _props9$style = _props9.style,
      target = _props9$style === undefined ? {} : _props9$style;

    var DEFAULT_SELECT_STYLE = {
      container: function container(base) {
        return (0, _extends7.default)({}, base, {
          width: '210px',
          position: isButton ? 'absolute' : 'inherit'
        });
      }
    };
    var styles = (0, _extends7.default)({}, DEFAULT_SELECT_STYLE);
    (0, _keys2.default)(target).forEach(function(key) {
      if (DEFAULT_SELECT_STYLE[key]) {
        styles[key] = function(rsCss, props) {
          return target[key](DEFAULT_SELECT_STYLE[key](rsCss, props), props);
        };
      } else {
        styles[key] = target[key];
      }
    });
    return styles;
  };
};

exports.default = AsyncSelect;
