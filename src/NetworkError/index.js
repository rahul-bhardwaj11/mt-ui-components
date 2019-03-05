import React from 'react';
import PropTypes from 'prop-types';

import ErrorPage, { PAGE_TYPES } from '@mindtickle/mt-ui-components/ErrorPage';

import { reload } from 'mt-ui-core/utils';

import { ErrorCodes } from './constants';

const NetworkError = ({
  statusCode,
  children,
  unauthorisedRedirectionRoute
}) => {
  if (
    ErrorCodes.unauthorised.indexOf(statusCode) > -1 ||
    ErrorCodes.forbidden.indexOf(statusCode) > -1
  ) {
    return reload(unauthorisedRedirectionRoute);
  }

  if (
    ErrorCodes.serverErrors.indexOf(statusCode) > -1 ||
    ErrorCodes.badRequest.indexOf(statusCode) > -1
  ) {
    return <ErrorPage pageType={PAGE_TYPES.INTERNAL_SERVER_ERROR} />;
  }

  if (ErrorCodes.notFound.indexOf(statusCode) > -1) {
    return <ErrorPage pageType={PAGE_TYPES.NOT_FOUND} />;
  }

  if (ErrorCodes.serviceUnavailable.indexOf(statusCode) > -1) {
    return <ErrorPage pageType={PAGE_TYPES.SERVVICE_UNAVAILABLE} />;
  }

  return children;
};

NetworkError.propTypes = {
  statusCode: PropTypes.number
};

export default NetworkError;
