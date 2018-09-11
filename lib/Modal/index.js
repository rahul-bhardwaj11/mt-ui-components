"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _modal = require("antd/lib/modal");

var _modal2 = _interopRequireDefault(_modal);

require("antd/lib/modal/style/index.css");

require("../styles/override.scss");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require("../styles/theme");

var _theme2 = _interopRequireDefault(_theme);

var _mixins = require("../styles/mixins");

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MtModal = (0, _styledComponents2.default)(_modal2.default).withConfig({
  displayName: "Modal__MtModal",
  componentId: "oj6zn8-0"
})([".ant-modal-content{box-shadow:0 4px 8px 0 rgba(0,0,0,0.25);}.ant-modal-body{padding:24px 32px;overflow:scroll;}.ant-modal-header{border-bottom:0px;padding:24px 32px;font-size:20px;.ant-modal-title{color:", ";font-size:20px;line-height:27px;}}.ant-modal-close{height:20px;width:20px;margin:24px 32px;}.ant-modal-close-x{font-size:20px;line-height:27px;height:20px;width:20px;}.ant-modal-footer{padding:21px 32px;background:", ";border-top:0px;.ant-btn{", " ", " color:", ";min-width:75px;&.ant-btn-primary{", " ", " color:#fff;&:hover{", " color:#fff;}&:focus,&.active{", ";color:#fff;}}&:hover,&:focus{", " color:", "}}}"], _theme2.default.colors.SHARK, _theme2.default.colors.PORCELAIN, _mixins2.default.textBtn(), _mixins2.default.button(), _theme2.default.colors.OUTER_SPACE, _mixins2.default.primaryBtn(), _mixins2.default.button(), _mixins2.default.primaryBtnHover(), _mixins2.default.primaryBtnHover(), _mixins2.default.textBtn(), _theme2.default.colors.GREY);

var MODAL_WIDTH_MAP = {
  small: 500,
  medium: 600,
  large: 800,
  full: "100%"
};

var Modal = function (_Component) {
  (0, _inherits3.default)(Modal, _Component);

  function Modal() {
    (0, _classCallCheck3.default)(this, Modal);
    return (0, _possibleConstructorReturn3.default)(this, (Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).apply(this, arguments));
  }

  (0, _createClass3.default)(Modal, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          type = _props.type,
          width = _props.width;

      var customProps = (0, _extends3.default)({}, this.props, {
        width: MODAL_WIDTH_MAP[type],
        style: (0, _extends3.default)({}, this.props.style, {
          top: type === "full" ? 0 : undefined
        })
      });
      return _react2.default.createElement(
        MtModal,
        (0, _extends3.default)({}, customProps, { width: width }),
        children
      );
    }
  }]);
  return Modal;
}(_react.Component);

Modal.propTypes = {
  children: _propTypes2.default.node.isRequired,
  type: _propTypes2.default.oneOf(["small", "medium", "large", "full"])
};

Modal.confirm = _modal2.default.confirm;
exports.default = Modal;