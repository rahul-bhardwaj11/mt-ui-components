'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

<<<<<<< Updated upstream
=======
var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

>>>>>>> Stashed changes
var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

<<<<<<< Updated upstream
var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  .userIcon {\n    ', ';\n    color: #aaa;\n    margin-right: ', ';\n    float: ', ';\n    ', ';\n  }\n'], ['\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  .userIcon {\n    ', ';\n    color: #aaa;\n    margin-right: ', ';\n    float: ', ';\n    ', ';\n  }\n']);
=======
var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n\n  .ant-avatar-sm {\n    width: 27px;\n    height: 27px;\n    line-height: 27px;\n    border-radius: 50%;\n    border: 1.5px solid #ffffff;\n  }\n\n  .content {\n    display: inline-block;\n    vertical-align: bottom;\n    margin-left: 10px;\n    .name {\n      ', ';\n      line-height: 22px;\n    }\n    .email {\n      ', ';\n      line-height: 17px;\n    }\n  }\n'], ['\n  display: inline-block;\n\n  .ant-avatar-sm {\n    width: 27px;\n    height: 27px;\n    line-height: 27px;\n    border-radius: 50%;\n    border: 1.5px solid #ffffff;\n  }\n\n  .content {\n    display: inline-block;\n    vertical-align: bottom;\n    margin-left: 10px;\n    .name {\n      ', ';\n      line-height: 22px;\n    }\n    .email {\n      ', ';\n      line-height: 17px;\n    }\n  }\n']);
>>>>>>> Stashed changes

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

<<<<<<< Updated upstream
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
=======
var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _avatar = require('antd/lib/avatar');

var _avatar2 = _interopRequireDefault(_avatar);

require('antd/lib/avatar/style/index.css');

var _mixins = require('../styles/mixins');

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MtUserThumbnail = _styledComponents2.default.div(_templateObject, _mixins2.default.blackText(), _mixins2.default.smallDarkLink());

var UserThumbnail = function (_Component) {
  (0, _inherits3.default)(UserThumbnail, _Component);

  function UserThumbnail() {
    (0, _classCallCheck3.default)(this, UserThumbnail);
    return (0, _possibleConstructorReturn3.default)(this, (UserThumbnail.__proto__ || (0, _getPrototypeOf2.default)(UserThumbnail)).apply(this, arguments));
  }

  (0, _createClass3.default)(UserThumbnail, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          email = _props.email,
          imgUrl = _props.imgUrl,
          shape = _props.shape,
          size = _props.size,
          icon = _props.icon;

      var avatarComponent = imgUrl ? _react2.default.createElement(_avatar2.default, { shape: shape, size: size, src: imgUrl }) : _react2.default.createElement(_avatar2.default, { shape: shape, size: size, icon: icon });

      return _react2.default.createElement(
        MtUserThumbnail,
        null,
        avatarComponent,
        (name || email) && _react2.default.createElement(
          'div',
          { className: 'content' },
          name && _react2.default.createElement(
            'div',
            { className: 'name' },
            name
          ),
          email && _react2.default.createElement(
            'div',
            { className: 'email' },
            email
          )
        )
      );
    }
  }]);
  return UserThumbnail;
}(_react.Component);
>>>>>>> Stashed changes

UserThumbnail.propTypes = {
  name: _propTypes2.default.string,
  email: _propTypes2.default.string,
<<<<<<< Updated upstream
  imgUrl: _propTypes2.default.string
=======
  imgUrl: _propTypes2.default.string,
  shape: _propTypes2.default.oneOf(['circle', 'square']),
  size: _propTypes2.default.string,
  icon: _propTypes2.default.string
};
UserThumbnail.defaultProps = {
  shape: 'circle',
  size: 'large',
  icon: 'user'
>>>>>>> Stashed changes
};

exports.default = UserThumbnail;
//# sourceMappingURL=index.js.map