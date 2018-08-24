import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import StyledLoader from './css.js';

export const LOADING_SIZE = {
  sizeBig: 'big',
  sizeXSmall: 'xsmall',
  sizeSmall: 'small'
};

export const LOADER_TYPE = {
  Small: 'smallPageLoadingScreen',
  Full: 'fullPageloadingScreen'
};

class Loader extends Component {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(Object.keys(LOADER_TYPE)),
    size: PropTypes.oneOf(Object.keys(LOADING_SIZE)),
    message: PropTypes.string,
    loadingMessage: PropTypes.string,
    vCenter: PropTypes.bool
  };
  static defaultProps = {
    type: 'Small',
    size: 'sizeBig',
    vCenter: true
  };

  render() {
    const { className, message, size, type, vCenter } = this.props;
    const wrapperClasses = classnames(
      {
        [LOADER_TYPE[type]]: true,
        loader: true
      },
      className
    );
    return (
      <StyledLoader className={wrapperClasses}>
        <div className={'loadingHeading'}>{this.props.loadingMessage}</div>
        <div
          className={classnames('spinner', LOADING_SIZE[size], {
            centerDiv: vCenter
          })}
        >
          <div />
          <div />
          <div />
          <div />
        </div>
        <p>{message}</p>
      </StyledLoader>
    );
  }
}

export default Loader;
