'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(
  [
    "\n  display: block;\n  .selectDropdownStyle {\n    z-index: 999999;\n    .ant-select-dropdown-menu-item {\n     div {\n         width: 95%;\n         text-overflow: ellipsis;\n         overflow: hidden;\n         white-space: nowrap;\n       }\n     }\n   }\n  .icon-tick {\n    display: none;\n  }\n  .ant-select, .ant-select-dropdown{\n    font-family: inherit;\n  }\n  .ant-select-arrow {\n    display: block;\n    background: url('",
    "') no-repeat 1px 4px;\n    background-size: 8px;\n    width: 9px;\n    height: 9px;\n    &::before {\n      content: '';\n    }\n    svg{\n      display:none;\n    }\n  }\n  .ant-select-selection {\n    &.ant-select-selection--single {\n      border: 1px solid ",
    ';\n      &:hover {\n        border: 1px solid ',
    ';\n      }\n      &:focus,\n      &:active {\n        box-shadow: none;\n        border: 1px solid ',
    ';\n      }\n      &.disabled {\n        background-color: #f8f8f8;\n        border: 1px solid #e8e8e8;\n      }\n    }\n    .ant-select-open {\n      .ant-select-selection {\n        border: 1px solid ',
    ';\n      }\n    }\n    &:hover, &:focus, &:active, &:focus-within, &:visited {\n      border-color: ',
    ';\n      box-shadow: none;\n    }\n  }\n\n  .ant-select-open {\n    .ant-select-selection {\n      &.ant-select-selection--multiple {\n        border: 1px solid ',
    ';\n        outline: none;\n        &:hover,\n        &:focus,\n        &:active {\n          border: 1px solid ',
    ';\n          border-color: ',
    ';\n          outline: none;\n          box-shadow: none;\n        }\n      }\n    }\n  }\n  .ant-select-dropdown-menu {\n    background-color: ',
    ';\n    color: ',
    ';\n    margin: 8px;\n    .ant-select-dropdown-menu-item {\n      border-radius: 4px;\n      color: #606369;\n      // &:first-child {\n      //   background-color: ',
    ';\n      // }\n      &:hover {\n        background-color: ',
    ';\n        color: ',
    ';\n        border-radius: 4px;\n      }\n    }\n    .ant-select-dropdown-menu-item-active {\n      background-color: ',
    ';\n      color: ',
    ";\n    }\n\n  .ant-select-dropdown-menu-item-selected{\n      .icon-tick {\n        content: '';\n        font-size: 7px;\n        font-weight: bold;\n        position: absolute;\n        display: block;\n        right: 5px;\n        top: 13px;\n      }\n      &:hover {\n        .icon-tick {\n          display: block;\n        }\n      }\n    }\n  }\n  .ant-select-selection-selected-value {\n    font-weight: normal;\n    div {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      max-width: 100%;\n    }\n  }\n  .ant-select-selection--multiple {\n    padding: 0;\n    border: border-color: 1px solid ",
    ';\n    &:focus {\n      border-color: 1px solid ',
    ';\n      box-shadow: none;\n    }\n    .ant-select-selection__rendered {\n      & > ul {\n        & > .ant-select-selection__choice {\n          border-radius: 14px;\n          border: 1px solid ',
    ';\n          border-radius: 16px;\n          background-color: ',
    ';\n          color: ',
    ';\n          font-size: 12px;\n          .ant-select-selection__choice__content {\n            margin-right: 5px;\n          }\n          &:hover {\n            border: 1px solid #468ee5;\n            background-color: ',
    ';\n            color: #468ee5;\n            cursor: pointer;\n            .ant-select-selection__choice__remove {\n              color: #468ee5;\n            }\n          }\n          .ant-select-selection__choice__remove {\n            color: ',
    ';\n            font-size: 16px;\n          }\n        }\n      }\n\n      & > ul > li {\n        margin-bottom: 3px;\n      }\n    }\n  }\n  .ant-select-dropdown, .ant-select-dropdown--multiple {\n    z-index: 999999;\n  }\n'
  ],
  [
    "\n  display: block;\n  .selectDropdownStyle {\n    z-index: 999999;\n    .ant-select-dropdown-menu-item {\n     div {\n         width: 95%;\n         text-overflow: ellipsis;\n         overflow: hidden;\n         white-space: nowrap;\n       }\n     }\n   }\n  .icon-tick {\n    display: none;\n  }\n  .ant-select, .ant-select-dropdown{\n    font-family: inherit;\n  }\n  .ant-select-arrow {\n    display: block;\n    background: url('",
    "') no-repeat 1px 4px;\n    background-size: 8px;\n    width: 9px;\n    height: 9px;\n    &::before {\n      content: '';\n    }\n    svg{\n      display:none;\n    }\n  }\n  .ant-select-selection {\n    &.ant-select-selection--single {\n      border: 1px solid ",
    ';\n      &:hover {\n        border: 1px solid ',
    ';\n      }\n      &:focus,\n      &:active {\n        box-shadow: none;\n        border: 1px solid ',
    ';\n      }\n      &.disabled {\n        background-color: #f8f8f8;\n        border: 1px solid #e8e8e8;\n      }\n    }\n    .ant-select-open {\n      .ant-select-selection {\n        border: 1px solid ',
    ';\n      }\n    }\n    &:hover, &:focus, &:active, &:focus-within, &:visited {\n      border-color: ',
    ';\n      box-shadow: none;\n    }\n  }\n\n  .ant-select-open {\n    .ant-select-selection {\n      &.ant-select-selection--multiple {\n        border: 1px solid ',
    ';\n        outline: none;\n        &:hover,\n        &:focus,\n        &:active {\n          border: 1px solid ',
    ';\n          border-color: ',
    ';\n          outline: none;\n          box-shadow: none;\n        }\n      }\n    }\n  }\n  .ant-select-dropdown-menu {\n    background-color: ',
    ';\n    color: ',
    ';\n    margin: 8px;\n    .ant-select-dropdown-menu-item {\n      border-radius: 4px;\n      color: #606369;\n      // &:first-child {\n      //   background-color: ',
    ';\n      // }\n      &:hover {\n        background-color: ',
    ';\n        color: ',
    ';\n        border-radius: 4px;\n      }\n    }\n    .ant-select-dropdown-menu-item-active {\n      background-color: ',
    ';\n      color: ',
    ";\n    }\n\n  .ant-select-dropdown-menu-item-selected{\n      .icon-tick {\n        content: '';\n        font-size: 7px;\n        font-weight: bold;\n        position: absolute;\n        display: block;\n        right: 5px;\n        top: 13px;\n      }\n      &:hover {\n        .icon-tick {\n          display: block;\n        }\n      }\n    }\n  }\n  .ant-select-selection-selected-value {\n    font-weight: normal;\n    div {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      max-width: 100%;\n    }\n  }\n  .ant-select-selection--multiple {\n    padding: 0;\n    border: border-color: 1px solid ",
    ';\n    &:focus {\n      border-color: 1px solid ',
    ';\n      box-shadow: none;\n    }\n    .ant-select-selection__rendered {\n      & > ul {\n        & > .ant-select-selection__choice {\n          border-radius: 14px;\n          border: 1px solid ',
    ';\n          border-radius: 16px;\n          background-color: ',
    ';\n          color: ',
    ';\n          font-size: 12px;\n          .ant-select-selection__choice__content {\n            margin-right: 5px;\n          }\n          &:hover {\n            border: 1px solid #468ee5;\n            background-color: ',
    ';\n            color: #468ee5;\n            cursor: pointer;\n            .ant-select-selection__choice__remove {\n              color: #468ee5;\n            }\n          }\n          .ant-select-selection__choice__remove {\n            color: ',
    ';\n            font-size: 16px;\n          }\n        }\n      }\n\n      & > ul > li {\n        margin-bottom: 3px;\n      }\n    }\n  }\n  .ant-select-dropdown, .ant-select-dropdown--multiple {\n    z-index: 999999;\n  }\n'
  ]
);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('antd/lib/dropdown/style/css');

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

