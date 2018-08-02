import React from 'react';
import PropTypes from 'prop-types';
import 'antd/lib/button/style/index.css';
import styled from 'styled-components';
import theme from '../styles/theme';

const MtActionBar = styled.div`
  position: fixed;
  max-width: 100vw;
  bottom: 0;
  width: 1248px;
  left: 0;
  right: 0;
  margin: auto;
  background-color: white;
  padding: 1.5em 0;
  box-shadow: 0 -1px 0 0 #e7e8ec, 0 -2px 4px 0 rgba(0, 0, 0, 0.08);
  .countText {
    padding: 0 2em;
    color: ${theme.colors.SHARK};
    font-size: 14px;
    font-weight: 600;
  }
`;

const ActionBar = ({ children, countText }) => {
  return (
    <MtActionBar>
      <span className="countText">{countText}</span>
      {children}
    </MtActionBar>
  );
};

ActionBar.propTypes = {
  children: PropTypes.any,
  countText: PropTypes.string.isRequired
};

export default ActionBar;
