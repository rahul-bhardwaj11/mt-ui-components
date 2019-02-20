import React from 'react';
import PropTypes from 'prop-types';

const ReportError = ({ reportError }) => {
  return <a onClick={() => reportError}>Report feedback</a>;
};

ReportError.propTypes = {
  reportError: PropTypes.func.isRequired
};

export default ReportError;