require('antd/lib/select/style/index.css');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _downFillcaret = require('../styles/icons/downFillcaret.svg');

var _downFillcaret2 = _interopRequireDefault(_downFillcaret);

var _StringToHTML = require('../StringToHTML');

var _StringToHTML2 = _interopRequireDefault(_StringToHTML);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Option = _select2.default.Option;

var MtWrapper = _styledComponents2.default.div(
  _templateObject,
  _downFillcaret2.default,
  _theme2.default.colors.ALTO,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.ALTO,
  _theme2.default.colors.ALTO,
  _theme2.default.colors.ALTO,
  _theme2.default.colors.WHITE,
  _theme2.default.colors.GREY,
  _theme2.default.colors.WHITE,
  _theme2.default.colors.TAG_HOVER_TEXT_COLOR,
  _theme2.default.colors.WHITE,
  _theme2.default.colors.TROPICAL_BLUE,
  _theme2.default.colors.SHARK,
  _theme2.default.colors.ALTO,
  _theme2.default.colors.ALTO,
  _theme2.default.colors.ALTO,
  _theme2.default.colors.PORCELAIN,
  _theme2.default.colors.OUTER_SPACE,
  _theme2.default.colors.WHITE,
  _theme2.default.colors.OUTER_SPACE
);

var Select = (function(_Component) {
  (0, _inherits3.default)(Select, _Component);

  function Select(p) {
    (0, _classCallCheck3.default)(this, Select);

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (Select.__proto__ || (0, _getPrototypeOf2.default)(Select)).call(this, p)
    );

    _this.element = null;

    _this.element = document.createElement('div');
    _this.selectRef = _react2.default.createRef();
    return _this;
  }

  (0, _createClass3.default)(Select, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        document.body.appendChild(this.element);
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        document.body.removeChild(this.element);
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
          options = _props.options,
          style = _props.style;

        var container =
          this.props.getPopupContainer && this.props.getPopupContainer();
        return _react2.default.createElement(
          _react2.default.Fragment,
          null,
          _reactDom2.default.createPortal(
            _react2.default.createElement(MtWrapper, {
              style: style,
              innerRef: this.selectRef
            }),
            container || this.element
          ),
          _react2.default.createElement(
            MtWrapper,
            { style: style },
            _react2.default.createElement(
              _select2.default,
              (0, _extends3.default)({}, this.props, {
                onClick: function onClick(event) {
                  event.stopPropagation();
                },
                getPopupContainer: function getPopupContainer() {
                  return _this2.selectRef.current;
                },
                dropdownClassName: (0, _classnames2.default)(
                  'selectDropdownStyle',
                  this.props.className
                )
              }),
              options.map(function(option) {
                return _react2.default.createElement(
                  Option,
                  {
                    key: option.key,
                    value: option.key,
                    title: _this2.props.title || option.title
                  },
                  typeof option.content === 'string'
                    ? _react2.default.createElement(_StringToHTML2.default, {
                        content: option.content
                      })
                    : option.content,
                  _react2.default.createElement(_Icon2.default, {
                    type: 'tick'
                  })
                );
              })
            )
          )
        );
      }
    }
  ]);
  return Select;
})(_react.Component);

