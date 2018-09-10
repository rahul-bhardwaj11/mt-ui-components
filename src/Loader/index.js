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
    style: PropTypes.object
  };
  static defaultProps = {
    type: 'Small',
    size: 'sizeBig'
  };

  render() {
    const { className, message, size, type, style } = this.props;
    const wrapperClasses = classnames(
      {
        [LOADER_TYPE[type]]: true
      },
      className
    );
    return (
      <StyledLoader className={wrapperClasses} style={style}>
        <div className={'loader'}>
          <div className={'loadingHeading'}>{this.props.loadingMessage}</div>
          <div className={classnames('spinner', LOADING_SIZE[size])}>
            <div />
            <div />
            <div />
            <div />
          </div>
          <p>{message}</p>
        </div>
      </StyledLoader>
    );
  }
}

export default Loader;
