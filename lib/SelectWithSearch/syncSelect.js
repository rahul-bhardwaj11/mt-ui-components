'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _CheckBox = require('../CheckBox');

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var noop = function noop() {
  return undefined;
};

var SyncSelect = (function(_Component) {
  (0, _inherits3.default)(SyncSelect, _Component);

  function SyncSelect(props) {
    (0, _classCallCheck3.default)(this, SyncSelect);

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (SyncSelect.__proto__ || (0, _getPrototypeOf2.default)(SyncSelect)).call(
        this,
        props
      )
    );

    _initialiseProps.call(_this);

    _this.state = {
      options: _this.filterOptions(_this.props.options),
      selectedItems: [],
      prevSelectedItems: [],
      menuIsOpen: false,
      showSelect: true,
      showInput: false,
      inputValue: ''
    };
    return _this;
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
        this.setState({
          selectedItems: selectedItems,
          options: sortedOptions,
          prevSelectedItems: selectedItems
        });
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

        var filteredOptions = this.filterOptions(nextProps.options);
        if (
          value != nextProps.value ||
          !this.isOptionsEqual(options, nextProps.options)
        ) {
          var selectedItems = [];
          if (value) {
            selectedItems = this.getSelectedItemsFromValue(nextProps.value);
          }
          var sortedOptions = this.__sortOptions(
            filteredOptions,
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
          _react2.default.Fragment,
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
                  style: {
                    maxWidth: buttonMaxWidth,
                    minWidth: buttonMinWidth
                  },
                  size: 'small',
                  className: (0, _classnames2.default)(
                    selectedItems.length > 0 ? 'selectedItems' : '',
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
                    _this2.selectRef = e;
                  }
                }
              },
              _react2.default.createElement(
                _reactSelect2.default,
                (0, _extends3.default)(
                  {
                    styles: this.getStyle()
                  },
                  this.props,
                  {
                    options: options,
                    classNamePrefix: 'mt-react-select'
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
  ]),
  style: _propTypes2.default.object,
  optionRenderer: _propTypes2.default.func,
  showSearch: _propTypes2.default.bool,
  hasNone: _propTypes2.default.bool
};
SyncSelect.defaultProps = {
  buttonLabel: 'filter',
  onChange: noop,
  sortOptions: true,
  options: [],
  hasNone: true
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.filterOptions = function(options) {
    return options.filter(function(option) {
      return option.label;
    });
  };

  this.getSelectedItemsFromValue = function(value) {
    var options = _this3.props.options;

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
  };

  this.handleClickOutside = function(event) {
    if (_this3.buttonRef && _this3.buttonRef.contains(event.target)) {
      _this3.isBlurActive = false;
    }
    if (_this3.iconRef && _this3.iconRef.contains(event.target)) {
      _this3.setState({ inputValue: '' });
      _this3.isIconClicked = true;
    }
    if (_this3.selectRef && _this3.selectRef.contains(event.target)) {
      _this3.isBlurActive = false;
    }

    if (!_this3.selectRef.contains(event.target)) {
      if (
        (_this3.buttonRef && !_this3.buttonRef.contains(event.target)) ||
        !_this3.props.isButton
      )
        _this3.props.isMulti
          ? _this3.handleMultiOnSelect()
          : _this3.handleSingleOnBlur();
    }
  };

  this.normalizeOption = function(sortedOptions) {
    var _props4 = _this3.props,
      isMulti = _props4.isMulti,
      hasNone = _props4.hasNone;

    if (!isMulti && hasNone) {
      sortedOptions.unshift({ label: 'None', value: 'None' });
    }
    return sortedOptions;
  };

  this.isOptionsEqual = function() {
    var prevOptions =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var newOptions =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    if (prevOptions.length != newOptions.length) return false;
    if (prevOptions.length) {
      prevOptions.forEach(function(option, index) {
        if (option.value != newOptions[index].value) return false;
      });
    }
    return true;
  };

  this.__sortOptions = function(options) {
    var selectedItems =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var sortOptions = _this3.props.sortOptions;

    if (!sortOptions) return options;
    var optionsToSort = options.filter(function(option) {
      return !selectedItems.some(function(currOption) {
        return option.value == currOption.value;
      });
    });
    optionsToSort.sort(function(item1, item2) {
      return item1.label > item2.label;
    });
    var sortedOptions = [].concat(
      (0, _toConsumableArray3.default)(selectedItems),
      (0, _toConsumableArray3.default)(optionsToSort)
    );
    return sortedOptions;
  };

  this.onCheckboxClick = function(data, event) {
    if (event) {
      return;
    }
    var selectedItems = [].concat(
      (0, _toConsumableArray3.default)(_this3.state.selectedItems)
    );
    var index = selectedItems.indexOf(data);
    if (index < 0) {
      selectedItems.push(data);
    } else {
      selectedItems.splice(index, 1);
    }
    _this3.setState({ selectedItems: selectedItems });
  };

  this.onClearAll = function() {
    var selectedItems = [];
    _this3.setState({ selectedItems: selectedItems });
  };

  this.getNewStateAfterOnSelect = function() {
    var isButton = _this3.props.isButton;

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
    if (_this3.isIconClicked) {
      _this3.isIconClicked = false;
      return;
    }
    _this3.isBlurActive = true;
    var _state2 = _this3.state,
      selectedItems = _state2.selectedItems,
      prevSelectedItems = _state2.prevSelectedItems,
      options = _state2.options;
    var onChange = _this3.props.onChange;

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
      _this3.setState({ prevSelectedItems: selectedItems });
    }
    var sortedOptions = _this3.__sortOptions(options, selectedItems);
    var newState = _this3.getNewStateAfterOnSelect();
    newState.options = sortedOptions;
    _this3.setState((0, _extends3.default)({}, newState));
  };

  this.toggleButton = function() {
    if (_this3.isBlurActive) {
      _this3.isBlurActive = false;
      return;
    }
    _this3.setState(function(prevState) {
      return {
        showSelect: !prevState.showSelect,
        menuIsOpen: !prevState.menuIsOpen,
        showInput: !prevState.showInput
      };
    });
  };

  this.handleDisplayValue = function(_ref) {
    var data = _ref.data;
    var selectedItems = _this3.state.selectedItems;
    var _props5 = _this3.props,
      value = _props5.value,
      placeholder = _props5.placeholder;

    if (value) {
      selectedItems = _this3.getSelectedItemsFromValue(value);
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
            (selectedItems.length > 1 ? '+' + (selectedItems.length - 1) : '')
        )
      );
    return null;
  };

  this.handleSingleValue = function(props) {
    var selectedItems = _this3.state.selectedItems;
    var _props6 = _this3.props,
      value = _props6.value,
      placeholder = _props6.placeholder;

    if (value) {
      selectedItems = _this3.getSelectedItemsFromValue(value);
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
    var optionRenderer = _this3.props.optionRenderer;
    var selectedItems = _this3.state.selectedItems;

    var checked = selectedItems
      .map(function(i) {
        return i.value;
      })
      .includes(data.value);
    if (!_this3.props.isMulti)
      return optionRenderer
        ? _react2.default.createElement(
            'div',
            {
              title: data.label,
              onClick: function onClick() {
                _this3.handleSingleOnSelect(data);
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
                    !data.disabled && _this3.onCheckboxClick(data);
                  }
                },
                optionRenderer(
                  (0, _extends3.default)({}, data, { checked: checked })
                )
              )
            : _react2.default.createElement(
                _CheckBox2.default,
                {
                  disabled: data.disabled,
                  checked: checked,
                  className: 'labelText',
                  onChange: function onChange() {
                    !data.disabled && _this3.onCheckboxClick(data);
                  }
                },
                data.label
              )
        )
      : null;
  };

  this.buildMenu = function(props) {
    var selectedItems = _this3.state.selectedItems;

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
            { type: 'text', onClick: _this3.onClearAll },
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
              onClick: _this3.handleMultiOnSelect,
              className: selectedItems.length ? 'activeBtnState' : ' '
            },
            'Apply',
            _react2.default.createElement(
              'span',
              { className: 'doneMarginR' },
              '' +
                (selectedItems.length ? '(' + selectedItems.length + ')' : '')
            )
          )
        )
      )
    );
  };

  this.handleControl = function(arg) {
    var _state3 = _this3.state,
      inputValue = _state3.inputValue,
      showInput = _state3.showInput;
    var _props7 = _this3.props,
      isDisabled = _props7.isDisabled,
      showSearch = _props7.showSearch;

    var controlProps = (0, _extends3.default)({}, arg);
    var openModal = function openModal() {
      !isDisabled &&
        _this3.setState({
          menuIsOpen: true,
          showInput: true
        });
    };
    controlProps.innerProps = (0, _extends3.default)({}, arg.innerProps, {
      onTouchEnd: openModal
    });
    return (
      showSearch &&
      _react2.default.createElement(
        'div',
        { className: 'selectBoxWrapper' },
        _react2.default.createElement(
          'div',
          { className: showInput ? 'activeSearch' : '', onClick: openModal },
          _react2.default.createElement(
            _reactSelect.components.Control,
            controlProps
          ),
          _react2.default.createElement(
            'div',
            {
              className: inputValue.length ? 'activeInput' : '',
              ref: function ref(e) {
                if (e) {
                  _this3.iconRef = e;
                }
              }
            },
            _react2.default.createElement(_Icon2.default, {
              type: 'cross',
              onClick: function onClick() {
                return _this3.setState({ inputValue: '' });
              }
            })
          )
        )
      )
    );
  };

  this.onInputChange = function(input, event) {
    if (event.action == 'input-change') _this3.setState({ inputValue: input });
  };

  this.getButtonText = function() {
    var _props8 = _this3.props,
      buttonLabel = _props8.buttonLabel,
      value = _props8.value;
    var selectedItems = _this3.state.selectedItems;

    if (value) {
      selectedItems = _this3.getSelectedItemsFromValue(value);
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
    var onChange = _this3.props.onChange;

    var newState = _this3.getNewStateAfterOnSelect();
    newState.selectedItems = [data];
    _this3.setState((0, _extends3.default)({}, newState));
    onChange(data);
  };

  this.handleSingleOnBlur = function() {
    if (_this3.isIconClicked) {
      _this3.isIconClicked = false;
      return;
    }
    _this3.isBlurActive = true;
    var newState = _this3.getNewStateAfterOnSelect();
    _this3.setState((0, _extends3.default)({}, newState));
  };

  this.getStyle = function() {
    var _props9 = _this3.props,
      isButton = _props9.isButton,
      _props9$style = _props9.style,
      target = _props9$style === undefined ? {} : _props9$style;

    var DEFAULT_SELECT_STYLE = {
      container: function container(base) {
        return (0, _extends3.default)({}, base, {
          width: base.width ? base.width : '210px',
          minWidth: '210px',
          position: isButton ? 'absolute' : 'inherit'
        });
      }
    };
    var styles = (0, _extends3.default)({}, DEFAULT_SELECT_STYLE);
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

exports.default = SyncSelect;
