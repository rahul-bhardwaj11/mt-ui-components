import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import cs from 'classnames';
import StringToHTML from '../StringToHTML';
import Icon from '../Icon';
import mixins from '../styles/mixins';

import { PAGE_TYPES } from './constants';

const ErrorpageWrapper = styled.div`
  text-align: center;

  .errorPageTitle {
    width: 200px;
    height: auto;
    margin-top: 72px;
    margin-bottom: 72px;
  }

  .errorPageIcon {
    margin: 0 auto;
  }

  .errorPageHeading {
    margin-top: 32px;
    ${mixins.h2()};
  }

  .errorPageDescription {
    margin-top: 12px;
    ${mixins.h3Grey()};
    font-weight: normal;
  }

  .errorPageActionButtons {
    margin-top: 32px;

    .errorCommonButtonStyling {
      margin: 0 4px;
    }
  }
`;

class ErrorPage extends Component {
  static propTypes = {
    styleTitle: PropTypes.string,
    styleIcon: PropTypes.string,
    styleHeading: PropTypes.string,
    styleDescription: PropTypes.string,
    styleActionButton: PropTypes.string,
    styleHeadingText: PropTypes.string.isRequired,
    pageType: PropTypes.shape({
      image: PropTypes.string,
      heading: PropTypes.string,
      description: PropTypes.string,
      buttons: PropTypes.func
    }).isRequired,
    showLogo: PropTypes.bool
  };
  static defaultProps = {
    onSearch: () => {},
    onPressEnter: () => {},
    showLogo: true
  };

  render() {
    const {
      styleTitle,
      styleIcon,
      styleHeading,
      styleDescription,
      styleActionButton,
      pageType,
      showLogo
    } = this.props;
    return (
      <ErrorpageWrapper>
        {showLogo && (
          <img
            className={cs('errorPageTitle', styleTitle)}
            src="http://www.mindtickle.com/wp-content/uploads/2018/07/home-logo.png"
          />
        )}
        <Icon
          gradient={true}
          type={pageType.image}
          className="errorPageIcon"
          style={{ ...styleIcon }}
        />
        <div className={cs('errorPageHeading', styleHeading)}>
          {pageType.heading}
        </div>
        <div className={cs('errorPageDescription', styleDescription)}>
          <StringToHTML content={pageType.description} />
        </div>
        {pageType.buttons(styleActionButton)}
      </ErrorpageWrapper>
    );
  }
}

export default ErrorPage;
export { PAGE_TYPES };
