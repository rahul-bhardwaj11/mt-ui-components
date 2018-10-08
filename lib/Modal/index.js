'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

require('antd/lib/modal/style/index.css');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _mixins = require('../styles/mixins');

var _mixins2 = _interopRequireDefault(_mixins);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MtModal = (0, _styledComponents2.default)(_modal2.default).withConfig({
  displayName: 'Modal__MtModal',
  componentId: 'oj6zn8-0'
})(['&.ant-modal{font-family:inherit;z-index:', ';.ant-modal-content{border-radius:8px;}.ant-modal-body{padding:0px 32px;overflow:auto;}.ant-modal-header{border-bottom:0px;padding:24px 32px;font-size:20px;border-radius:8px 8px 0 0;.ant-modal-title{color:', ';font-size:20px;line-height:27px;}}.ant-modal-close{height:20px;width:20px;margin:24px 32px;}.ant-modal-close-x{font-size:20px;line-height:27px;height:20px;width:20px;}.ant-modal-footer{padding:15px 32px 16px 32px;background:', ';border-top:1px solid ', ';;border-radius:0 0 8px 8px;margin-top:15px;.ant-btn{', '       color:', ';min-width:75px;&.ant-btn-primary{', '         color:#fff;&:hover{', ' color:#fff;}&:focus,&.active{', ';color:#fff;}&:disabled{border:1px solid ', ';border-radius:4px;color:#fff;background:', ';}}&:hover,&:focus{', ';color:', '}}}@media (max-width:576px){margin:0px;top:0px;height:100vh;background:#fff;.ant-modal-header{border-radius:0px;}.ant-modal-footer{position:fixed;bottom:0px;width:100%;border-radius:0px;}.ant-modal-content{border-radius:0px;box-shadow:0 0px 0px rgba(0,0,0,0.15);}}}.ant-confirm-body > .anticon{display:none;}'], _mixins2.default.zIndex.MODAL, _theme2.default.colors.SHARK, _theme2.default.colors.PORCELAIN, _theme2.default.colors.ALTO, _mixins2.default.textBtn(), _theme2.default.colors.OUTER_SPACE, _mixins2.default.primaryBtn(), _mixins2.default.primaryBtnHover(), _mixins2.default.primaryBtnHover(), _theme2.default.colors.DISABLE, _theme2.default.colors.ALTO, _mixins2.default.textBtn(), _theme2.default.colors.GREY);

var MtConfirmModal = _styledComponents2.default.div.withConfig({
  displayName: 'Modal__MtConfirmModal',
  componentId: 'oj6zn8-1'
})(['.ant-modal{font-family:inherit;}.ant-modal-body{}.ant-confirm-body{.ant-confirm-content{margin-left:0px;}}.ant-modal-content{border-radius:8px;}.ant-confirm-btns{display:', ';}.ant-confirm-confirm .ant-confirm-body > .anticon{display:none;}.ant-confirm-body .ant-confirm-content{margin-left:0px;}.ant-confirm .ant-confirm-btns button + button{background:', ';border:1px solid ', ';}.ant-confirm-body .ant-confirm-title{', ';}'], function (_ref) {
  var _ref$showFooter = _ref.showFooter,
      showFooter = _ref$showFooter === undefined ? true : _ref$showFooter;

  return showFooter ? 'block' : 'none';
}, _theme2.default.colors.INDIGO, _theme2.default.colors.INDIGO, _mixins2.default.blackLink());

var MODAL_WIDTH_MAP = {
  small: 500,
  medium: 600,
  large: 720,
  full: '100%'
};

var Modal = function (_Component) {
  (0, _inherits3.default)(Modal, _Component);

  function Modal() {
    (0, _classCallCheck3.default)(this, Modal);
    return (0, _possibleConstructorReturn3.default)(this, (Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).apply(this, arguments));
  }

  (0, _createClass3.default)(Modal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          type = _props.type,
          width = _props.width;

      var customProps = (0, _extends3.default)({}, this.props, {
        width: width || MODAL_WIDTH_MAP[type],
        style: (0, _extends3.default)({
          top: type === 'full' ? 0 : undefined
        }, this.props.style)
      });
      return _react2.default.createElement(
        MtModal,
        customProps,
        children
      );
    }
  }]);
  return Modal;
}(_react.Component);

Modal.propTypes = {
  children: _propTypes2.default.node.isRequired,
  type: _propTypes2.default.oneOf(['small', 'medium', 'large', 'full']),
  style: _propTypes2.default.object,
  width: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};
Modal.defaultProps = {
  type: 'medium'
};

Modal.confirm = function (props) {
  var showFooter = props.showFooter;

  var containerEl = document.body.appendChild(document.createElement('div'));
  var MountNode = void 0;
  _reactDom2.default.render(_react2.default.createElement(MtConfirmModal, {
    showFooter: showFooter,
    innerRef: function innerRef(e) {
      return MountNode = e;
    }
  }), containerEl);
  var confirmModalProps = (0, _extends3.default)({}, props, {
    getContainer: function getContainer() {
      return MountNode;
    },
    onCancel: function onCancel() {
      for (var _len = arguments.length, cancelProps = Array(_len), _key = 0; _key < _len; _key++) {
        cancelProps[_key] = arguments[_key];
      }

      document.body.removeChild(containerEl);
      props.onCancel && props.onCancel(cancelProps);
    }
  });
  _modal2.default.confirm(confirmModalProps);
};

exports.default = Modal;