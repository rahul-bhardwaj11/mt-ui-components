/* eslint-disable */
// import React, { Component } from "react";
// import PropTypes from "prop-types";
import styled from 'styled-components';

function boxShadowWithLevel(level) {
  let boxShadow;

  switch (level) {
    case 1:
      boxShadow = 'none';
      break;
    case 2:
      boxShadow = `0 2px 4px 0 rgba(0, 0, 0, 0.08)`;
      break;
    case 3:
      boxShadow = `0 2px 4px 0 rgba(0, 0, 0, 0.08)`;
      break;
    default:
      boxShadow = 'none';
  }

  return boxShadow;
}

export const Elevation = styled.div`
	background: #fff;
    border-radius: 8px;
    box-shadow: {props => boxShadowWithLevel(props.level)};
`;
