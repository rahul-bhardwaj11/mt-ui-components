'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {
  return undefined;
};

var SyncSelect = function (_Component) {
  (0, _inherits3.default)(SyncSelect, _Component);

  function SyncSelect() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SyncSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SyncSelect.__proto__ || (0, _getPrototypeOf2.default)(SyncSelect)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      options: _this.props.options,
      selectedItems: [],
      menuIsOpen: false,
      showSelect: true,
      showInput: false,
      inputValue: ''
    }, _this.handleClickOutside = function (event) {
      if (_this.buttonRef && _this.buttonRef.contains(event.target)) {
        _this.isBlurActive = false;
      }
    }, _this.normalizeOption = function (sortedOptions) {
      var isMulti = _this.props.isMulti;

      if (!isMulti) {
        sortedOptions.unshift({ label: 'None', value: 'None' });
      }
      return sortedOptions;
    }, _this.__sortOptions = function (options) {
      var selectedItems = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var optionsToSort = options.filter(function (option) {
        return selectedItems.indexOf(option) < 0;
      });
      optionsToSort.sort(function (item1, item2) {
        return item1.label > item2.label;
      });
      var sortedOptions = [].concat((0, _toConsumableArray3.default)(selectedItems), (0, _toConsumableArray3.default)(optionsToSort));
      return sortedOptions;
    }, _this.onCheckboxClick = function (data) {
      var selectedItems = [].concat((0, _toConsumableArray3.default)(_this.state.selectedItems));
      var index = selectedItems.indexOf(data);
      if (index < 0) {
        selectedItems.push(data);
      } else {
        selectedItems.splice(index, 1);
      }
      _this.setState({ selectedItems: selectedItems });
    }, _this.onClearAll = function () {
      var selectedItems = [];
      _this.setState({ selectedItems: selectedItems });
    }, _this.onDone = function () {
      _this.isBlurActive = true;
      var _this$state = _this.state,
          selectedItems = _this$state.selectedItems,
          options = _this$state.options;
      var _this$props = _this.props,
          isButton = _this$props.isButton,
          onChange = _this$props.onChange;

      var selectedValues = selectedItems.map(function (selectedItem) {
        return selectedItem.value;
      });
      onChange(selectedValues);
      var sortedOptions = _this.__sortOptions(options, selectedItems);
      var newState = {
        options: sortedOptions,
        menuIsOpen: false,
        showInput: false,
        inputValue: ''
      };
      newState = isButton ? (0, _assign2.default)(newState, { showSelect: false }) : newState;
      _this.setState((0, _extends3.default)({}, newState));
    }, _this.toggleButton = function () {
      if (_this.isBlurActive) {
        _this.isBlurActive = false;
        return;
      }
      _this.setState(function (prevState) {
        return {
          showSelect: !prevState.showSelect,
          menuIsOpen: !prevState.menuIsOpen,
          showInput: !prevState.showInput
        };
      });
    }, _this.handleDisplayValue = function (_ref2) {
      var data = _ref2.data;
      var selectedItems = _this.state.selectedItems;

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
    }, _this.handleSingleValue = function (_ref3) {
      var data = _ref3.data,
          props = (0, _objectWithoutProperties3.default)(_ref3, ['data']);
      var placeholder = _this.props.placeholder;

      return _react2.default.createElement(
        _reactSelect.components.SingleValue,
        props,
        data.value == 'None' ? placeholder : data.label
      );
    }, _this.optionWithCheckBox = function (_ref4) {
      var isDisabled = _ref4.isDisabled,
          data = _ref4.data;
      var selectedItems = _this.state.selectedItems;

      return !isDisabled ? _react2.default.createElement(
        'div',
        {
          onClick: function onClick() {
            return _this.onCheckboxClick(data);
          },
          className: 'checkboxWrapper'
        },
        _react2.default.createElement(_CheckBox2.default, { checked: selectedItems.indexOf(data) > -1 }),
        _react2.default.createElement(
          'span',
          { className: 'dataLabel' },
          data.label
        )
      ) : null;
    }, _this.buildMenu = function (props) {
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
              { type: 'text', onClick: _this.onDone },
              _react2.default.createElement(
                'span',
                { className: 'marginR5' },
                ' Done'
              ),
              '' + (selectedItems.length ? '(' + selectedItems.length + ')' : '')
            )
          )
        )
      );
    }, _this.handleControl = function (arg) {
      var _this$state2 = _this.state,
          inputValue = _this$state2.inputValue,
          showInput = _this$state2.showInput;

      return _react2.default.createElement(
        'div',
        { className: 'selectBoxWrapper' },
        _react2.default.createElement(
          'div',
          {
            className: showInput ? 'activeSearch' : '',
            onClick: function onClick() {
              _this.setState({
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
                return _this.setState({ inputValue: '' });
              }
            })
          )
        )
      );
    }, _this.onInputChange = function (input, event) {
      if (event.action == 'input-change') _this.setState({ inputValue: input });
    }, _this.getButtonText = function () {
      var selectedItems = _this.state.selectedItems;
      var buttonLabel = _this.props.buttonLabel;

      var selectedItemsLength = selectedItems.length;
      if (selectedItemsLength) {
        if (selectedItemsLength == 1) return '' + selectedItems[0].label;
        return buttonLabel + '.' + selectedItems.length;
      }
      return buttonLabel;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SyncSelect, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          defaultValue = _props.defaultValue,
          isButton = _props.isButton,
          options = _props.options;

      if (isButton) {
        this.setState({ showSelect: false });
      }
      var selectedItems = [];
      if (defaultValue) {
        if (defaultValue.length) {
          defaultValue.map(function (option) {
            selectedItems.push(option);
          });
        } else {
          selectedItems.push(defaultValue);
        }
      }
      var sortedOptions = this.__sortOptions(options, selectedItems);
      sortedOptions = this.normalizeOption(sortedOptions);
      this.setState({ selectedItems: selectedItems, options: sortedOptions });
      document.addEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.options != nextProps.options) {
        var sortedOptions = this.__sortOptions(nextProps.options);
        sortedOptions = this.normalizeOption(sortedOptions);
        this.setState({ options: sortedOptions });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          isMulti = _props2.isMulti,
          isButton = _props2.isButton;
      var _state = this.state,
          options = _state.options,
          selectedItems = _state.selectedItems,
          menuIsOpen = _state.menuIsOpen,
          showSelect = _state.showSelect,
          showInput = _state.showInput,
          inputValue = _state.inputValue;

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
        autosize: false,
        onBlur: this.onDone,
        inputValue: inputValue,
        onInputChange: this.onInputChange
      } : {
        components: {
          Control: this.handleControl,
          SingleValue: this.handleSingleValue
        },
        onChange: function onChange(value) {
          _this2.setState({ showInput: false });
          _this2.props.onChange(value);
        },
        onBlur: function onBlur() {
          return _this2.setState({ showInput: false });
        },
        autoFocus: showInput,
        backspaceRemovesValue: false,
        inputValue: inputValue,
        onInputChange: this.onInputChange,
        controlShouldRenderValue: !showInput
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
            { type: 'secondary', onClick: this.toggleButton },
            this.getButtonText()
          )
        ),
        showSelect && _react2.default.createElement(_reactSelect2.default, (0, _extends3.default)({}, this.props, {
          options: options,
          classNamePrefix: 'mt-react-select'
        }, selectProps))
      );
    }
  }]);
  return SyncSelect;
}(_react.Component);

SyncSelect.propTypes = {
  options: _propTypes2.default.arrayOf(_propTypes2.default.object),
  defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.array]),
  isMulti: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  isButton: _propTypes2.default.bool,
  buttonLabel: _propTypes2.default.string,
  placeholder: _propTypes2.default.string
};
SyncSelect.defaultProps = {
  buttonLabel: 'filter',
  onChange: noop
};
exports.default = SyncSelect;
//# sourceMappingURL=syncSelect.js.map