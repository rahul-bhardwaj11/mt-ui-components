'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.del = exports.put = exports.post = exports.get = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getHeaders = function getHeaders() {
  var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var additionalHeaders = {
    'Content-Type': 'application/json'
  };
  return (0, _extends3.default)({}, additionalHeaders, headers);
};

var makeCall = function makeCall(urlObj) {
  var reqObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return fetch(urlObj.url, (0, _extends3.default)({}, reqObj, { credentials: 'same-origin' })).then(function (resp) {
    var json = void 0;
    if (resp.ok) {
      json = resp.json();
    }
    if (resp.status >= 200 && resp.status < 300) {
      return json;
    } else {
      return _promise2.default.reject(Error('error'));
    }
  }).catch(function (error) {
    return _promise2.default.reject(Error(error.message));
  });
};

var get = function get(urlObj) {
  var reqObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  reqObj.method = 'GET';
  reqObj.headers = getHeaders(reqObj.headers);
  return makeCall(urlObj, (0, _extends3.default)({}, reqObj));
};

var post = function post(urlObj) {
  var reqObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  reqObj.method = 'POST';
  reqObj.headers = getHeaders(reqObj.headers);
  if (reqObj.body && reqObj.headers['Content-Type'] === 'application/json') {
    reqObj.body = (0, _stringify2.default)(reqObj.body);
  }
  return makeCall(urlObj, (0, _extends3.default)({}, reqObj));
};

var put = function put(urlObj) {
  var reqObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  reqObj.method = 'PUT';
  reqObj.headers = getHeaders(reqObj.headers);
  if (reqObj.body && reqObj.headers['Content-Type'] === 'application/json') {
    reqObj.body = (0, _stringify2.default)(reqObj.body);
  }
  return makeCall(urlObj, (0, _extends3.default)({}, reqObj));
};
var del = function del(urlObj) {
  var reqObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  reqObj.method = 'DELETE';
  return makeCall(urlObj, (0, _extends3.default)({}, reqObj));
};

exports.get = get;
exports.post = post;
exports.put = put;
exports.del = del;