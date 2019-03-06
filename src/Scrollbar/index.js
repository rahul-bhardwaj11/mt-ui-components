import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Scrollbar from 'react-custom-scrollbars';
import cs from 'classnames';
import themes from '../styles/theme';

const ScrollbarStyle = styled.div`
  .trackVertical {
    width: 4px !important;
    right: 2px;
    bottom: 2px;
    top: 2px;
    border-radius: 3px;
  }

  .thumbVertical {
    width: 100%;
    background-color: ${themes.colors.GREY};
    border-radius: 4px;
  }
`;

const CustomScrollbar = props => {
  const { classNames, ...rest } = props;
  return (
    <ScrollbarStyle>
      <Scrollbar
        renderTrackVertical={props => (
          <div {...props} className={cs('trackVertical', classNames.track)} />
        )}
        renderThumbVertical={props => (
          <div {...props} className={cs('thumbVertical', classNames.thumb)} />
        )}
        {...rest}
      />
    </ScrollbarStyle>
  );
};

CustomScrollbar.propTypes = {
  classNames: PropTypes.shape({
    track: PropTypes.string,
    thumb: PropTypes.string
  })
};

CustomScrollbar.defaultProps = {
  classNames: {}
};

export default CustomScrollbar;
