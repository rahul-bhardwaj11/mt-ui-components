import React from 'react';
import cs from 'classnames';
import Button from '../Button';

import { reload } from '../utils';

export const PAGE_TYPES = {
  NOT_FOUND: '404',
  INTERNAL_SERVER_ERROR: '500',
  SERVICE_UNAVAILABLE: '503',
  CLIENT_ERROR: 'CLIENT_ERROR'
};

export const PAGE_TYPES_CONFIG = {
  [PAGE_TYPES.NOT_FOUND]: {
    image: 'pageNotFound',
    heading: 'Page not found',
    description: "We can't seem ot find the page you are looking for.",
    buttons: styleActionButton => (
      <div className={cs('errorPageActionButtons', styleActionButton)}>
        <Button
          type="secondary"
          className="errorCommonButtonStyling"
          onClick={() => reload('/')}
        >
          Go to Home
        </Button>
      </div>
    )
  },
  [PAGE_TYPES.INTERNAL_SERVER_ERROR]: {
    image: 'internalError',
    heading: 'Something went wrong',
    description:
      "Sorry your past request could't be completed <br /> Please try agaain after some time",
    buttons: (styleActionButton, reportError, tryAgain) => (
      <div className={cs('errorPageActionButtons', styleActionButton)}>
        {reportError && (
          <Button type="secondary" className="errorCommonButtonStyling">
            Report Issue
          </Button>
        )}
        {tryAgain && (
          <Button
            type="primary"
            className="errorCommonButtonStyling"
            onClick={tryAgain}
          >
            Try Again
          </Button>
        )}
      </div>
    )
  },
  [PAGE_TYPES.SERVICE_UNAVAILABLE]: {
    image: 'serviceUnavailable',
    heading: "It's not you. It's us",
    description:
      'Sorry our service is not available currently. <br />  Please try again after some time',
    buttons: (styleActionButton, reportError, tryAgain) => (
      <div className={cs('errorPageActionButtons', styleActionButton)}>
        {reportError && (
          <Button type="secondary" className="errorCommonButtonStyling">
            Report Issue
          </Button>
        )}
        {tryAgain && (
          <Button
            type="primary"
            className="errorCommonButtonStyling"
            onClick={tryAgain}
          >
            Try Again
          </Button>
        )}
      </div>
    )
  },
  [PAGE_TYPES.CLIENT_ERROR]: {
    image: 'serviceUnavailable',
    heading: 'Something went wrong',
    description:
      "Sorry your past request could't be completed <br /> Please try agaain after some time",
    buttons: (styleActionButton, reportError, tryAgain) => (
      <div className={cs('errorPageActionButtons', styleActionButton)}>
        {tryAgain && (
          <Button
            type="secondary"
            className="errorCommonButtonStyling"
            onClick={tryAgain}
          >
            Reload
          </Button>
        )}
        {reportError && (
          <Button
            type="primary"
            className="errorCommonButtonStyling"
            onClick={reportError}
          >
            Report Error
          </Button>
        )}
      </div>
    )
  }
};
