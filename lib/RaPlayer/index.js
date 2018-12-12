'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _VideoPlayer = require('./containers/VideoPlayer');

var _VideoPlayer2 = _interopRequireDefault(_VideoPlayer);

var _providerHelper = require('./utils/providerHelper');

var _providerHelper2 = _interopRequireDefault(_providerHelper);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import { namespaceConnect } from './utils/enhancer';
exports.default = (0, _providerHelper2.default)(_VideoPlayer2.default);
