import React from 'react';
import cs from 'classnames';
import Button from '../Button';

const PAGE_TYPES = {
  ['404']: {
    image: 'pageNotFound',
    heading: 'Page not found',
    description: "We can't seem ot find the page you are looking for.",
    buttons: styleActionButton => (
      <div className={cs('errorPageActionButtons', styleActionButton)}>
        <Button type="secondary" className="errorCommonButtonStyling">
          Go to Home
        </Button>
      </div>
    ) // eslint-disable-line react/display-name
  },
  ['500']: {
    image: 'internalError',
    heading: 'Something went wrong',
    description:
      "Sorry your past request could't be completed <br /> Please try agaain after some time",
    buttons: styleActionButton => (
      <div className={cs('errorPageActionButtons', styleActionButton)}>
        <Button type="secondary" className="errorCommonButtonStyling">
          Report Issue
        </Button>
        <Button type="primary" className="errorCommonButtonStyling">
          Try Again
        </Button>
      </div>
    ) // eslint-disable-line react/display-name
  },
  ['503']: {
    image: 'serviceUnavailable',
    heading: "It's not you. It's us",
    description:
      'Sorry our service is not available currently. <br />  Please try again after some time',
    buttons: styleActionButton => (
      <div className={cs('errorPageActionButtons', styleActionButton)}>
        <Button type="secondary" className="errorCommonButtonStyling">
          Report Issue
        </Button>
        <Button type="primary" className="errorCommonButtonStyling">
          Try Again
        </Button>
      </div>
    ) // eslint-disable-line react/display-name
  }
};

export { PAGE_TYPES };
