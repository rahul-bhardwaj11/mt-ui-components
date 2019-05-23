import React from 'react';
import PropTypes from 'prop-types';
import StyledSkeletonLoader, { THEME, LOADER_COLOR } from './style';

const getWidthArray = function(indentedRows) {
  let widthArray = [];
  for (var i = 0; i < indentedRows; i++) {
    widthArray.push(Math.floor(Math.random() * 75) + 25 + '%');
  }
  return widthArray;
};

const getBgColor = function(theme) {
  if (typeof theme === 'object') {
    let { bgColor, bgShade } = theme;
    return `linear-gradient(90deg, ${bgColor} 25%, ${bgShade}  37%, ${bgColor} 63%)`;
  }

  return LOADER_COLOR[theme];
};

const Skeleton = props => {
  const { indentedRows = 3, theme } = props;
  const TITLE_WIDTH = getWidthArray(indentedRows);
  let backgroundColor = getBgColor(theme);

  const withoutIndentProps = {
    avatar: {
      size: 'large',
      shape: 'square'
    },
    active: true,
    paragraph: false,
    bgColor: backgroundColor,
    title: {
      width: '75%'
    },
    ...props.withoutIndentProps
  };

  const indentProps = {
    avatar: {
      size: 'large',
      shape: 'square'
    },
    active: true,
    paragraph: false,
    bgColor: backgroundColor,
    ...props.indentProps
  };

  return (
    <React.Fragment>
      <StyledSkeletonLoader {...withoutIndentProps} />
      {props.indentSize && (
        <div
          style={{
            marginLeft: props.indentSize
          }}
        >
          {TITLE_WIDTH.map((width, index) => {
            return (
              <StyledSkeletonLoader
                {...indentProps}
                title={{
                  width: width,
                  ...indentProps.title
                }}
                key={index}
              />
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

Skeleton.propTypes = {
  theme: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      bgColor: PropTypes.string,
      bgShade: PropTypes.string
    })
  ]),
  indentSize: PropTypes.string,
  indentedRows: PropTypes.number,
  indentProps: PropTypes.object,
  withoutIndentProps: PropTypes.object
};

Skeleton.defaultProps = {
  theme: THEME.LIGHT
};

export default Skeleton;
