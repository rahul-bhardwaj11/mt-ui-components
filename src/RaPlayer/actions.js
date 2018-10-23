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
