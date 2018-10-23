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

exports.ConfirmAlert = ConfirmAlert;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _index = require('./index.scss');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfirmAlertBox = function (_Component) {
  (0, _inherits3.default)(ConfirmAlertBox, _Component);

  function ConfirmAlertBox() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ConfirmAlertBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ConfirmAlertBox.__proto__ || (0, _getPrototypeOf2.default)(ConfirmAlertBox)).call.apply(_ref, [this].concat(args))), _this), _this.onClickConfirm = function () {
      _this.props.onConfirm();
      _this.close();
    }, _this.onClickCancel = function () {
      _this.props.onCancel();
      _this.close();
    }, _this.close = function () {
      removeElementReconfirm();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ConfirmAlertBox, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          message = _props.message,
          confirmLabel = _props.confirmLabel,
          cancelLabel = _props.cancelLabel;


      return _react2.default.createElement(
        'div',
        { className: _index2.default.container },
        _react2.default.createElement('div', { className: _index2.default.reactConfirmAlertOverlay }),
        _react2.default.createElement(
          'div',
          { className: _index2.default.content },
          _react2.default.createElement(
            'div',
            { className: _index2.default.reactConfirmAlert },
            title && _react2.default.createElement(
              'h1',
              null,
              title
            ),
            message && _react2.default.createElement(
              'h3',
              null,
              message
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _index2.default.reactConfirmAlertButtonGroup },
            cancelLabel && _react2.default.createElement(
              'div',
              {
                className: [_index2.default.cancel, _index2.default.button].join(' '),
                onClick: this.onClickCancel
              },
              cancelLabel
            ),
            confirmLabel && _react2.default.createElement(
              'div',
              {
                className: [_index2.default.confirm, _index2.default.button].join(' '),
                onClick: this.onClickConfirm
              },
              confirmLabel
            )
          )
        )
      );
    }
  }]);
  return ConfirmAlertBox;
}(_react.Component);

ConfirmAlertBox.propTypes = {
  onConfirm: _propTypes2.default.func,
  onCancel: _propTypes2.default.func,
  title: _propTypes2.default.string,
  message: _propTypes2.default.string,
  confirmLabel: _propTypes2.default.string,
  cancelLabel: _propTypes2.default.string
};
exports.default = ConfirmAlertBox;


var root = void 0;
var targetId = 'an-confirm-alert';

function removeElementReconfirm() {
  var target = document.getElementById(targetId);
  (0, _reactDom.render)('', target, root);
  target.parentNode.removeChild(target);
}

function createElementReconfirm(properties) {
  var divTarget = document.createElement('div');
  divTarget.id = targetId;
  document.body.appendChild(divTarget);
  root = (0, _reactDom.render)(_react2.default.createElement(ConfirmAlertBox, properties), divTarget);
}

function ConfirmAlert(properties) {
  createElementReconfirm(properties);
}