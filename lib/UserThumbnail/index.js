'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  .userIcon {\n    ', ';\n    color: #aaa;\n    margin-right: ', ';\n    float: ', ';\n    ', ';\n  }\n'], ['\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  .userIcon {\n    ', ';\n    color: #aaa;\n    margin-right: ', ';\n    float: ', ';\n    ', ';\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import theme from "./../styles/theme";
/**
 * To display user profile with name
 */

var MtUserThumbnail = _styledComponents2.default.div(_templateObject, function (props) {
  return props.imgUrl && 'height: 100%;';
}, function (props) {
  return props.name ? '10px' : '0';
}, function (props) {
  return props.name ? 'left' : 'none';
}, function (props) {
  return props.imgUrl && 'border-radius: 50%;';
});

var UserThumbnail = function UserThumbnail(props) {
  var name = props.name,
      email = props.email,
      imgUrl = props.imgUrl;

  return _react2.default.createElement(
    MtUserThumbnail,
    props,
    imgUrl ? _react2.default.createElement('img', { className: 'userIcon', src: imgUrl }) : _react2.default.createElement(_Icon2.default, { type: 'userProfile', className: 'userIcon' }),
    name && _react2.default.createElement(
      'div',
      null,
      name
    ),
    email && _react2.default.createElement(
      'div',
      null,
      email
    )
  );
};

UserThumbnail.propTypes = {
  name: _propTypes2.default.string,
  email: _propTypes2.default.string,
  imgUrl: _propTypes2.default.string
};

exports.default = UserThumbnail;
//# sourceMappingURL=index.js.map