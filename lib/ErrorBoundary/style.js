'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _mixins = require('../styles/mixins');

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorBoundaryWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'style__ErrorBoundaryWrapper',
  componentId: 'sc-13c2n0u-0'
})(['background:', ';text-align:center;height:100vh;display:table;width:100%;.innerWrapperErrorBoundary{display:table-cell;vertical-align:middle;}.subErrorText{', ';margin:24px 0 24px;}}'], _theme2.default.colors.WHITE, _mixins2.default.h2());

exports.default = ErrorBoundaryWrapper;