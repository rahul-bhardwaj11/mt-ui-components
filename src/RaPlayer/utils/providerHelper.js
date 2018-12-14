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
      window.raPlayer = this.store;
    }

    componentWillReceiveProps(nextProps) {
      const currentState = this.store.getState();
      const newState = deepmerge(currentState, nextProps);
      this.store.setState(newState);
    }

    render() {
      return (
        <Provider value={this.store}>
          {/* TODO: Remove prop dependency from video player container and get things from state */}
          <Comp {...this.props} />
        </Provider>
      );
    }
  };
}

const noop = state => state;

export function connect(mapStateToProps = noop, actions) {
  return function connectedWrapper(Comp) {
    return class Connected extends Component {
      static displayName = `Connected(${Comp.displayName || Comp.name})`;

      constructor() {
        super();
        this.stateChanged = this.stateChanged.bind(this);
      }

      stateChanged = () => {
        this.setState({});
      };

      createBoundActions = () => {
        const reducers = actions();
        let boundActions = {};
        Object.keys(actions()).reduce((boundActions, v) => {
          boundActions[v] = payload => {
            const newState = reducers[v](this.store.getState(), payload);
            this.store.setState(newState);
          };
          return boundActions;
        }, boundActions);
        this.boundActions = boundActions;
      };

      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        const ownProps = this.props;
        return (
          <Consumer>
            {store => {
              const stateProps = mapStateToProps(store.getState());
              this.store = store;
              this.unsubscribe = store.subscribe(this.stateChanged);
              if (!this.boundActions) {
                this.createBoundActions();
              }
              // TODO: have to fix this through memorization
              let mergedProps = Object.assign(
                {},
                ownProps,
                stateProps,
                this.boundActions
              );
              return <Comp {...mergedProps} />;
            }}
          </Consumer>
        );
      }
    };
  };
}
