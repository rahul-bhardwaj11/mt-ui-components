import React from 'react';
import styled from 'styled-components';
import Scrollbar from 'react-custom-scrollbars';
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
  return (
    <ScrollbarStyle>
      <Scrollbar
        renderTrackVertical={props => (
          <div {...props} className="trackVertical" />
        )}
        renderThumbVertical={props => (
          <div {...props} className="thumbVertical" />
        )}
        {...props}
      />
    </ScrollbarStyle>
  );
};

export default CustomScrollbar;
