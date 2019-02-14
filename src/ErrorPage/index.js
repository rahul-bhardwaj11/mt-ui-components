import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import Button from '../Button';
import mixins from '../styles/mixins';

const ErrorpageWrapper = styled.div`
  text-align: center;

  .errorPageTitle {
  }

  .errorPageHeading {
    ${mixins.h2()};
  }

  .errorPageDescription {
    ${mixins.h3Grey()};
    font-weight: normal;
  }

  .errorCommonButtonStyling {
    margin: 0 4px;
  }
`;

class ErrorPage extends Component {
  static propTypes = {
    styleTitle: PropTypes.object,
    styleIcon: PropTypes.object,
    styleHeading: PropTypes.object,
    styleDescription: PropTypes.object,
    styleActionButton: PropTypes.object
  };
  static defaultProps = {
    onSearch: () => {},
    onPressEnter: () => {}
  };

  render() {
    return (
      <ErrorpageWrapper>
        <div className="errorPageTitle">MindTickle</div>
        <Icon type="edit" />
        <div className="errorPageHeading">It not you. It us.</div>
        <div className="errorPageDescription">Lorem ipsum is a dummy text</div>
        <div className="errorPageDescription">Lorem ipsum is a dummy text</div>
        <div className="errorPageActionButtons">
          <Button type="secondary" className="errorCommonButtonStyling">
            Report Issue
          </Button>
          <Button type="primary" className="errorCommonButtonStyling">
            Try Again
          </Button>
        </div>
      </ErrorpageWrapper>
    );
  }
}
export default ErrorPage;
