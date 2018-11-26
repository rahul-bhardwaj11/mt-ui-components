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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _nanoid = require('nanoid');

var _nanoid2 = _interopRequireDefault(_nanoid);

var _Modal = require('../Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var noop = function noop() {
  return undefined;
};

var AlertBox = (function(_Component) {
  (0, _inherits3.default)(AlertBox, _Component);

  function AlertBox() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AlertBox);

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
          AlertBox.__proto__ ||
          (0, _getPrototypeOf2.default)(AlertBox)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.close = function(action) {
        var _this$props = _this.props,
          id = _this$props.id,
          removeAlert = _this$props.removeAlert,
          callback = _this$props.callback;

        callback(!!action);
        removeAlert(id);
      }),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    );
  }

  (0, _createClass3.default)(AlertBox, [
    {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
          children = _props.children,
          type = _props.type;

        var footer = void 0;
        if (type === 'Alert') {
          footer = null;
        }
        return _react2.default.createElement(
          _Modal2.default,
          {
            footer: footer,
            onCancel: function onCancel() {
              _this2.close(false);
            },
            onOk: function onOk() {
              _this2.close(true);
            },
            visible: true
          },
          children
        );
      }
    }
  ]);
  return AlertBox;
})(_react.Component);

AlertBox.propTypes = {
  children: _propTypes2.default.node.isRequired,
  id: _propTypes2.default.string.isRequired,
  removeAlert: _propTypes2.default.func.isRequired,
  okText: _propTypes2.default.string,
  cancelText: _propTypes2.default.string,
  callback: _propTypes2.default.func,
  type: _propTypes2.default.oneOf(['Confirm', 'Alert'])
};
AlertBox.defaultProps = {
  callback: noop
};

var Alert = (function(_Component2) {
  (0, _inherits3.default)(Alert, _Component2);

  function Alert() {
    var _ref2;

    var _temp2, _this3, _ret2;

    (0, _classCallCheck3.default)(this, Alert);

    for (
      var _len2 = arguments.length, args = Array(_len2), _key2 = 0;
      _key2 < _len2;
      _key2++
    ) {
      args[_key2] = arguments[_key2];
    }

    return (
      (_ret2 = ((_temp2 = ((_this3 = (0, _possibleConstructorReturn3.default)(
        this,
        (_ref2 =
          Alert.__proto__ || (0, _getPrototypeOf2.default)(Alert)).call.apply(
          _ref2,
          [this].concat(args)
        )
      )),
      _this3)),
      (_this3.state = {
        alerts: []
      }),
      (_this3.show = function() {
        var message =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : '';

        var _ref3 =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {};

        var confirm = _ref3.confirm,
          rest = (0, _objectWithoutProperties3.default)(_ref3, ['confirm']);

        var alert = (0, _extends3.default)(
          {
            id: (0, _nanoid2.default)(7),
            message: message,
            type: confirm ? 'Confirm' : 'Alert'
          },
          rest
        );

        _this3.setState(function(prevState) {
          return {
            alerts: prevState.alerts.concat(alert)
          };
        });
        return alert.id;
      }),
      (_this3.removeAll = function() {
        var alertsRemoved = _this3.state.alerts;
        _this3.setState({ alerts: [] });
        alertsRemoved.forEach(function(alert) {
          return alert.onClose && alert.onClose();
        });
      }),
      (_this3.removeAlert = function(id) {
        var alertRemoved = _this3.state.alerts.filter(function(alert) {
          return alert.id === id;
        })[0];
        _this3.setState(function(prevState) {
          return {
            alerts: prevState.alerts.filter(function(alert) {
              return alert.id !== id;
            })
          };
        });
        alertRemoved && alertRemoved.onClose && alertRemoved.onClose();
      }),
      (_this3.renderAlerts = function() {
        return _this3.state.alerts.map(function(alert) {
          return _react2.default.createElement(
            AlertBox,
            (0, _extends3.default)({}, alert, {
              key: alert.id,
              removeAlert: _this3.removeAlert
            }),
            alert.message
          );
        });
      }),
      _temp2)),
      (0, _possibleConstructorReturn3.default)(_this3, _ret2)
    );
  }

  (0, _createClass3.default)(Alert, [
    {
      key: 'render',
      value: function render() {
        return this.renderAlerts();
      }
    }
  ]);
  return Alert;
})(_react.Component);

exports.default = Alert;
