'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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
    "\npadding: 0 2em;\nfont-family: inherit;\n.slick-disabled {\n  visibility: hidden;\n }\n.slick-initialized .slick-slide{\n  margin-right:20px;\n}\n.slick-next:before, .slick-prev:before {\n  color: #000;\n}\nh3 {\n  background: #5f9ea0;\n  color: #fff;\n  font-size: 36px;\n  line-height: 100px;\n  margin: 10px;\n  padding: 2%;\n  position: relative;\n  text-align: center;\n}\n\n.slick-next:before, .slick-prev:before {\n  font-family: slick;\n  font-size: 20px;\n  line-height: 1;\n  opacity: .75;\n  color: black;\n}\n.slick-arrow.slick-prev{\n    left:0px;\n    font-size:20px;\n    background-image: url('",
    "');\n    background-repeat: no-repeat;\n    background-size: 38%;\n    background-color: #989CA6;\n    border-radius: 22px;\n    background-position: 5px 4px;\n    width: 20px;\n    height: 20px;\n    z-index:2;\n\n  &:hover, &:focus{\n    background: url('",
    "');\n    background-repeat: no-repeat;\n    background-size: 38%;\n    background-color: #989CA6;\n    border-radius: 22px;\n    background-position: 5px 4px;\n    width: 20px;\n    height: 20px;\n  }\n  &:before{\n    display:none;\n  }\n}\n.slick-arrow.slick-next{\n    right:0px;\n    font-size:20px;\n    background: url('",
    "');\n    background-repeat: no-repeat;\n    background-size: 38%;\n    background-color: #989CA6;\n    border-radius: 22px;\n    background-position: 7px 4px;\n    width: 20px;\n    height: 20px;\n    z-index:2;\n\n  &:hover, &:focus{\n    background: url('",
    "');\n    background-repeat: no-repeat;\n    background-size: 38%;\n    background-color: #989CA6;\n    border-radius: 22px;\n    background-position: 7px 4px;\n    width: 20px;\n    height: 20px;\n    display:inline-block;\n  }\n  &:before{\n    display:none;\n  }\n}\n.slick-slide{\n  ",
    ';\n}\n&.slick-slider:before {\n    content: "";\n    position: absolute;\n    z-index:1;\n    left: 0;\n    top: 0;\n    width: 120px;\n    height: 100%;\n    background: linear-gradient(\n      to right,\n      rgba(255, 255, 255, 1),\n      rgba(255, 255, 255, 0.6),\n      rgba(255, 255, 255, 0)\n    );\n  }\n&.slick-slider:after {\n    content: "";\n    position: absolute;\n    z-index:1;\n    top: 0;\n    right: 0;\n    width: 120px;\n    height:100%;\n    background: linear-gradient(\n      to left,\n      rgba(255, 255, 255, 1),\n      rgba(255, 255, 255, 0.6),\n      rgba(255, 255, 255, 0)\n    );\n  }\n  &.left_arrow--disabled{\n    &.slick-slider:before{\n    visibility: hidden;\n    }\n  }\n  &.right_arrow--disabled{\n    &.slick-slider:after{\n    visibility: hidden;\n    }\n  }\n'
  ],
  [
    "\npadding: 0 2em;\nfont-family: inherit;\n.slick-disabled {\n  visibility: hidden;\n }\n.slick-initialized .slick-slide{\n  margin-right:20px;\n}\n.slick-next:before, .slick-prev:before {\n  color: #000;\n}\nh3 {\n  background: #5f9ea0;\n  color: #fff;\n  font-size: 36px;\n  line-height: 100px;\n  margin: 10px;\n  padding: 2%;\n  position: relative;\n  text-align: center;\n}\n\n.slick-next:before, .slick-prev:before {\n  font-family: slick;\n  font-size: 20px;\n  line-height: 1;\n  opacity: .75;\n  color: black;\n}\n.slick-arrow.slick-prev{\n    left:0px;\n    font-size:20px;\n    background-image: url('",
    "');\n    background-repeat: no-repeat;\n    background-size: 38%;\n    background-color: #989CA6;\n    border-radius: 22px;\n    background-position: 5px 4px;\n    width: 20px;\n    height: 20px;\n    z-index:2;\n\n  &:hover, &:focus{\n    background: url('",
    "');\n    background-repeat: no-repeat;\n    background-size: 38%;\n    background-color: #989CA6;\n    border-radius: 22px;\n    background-position: 5px 4px;\n    width: 20px;\n    height: 20px;\n  }\n  &:before{\n    display:none;\n  }\n}\n.slick-arrow.slick-next{\n    right:0px;\n    font-size:20px;\n    background: url('",
    "');\n    background-repeat: no-repeat;\n    background-size: 38%;\n    background-color: #989CA6;\n    border-radius: 22px;\n    background-position: 7px 4px;\n    width: 20px;\n    height: 20px;\n    z-index:2;\n\n  &:hover, &:focus{\n    background: url('",
    "');\n    background-repeat: no-repeat;\n    background-size: 38%;\n    background-color: #989CA6;\n    border-radius: 22px;\n    background-position: 7px 4px;\n    width: 20px;\n    height: 20px;\n    display:inline-block;\n  }\n  &:before{\n    display:none;\n  }\n}\n.slick-slide{\n  ",
    ';\n}\n&.slick-slider:before {\n    content: "";\n    position: absolute;\n    z-index:1;\n    left: 0;\n    top: 0;\n    width: 120px;\n    height: 100%;\n    background: linear-gradient(\n      to right,\n      rgba(255, 255, 255, 1),\n      rgba(255, 255, 255, 0.6),\n      rgba(255, 255, 255, 0)\n    );\n  }\n&.slick-slider:after {\n    content: "";\n    position: absolute;\n    z-index:1;\n    top: 0;\n    right: 0;\n    width: 120px;\n    height:100%;\n    background: linear-gradient(\n      to left,\n      rgba(255, 255, 255, 1),\n      rgba(255, 255, 255, 0.6),\n      rgba(255, 255, 255, 0)\n    );\n  }\n  &.left_arrow--disabled{\n    &.slick-slider:before{\n    visibility: hidden;\n    }\n  }\n  &.right_arrow--disabled{\n    &.slick-slider:after{\n    visibility: hidden;\n    }\n  }\n'
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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

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
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Carousel);

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret = ((_temp = ((_this = (0, _possibleConstructorReturn3.default)(
        this,
        (_ref =
          Carousel.__proto__ ||
          (0, _getPrototypeOf2.default)(Carousel)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.state = {
        current: 0,
        children: _this.props.children || [],
        hasMore: true
      }),
      (_this.afterChange = function(current) {
        var _this$props = _this.props,
          fetchData = _this$props.fetchData,
          afterChange = _this$props.afterChange,
          pageSize = _this$props.pageSize;

        if (fetchData) {
          var _this$state = _this.state,
            hasMore = _this$state.hasMore,
            children = _this$state.children;

          if (hasMore) {
            var offset = children.length;
            fetchData({ offset: offset, pageSize: pageSize }).then(function(
              data
            ) {
              var newData = [].concat(
                (0, _toConsumableArray3.default)(data),
                (0, _toConsumableArray3.default)(children)
              );
              data &&
                data.length &&
                _this.setState({
                  children: newData,
                  hasMore: data.length == pageSize
                });
            },
            {});
          }
        }
        _this.setState({
          current: current || 0
        });
        afterChange && afterChange(current);
      }),
      (_this.canGoNext = function(spec) {
        var canGo = true;
        if (!spec.infinite) {
          if (spec.centerMode && spec.current >= spec.slideCount - 1) {
            canGo = false;
          } else if (
            spec.slideCount <= spec.slidesToShow ||
            spec.current >= spec.slideCount - spec.slidesToShow
          ) {
            canGo = false;
          }
        }
        return canGo;
      }),
      (_this.getClassName = function() {
        var current = _this.state.current;
        var infinite = _this.props.infinite;

        var slideCount = _react2.default.Children.count(_this.state.children);
        var className = '';
        if (!infinite && current === 0) {
          className = 'left_arrow--disabled';
        }
        if (
          !_this.canGoNext(
            (0, _extends3.default)({}, _this.props, {
              slideCount: slideCount,
              current: current
            })
          )
        ) {
          className += ' right_arrow--disabled';
        }
        return (0, _classnames2.default)(_this.props.className, className);
      }),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    );
  }

  (0, _createClass3.default)(Carousel, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var hasMore = this.state.hasMore;

        if (hasMore) {
          this.afterChange();
        }
      }
    },
    {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.children != this.props.children) {
          this.setState({ children: nextProps.children });
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        var children = this.state.children;

        var className = this.getClassName();
        return _react2.default.createElement(
          MtCarousel,
          (0, _extends3.default)({}, this.props, {
            className: className,
            arrows: true,
            dots: false,
            afterChange: this.afterChange
          }),
          children
        );
      }
    }
  ]);
  return Carousel;
})(_react.Component);

Carousel.propTypes = {
  style: _propTypes2.default.object,
  fetchData: _propTypes2.default.func,
  hasMore: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  afterChange: _propTypes2.default.func,
  pageSize: _propTypes2.default.number,
  className: _propTypes2.default.string,
  infinite: _propTypes2.default.bool
};
Carousel.defaultProps = {
  style: {},
  pageSize: 6
};
exports.default = Carousel;
