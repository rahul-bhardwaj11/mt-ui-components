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
    "\npadding: 0 2em;\n.slick-initialized .slick-slide{\n  margin-right:20px;\n}\n.slick-next:before, .slick-prev:before {\n  color: #000;\n}\nh3 {\n  background: #5f9ea0;\n  color: #fff;\n  font-size: 36px;\n  line-height: 100px;\n  margin: 10px;\n  padding: 2%;\n  position: relative;\n  text-align: center;\n}\n\n.slick-next:before, .slick-prev:before {\n  font-family: slick;\n  font-size: 20px;\n  line-height: 1;\n  opacity: .75;\n  color: black;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.slick-arrow.slick-prev{\n    left:0px;\n    font-size:20px; \n    background-image: url('",
    "');\n    background-repeat: no-repeat;\n    background-size: 38%;\n    background-color: #989CA6;\n    border-radius: 22px;\n    background-position: 5px 4px;\n    width: 20px;\n    height: 20px;\n\n  &:hover, &:focus{\n    background: url('",
    "');\n    background-repeat: no-repeat;\n    background-size: 38%;\n    background-color: #989CA6;\n    border-radius: 22px;\n    background-position: 5px 4px;\n    width: 20px;\n    height: 20px;\n  }\n  &:before{\n    display:none;\n  }\n}\n\n\n.slick-arrow.slick-next{\n    right:0px;\n    font-size:20px; \n    background: url('",
    "');\n    background-repeat: no-repeat;\n    background-size: 38%;\n    background-color: #989CA6;\n    border-radius: 22px;\n    background-position: 7px 4px;\n    width: 20px;\n    height: 20px;\n\n  &:hover, &:focus{\n    background: url('",
    "');\n    background-repeat: no-repeat;\n    background-size: 38%;\n    background-color: #989CA6;\n    border-radius: 22px;\n    background-position: 7px 4px;\n    width: 20px;\n    height: 20px;\n    display:inline-block;\n  }\n  &:before{\n    display:none;\n  }\n}\n.slick-slide{\n  ",
    ';\n}\n\n'
  ],
  [
    "\npadding: 0 2em;\n.slick-initialized .slick-slide{\n  margin-right:20px;\n}\n.slick-next:before, .slick-prev:before {\n  color: #000;\n}\nh3 {\n  background: #5f9ea0;\n  color: #fff;\n  font-size: 36px;\n  line-height: 100px;\n  margin: 10px;\n  padding: 2%;\n  position: relative;\n  text-align: center;\n}\n\n.slick-next:before, .slick-prev:before {\n  font-family: slick;\n  font-size: 20px;\n  line-height: 1;\n  opacity: .75;\n  color: black;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.slick-arrow.slick-prev{\n    left:0px;\n    font-size:20px; \n    background-image: url('",
    "');\n    background-repeat: no-repeat;\n    background-size: 38%;\n    background-color: #989CA6;\n    border-radius: 22px;\n    background-position: 5px 4px;\n    width: 20px;\n    height: 20px;\n\n  &:hover, &:focus{\n    background: url('",
    "');\n    background-repeat: no-repeat;\n    background-size: 38%;\n    background-color: #989CA6;\n    border-radius: 22px;\n    background-position: 5px 4px;\n    width: 20px;\n    height: 20px;\n  }\n  &:before{\n    display:none;\n  }\n}\n\n\n.slick-arrow.slick-next{\n    right:0px;\n    font-size:20px; \n    background: url('",
    "');\n    background-repeat: no-repeat;\n    background-size: 38%;\n    background-color: #989CA6;\n    border-radius: 22px;\n    background-position: 7px 4px;\n    width: 20px;\n    height: 20px;\n\n  &:hover, &:focus{\n    background: url('",
    "');\n    background-repeat: no-repeat;\n    background-size: 38%;\n    background-color: #989CA6;\n    border-radius: 22px;\n    background-position: 7px 4px;\n    width: 20px;\n    height: 20px;\n    display:inline-block;\n  }\n  &:before{\n    display:none;\n  }\n}\n.slick-slide{\n  ",
    ';\n}\n\n'
  ]
);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _carousel = require('antd/lib/carousel');

var _carousel2 = _interopRequireDefault(_carousel);

require('antd/lib/carousel/style/index.css');

var _leftCaret = require('../styles/icons/leftCaret.svg');

var _leftCaret2 = _interopRequireDefault(_leftCaret);

var _rightCaret = require('../styles/icons/rightCaret.svg');

var _rightCaret2 = _interopRequireDefault(_rightCaret);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var MtCarousel = (0, _styledComponents2.default)(_carousel2.default)(
  _templateObject,
  _leftCaret2.default,
  _leftCaret2.default,
  _rightCaret2.default,
  _rightCaret2.default,
  function(props) {
    return 'padding-right: ' + props.style.paddingRight;
  }
);

var Carousel = (function(_Component) {
  (0, _inherits3.default)(Carousel, _Component);

  function Carousel() {
    (0, _classCallCheck3.default)(this, Carousel);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (Carousel.__proto__ || (0, _getPrototypeOf2.default)(Carousel)).apply(
        this,
        arguments
      )
    );
  }

  (0, _createClass3.default)(Carousel, [
    {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          MtCarousel,
          (0, _extends3.default)({}, this.props, { arrows: true, dots: false })
        );
      }
    }
  ]);
  return Carousel;
})(_react.Component);

Carousel.propTypes = {
  style: _propTypes2.default.object
};
Carousel.defaultProps = {
  style: {}
};
exports.default = Carousel;
