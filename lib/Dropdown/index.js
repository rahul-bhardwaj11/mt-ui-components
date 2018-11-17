'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(
  _objectWithoutProperties2
);

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
  ['\n  display: inline-block;\n'],
  ['\n  display: inline-block;\n']
);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dropdown = require('antd/lib/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _Menu = require('../Menu');

var _Menu2 = _interopRequireDefault(_Menu);

require('antd/lib/dropdown/style/index.css');

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

require('antd/lib/button/style/index.css');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var MtWrapper = _styledComponents2.default.div(_templateObject);

var Dropdown = (function(_Component) {
  (0, _inherits3.default)(Dropdown, _Component);

  function Dropdown(p) {
    (0, _classCallCheck3.default)(this, Dropdown);

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (Dropdown.__proto__ || (0, _getPrototypeOf2.default)(Dropdown)).call(
        this,
        p
      )
    );

    _this.dropdownRef = null;
    _this.element = null;

    _this.element = document.createElement('div');
    return _this;
  }

  (0, _createClass3.default)(Dropdown, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.getPopupContainer)
          document.body.appendChild(this.props.getPopupContainer());
        else {
          document.body.appendChild(this.element);
        }
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.props.getPopupContainer)
          document.body.removeChild(this.props.getPopupContainer());
        else {
          document.body.removeChild(this.element);
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
          options = _props.options,
          trigger = _props.trigger,
          children = _props.children,
          type = _props.type,
          label = _props.label,
          onSelect = _props.onSelect,
          placement = _props.placement,
          className = _props.className,
          selectedKeys = _props.selectedKeys,
          rest = (0, _objectWithoutProperties3.default)(_props, [
            'options',
            'trigger',
            'children',
            'type',
            'label',
            'onSelect',
            'placement',
            'className',
            'selectedKeys'
          ]);

        var container =
          this.props.getPopupContainer && this.props.getPopupContainer();

        var overlay = void 0;
        if (options instanceof Array) {
          overlay = _react2.default.createElement(_Menu2.default, {
            options: options,
            onClick: onSelect,
            selectedKeys: selectedKeys
          });
        } else {
          overlay = options;
        }
        if (type === 'button') {
          children = _react2.default.createElement(
            _button2.default,
            null,
            label || 'Button'
          );
        }

        return _react2.default.createElement(
          _react2.default.Fragment,
          null,
          _reactDom2.default.createPortal(
            _react2.default.createElement(MtWrapper, {
              className: className,
              innerRef: function innerRef(e) {
                return e && (_this2.dropdownRef = e);
              }
            }),
            container || this.element
          ),
          _react2.default.createElement(
            _dropdown2.default,
            (0, _extends3.default)(
              {
                overlay: overlay,
                trigger: [trigger],
                prefixCls: 'ant-dropdown',
                getPopupContainer: function getPopupContainer() {
                  return _this2.dropdownRef;
                },
                placement: placement
              },
              rest
            ),
            children
          )
        );
      }
    }
  ]);
  return Dropdown;
})(_react.Component);

Dropdown.propTypes = {
  options: _propTypes2.default.any.isRequired,
  trigger: _propTypes2.default.string,
  children: _propTypes2.default.node,
  onSelect: _propTypes2.default.func,
  type: _propTypes2.default.string,
  label: _propTypes2.default.string,
  getPopupContainer: _propTypes2.default.func,
  placement: _propTypes2.default.string,
  className: _propTypes2.default.string,
  selectedKeys: _propTypes2.default.array
};
Dropdown.defaultProps = {
  trigger: 'hover',
  placement: 'bottomRight',
  onSelect: function onSelect() {}
};
exports.default = Dropdown;
