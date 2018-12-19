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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

//import Truncate from "react-truncate";
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

var MTReadMore = _styledComponents2.default.div.withConfig({
  displayName: 'ReadMore__MTReadMore',
  componentId: 'sc-16y72y1-0'
})(
  [
    'line-height:initial;.trunc-text{max-height:',
    ';overflow:hidden;}.viewMore,.viewLess{margin:10px 0px;display:block;',
    ';}'
  ],
  function(props) {
    return props.truncateHeight + 'px';
  },
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
                { onClick: this.toggleLines },
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
                { onClick: this.toggleLines },
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
  truncateHeight: 100
};

ReadMore.propTypes = {
  limit: _propTypes2.default.number,
  moreText: _propTypes2.default.string,
  lessText: _propTypes2.default.string,
  showViewMore: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  html: _propTypes2.default.string,
  truncateHeight: _propTypes2.default.number
};

exports.default = ReadMore;
