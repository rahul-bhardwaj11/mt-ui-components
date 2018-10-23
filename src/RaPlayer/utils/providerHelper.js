import React, { Component } from 'react';
import { getStore } from '../store';
import PropTypes from 'prop-types';
import { Provider } from 'unistore/react';

let count = 0;

export default function ProviderHelperHoc(Comp) {
  return class ProviderHelper extends Component {
    static propTypes = {
      app: PropTypes.object
    };

    constructor(props) {
      super(props);
      const namespace = 'ra_' + count++;
      this.namespace = namespace;
      this.store = getStore(namespace, props);
    }

    render() {
      return (
        <Provider store={this.store}>
          <Comp {...this.props} namespace={this.namespace} />
        </Provider>
      );
    }
  };
}
