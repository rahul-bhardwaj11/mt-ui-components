'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _svgIcons = require('./svgIcons');

var _svgIcons2 = _interopRequireDefault(_svgIcons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import styles from "./index.scss";

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import classnames from 'classnames';

// const noop = () => undefined;
// export default class Icon extends Component {
//   static propTypes = {
//     type: PropTypes.string.isRequired,
//     className: PropTypes.string,
//     onClick: PropTypes.func
//   };
//   static defaultProps = {
//     onClick: noop
//   };
//   render() {
//     const { type, className, onClick } = this.props;
//     return (
//       <span
//         className={classnames(`icon-${type}`, className)}
//         onClick={onClick}
//       />
//     );
//   }
// }

var noop = function noop() {
  return undefined;
};

var Icon = function (_Component) {
  (0, _inherits3.default)(Icon, _Component);

  function Icon() {
    (0, _classCallCheck3.default)(this, Icon);
    return (0, _possibleConstructorReturn3.default)(this, (Icon.__proto__ || (0, _getPrototypeOf2.default)(Icon)).apply(this, arguments));
  }

  (0, _createClass3.default)(Icon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          className = _props.className,
          onClick = _props.onClick,
          gradient = _props.gradient;

      var style = gradient ? (0, _extends3.default)({}, style, _svgIcons2.default[type]) : style;
      return _react2.default.createElement('span', {
        className: (0, _classnames3.default)((0, _defineProperty3.default)({}, 'icon-' + type, !gradient), className),
        style: style,
        onClick: onClick
      });
    }
  }]);
  return Icon;
}(_react.Component);

Icon.propTypes = {
  type: _propTypes2.default.string.isRequired,
  className: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  gradient: _propTypes2.default.bool
};
Icon.defaultProps = {
  onClick: noop,
  gradient: false
};
exports.default = Icon;