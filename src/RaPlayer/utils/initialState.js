const localState = {
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
  }
};

const initialState = {
  defaultTrack: 0,
  showControlsOnly: false,
  edit: true,
  autoplay: true,
  startTime: 0,
  comments: [],
  commentPane: {
    activeComments: []
  }
};

const getInitialState = props => {
  return {
    ...initialState,
    ...props,
    ...localState
  };
};

const excludedKeys = [
  ...Object.keys({
    ...localState,
    ...initialState
  }),
  'forwardedRef'
];

export function getDerivedState(currentState, nextProps) {
  return Object.keys(nextProps).reduce(
    (state, v) => {
      if (!excludedKeys.includes(v)) {
        state[v] = nextProps[v];
      }
      return state;
    },
    { ...currentState }
  );
}

export default getInitialState;
