'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _CheckBox = require('../CheckBox');

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var noop = function noop() {
  return undefined;
};

var SyncSelect = (function(_Component) {
  (0, _inherits3.default)(SyncSelect, _Component);

  function SyncSelect() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SyncSelect);

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
          SyncSelect.__proto__ ||
          (0, _getPrototypeOf2.default)(SyncSelect)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.state = {
        options: _this.props.options,
        selectedItems: [],
        menuIsOpen: false,
        showSelect: true,
        showInput: false,
        inputValue: ''
      }),
      (_this.getSelectedItemsFromValue = function(value) {
        var options = _this.props.options;

        var selectedItems = [];
        if (value) {
          if (Array.isArray(value)) {
            value.forEach(function(item) {
              var option = options.filter(function(option) {
                return option.value == item;
              });
              selectedItems.push.apply(
                selectedItems,
                (0, _toConsumableArray3.default)(option)
              );
            });
          } else {
            var option = options.filter(function(option) {
              return option.value == value;
            });
            selectedItems.push.apply(
              selectedItems,
              (0, _toConsumableArray3.default)(option)
            );
          }
        }
        return selectedItems;
      }),
      (_this.handleClickOutside = function(event) {
        if (_this.buttonRef && _this.buttonRef.contains(event.target)) {
          _this.isBlurActive = false;
        }
        if (_this.iconRef && _this.iconRef.contains(event.target)) {
          _this.setState({ inputValue: '' });
          _this.isIconClicked = true;
        }
      }),
      (_this.normalizeOption = function(sortedOptions) {
        var isMulti = _this.props.isMulti;

        if (!isMulti) {
          sortedOptions.unshift({ label: 'None', value: 'None' });
        }
        return sortedOptions;
      }),
      (_this.isOptionsEqual = function() {
        var prevOptions =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : [];
        var newOptions =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : [];

        if (prevOptions.length != newOptions.length) return false;
        if (prevOptions.length) {
          prevOptions.forEach(function(option, index) {
            if (option.value != newOptions[index].value) return false;
          });
        }
        return true;
      }),
      (_this.__sortOptions = function(options) {
        var selectedItems =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : [];
        var sortOptions = _this.props.sortOptions;

        if (!sortOptions) return options;
        var optionsToSort = options.filter(function(option) {
          return selectedItems.indexOf(option) < 0;
        });
        optionsToSort.sort(function(item1, item2) {
          return item1.label > item2.label;
        });
        var sortedOptions = [].concat(
          (0, _toConsumableArray3.default)(selectedItems),
          (0, _toConsumableArray3.default)(optionsToSort)
        );
        return sortedOptions;
      }),
      (_this.onCheckboxClick = function(data) {
        var selectedItems = [].concat(
          (0, _toConsumableArray3.default)(_this.state.selectedItems)
        );
        var index = selectedItems.indexOf(data);
        if (index < 0) {
          selectedItems.push(data);
        } else {
          selectedItems.splice(index, 1);
        }
        _this.setState({ selectedItems: selectedItems });
      }),
      (_this.onClearAll = function() {
        var selectedItems = [];
        _this.setState({ selectedItems: selectedItems });
      }),
      (_this.getNewStateAfterOnSelect = function() {
        var isButton = _this.props.isButton;

        var newState = {
          menuIsOpen: false,
          showInput: false,
          inputValue: ''
        };
        newState = isButton
          ? (0, _assign2.default)(newState, { showSelect: false })
          : newState;
        return newState;
      }),
      (_this.handleMultiOnSelect = function() {
        if (_this.isIconClicked) {
          _this.isIconClicked = false;
          return;
        }
        _this.isBlurActive = true;
        var _this$state = _this.state,
          selectedItems = _this$state.selectedItems,
          options = _this$state.options;
        var onChange = _this.props.onChange;

        onChange(selectedItems);
        var sortedOptions = _this.__sortOptions(options, selectedItems);
        var newState = _this.getNewStateAfterOnSelect();
        newState.options = sortedOptions;
        _this.setState((0, _extends3.default)({}, newState));
      }),
      (_this.toggleButton = function() {
        if (_this.isBlurActive) {
          _this.isBlurActive = false;
          return;
        }
        _this.setState(function(prevState) {
          return {
            showSelect: !prevState.showSelect,
            menuIsOpen: !prevState.menuIsOpen,
            showInput: !prevState.showInput
          };
        });
      }),
      (_this.handleDisplayValue = function(_ref2) {
        var data = _ref2.data;
        var selectedItems = _this.state.selectedItems;
        var _this$props = _this.props,
          value = _this$props.value,
          placeholder = _this$props.placeholder;

        if (value) {
          selectedItems = _this.getSelectedItemsFromValue(value);
        }
        if (!selectedItems.length) {
          selectedItems.push({ label: placeholder, value: 'None' });
        }
        if (data.value == selectedItems[0].value || value)
          return _react2.default.createElement(
            'div',
            { className: 'selectedItem clearfix', key: 'dipslayValue' },
            _react2.default.createElement(
              'span',
              { className: 'selectedItemLabel floatL' },
              '' + selectedItems[0].label
            ),
            _react2.default.createElement(
              'span',
              { className: 'floatL' },
              '' +
                (selectedItems.length > 1
                  ? '+' + (selectedItems.length - 1)
                  : '')
            )
          );
        return null;
      }),
      (_this.handleSingleValue = function(props) {
        var selectedItems = _this.state.selectedItems;
        var _this$props2 = _this.props,
          value = _this$props2.value,
          placeholder = _this$props2.placeholder;

        if (value) {
          selectedItems = _this.getSelectedItemsFromValue(value);
        }
        if (!selectedItems.length) {
          selectedItems.push({ label: placeholder, value: 'None' });
        }
        return _react2.default.createElement(
          _reactSelect.components.SingleValue,
          props,
          selectedItems[0].value == 'None'
            ? placeholder
            : selectedItems[0].label
        );
      }),
      (_this.optionWithCheckBox = function(params) {
        var isDisabled = params.isDisabled,
          data = params.data;
        var selectedItems = _this.state.selectedItems;

        if (!_this.props.isMulti)
          return _react2.default.createElement(
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
              {
                onClick: function onClick() {
                  return _this.onCheckboxClick(data);
                },
                className: 'checkboxWrapper',
                title: data.label
              },
              _react2.default.createElement(_CheckBox2.default, {
                disabled: data.disabled,
                checked: selectedItems
                  .map(function(i) {
                    return i.value;
                  })
                  .includes(data.value)
              }),
              _react2.default.createElement(
                'span',
                { className: 'dataLabel' },
                data.label
              )
            )
          : null;
      }),
      (_this.buildMenu = function(props) {
        var selectedItems = _this.state.selectedItems;

        return _react2.default.createElement(
          _reactSelect.components.Menu,
          props,
          props.children,
          _react2.default.createElement(
            'div',
            { className: 'componentWrapper' },
            _react2.default.createElement(
              'div',
              { className: 'buttonWrapperL' },
              _react2.default.createElement(
                _Button2.default,
                { type: 'text', onClick: _this.onClearAll },
                'Clear All'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'buttonWrapperR' },
              _react2.default.createElement(
                _Button2.default,
                { type: 'text', onClick: _this.handleMultiOnSelect },
                _react2.default.createElement(
                  'span',
                  { className: 'marginR5' },
                  ' Done'
                ),
                '' +
                  (selectedItems.length ? '(' + selectedItems.length + ')' : '')
              )
            )
          )
        );
      }),
      (_this.handleControl = function(arg) {
        var _this$state2 = _this.state,
          inputValue = _this$state2.inputValue,
          showInput = _this$state2.showInput;
        var isDisabled = _this.props.isDisabled;

        return _react2.default.createElement(
          'div',
          { className: 'selectBoxWrapper' },
          _react2.default.createElement(
            'div',
            {
              className: showInput ? 'activeSearch' : '',
              onClick: function onClick() {
                !isDisabled &&
                  _this.setState({
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
                    _this.iconRef = e;
                  }
                }
              },
              _react2.default.createElement(_Icon2.default, {
                type: 'cross',
                onClick: function onClick() {
                  return _this.setState({ inputValue: '' });
                }
              })
            )
          )
        );
      }),
      (_this.onInputChange = function(input, event) {
        if (event.action == 'input-change')
          _this.setState({ inputValue: input });
      }),
      (_this.getButtonText = function() {
        var _this$props3 = _this.props,
          buttonLabel = _this$props3.buttonLabel,
          value = _this$props3.value;
        var selectedItems = _this.state.selectedItems;

        if (value) {
          selectedItems = _this.getSelectedItemsFromValue(value);
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
          return buttonLabel + '.' + selectedItems.length;
        }
        return buttonLabel;
      }),
      (_this.handleSingleOnSelect = function(data) {
        var onChange = _this.props.onChange;

        var newState = _this.getNewStateAfterOnSelect();
        newState.selectedItems = [data];
        _this.setState((0, _extends3.default)({}, newState));
        onChange(data);
      }),
      (_this.handleSingleOnBlur = function() {
        if (_this.isIconClicked) {
          _this.isIconClicked = false;
          return;
        }
        _this.isBlurActive = true;
        var newState = _this.getNewStateAfterOnSelect();
        _this.setState((0, _extends3.default)({}, newState));
      }),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    );
  }

  (0, _createClass3.default)(SyncSelect, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _props = this.props,
          defaultValue = _props.defaultValue,
          isButton = _props.isButton,
          options = _props.options,
          value = _props.value;

        if (isButton) {
          this.setState({ showSelect: false });
        }
        var newValue = value ? value : defaultValue;
        var selectedItems = this.getSelectedItemsFromValue(newValue);
        var sortedOptions = this.__sortOptions(options, selectedItems);
        sortedOptions = this.normalizeOption(sortedOptions);
        this.setState({ selectedItems: selectedItems, options: sortedOptions });
        document.addEventListener('mousedown', this.handleClickOutside);
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
      }
    },
    {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _props2 = this.props,
          options = _props2.options,
          value = _props2.value;

        if (
          value != nextProps.value ||
          !this.isOptionsEqual(options, nextProps.options)
        ) {
          var selectedItems = [];
          if (value) {
            selectedItems = this.getSelectedItemsFromValue(nextProps.value);
          }
          var sortedOptions = this.__sortOptions(
            nextProps.options,
            selectedItems
          );
          sortedOptions = this.normalizeOption(sortedOptions);
          this.setState({
            options: sortedOptions,
            selectedItems: selectedItems
          });
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props3 = this.props,
          isMulti = _props3.isMulti,
          isButton = _props3.isButton,
          buttonMaxWidth = _props3.buttonMaxWidth,
          buttonMinWidth = _props3.buttonMinWidth;
        var _state = this.state,
          options = _state.options,
          selectedItems = _state.selectedItems,
          menuIsOpen = _state.menuIsOpen,
          showSelect = _state.showSelect,
          showInput = _state.showInput,
          inputValue = _state.inputValue;

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
              autosize: false,
              onBlur: this.handleMultiOnSelect,
              inputValue: inputValue,
              onInputChange: this.onInputChange
            }
          : {
              components: {
                Option: this.optionWithCheckBox,
                Control: this.handleControl,
                SingleValue: this.handleSingleValue
              },
              onChange: this.handleSingleOnSelect,
              onBlur: this.handleSingleOnBlur,
              autoFocus: showInput,
              isFocused: true,
              backspaceRemovesValue: false,
              inputValue: inputValue,
              onInputChange: this.onInputChange,
              controlShouldRenderValue: !showInput,
              menuIsOpen: menuIsOpen,
              value: selectedItems[0]
            };
        return _react2.default.createElement(
          'div',
          null,
          isButton &&
            _react2.default.createElement(
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
          showSelect &&
            _react2.default.createElement(
              _reactSelect2.default,
              (0, _extends3.default)(
                {
                  styles: {
                    container: function container(base) {
                      return (0, _extends3.default)({}, base, {
                        width: '210px',
                        position: isButton ? 'absolute' : 'inherit'
                      });
                    }
                  }
                },
                this.props,
                {
                  options: options,
                  classNamePrefix: 'mt-react-select'
                },
                selectProps
              )
            )
        );
      }
    }
  ]);
  return SyncSelect;
})(_react.Component);

SyncSelect.propTypes = {
  options: _propTypes2.default.arrayOf(_propTypes2.default.object),
  defaultValue: _propTypes2.default.oneOfType([
    _propTypes2.default.string,
    _propTypes2.default.arrayOf(_propTypes2.default.string)
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
    _propTypes2.default.string,
    _propTypes2.default.arrayOf(_propTypes2.default.string)
  ])
};
SyncSelect.defaultProps = {
  buttonLabel: 'filter',
  onChange: noop,
  sortOptions: true
};
exports.default = SyncSelect;
