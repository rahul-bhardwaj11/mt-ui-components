'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _fromCodePoint = require('babel-runtime/core-js/string/from-code-point');

var _fromCodePoint2 = _interopRequireDefault(_fromCodePoint);

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

var _index = require('./index.scss');

var _index2 = _interopRequireDefault(_index);

var _smiley2x = require('../../images/smiley@2x.png');

var _smiley2x2 = _interopRequireDefault(_smiley2x);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SUPPORTED_EMOJIS = [
// 0x1f601,
// 0x1f621,
// 0x1f602,
// 0x1f609,
0x1f44d, 0x1f60a,
// 0x1f648,
// 0x1f62c,
// 0x1f61d,
// 0x1f618,
// 0x1f49b,
// 0x1f60d,
// 0x1f638,
// 0x1f614,
// 0x1f62d,
// 0x1f48b,
// 0x1f612,
// 0x1f633,
// 0x1f61c,
0x1f603
// 0x1f622,
// 0x1f631,
// 0x1f60f,
// 0x1f61e,
// 0x1f605,
// 0x1f61a,
// 0x1f64a,
// 0x1f60c,
// 0x1f600,
// 0x1f61d
];

var EmojiPicker = function (_Component) {
  (0, _inherits3.default)(EmojiPicker, _Component);

  function EmojiPicker() {
    (0, _classCallCheck3.default)(this, EmojiPicker);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EmojiPicker.__proto__ || (0, _getPrototypeOf2.default)(EmojiPicker)).call(this));

    _this.emojiClickHandler = _this.emojiClickHandler.bind(_this);
    _this.emojiSelectHandler = _this.emojiSelectHandler.bind(_this);
    _this.state = {
      showEmojiList: false
    };
    _this.addPolyfill();
    return _this;
  }

  (0, _createClass3.default)(EmojiPicker, [{
    key: 'addPolyfill',
    value: function addPolyfill() {
      /* eslint-disable */
      /*! https://mths.be/fromcodepoint v0.2.1 by @mathias */
      if (!_fromCodePoint2.default) {
        (function () {
          var defineProperty = function () {
            // IE 8 only supports `Object.defineProperty` on DOM elements
            try {
              var object = {};
              var $defineProperty = _defineProperty2.default;
              var result = $defineProperty(object, object, object) && $defineProperty;
            } catch (error) {}
            return result;
          }();
          var stringFromCharCode = String.fromCharCode;
          var floor = Math.floor;
          var fromCodePoint = function fromCodePoint(_) {
            var MAX_SIZE = 0x4000;
            var codeUnits = [];
            var highSurrogate;
            var lowSurrogate;
            var index = -1;
            var length = arguments.length;
            if (!length) {
              return '';
            }
            var result = '';
            while (++index < length) {
              var codePoint = Number(arguments[index]);
              if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
              codePoint < 0 || // not a valid Unicode code point
              codePoint > 0x10ffff || // not a valid Unicode code point
              floor(codePoint) != codePoint // not an integer
              ) {
                  throw RangeError('Invalid code point: ' + codePoint);
                }
              if (codePoint <= 0xffff) {
                // BMP code point
                codeUnits.push(codePoint);
              } else {
                // Astral code point; split in surrogate halves
                // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                codePoint -= 0x10000;
                highSurrogate = (codePoint >> 10) + 0xd800;
                lowSurrogate = codePoint % 0x400 + 0xdc00;
                codeUnits.push(highSurrogate, lowSurrogate);
              }
              if (index + 1 == length || codeUnits.length > MAX_SIZE) {
                result += stringFromCharCode.apply(null, codeUnits);
                codeUnits.length = 0;
              }
            }
            return result;
          };
          if (defineProperty) {
            defineProperty(String, 'fromCodePoint', {
              value: fromCodePoint,
              configurable: true,
              writable: true
            });
          } else {
            String.fromCodePoint = fromCodePoint;
          }
        })();
      }
      /* eslint-disable */
    }
  }, {
    key: 'emojiClickHandler',
    value: function emojiClickHandler(event) {
      this.show = !this.show;
      this.setState({
        showEmojiList: this.show
      });
      event.stopPropagation();
    }
  }, {
    key: 'emojiSelectHandler',
    value: function emojiSelectHandler(event) {
      this.setState({
        showEmojiList: false
      });
      if (typeof this.props.onSelect === 'function') {
        this.props.onSelect(event.target.innerHTML);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var showEmojiList = this.state.showEmojiList;
      var toLeft = this.props.toLeft;

      var emojiListStyle = {};
      toLeft ? emojiListStyle.left = '2px' : emojiListStyle.right = '2px';
      return _react2.default.createElement(
        'div',
        { className: _index2.default.posRel, style: { width: '15px' } },
        _react2.default.createElement(
          'div',
          { className: _index2.default.emojiSelector, onClick: this.emojiClickHandler },
          _react2.default.createElement('img', { src: _smiley2x2.default, style: { height: '15px' } })
        ),
        showEmojiList && _react2.default.createElement(
          'div',
          { className: _index2.default.emojiList, style: emojiListStyle },
          _react2.default.createElement(
            'ul',
            null,
            SUPPORTED_EMOJIS.map(function (item, i) {
              return _react2.default.createElement(
                'li',
                { onClick: _this2.emojiSelectHandler, key: i },
                (0, _fromCodePoint2.default)(item)
              );
            })
          )
        )
      );
    }
  }]);
  return EmojiPicker;
}(_react.Component);

exports.default = EmojiPicker;