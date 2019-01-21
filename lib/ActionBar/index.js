'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('antd/lib/button/style/index.css');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mixins = require('../styles/mixins.js');

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var MtActionBar = _styledComponents2.default.div.withConfig({
  displayName: 'ActionBar__MtActionBar',
  componentId: 'sc-1efkcmz-0'
})(
  [
    'position:fixed;max-width:100vw;bottom:0;width:',
    ';z-index:',
    ';left:0;right:0;margin:auto;background-color:white;padding:16px 32px;box-shadow:0 -1px 0 0 #e7e8ec,0 -2px 4px 0 rgba(0,0,0,0.08);.countText{',
    ';margin-right:29px;}'
  ],
  function(_ref) {
    var _ref$width = _ref.width,
      width = _ref$width === undefined ? '1248px' : _ref$width;
    return width;
  },
  function(_ref2) {
    var zIndex = _ref2.zIndex;
    return zIndex;
  },
  _mixins2.default.blackLink()
);

var ActionBar = function ActionBar(_ref3) {
  var children = _ref3.children,
    countText = _ref3.countText,
    style = _ref3.style;

  return _react2.default.createElement(
    MtActionBar,
    style,
    countText &&
      _react2.default.createElement(
        'span',
        { className: 'countText' },
        countText
      ),
    children
  );
};

ActionBar.propTypes = {
  children: _propTypes2.default.arrayOf(_propTypes2.default.node),
  countText: _propTypes2.default.string.isRequired,
  style: _propTypes2.default.object
};

exports.default = ActionBar;
