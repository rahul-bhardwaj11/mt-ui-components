'use strict';

Object.defineProperty(exports, '__esModule', {
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

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(
    [
      '\n  .modalWrapper {\n    z-index: ',
      ';\n  }\n  .ant-modal-mask {\n    z-index: ',
      ';\n  }\n'
    ],
    [
      '\n  .modalWrapper {\n    z-index: ',
      ';\n  }\n  .ant-modal-mask {\n    z-index: ',
      ';\n  }\n'
    ]
  ),
  _templateObject2 = (0, _taggedTemplateLiteral3.default)(
    [
      '\n&.ant-modal{\n  font-family: inherit;\n  z-index: ',
      ';\n  .ant-modal-content {\n    border-radius:8px;\n  }\n\n  .ant-modal-body {\n    padding: 0px 32px;\n    overflow: auto;\n  }\n   .ant-modal-header {\n    border-bottom: 0px;\n    padding: 24px 32px;\n    font-size: 20px;\n    border-radius: 8px 8px 0 0;\n\n    .ant-modal-title {\n      ',
      ';\n    }\n  }\n  .ant-modal-close {\n    height: 20px;\n    width: 20px;\n    margin: 24px 32px;\n  }\n  .ant-modal-close-x {\n    ',
      ';\n    line-height: 27px;\n    height: 20px;\n    width: 20px;\n  }\n  .ant-modal-footer {\n    padding: 15px 32px 16px 32px;\n    background: ',
      ';\n    border-top: 1px solid ',
      ';;\n    border-radius: 0 0 8px 8px;\n    margin-top: 15px;\n    \n    .ant-btn {\n      ',
      '      \n      color: ',
      ';\n      min-width: 75px;\n\n      &.ant-btn-primary {\n        ',
      '        \n        color: ',
      ';\n        &:hover {\n          ',
      '\n          color: ',
      ';\n        }\n        &:focus,\n        &.active {\n          ',
      ';\n          color: ',
      ';\n        }\n        &:disabled {\n          border: 1px solid ',
      ';\n          border-radius: 4px;\n          color: ',
      ';\n          background: ',
      ';\n        }\n      }\n      &:hover,\n      &:focus {\n        ',
      ';\n        color: ',
      ';\n      }\n    }\n  }\n\n  @media (max-width: 576px){\n    margin: 0px;\n    top:0px;\n    height: 100vh;\n    background: ',
      ';\n\n    .ant-modal-header{\n      border-radius:0px;\n    }\n\n    .ant-modal-footer {\n      position: fixed;\n      bottom: 0px;\n      width: 100%;\n      border-radius: 0px;\n  }\n  .ant-modal-content{\n    border-radius:0px;\n    box-shadow:0 0px 0px rgba(0, 0, 0, 0.15);\n  }  \n\n}\n}\n.ant-confirm-body > .anticon {\n  display: none;\n}\n'
    ],
    [
      '\n&.ant-modal{\n  font-family: inherit;\n  z-index: ',
      ';\n  .ant-modal-content {\n    border-radius:8px;\n  }\n\n  .ant-modal-body {\n    padding: 0px 32px;\n    overflow: auto;\n  }\n   .ant-modal-header {\n    border-bottom: 0px;\n    padding: 24px 32px;\n    font-size: 20px;\n    border-radius: 8px 8px 0 0;\n\n    .ant-modal-title {\n      ',
      ';\n    }\n  }\n  .ant-modal-close {\n    height: 20px;\n    width: 20px;\n    margin: 24px 32px;\n  }\n  .ant-modal-close-x {\n    ',
      ';\n    line-height: 27px;\n    height: 20px;\n    width: 20px;\n  }\n  .ant-modal-footer {\n    padding: 15px 32px 16px 32px;\n    background: ',
      ';\n    border-top: 1px solid ',
      ';;\n    border-radius: 0 0 8px 8px;\n    margin-top: 15px;\n    \n    .ant-btn {\n      ',
      '      \n      color: ',
      ';\n      min-width: 75px;\n\n      &.ant-btn-primary {\n        ',
      '        \n        color: ',
      ';\n        &:hover {\n          ',
      '\n          color: ',
      ';\n        }\n        &:focus,\n        &.active {\n          ',
      ';\n          color: ',
      ';\n        }\n        &:disabled {\n          border: 1px solid ',
      ';\n          border-radius: 4px;\n          color: ',
      ';\n          background: ',
      ';\n        }\n      }\n      &:hover,\n      &:focus {\n        ',
      ';\n        color: ',
      ';\n      }\n    }\n  }\n\n  @media (max-width: 576px){\n    margin: 0px;\n    top:0px;\n    height: 100vh;\n    background: ',
      ';\n\n    .ant-modal-header{\n      border-radius:0px;\n    }\n\n    .ant-modal-footer {\n      position: fixed;\n      bottom: 0px;\n      width: 100%;\n      border-radius: 0px;\n  }\n  .ant-modal-content{\n    border-radius:0px;\n    box-shadow:0 0px 0px rgba(0, 0, 0, 0.15);\n  }  \n\n}\n}\n.ant-confirm-body > .anticon {\n  display: none;\n}\n'
    ]
  ),
  _templateObject3 = (0, _taggedTemplateLiteral3.default)(
    [
      '\n  .ant-modal-wrap {\n    z-index: ',
      ';\n  }\n  .ant-modal-mask {\n    z-index: ',
      ';\n  }\n  .ant-modal {\n    font-family: inherit;\n  }\n\n  .ant-confirm-body {\n    .ant-confirm-content {\n      margin-left: 0px;\n    }\n  }\n\n  .ant-modal-content {\n    border-radius: 8px;\n  }\n  .ant-confirm-btns {\n    display: ',
      ';\n  }\n  .ant-confirm-confirm .ant-confirm-body > .anticon {\n    display: none;\n  }\n  .ant-confirm-body .ant-confirm-content {\n    margin-left: 0px;\n  }\n  .ant-confirm .ant-confirm-btns button + button {\n    background: ',
      ';\n    border: 1px solid ',
      ';\n  }\n  .ant-confirm-body .ant-confirm-title {\n    ',
      ';\n  }\n'
    ],
    [
      '\n  .ant-modal-wrap {\n    z-index: ',
      ';\n  }\n  .ant-modal-mask {\n    z-index: ',
      ';\n  }\n  .ant-modal {\n    font-family: inherit;\n  }\n\n  .ant-confirm-body {\n    .ant-confirm-content {\n      margin-left: 0px;\n    }\n  }\n\n  .ant-modal-content {\n    border-radius: 8px;\n  }\n  .ant-confirm-btns {\n    display: ',
      ';\n  }\n  .ant-confirm-confirm .ant-confirm-body > .anticon {\n    display: none;\n  }\n  .ant-confirm-body .ant-confirm-content {\n    margin-left: 0px;\n  }\n  .ant-confirm .ant-confirm-btns button + button {\n    background: ',
      ';\n    border: 1px solid ',
      ';\n  }\n  .ant-confirm-body .ant-confirm-title {\n    ',
      ';\n  }\n'
    ]
  );

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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var StyledModalWrapper = _styledComponents2.default.div(
  _templateObject,
  _mixins2.default.zIndex.MODAL_WRAPPER,
  _mixins2.default.zIndex.MODAL_MASK
);

var MtModal = (0, _styledComponents2.default)(_modal2.default)(
  _templateObject2,
  _mixins2.default.zIndex.MODAL,
  _mixins2.default.h2(),
  _mixins2.default.h2(),
  _theme2.default.colors.PORCELAIN,
  _theme2.default.colors.ALTO,
  _mixins2.default.textBtn(),
  _theme2.default.colors.OUTER_SPACE,
  _mixins2.default.primaryBtn(),
  _theme2.default.colors.WHITE,
  _mixins2.default.primaryBtnHover(),
  _theme2.default.colors.WHITE,
  _mixins2.default.primaryBtnHover(),
  _theme2.default.colors.WHITE,
  _theme2.default.colors.DISABLE,
  _theme2.default.colors.WHITE,
  _theme2.default.colors.ALTO,
  _mixins2.default.textBtn(),
  _theme2.default.colors.GREY,
  _theme2.default.colors.WHITE
);

var MtConfirmModal = _styledComponents2.default.div(
  _templateObject3,
  _mixins2.default.zIndex.MODAL_WRAPPER,
  _mixins2.default.zIndex.MODAL_MASK,
  function(_ref) {
    var _ref$showFooter = _ref.showFooter,
      showFooter = _ref$showFooter === undefined ? true : _ref$showFooter;

    return showFooter ? 'block' : 'none';
  },
  _theme2.default.colors.INDIGO,
  _theme2.default.colors.INDIGO,
  _mixins2.default.blackLink()
);

var MODAL_WIDTH_MAP = {
  small: 500,
  medium: 600,
  large: 720,
  full: '100%'
};

var Modal = (function(_Component) {
  (0, _inherits3.default)(Modal, _Component);

  function Modal() {
    (0, _classCallCheck3.default)(this, Modal);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).apply(
        this,
        arguments
      )
    );
  }

  (0, _createClass3.default)(Modal, [
    {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
          children = _props.children,
          type = _props.type,
          width = _props.width;

        var customProps = (0, _extends3.default)({}, this.props, {
          width: width || MODAL_WIDTH_MAP[type],
          style: (0, _extends3.default)(
            {
              top: type === 'full' ? 0 : undefined
            },
            this.props.style
          )
        });
        return _react2.default.createElement(
          _react2.default.Fragment,
          null,
          _react2.default.createElement(StyledModalWrapper, {
            innerRef: function innerRef(el) {
              if (el) {
                _this2.modalWrapRef = el;
              }
            }
          }),
          _react2.default.createElement(
            MtModal,
            (0, _extends3.default)({}, customProps, {
              getContainer: function getContainer() {
                return _this2.modalWrapRef;
              },
              wrapClassName: 'modalWrapper'
            }),
            children
          )
        );
      }
    }
  ]);
  return Modal;
})(_react.Component);

Modal.propTypes = {
  children: _propTypes2.default.node.isRequired,
  type: _propTypes2.default.oneOf(['small', 'medium', 'large', 'full']),
  style: _propTypes2.default.object,
  width: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string
  ])
};
Modal.defaultProps = {
  type: 'medium'
};

Modal.confirm = function(props) {
  var showFooter = props.showFooter;

  var containerEl = document.body.appendChild(document.createElement('div'));
  var MountNode = void 0;
  _reactDom2.default.render(
    _react2.default.createElement(MtConfirmModal, {
      showFooter: showFooter,
      innerRef: function innerRef(e) {
        return (MountNode = e);
      }
    }),
    containerEl
  );
  var confirmModalProps = (0, _extends3.default)({}, props, {
    getContainer: function getContainer() {
      return MountNode;
    },
    onCancel: function onCancel() {
      for (
        var _len = arguments.length, cancelProps = Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        cancelProps[_key] = arguments[_key];
      }

      document.body.removeChild(containerEl);
      props.onCancel && props.onCancel(cancelProps);
    }
  });
  _modal2.default.confirm(confirmModalProps);
};

exports.default = Modal;
