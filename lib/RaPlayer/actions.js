'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.actions = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _apiUtils = require('./utils/apiUtils');

var _api = require('./config/api.config');

var _api2 = _interopRequireDefault(_api);

var _comment = require('./models/comment');

var _comment2 = _interopRequireDefault(_comment);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var actions = (exports.actions = function actions() {
  return {
    showCommentHelperBox: function showCommentHelperBox(state, payload) {
      var ret = {};
      (0, _keys2.default)(payload)
        .filter(function(key) {
          return payload[key] !== undefined;
        })
        .forEach(function(key) {
          return (ret[key] = payload[key]);
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
      (0, _keys2.default)(payload)
        .filter(function(key) {
          return payload[key] !== undefined;
        })
        .forEach(function(key) {
          return (ret[key] = payload[key]);
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
      (0, _keys2.default)(mediaPayload)
        .filter(function(key) {
          return mediaPayload[key] !== undefined;
        })
        .forEach(function(key) {
          return (ret[key] = mediaPayload[key]);
        });
      return (0, _extends3.default)({}, state, {
        media: (0, _extends3.default)({}, state.media, ret)
      });
    },
    toggleVideoControls: function toggleVideoControls(state, _ref) {
      var showControls = _ref.showControls;

      return (0, _extends3.default)({}, state, {
        media: (0, _extends3.default)({}, state.media, {
          showControls: showControls
        })
      });
    },
    hideCommentBoxError: function hideCommentBoxError(state) {
      return (0, _extends3.default)({}, state, {
        commentBox: (0, _extends3.default)({}, state.commentBox, {
          error: false
        })
      });
    },
    hideCommentCardError: function hideCommentCardError(state, commentObj) {
      var commentArray = state.commentPane.allComments,
        newCommentArray = [];
      commentArray.forEach(function(comment) {
        if (comment.id === commentObj.id) {
          comment = commentObj;
          comment.error = false;
        }
        newCommentArray.push(comment);
      });

      return (0, _extends3.default)({}, state, {
        commentPane: (0, _extends3.default)({}, state.commentPane, {
          allComments: newCommentArray,
          activeComments: newCommentArray
        })
      });
    },
    postComment: function postComment(state, _ref2) {
      var time = _ref2.time,
        text = _ref2.text;

      var payload = _comment2.default.write(
        (0, _extends3.default)({}, state.app, {
          text: text,
          time: time
        })
      );
      return (0, _apiUtils.post)(_api2.default.postComment(state.app), {
        body: payload
      }).then(
        function(response) {
          if (!response.id) {
            return {};
          }
          var commentArray = state.commentPane.allComments || [];
          var commentObj = _comment2.default.read(
            (0, _extends3.default)({}, state.app, {
              id: response.id,
              createdTime: response.createdTime,
              text: text,
              time: time
            })
          );

          var sortedCommentArray = _comment2.default.sort(
            [commentObj].concat((0, _toConsumableArray3.default)(commentArray))
          );
          return (0, _extends3.default)({}, state, {
            commentPane: (0, _extends3.default)({}, state.commentPane, {
              allComments: sortedCommentArray,
              activeComments: sortedCommentArray
            }),
            commentBox: {
              show: false,
              data: {}
            }
          });
        },
        function() {
          var commentArrayTemp = [
            {
              time: 1,
              id: 1,
              cname: 2,
              author: {
                id: 12,
                name: 'Afroz alam'
              },
              text:
                'TI feel like we saw this shot twice. Maybe we could try cutting to a different angle.TI feel like we saw this shot twice. Maybe we could try cutting to a different angle.TI feel like we saw this shot twice. Maybe we could try cutting to a different angle.TI feel like we saw this shot twice. Maybe we could try cutting to a different angle.TI feel like we saw this shot twice. Maybe we could try cutting to a different angle.'
            },
            {
              time: 10,
              id: 13,
              cname: 2,
              author: {
                id: 123,
                name: 'Afroz kana'
              },
              text: 'TI feel like '
            },
            {
              time: 13,
              id: 12,
              cname: 2,
              author: {
                id: 123,
                name: 'Afroz kana'
              },
              text:
                'TI feel like we saw this shot twice. Maybe we could try cutting to a different angle'
            },
            {
              time: 18,
              id: 3,
              cname: 2,
              author: {
                id: 12,
                name: 'Afroz'
              },
              text:
                'TI feel like we saw this shot twice. Maybe we could try cutting to a different angle'
            },
            {
              time: 21,
              id: 4,
              cname: 2,
              author: {
                id: 123,
                name: 'Afroz kaana'
              },
              text:
                'TI feel like we saw this shot twice. Maybe we could try cutting to a different angle'
            },
            {
              time: 25,
              id: 41111,
              cname: 2,
              author: {
                id: 12,
                name: 'Afroz'
              },
              text:
                'TI feel like we saw this shot twice. Maybe we could try cutting to a different angle'
            },
            {
              time: 30,
              id: 12564,
              cname: 2,
              author: {
                id: 123,
                name: 'Afroz kaana'
              },
              text:
                'TI feel like we saw this shot twice. Maybe we could try cutting to a different angle'
            }
          ];
          return (0, _extends3.default)({}, state, {
            commentPane: (0, _extends3.default)({}, state.commentPane, {
              allComments: commentArrayTemp,
              activeComments: commentArrayTemp
            }),
            commentBox: {
              show: false,
              data: {}
            }
          });
          // return {
          // 	...state,
          // 	commentBox: {
          // 		...state.commentBox,
          // 		error: true
          // 	}
          // };
        }
      );
    },
    getAllComments: function getAllComments(state, payload, setState) {
      var defaultObj = {
        allComments: [],
        activeComments: [],
        isFetching: true
      };
      setState(
        (0, _extends3.default)({}, state, {
          commentPane: defaultObj
        })
      );
      var filter = payload.filter;

      var commentArray = [
        {
          time: 1,
          id: 1,
          cname: 2,
          author: {
            id: 12,
            name: 'Afroz alam'
          },
          text:
            'TI feel like we saw this shot twice. Maybe we could try cutting to a different angle.TI feel like we saw this shot twice. Maybe we could try cutting to a different angle.TI feel like we saw this shot twice. Maybe we could try cutting to a different angle.TI feel like we saw this shot twice. Maybe we could try cutting to a different angle.TI feel like we saw this shot twice. Maybe we could try cutting to a different angle.'
        },
        {
          time: 12,
          id: 13,
          cname: 2,
          author: {
            id: 123,
            name: 'Afroz kana'
          },
          text: 'TI feel like '
        },
        {
          time: 13,
          id: 12,
          cname: 2,
          author: {
            id: 123,
            name: 'Afroz kana'
          },
          text:
            'TI feel like we saw this shot twice. Maybe we could try cutting to a different angle'
        },
        {
          time: 25,
          id: 3,
          cname: 2,
          author: {
            id: 12,
            name: 'Afroz'
          },
          text:
            'TI feel like we saw this shot twice. Maybe we could try cutting to a different angle'
        },
        {
          time: 35,
          id: 4,
          cname: 2,
          author: {
            id: 123,
            name: 'Afroz kaana'
          },
          text:
            'TI feel like we saw this shot twice. Maybe we could try cutting to a different angle'
        },
        {
          time: 40,
          id: 41111,
          cname: 2,
          author: {
            id: 12,
            name: 'Afroz'
          },
          text:
            'TI feel like we saw this shot twice. Maybe we could try cutting to a different angle'
        },
        {
          time: 60,
          id: 12564,
          cname: 2,
          author: {
            id: 123,
            name: 'Afroz kaana'
          },
          text:
            'TI feel like we saw this shot twice. Maybe we could try cutting to a different angle'
        }
      ];

      defaultObj = {
        allComments: commentArray,
        activeComments: commentArray,
        isFetching: false
      };
      /*eslint-disable */

      if (!state.app.socialId) {
        return (0, _extends3.default)({}, state, {
          commentPane: (0, _extends3.default)({}, defaultObj, {
            isFetching: false
          })
        });
      }

      return (0, _apiUtils.get)(
        _api2.default.getComments(state.app, filter)
      ).then(
        function(response) {
          var commentArray = [];
          response.socialList.forEach(function(s) {
            commentArray.push(_comment2.default.read(s.social));
          });

          var sortedCommentArray = _comment2.default.sort(commentArray);

          return (0, _extends3.default)({}, state, {
            commentPane: {
              allComments: sortedCommentArray,
              activeComments: sortedCommentArray,
              isFetching: false
            }
          });
        },
        function() {
          return (0, _extends3.default)({}, state, {
            commentPane: (0, _extends3.default)({}, defaultObj, {
              isFetching: false
            })
          });
        }
      );

      //commentArray = [];

      /*eslint-disable */
      // return new Promise(function(resolve, reject) {
      // 	setTimeout(function() {
      // 		resolve({
      // 			commentPane: {
      // 				allComments: commentArray,
      // 				activeComments: commentArray,
      // 				isFetching: false
      // 			}
      // 		});
      // 	}, 1000);
      // });
      /*eslint-disable */
    },
    deleteComment: function deleteComment(state, commentObj) {
      var urlObj = {
        cname: state.app.cname,
        socialId: commentObj.id
      };

      return (0, _apiUtils.del)(_api2.default.deleteComment(urlObj)).then(
        function(response) {
          var commentArray = state.commentPane.allComments,
            newCommentArray = [];
          commentArray.forEach(function(comment) {
            if (comment.id !== commentObj.id) {
              newCommentArray.push(comment);
            }
          });

          var sortedCommentArray = _comment2.default.sort(newCommentArray);

          var finalState = (0, _extends3.default)({}, state, {
            commentPane: (0, _extends3.default)({}, state.commentPane, {
              allComments: sortedCommentArray,
              activeComments: sortedCommentArray
            })
          });

          if (
            state.commentBox.show &&
            commentObj.id === state.commentBox.data.id
          ) {
            finalState = (0, _extends3.default)({}, finalState, {
              commentBox: {
                show: false,
                data: {}
              }
            });
          }

          return finalState;
        },
        function() {}
      );
    },
    editComment: function editComment(state, _ref3) {
      var commentObj = _ref3.commentObj,
        isCommentBox = _ref3.isCommentBox;

      var urlObj = {
        cname: state.app.cname,
        socialId: commentObj.id
      };

      var payload = _comment2.default.write(
        (0, _extends3.default)({}, state.app, {
          text: commentObj.text,
          time: commentObj.time
        })
      );

      return (0, _apiUtils.put)(_api2.default.editComment(urlObj), {
        body: payload
      }).then(
        function(response) {
          var commentArray = state.commentPane.allComments,
            newCommentArray = [];
          commentArray.forEach(function(comment) {
            if (comment.id === commentObj.id) {
              comment = (0, _extends3.default)({}, comment, commentObj);
            }
            newCommentArray.push(comment);
          });

          var finalObj = (0, _extends3.default)({}, state, {
            commentPane: (0, _extends3.default)({}, state.commentPane, {
              allComments: newCommentArray,
              activeComments: newCommentArray
            })
          });

          if (isCommentBox) {
            finalObj = (0, _extends3.default)({}, finalObj, {
              commentBox: {
                show: false,
                data: {}
              }
            });
          }

          return finalObj;
        },
        function() {
          if (isCommentBox) {
            return (0, _extends3.default)({}, state, {
              commentBox: (0, _extends3.default)({}, state.commentBox, {
                error: true
              })
            });
          }
          var commentArray = state.commentPane.allComments,
            newCommentArray = [];
          commentArray.forEach(function(comment) {
            if (comment.id === commentObj.id) {
              comment = commentObj;
              comment.error = true;
            }
            newCommentArray.push(comment);
          });

          return (0, _extends3.default)({}, state, {
            commentPane: (0, _extends3.default)({}, state.commentPane, {
              allComments: newCommentArray,
              activeComments: newCommentArray
            })
          });
        }
      );
    },
    filterComments: function filterComments(state, _ref4) {
      var authorId = _ref4.authorId;

      var commentArray = state.commentPane.allComments,
        newCommentArray = [];

      commentArray.forEach(function(comment) {
        if (comment.author.id === authorId) {
          newCommentArray.push(comment);
        }
      });
      newCommentArray = newCommentArray.length ? newCommentArray : commentArray;
      return (0, _extends3.default)({}, state, {
        commentPane: (0, _extends3.default)({}, state.commentPane, {
          activeComments: newCommentArray
        })
      });
    }
  };
});
