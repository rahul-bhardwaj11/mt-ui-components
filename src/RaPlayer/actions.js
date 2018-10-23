import { post, get, put, del } from './utils/apiUtils';
import apiConfig from './config/api.config';
import commentModel from './models/comment';

export let actions = () => ({
  showCommentHelperBox: (state, payload) => {
    const ret = {};
    Object.keys(payload)
      .filter(key => payload[key] !== undefined)
      .forEach(key => (ret[key] = payload[key]));

    return {
      ...state,
      commentHelperBox: {
        show: true,
        data: {
          ...state.commentBox.data,
          ...ret
        }
      }
    };
  },
  hideCommentHelperBox: state => {
    return {
      ...state,
      commentHelperBox: {
        show: false,
        data: {}
      }
    };
  },
  showCommentBox: (state, payload) => {
    const ret = {};
    Object.keys(payload)
      .filter(key => payload[key] !== undefined)
      .forEach(key => (ret[key] = payload[key]));

    return {
      ...state,
      commentBox: {
        show: true,
        data: {
          ...state.commentBox.data,
          ...ret
        }
      }
    };
  },
  hideCommentBox: state => {
    return {
      ...state,
      commentBox: {
        show: false,
        data: {}
      }
    };
  },
  updateMediaAttributes: (state, mediaPayload) => {
    const ret = {};
    Object.keys(mediaPayload)
      .filter(key => mediaPayload[key] !== undefined)
      .forEach(key => (ret[key] = mediaPayload[key]));
    return {
      ...state,
      media: {
        ...state.media,
        ...ret
      }
    };
  },
  toggleVideoControls: (state, { showControls }) => {
    return {
      ...state,
      media: {
        ...state.media,
        showControls
      }
    };
  },
  hideCommentBoxError: state => {
    return {
      ...state,
      commentBox: {
        ...state.commentBox,
        error: false
      }
    };
  },
  hideCommentCardError: (state, commentObj) => {
    let commentArray = state.commentPane.allComments,
      newCommentArray = [];
    commentArray.forEach(comment => {
      if (comment.id === commentObj.id) {
        comment = commentObj;
        comment.error = false;
      }
      newCommentArray.push(comment);
    });

    return {
      ...state,
      commentPane: {
        ...state.commentPane,
        allComments: newCommentArray,
        activeComments: newCommentArray
      }
    };
  },
  postComment: (state, { time, text }) => {
    let payload = commentModel.write({
      ...state.app,
      text,
      time
    });
    return post(apiConfig.postComment(state.app), { body: payload }).then(
      response => {
        if (!response.id) {
          return {};
        }
        let commentArray = state.commentPane.allComments || [];
        let commentObj = commentModel.read({
          ...state.app,
          id: response.id,
          createdTime: response.createdTime,
          text,
          time
        });

        let sortedCommentArray = commentModel.sort([
          commentObj,
          ...commentArray
        ]);
        return {
          ...state,
          commentPane: {
            ...state.commentPane,
            allComments: sortedCommentArray,
            activeComments: sortedCommentArray
          },
          commentBox: {
            show: false,
            data: {}
          }
        };
      },
      () => {
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
        return {
          ...state,
          commentPane: {
            ...state.commentPane,
            allComments: commentArrayTemp,
            activeComments: commentArrayTemp
          },
          commentBox: {
            show: false,
            data: {}
          }
        };
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
  getAllComments: (state, payload, setState) => {
    let defaultObj = {
      allComments: [],
      activeComments: [],
      isFetching: true
    };
    setState({
      ...state,
      commentPane: defaultObj
    });
    let { filter } = payload;
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
      return {
        ...state,
        commentPane: {
          ...defaultObj,
          isFetching: false
        }
      };
    }

    return get(apiConfig.getComments(state.app, filter)).then(
      response => {
        let commentArray = [];
        response.socialList.forEach(s => {
          commentArray.push(commentModel.read(s.social));
        });

        let sortedCommentArray = commentModel.sort(commentArray);

        return {
          ...state,
          commentPane: {
            allComments: sortedCommentArray,
            activeComments: sortedCommentArray,
            isFetching: false
          }
        };
      },
      () => {
        return {
          ...state,
          commentPane: {
            ...defaultObj,
            isFetching: false
          }
        };
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
  deleteComment: (state, commentObj) => {
    let urlObj = {
      cname: state.app.cname,
      socialId: commentObj.id
    };

    return del(apiConfig.deleteComment(urlObj)).then(
      response => {
        let commentArray = state.commentPane.allComments,
          newCommentArray = [];
        commentArray.forEach(comment => {
          if (comment.id !== commentObj.id) {
            newCommentArray.push(comment);
          }
        });

        let sortedCommentArray = commentModel.sort(newCommentArray);

        let finalState = {
          ...state,
          commentPane: {
            ...state.commentPane,
            allComments: sortedCommentArray,
            activeComments: sortedCommentArray
          }
        };

        if (
          state.commentBox.show &&
          commentObj.id === state.commentBox.data.id
        ) {
          finalState = {
            ...finalState,
            commentBox: {
              show: false,
              data: {}
            }
          };
        }

        return finalState;
      },
      () => {}
    );
  },
  editComment: (state, { commentObj, isCommentBox }) => {
    let urlObj = {
      cname: state.app.cname,
      socialId: commentObj.id
    };

    let payload = commentModel.write({
      ...state.app,
      text: commentObj.text,
      time: commentObj.time
    });

    return put(apiConfig.editComment(urlObj), { body: payload }).then(
      response => {
        let commentArray = state.commentPane.allComments,
          newCommentArray = [];
        commentArray.forEach(comment => {
          if (comment.id === commentObj.id) {
            comment = { ...comment, ...commentObj };
          }
          newCommentArray.push(comment);
        });

        let finalObj = {
          ...state,
          commentPane: {
            ...state.commentPane,
            allComments: newCommentArray,
            activeComments: newCommentArray
          }
        };

        if (isCommentBox) {
          finalObj = {
            ...finalObj,
            commentBox: {
              show: false,
              data: {}
            }
          };
        }

        return finalObj;
      },
      () => {
        if (isCommentBox) {
          return {
            ...state,
            commentBox: {
              ...state.commentBox,
              error: true
            }
          };
        }
        let commentArray = state.commentPane.allComments,
          newCommentArray = [];
        commentArray.forEach(comment => {
          if (comment.id === commentObj.id) {
            comment = commentObj;
            comment.error = true;
          }
          newCommentArray.push(comment);
        });

        return {
          ...state,
          commentPane: {
            ...state.commentPane,
            allComments: newCommentArray,
            activeComments: newCommentArray
          }
        };
      }
    );
  },
  filterComments: (state, { authorId }) => {
    let commentArray = state.commentPane.allComments,
      newCommentArray = [];

    commentArray.forEach(comment => {
      if (comment.author.id === authorId) {
        newCommentArray.push(comment);
      }
    });
    newCommentArray = newCommentArray.length ? newCommentArray : commentArray;
    return {
      ...state,
      commentPane: {
        ...state.commentPane,
        activeComments: newCommentArray
      }
    };
  }
});
