'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

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

var MtWrapper = _styledComponents2.default.span.withConfig({
  displayName: 'Select__MtWrapper',
  componentId: 'pwbkh2-0'
})(
  [
    '.selectDropdownStyle{z-index:999999;.ant-select-dropdown-menu-item{div{width:',
    ';text-overflow:ellipsis;overflow:hidden;white-space:nowrap;}}}.ant-select-dropdown-menu-item-disabled{background:',
    ";opacity:0.8;pointer-events:none;}.icon-tick{display:none;}.ant-select,.ant-select-dropdown{font-family:inherit;}.ant-select-arrow{display:block;background:url('",
    "') no-repeat 1px 4px;background-size:8px;width:9px;height:9px;&::before{content:'';}svg{display:none;}}.ant-select-selection{&.ant-select-selection--single{border:1px solid ",
    ';&:hover{border:1px solid ',
    ';}&:focus,&:active{box-shadow:none;border:1px solid ',
    ';}&.disabled{background-color:#f8f8f8;border:1px solid #e8e8e8;}}.ant-select-open{.ant-select-selection{border:1px solid ',
    ';}}}.ant-select-open{.ant-select-selection{&.ant-select-selection--multiple{border:1px solid transparent;outline:none;&:hover,&:focus,&:active{border:0px;border-color:transparent;outline:none;box-shadow:none;}}}}.ant-select-dropdown-menu{background-color:',
    ';color:',
    ';margin:8px;.ant-select-dropdown-menu-item{border-radius:4px;color:#606369;&:hover{background-color:',
    ';color:',
    ';border-radius:4px;}}.ant-select-dropdown-menu-item-active{background-color:',
    ';color:',
    ";}.ant-select-dropdown-menu-item-selected{background-color:#E4EFFB;.icon-tick{content:'';font-size:7px;font-weight:bold;position:absolute;display:block;right:5px;top:13px;}&:hover{.icon-tick{display:block;}}}}.ant-select-selection-selected-value{font-weight:normal;div{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%;}}.ant-select-selection--multiple{width:688px;padding:5px;border:0px;&:focus{border-color:transparent;box-shadow:none;}.ant-select-selection__rendered{& > ul{& > .ant-select-selection__choice{border-radius:14px;border:1px solid ",
    ';border-radius:16px;background-color:',
    ';color:',
    ';font-size:12px;.ant-select-selection__choice__content{margin-right:5px;}&:hover{border:1px solid #468ee5;background-color:',
    ';color:#468ee5;cursor:pointer;.ant-select-selection__choice__remove{color:#468ee5;}}.ant-select-selection__choice__remove{color:',
    ';font-size:16px;}}}}}.ant-select-dropdown--multiple{z-index:999999;}'
  ],
  function(props) {
    return props.showTick ? '95%' : null;
  },
  _theme2.default.colors.PORCELAIN,
  _downFillcaret2.default,
  _theme2.default.colors.ALTO,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.SILVER,
  _theme2.default.colors.WHITE,
  _theme2.default.colors.GREY,
  _theme2.default.colors.TAG_HOVER_TEXT_COLOR,
  _theme2.default.colors.WHITE,
  _theme2.default.colors.TROPICAL_BLUE,
  _theme2.default.colors.SHARK,
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
    _this.state = {
      key: 'select'
    };

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

      // hack for controlled value
    },
    {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.value != this.props.value) {
          this.setState({ key: nextProps.value });
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
          options = _props.options,
          style = _props.style,
          showTick = _props.showTick;

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
            { style: style, key: this.state.key, showTick: showTick },
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
                    title: _this2.props.title || option.title,
                    disabled: option.disabled
                  },
                  typeof option.content === 'string'
                    ? _react2.default.createElement(_StringToHTML2.default, {
                        content: option.content
                      })
                    : option.content,
                  showTick &&
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
  getPopupContainer: _propTypes2.default.func,
  showTick: _propTypes2.default.bool,
  value: _propTypes2.default.oneOfType([
    _propTypes2.default.string,
    _propTypes2.default.number,
    _propTypes2.default.array
  ])
};
Select.defaultProps = {
  style: { minWidth: 125 },
  showTick: true
};
exports.default = Select;
