"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actions = exports.actions = function actions() {
  return {
    showCommentHelperBox: function showCommentHelperBox(state, payload) {
      var ret = {};
      (0, _keys2.default)(payload).filter(function (key) {
        return payload[key] !== undefined;
      }).forEach(function (key) {
        return ret[key] = payload[key];
      });

      return (0, _extends3.default)({}, state, {
        commentHelperBox: {
          show: true,
          data: (0, _extends3.default)({}, state.commentBox.data, ret)
        }
      });
    },
    hideCommentHelperBox: function hideCommentHelperBox(state) {
      return (0, _extends3.default)({}, state, {
        commentHelperBox: {
          show: false,
          data: {}
        }
      });
    },
    showCommentBox: function showCommentBox(state, payload) {
      var ret = {};
      (0, _keys2.default)(payload).filter(function (key) {
        return payload[key] !== undefined;
      }).forEach(function (key) {
        return ret[key] = payload[key];
      });

      return (0, _extends3.default)({}, state, {
        commentBox: {
          show: true,
          data: (0, _extends3.default)({}, state.commentBox.data, ret)
        }
      });
    },
    hideCommentBox: function hideCommentBox(state) {
      return (0, _extends3.default)({}, state, {
        commentBox: {
          show: false,
          data: {}
        }
      });
    },
    updateMediaAttributes: function updateMediaAttributes(state, mediaPayload) {
      var ret = {};
      (0, _keys2.default)(mediaPayload).filter(function (key) {
        return mediaPayload[key] !== undefined;
      }).forEach(function (key) {
        return ret[key] = mediaPayload[key];
      });
      return (0, _extends3.default)({}, state, {
        media: (0, _extends3.default)({}, state.media, ret)
      });
    },
    hideCommentBoxError: function hideCommentBoxError(state) {
      return (0, _extends3.default)({}, state, {
        commentBox: (0, _extends3.default)({}, state.commentBox, {
          error: false
        })
      });
    }
  };
};