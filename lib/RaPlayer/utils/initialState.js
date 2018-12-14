'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var getInitialState = function getInitialState(props) {
  return (0, _deepmerge2.default)(initialState, props);
};

exports.default = getInitialState;