Select.propTypes = {
  options: _propTypes2.default.any.isRequired,
  onChange: _propTypes2.default.func,
  style: _propTypes2.default.object,
  defaultValue: _propTypes2.default.oneOfType([
    _propTypes2.default.string,
    _propTypes2.default.number
  ]),
  title: _propTypes2.default.string,
  className: _propTypes2.default.string,
  getPopupContainer: _propTypes2.default.func
};
Select.defaultProps = {
  style: { minWidth: 125 }
};

var AsyncSelect = (function(_Component2) {
  (0, _inherits3.default)(AsyncSelect, _Component2);

  function AsyncSelect() {
    var _ref,
      _this4 = this;

    var _temp, _this3, _ret;

    (0, _classCallCheck3.default)(this, AsyncSelect);

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret = ((_temp = ((_this3 = (0, _possibleConstructorReturn3.default)(
        this,
        (_ref =
          AsyncSelect.__proto__ ||
          (0, _getPrototypeOf2.default)(AsyncSelect)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this3)),
      (_this3.handleSearch = (function() {
        var _ref2 = (0, _asyncToGenerator3.default)(
          /*#__PURE__*/ _regenerator2.default.mark(function _callee(value) {
            return _regenerator2.default.wrap(
              function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _this3.props.handleSearch(value);

                    case 1:
                    case 'end':
                      return _context.stop();
                  }
                }
              },
              _callee,
              _this4
            );
          })
        );

        return function(_x) {
          return _ref2.apply(this, arguments);
        };
      })()),
      (_this3.handleChange = function(value) {
        _this3.props.handleChange(value);
      }),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this3, _ret)
    );
  }

  (0, _createClass3.default)(AsyncSelect, [
    {
      key: 'render',
      value: function render() {
        var _this5 = this;

        var style = this.props.style;

        return _react2.default.createElement(
          MtWrapper,
          {
            innerRef: function innerRef(el) {
              if (el) {
                _this5.selectDropdownRef = el;
              }
            },
            style: style
          },
          _react2.default.createElement(
            _select2.default,
            (0, _extends3.default)({}, this.props, {
              showSearch: true,
              value: this.props.value,
              onSearch: this.handleSearch,
              onChange: this.handleChange,
              filterOption: false,
              defaultActiveFirstOption: false,
              showArrow: false
            }),
            this.props.options &&
              this.props.options.map(function(option) {
                return _react2.default.createElement(
                  Option,
                  {
                    key: option.key,
                    value: option.key,
                    title: _this5.props.title || option.title
                  },
                  typeof option.content === 'string'
                    ? _react2.default.createElement(_StringToHTML2.default, {
                        content: option.content
                      })
                    : option.content
                );
              })
          )
        );
      }
    }
  ]);
  return AsyncSelect;
})(_react.Component);

AsyncSelect.propTypes = {
  handleSearch: _propTypes2.default.func.isRequired,
  handleChange: _propTypes2.default.func.isRequired,
  options: _propTypes2.default.array,
  style: _propTypes2.default.object,
  placeholder: _propTypes2.default.string,
  title: _propTypes2.default.string,
  value: _propTypes2.default.array
};
AsyncSelect.defaultProps = {
  style: { minWidth: 125 }
};

Select.Async = AsyncSelect;

exports.default = Select;
