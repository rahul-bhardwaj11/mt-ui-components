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

var _popconfirm = require('antd/lib/popconfirm');

var _popconfirm2 = _interopRequireDefault(_popconfirm);

require('antd/lib/popconfirm/style/css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const MtConfirmBox = styled.div`
//   .actionButtons {
//     text-align: right;
//     margin-top: 25px;
//     div {
//       display: inline-block;
//     }
//   }
//   h2 {
//     color: #2a2e36;
//     font-size: 14px;
//     font-weight: 600;
//     text-align: left;
//   }
// `;

//import styled from "styled-components";
var ConfirmBox = function (_Component) {
  (0, _inherits3.default)(ConfirmBox, _Component);

  function ConfirmBox() {
    (0, _classCallCheck3.default)(this, ConfirmBox);
    return (0, _possibleConstructorReturn3.default)(this, (ConfirmBox.__proto__ || (0, _getPrototypeOf2.default)(ConfirmBox)).apply(this, arguments));
  }

  (0, _createClass3.default)(ConfirmBox, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react2.default.createElement(
        _popconfirm2.default,
        this.props,
        children
      );
    }
  }]);
  return ConfirmBox;
}(_react.Component);

ConfirmBox.propTypes = {
  title: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node,
  onConfirm: _propTypes2.default.func,
  onCancel: _propTypes2.default.func,
  okText: _propTypes2.default.string,
  cancelText: _propTypes2.default.string
};
exports.default = ConfirmBox;
//# sourceMappingURL=index.js.map