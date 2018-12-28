import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorBoundaryWrapper from './style';
import logo from './assets/companylogo.png';
import errorImage from './assets/error_page_logo.png';
import Button from '../Button';

class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, error, errorInfo });
    // if (process.env.NODE_ENV === "production") PostErrors(error, info);
  }
  reload = () =>
    this.setState({ error: null, hasError: false, errorInfo: null });
  render() {
    if (this.state.hasError) {
      return (
        <ErrorBoundaryWrapper>
          <div className="innerWrapperErrorBoundary">
            <div className="logo">
              <img src={logo} />
              <img src={errorImage} />
            </div>
            <div className="subErrorText">Something went wrong</div>
            <div className="errorWrapper">
              <Button
                onClick={this.reload}
                type="secondary"
                className="marginB24"
              >
                Reload
              </Button>
              {process.env.NODE_ENV === 'production' ? null : (
                <details style={{ whiteSpace: 'pre-wrap' }}>
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo.componentStack}
                </details>
              )}
            </div>
          </div>
        </ErrorBoundaryWrapper>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
