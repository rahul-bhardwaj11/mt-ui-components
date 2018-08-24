'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n\n  .content {\n    display: inline-block;\n    vertical-align: bottom;\n    margin-left: 16px;\n    .name {\n      ', ';\n      line-height: 22px;\n    }\n    .email {\n      ', ';\n      line-height: 17px;\n    }\n  }\n'], ['\n  display: inline-block;\n\n  .content {\n    display: inline-block;\n    vertical-align: bottom;\n    margin-left: 16px;\n    .name {\n      ', ';\n      line-height: 22px;\n    }\n    .email {\n      ', ';\n      line-height: 17px;\n    }\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
          email = _props.email;


      return _react2.default.createElement(
        MtUserThumbnail,
        null,
        _react2.default.createElement(
          _avatar2.default,
          this.props,
          'HB'
        ),
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

UserThumbnail.propTypes = {
  name: _propTypes2.default.string,
  email: _propTypes2.default.string,
  src: _propTypes2.default.string,
  shape: _propTypes2.default.oneOf(['circle', 'square']),
  size: _propTypes2.default.string,
  icon: _propTypes2.default.string
};
UserThumbnail.defaultProps = {
  shape: 'circle',
  size: 'large' };
exports.default = UserThumbnail;
//# sourceMappingURL=index.js.map