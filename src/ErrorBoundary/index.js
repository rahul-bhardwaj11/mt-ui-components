import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { IS_DEV } from './constants';

import { isDebuggingEnabled, noop } from './utils';

import ErrorPage, { PAGE_TYPES } from '../ErrorPage';

const PrintError = ({ error, errorInfo }) => {
  return (
    <pre
      style={{
        color: 'white',
        fontSize: '16px',
        backgroundColor: '#d20000cc'
      }}
    >
      {error.stack}
      <br />
      {errorInfo.componentStack}
    </pre>
  );
};

PrintError.propTypes = {
  error: PropTypes.object.isRequired,
  errorInfo: PropTypes.object.isRequired
};

class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.node,
    trackError: PropTypes.func,
    reportError: PropTypes.func
  };
  static defaultProps = {
    trackError: noop
  };
  state = { error: null, errorInfo: null, hasError: false };

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo, hasError: true });

    if (!IS_DEV) this.props.trackError(error, errorInfo);
  }

  render() {
    const { error, errorInfo, hasError } = this.state;
    const { reportError } = this.props;
    if (hasError && (IS_DEV || isDebuggingEnabled())) {
      return <PrintError error={error} errorInfo={errorInfo} />;
    }

    if (hasError) {
      return (
        <>
          <ErrorPage
            pageType={PAGE_TYPES.CLIENT_ERROR}
            reportError={reportError}
          />
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
