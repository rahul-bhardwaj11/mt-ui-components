'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var MtUserThumbnail = _styledComponents2.default.div.withConfig({
  displayName: 'UserThumbnail__MtUserThumbnail',
  componentId: 'l59wso-0'
})(['.userThumbnailAvatar{float:left;}.userThumbnailInfo{height:40px;margin-left:56px;cursor:default;.name{', ';', ';}.content{', ';', ';}}'], _mixins2.default.blackText(), _mixins2.default.truncate(), _mixins2.default.smallDarkLink(), _mixins2.default.truncate());

var ThumbnailInfoWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'UserThumbnail__ThumbnailInfoWrapper',
  componentId: 'l59wso-1'
})(['.wrapper{display:table;table-layout:fixed;border-spacing:0px;height:40px;width:100%;}.info{vertical-align:middle;display:table-cell;width:100%;}']);

var UserThumbnailInfo = function (_Component) {
  (0, _inherits3.default)(UserThumbnailInfo, _Component);

  function UserThumbnailInfo() {
    (0, _classCallCheck3.default)(this, UserThumbnailInfo);
    return (0, _possibleConstructorReturn3.default)(this, (UserThumbnailInfo.__proto__ || (0, _getPrototypeOf2.default)(UserThumbnailInfo)).apply(this, arguments));
  }

  (0, _createClass3.default)(UserThumbnailInfo, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          title = _props.title,
          content = _props.content;


      return _react2.default.createElement(
        ThumbnailInfoWrapper,
        { className: className },
        _react2.default.createElement(
          'div',
          { className: 'wrapper' },
          _react2.default.createElement(
            'div',
            { className: 'info' },
            title && _react2.default.createElement(
              'div',
              { className: 'name' },
              title
            ),
            content && _react2.default.createElement(
              'div',
              { className: 'content' },
              content
            )
          )
        )
      );
    }
  }]);
  return UserThumbnailInfo;
}(_react.Component);

UserThumbnailInfo.propTypes = {
  title: _propTypes2.default.string,
  content: _propTypes2.default.string,
  className: _propTypes2.default.string
};

var UserThumbnail = function (_Component2) {
  (0, _inherits3.default)(UserThumbnail, _Component2);

  function UserThumbnail() {
    var _ref;

    var _temp, _this2, _ret;

    (0, _classCallCheck3.default)(this, UserThumbnail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref = UserThumbnail.__proto__ || (0, _getPrototypeOf2.default)(UserThumbnail)).call.apply(_ref, [this].concat(args))), _this2), _this2.getInitials = function (name) {
      var initials = name.match(/\b\w/g) || [];
      initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
      return initials;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this2, _ret);
  }

  (0, _createClass3.default)(UserThumbnail, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          expanded = _props2.expanded,
          className = _props2.className,
          rest = (0, _objectWithoutProperties3.default)(_props2, ['expanded', 'className']);
      var title = rest.title,
          content = rest.content;


      var mtProps = (0, _assign2.default)({}, rest);
      mtProps = !title ? (0, _assign2.default)(mtProps, { icon: 'user' }) : mtProps;

      var thumbnailInfoProps = {
        title: title,
        content: content
      };

      return _react2.default.createElement(
        MtUserThumbnail,
        { className: className },
        _react2.default.createElement(
          _avatar2.default,
          (0, _extends3.default)({ className: 'userThumbnailAvatar' }, mtProps),
          title && this.getInitials(title)
        ),
        expanded && _react2.default.createElement(UserThumbnailInfo, (0, _extends3.default)({}, thumbnailInfoProps, {
          className: 'userThumbnailInfo'
        }))
      );
    }
  }]);
  return UserThumbnail;
}(_react.Component);

UserThumbnail.propTypes = {
  title: _propTypes2.default.string,
  content: _propTypes2.default.string,
  src: _propTypes2.default.string,
  shape: _propTypes2.default.oneOf(['circle', 'square']),
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  icon: _propTypes2.default.string,
  expanded: _propTypes2.default.bool,
  className: _propTypes2.default.string
};
UserThumbnail.defaultProps = {
  shape: 'circle',
  size: 'large',
  expanded: false
};
exports.Avatar = _avatar2.default;
exports.default = UserThumbnail;