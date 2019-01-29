'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

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
    '\n  line-height: initial;\n  counter-reset: my-sec-counter;\n\n  ul,\n  ol {\n    list-style: none;\n  }\n\n  li {\n    position: relative;\n    padding-left: 20px;\n  }\n\n  ul li:before {\n    position: absolute;\n    left: 0;\n    top: 0;\n    content: url(',
    ");\n    transform: scale(0.6);\n    opacity: 0.6;\n  }\n  ol li:before {\n    position: absolute;\n    left: 0;\n    top: 0;\n    counter-increment: my-sec-counter;\n    content: counter(my-sec-counter) '.';\n    transform: scale(1);\n  }\n  .trunc-text {\n    max-height: ",
    ';\n    overflow: hidden;\n  }\n  .viewMore,\n  .viewLess {\n    margin: 10px 0px;\n    display: block;\n    ',
    ';\n  }\n  .linkText {\n    ',
    ';\n  }\n'
  ],
  [
    '\n  line-height: initial;\n  counter-reset: my-sec-counter;\n\n  ul,\n  ol {\n    list-style: none;\n  }\n\n  li {\n    position: relative;\n    padding-left: 20px;\n  }\n\n  ul li:before {\n    position: absolute;\n    left: 0;\n    top: 0;\n    content: url(',
    ");\n    transform: scale(0.6);\n    opacity: 0.6;\n  }\n  ol li:before {\n    position: absolute;\n    left: 0;\n    top: 0;\n    counter-increment: my-sec-counter;\n    content: counter(my-sec-counter) '.';\n    transform: scale(1);\n  }\n  .trunc-text {\n    max-height: ",
    ';\n    overflow: hidden;\n  }\n  .viewMore,\n  .viewLess {\n    margin: 10px 0px;\n    display: block;\n    ',
    ';\n  }\n  .linkText {\n    ',
    ';\n  }\n'
  ]
);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mixins = require('../styles/mixins');

var _mixins2 = _interopRequireDefault(_mixins);

var _truncHtml = require('trunc-html');

var _truncHtml2 = _interopRequireDefault(_truncHtml);

var _circle = require('../styles/icons/circle.svg');

var _circle2 = _interopRequireDefault(_circle);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

//import { min } from 'moment';

var ALLOWED_HTML_TAGS = [
  'u',
  'a',
  'abbr',
  'article',
  'b',
  'blockquote',
  'br',
  'caption',
  'code',
  'del',
  'details',
  'div',
  'em',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'hr',
  'i',
  'img',
  'ins',
  'kbd',
  'li',
  'main',
  'mark',
  'ol',
  'p',
  'pre',
  'section',
  'span',
  'strike',
  'strong',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'th',
  'thead',
  'tr',
  'ul'
];

var MTReadMore = _styledComponents2.default.div(
  _templateObject,
  _circle2.default,
  function(props) {
    return props.truncateHeight + 'px';
  },
  _mixins2.default.actionLink(),
  _mixins2.default.actionLink()
);

var ReadMore = (function(_Component) {
  (0, _inherits3.default)(ReadMore, _Component);

  function ReadMore() {
    (0, _classCallCheck3.default)(this, ReadMore);

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (ReadMore.__proto__ || (0, _getPrototypeOf2.default)(ReadMore)).call(this)
    );

    _this.state = {
      expanded: false,
      heightTruncated: false
    };
    _this.toggleLines = _this.toggleLines.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(ReadMore, [
    {
      key: 'toggleLines',
      value: function toggleLines(event) {
        event.preventDefault();
        this.props.onToggle({ expanded: !this.state.expanded });
        this.setState({
          expanded: !this.state.expanded
        });
      }
    },
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var truncateHeight = this.props.truncateHeight;

        if (!truncateHeight) {
          return;
        }
        if (this.ref && this.ref.scrollHeight > truncateHeight) {
          this.setState({
            heightTruncated: true
          });
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
          showViewMore = _props.showViewMore,
          moreText = _props.moreText,
          lessText = _props.lessText,
          className = _props.className,
          html = _props.html,
          limit = _props.limit,
          truncateHeight = _props.truncateHeight;

        var truncated = false;
        var _state = this.state,
          expanded = _state.expanded,
          heightTruncated = _state.heightTruncated;

        var truncateHTML = (0, _truncHtml2.default)(html, limit, {
          sanitizer: {
            allowedTags: ALLOWED_HTML_TAGS
          }
        });
        var indexOf = truncateHTML.text.indexOf('…');
        if (indexOf > truncateHTML.text.length - 4) {
          truncated = true;
        }
        truncated = truncated || heightTruncated;

        return _react2.default.createElement(
          MTReadMore,
          { className: className, truncateHeight: truncateHeight },
          !expanded &&
            _react2.default.createElement(
              'div',
              {
                className: 'trunc-text',
                ref: function ref(e) {
                  return (_this2.ref = e);
                }
              },
              _react2.default.createElement('span', {
                dangerouslySetInnerHTML: { __html: truncateHTML.html }
              })
            ),
          expanded &&
            _react2.default.createElement('span', {
              dangerouslySetInnerHTML: { __html: html }
            }),
          showViewMore &&
            truncated &&
            !expanded &&
            _react2.default.createElement(
              'div',
              { className: 'viewMore', key: 'view_more' },
              _react2.default.createElement(
                'a',
                { className: 'linkText', onClick: this.toggleLines },
                moreText
              )
            ),
          expanded &&
            showViewMore &&
            _react2.default.createElement(
              'span',
              { className: 'viewLess' },
              _react2.default.createElement(
                'a',
                { className: 'linkText', onClick: this.toggleLines },
                ' ',
                lessText
              )
            )
        );
      }
    }
  ]);
  return ReadMore;
})(_react.Component);

ReadMore.defaultProps = {
  limit: 500,
  moreText: 'Read More',
  lessText: 'Read Less',
  showViewMore: true,
  truncateHeight: 100,
  onToggle: function onToggle() {}
};

ReadMore.propTypes = {
  limit: _propTypes2.default.number,
  moreText: _propTypes2.default.string,
  lessText: _propTypes2.default.string,
  showViewMore: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  html: _propTypes2.default.string,
  onToggle: _propTypes2.default.func,
  truncateHeight: _propTypes2.default.number
};

exports.default = ReadMore;
