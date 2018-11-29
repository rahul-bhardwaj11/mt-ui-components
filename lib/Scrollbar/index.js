'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactCustomScrollbars = require('react-custom-scrollbars');

var _reactCustomScrollbars2 = _interopRequireDefault(_reactCustomScrollbars);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ScrollbarStyle = _styledComponents2.default.div.withConfig({
  displayName: 'Scrollbar__ScrollbarStyle',
  componentId: 'sc-17js9a1-0'
})(
  [
    '.trackVertical{width:4px !important;right:2px;bottom:2px;top:2px;border-radius:3px;}.thumbVertical{width:100%;background-color:',
    ';border-radius:4px;}'
  ],
  _theme2.default.colors.GREY
);

var CustomScrollbar = function CustomScrollbar(props) {
  return _react2.default.createElement(
    ScrollbarStyle,
    null,
    _react2.default.createElement(
      _reactCustomScrollbars2.default,
      (0, _extends3.default)(
        {
          renderTrackVertical: function renderTrackVertical(props) {
            return _react2.default.createElement(
              'div',
              (0, _extends3.default)({}, props, { className: 'trackVertical' })
            );
          },
          renderThumbVertical: function renderThumbVertical(props) {
            return _react2.default.createElement(
              'div',
              (0, _extends3.default)({}, props, { className: 'thumbVertical' })
            );
          }
        },
        props
      )
    )
  );
};

exports.default = CustomScrollbar;
