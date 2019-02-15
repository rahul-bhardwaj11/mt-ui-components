'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splitByExistingKeys = exports.IS_DEV = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IS_DEV = exports.IS_DEV = process.env.NODE_ENV === 'development';

var splitByExistingKeys = exports.splitByExistingKeys = function splitByExistingKeys(arr, obj) {
  var included = {};
  var excluded = {};
  (0, _keys2.default)(obj).map(function (prop) {
    if (arr.includes(prop)) {
      included[prop] = obj[prop];
    } else {
      excluded[prop] = obj[prop];
    }
  });
  return {
    included: included,
    excluded: excluded
  };
};