import deepmerge from 'deepmerge';

const initialState = {
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

const getInitialState = props => {
  return deepmerge(initialState, props);
};

export default getInitialState;
