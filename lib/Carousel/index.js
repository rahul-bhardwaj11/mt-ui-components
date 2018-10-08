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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MtCarousel = (0, _styledComponents2.default)(_carousel2.default).withConfig({
  displayName: 'Carousel__MtCarousel',
  componentId: 'sc-1c0w6a9-0'
})(['padding:0 2em;.slick-initialized .slick-slide{margin-right:20px;}.slick-next:before,.slick-prev:before{color:#000;}h3{background:#5f9ea0;color:#fff;font-size:36px;line-height:100px;margin:10px;padding:2%;position:relative;text-align:center;}.slick-next:before,.slick-prev:before{font-family:slick;font-size:20px;line-height:1;opacity:.75;color:black;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}.slick-arrow.slick-prev{left:0px;font-size:20px;background-image:url(\'', '\');background-repeat:no-repeat;background-size:38%;background-color:#989CA6;border-radius:22px;background-position:5px 4px;width:20px;height:20px;&:hover,&:focus{background:url(\'', '\');background-repeat:no-repeat;background-size:38%;background-color:#989CA6;border-radius:22px;background-position:5px 4px;width:20px;height:20px;}&:before{display:none;}}.slick-arrow.slick-next{right:0px;font-size:20px;background:url(\'', '\');background-repeat:no-repeat;background-size:38%;background-color:#989CA6;border-radius:22px;background-position:7px 4px;width:20px;height:20px;&:hover,&:focus{background:url(\'', '\');background-repeat:no-repeat;background-size:38%;background-color:#989CA6;border-radius:22px;background-position:7px 4px;width:20px;height:20px;display:inline-block;}&:before{display:none;}}.slick-slide{', ';}'], _leftCaret2.default, _leftCaret2.default, _rightCaret2.default, _rightCaret2.default, function (props) {
  return 'padding-right: ' + props.style.paddingRight;
});

var Carousel = function (_Component) {
  (0, _inherits3.default)(Carousel, _Component);

  function Carousel() {
    (0, _classCallCheck3.default)(this, Carousel);
    return (0, _possibleConstructorReturn3.default)(this, (Carousel.__proto__ || (0, _getPrototypeOf2.default)(Carousel)).apply(this, arguments));
  }

  (0, _createClass3.default)(Carousel, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(MtCarousel, (0, _extends3.default)({}, this.props, { arrows: true, dots: false }));
    }
  }]);
  return Carousel;
}(_react.Component);

Carousel.propTypes = {
  style: _propTypes2.default.object
};
Carousel.defaultProps = {
  style: {}
};
exports.default = Carousel;