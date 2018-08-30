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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTruncate = require('react-truncate');

var _reactTruncate2 = _interopRequireDefault(_reactTruncate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReadMore = function (_Component) {
  (0, _inherits3.default)(ReadMore, _Component);

  function ReadMore() {
    (0, _classCallCheck3.default)(this, ReadMore);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ReadMore.__proto__ || (0, _getPrototypeOf2.default)(ReadMore)).call(this));

    _this.state = {
      expanded: false,
      truncated: false
    };

    _this.handleTruncate = _this.handleTruncate.bind(_this);
    _this.toggleLines = _this.toggleLines.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(ReadMore, [{
    key: 'handleTruncate',
    value: function handleTruncate(truncated) {
      if (this.state.truncated !== truncated) {
        this.setState({
          truncated: truncated
        });
      }
    }
  }, {
    key: 'toggleLines',
    value: function toggleLines(event) {
      event.preventDefault();

      this.setState({
        expanded: !this.state.expanded
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          moreText = _props.moreText,
          lessText = _props.lessText,
          lines = _props.lines;
      var _state = this.state,
          expanded = _state.expanded,
          truncated = _state.truncated;


      return _react2.default.createElement(
        'div',
        { style: { fontFamily: 'Open sans' } },
        _react2.default.createElement(
          _reactTruncate2.default,
          {
            lines: !expanded && lines,
            ellipsis: [_react2.default.createElement(
              'span',
              { key: '3dot' },
              '...'
            ), _react2.default.createElement(
              'div',
              { className: 'viewMore', key: 'view_more' },
              _react2.default.createElement(
                'a',
                { onClick: this.toggleLines },
                lessText
              )
            )],
            onTruncate: this.handleTruncate
          },
          children
        ),
        !truncated && expanded && _react2.default.createElement(
          'span',
          { className: 'viewLess' },
          _react2.default.createElement(
            'a',
            { onClick: this.toggleLines },
            ' ',
            moreText
          )
        )
      );
    }
  }]);
  return ReadMore;
}(_react.Component);

ReadMore.defaultProps = {
  lines: 3,
  moreText: 'view more',
  lessText: 'view less'
};

ReadMore.propTypes = {
  children: _propTypes2.default.node.isRequired,
  lines: _propTypes2.default.number,
  moreText: _propTypes2.default.string,
  lessText: _propTypes2.default.string
};

exports.default = ReadMore;
//# sourceMappingURL=index.js.map