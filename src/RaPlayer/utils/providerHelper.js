import React, { Component, createContext } from 'react';
import { createStore } from './storeHelper';
import getInitialState from './initialState';
import deepmerge from 'deepmerge';

const { Provider, Consumer } = createContext();

export default function ProviderHelperHoc(Comp) {
  return class ProviderHelper extends Component {
    constructor(props) {
      super(props);
      this.store = createStore(getInitialState(props));
      this.unsubscribe = this.store.subscribe(this.stateChanged);
    }

    stateChanged = () => {
      this.setState({});
    };

    componentWillReceiveProps(nextProps) {
      const currentState = this.store.getState();
      const newState = deepmerge(currentState, nextProps);
      this.store.setState(newState);
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    render() {
      return (
        <Provider value={this.store}>
          <Comp {...this.props} namespace={this.namespace} />
        </Provider>
      );
    }
  };
}

const noop = state => state;

export function connect(mapStateToProps = noop, actions) {
  return function connectedWrapper(Comp) {
    function connected(ownProps) {
      return (
        <Consumer>
          {store => {
            const stateProps = mapStateToProps(store.getState());
            const reducers = actions();
            let boundActions = {};
            Object.keys(actions()).reduce((boundActions, v) => {
              boundActions[v] = function bound(payload) {
                const newState = reducers[v](store.getState(), payload);
                store.setState(newState);
              };
              return boundActions;
            }, boundActions);
            const mergedProps = {
              ...stateProps,
              ...ownProps,
              ...boundActions
            };
            return <Comp {...mergedProps} />;
          }}
        </Consumer>
      );
    }
    connected.displayName = `Connected(${Comp.displayName || Comp.name})`;
    return connected;
  };
}
