'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _enhancer = require('./utils/enhancer');

var _VideoPlayer = require('./containers/VideoPlayer');

var _VideoPlayer2 = _interopRequireDefault(_VideoPlayer);

var _providerHelper = require('./utils/providerHelper');

var _providerHelper2 = _interopRequireDefault(_providerHelper);

var _actions = require('./actions');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ConnectedRaPlayer = (0, _enhancer.namespaceConnect)(
  undefined,
  _actions.actions
)(_VideoPlayer2.default);

exports.default = (0, _providerHelper2.default)(ConnectedRaPlayer);
