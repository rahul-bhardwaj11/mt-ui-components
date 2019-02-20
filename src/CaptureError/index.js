import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import {
  ServerError,
  AuthorizationError,
  ResourceNotFound,
  IS_DEV
} from './constants';

import { isDebuggingEnabled, noop } from './utils';

import ServerErrorPage from './ServerError';
import NotFoundErrorPage from './NotFound';
import UnauthorizedErrorPage from './UnauthorizedError';
import ReportError from '~/components/ReportError';

const ErrorPage = ({ error }) => {
  switch (error) {
    case ServerError.name:
      return <ServerErrorPage />;
    case AuthorizationError.name:
      return <UnauthorizedErrorPage />;
    case ResourceNotFound.name:
      return <NotFoundErrorPage />;
  }
  return <ServerErrorPage />;
};

ErrorPage.propTypes = {
  error: PropTypes.object.isRequired
};

class CaptureError extends Component {
  static propTypes = {
    children: PropTypes.node,
    trackError: PropTypes.func,
    reportError: PropTypes.func
  };
  static defaultProps = {
    trackError: noop
  };
  state = { error: null };

  componentDidCatch(error, errorInfo) {
    this.setState({ error });

    if (!IS_DEV) this.props.trackError(error, errorInfo);
  }

  render() {
    const { error } = this.state;
    const { reportError } = this.props;
    if (error && (IS_DEV || isDebuggingEnabled())) {
      return (
        <pre
          style={{
            color: 'white',
            fontSize: '16px',
            backgroundColor: '#d20000cc'
          }}
        >
          {error.stack}
        </pre>
      );
    }

    if (error) {
      <>
        <ErrorPage error={error} />
        {reportError && <ReportError reportError={reportError} />}
      </>;
      return;
    } else {
      return this.props.children;
    }
  }
}

export default CaptureError;
