import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import StyledLoader from './css.js';
import theme from '../styles/theme';

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
    /** The type of the loader */
    type: PropTypes.oneOf(Object.keys(LOADER_TYPE)),
    /** The size of the loader */
    size: PropTypes.oneOf(Object.keys(LOADING_SIZE)),
    /** Message to be displayed */
    message: PropTypes.string,
    loadingMessage: PropTypes.string,
    style: PropTypes.object
  };
  static defaultProps = {
    type: 'Small',
    size: 'sizeBig',
    style: {
      loaderStyle: {
        borderColor: theme.colors.INDIGO
      }
    }
  };

  render() {
    const { className, message, size, type, style } = this.props;
    const { loaderStyle, ...rest } = style;
    const wrapperClasses = classnames(
      {
        [LOADER_TYPE[type]]: true
      },
      className
    );
    return (
      <StyledLoader
        className={wrapperClasses}
        style={{ ...rest }}
        loaderStyle={loaderStyle}
      >
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
