'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.getDerivedState = getDerivedState;

var _constants = require('../config/constants');

var _defaultRenderers = require('../utils/defaultRenderers');

var _ = require('.');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var localState = {
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
    state: _constants.MEDIA_STATES.PLAY
  }
};

var initialState = {
  defaultTrack: 0,
  showControlsOnly: false,
  edit: true,
  autoplay: true,
  startTime: 0,
  comments: [],
  commentBarClassName: '',
  videoControlsClassName: '',
  videoControlsButtonsClassName: '',
  commentBoxHelperRenderer: _defaultRenderers.commentBoxHelperRenderer,
  commentBoxRenderer: _defaultRenderers.commentBoxRenderer
};
var localStateKeys = (0, _keys2.default)(localState);
var initialPropsKeys = (0, _keys2.default)(initialState);

var getInitialState = function getInitialState(props) {
  var mergedState = (0, _extends3.default)({}, initialState, (0, _.splitByExistingKeys)([].concat((0, _toConsumableArray3.default)(initialPropsKeys)), props).included, localState);
  if (!mergedState.autoplay) {
    mergedState.media.state = _constants.MEDIA_STATES.PAUSE;
  }
  mergedState.media.currentTime = mergedState.startTime;
  return mergedState;
};

var excludedKeys = [].concat((0, _toConsumableArray3.default)(localStateKeys), (0, _toConsumableArray3.default)(initialPropsKeys)).filter(function (v) {
  return v !== 'comments';
});

function getDerivedState(currentState, nextProps) {
  return (0, _extends3.default)({}, currentState, (0, _.splitByExistingKeys)(excludedKeys, nextProps).excluded);
}

exports.default = getInitialState;