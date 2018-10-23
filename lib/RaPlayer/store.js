'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getStore = getStore;

var _unistore = require('unistore');

var _unistore2 = _interopRequireDefault(_unistore);

var _devtools = require('unistore/devtools');

var _devtools2 = _interopRequireDefault(_devtools);

var _core = require('./utils/core');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var initialState = {
  app: {},
  commentHelperBox: {
    show: false,
    data: {}
  },
  commentBox: {
    show: false,
    data: {
      text: ''
    }
  },
  media: {
    currentTime: 0,
    state: 'PAUSE'
  },
  commentPane: {
    allComments: [],
    activeComments: []
  },
  pitch: {}
};

var state = {};
var store = void 0;

function getStore(namespace) {
  var initialProps =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!namespace && store) {
    return store;
  }
  if (namespace) {
    state[namespace] =
      state[namespace] || (0, _core.deepmerge)(initialState, initialProps);
  }
  store =
    process.env.ENV === 'prod'
      ? (0, _unistore2.default)(state)
      : (0, _devtools2.default)((0, _unistore2.default)(state));
  return store;
}
