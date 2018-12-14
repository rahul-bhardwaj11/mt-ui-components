'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/*eslint-disable*/
/**
 * React port of ellipsis.js
 * Original ellipsis.js author: Gregory Linford
 * react-truncate-html author: Jari Zwarts (https://jari.io/)
 */

var isServer = function isServer() {
  return typeof window === 'undefined';
};

var Truncate = (function(_Component) {
  (0, _inherits3.default)(Truncate, _Component);

  function Truncate() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Truncate);

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
          Truncate.__proto__ ||
          (0, _getPrototypeOf2.default)(Truncate)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.cached = null),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    );
  }

  (0, _createClass3.default)(Truncate, [
    {
      key: 'render',
      value: function render() {
        // pass any additional props to the paragraph element
        var passedProps = (0, _extends3.default)({}, this.props);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (
            var _iterator = (0, _getIterator3.default)(
                (0, _keys2.default)(Truncate.propTypes)
              ),
              _step;
            !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
            _iteratorNormalCompletion = true
          ) {
            var key = _step.value;

            delete passedProps[key];
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (this.props.children) {
          console.error(
            "react-truncate-html: We can't handle react children at the moment.\nYou're %crequired%c to pass dangerouslySetInnerHTML to set contents. Sorry!",
            'font-style:italic',
            'font-style:normal'
          );
          return null;
        }
        //const { dangerouslySetInnerHTML } = this.props;
        //const { __html } = dangerouslySetInnerHTML;
        var html = { __html: this.props.html };

        return _react2.default.createElement(
          'span',
          (0, _extends3.default)(
            {
              id: 'lol',
              ref: 'paragraph'
            },
            passedProps,
            {
              dangerouslySetInnerHTML: html
            }
          )
        );
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (
          prevProps.html !== this.props.html ||
          this.props.lines !== prevProps.lines
        ) {
          this.cached = this.refs.paragraph.innerHTML;
          this.add();
        }
      }
    },
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (!isServer()) {
          this.lines = {
            props: this.props,
            get current() {
              if (
                this.props.portrait &&
                window.innerHeight > window.innerWidth
              ) {
                return this.props.portrait;
              }
              return this.props.lines;
            }
          };

          if (this.props.responsive) {
            this.cached = this.refs.paragraph.innerHTML;
            var debounce = void 0;
            var listener = function listener() {
              clearTimeout(debounce);
              debounce = setTimeout(
                function() {
                  this.add();
                }.bind(this),
                this.props.debounce
              );
            };
            this._listener = listener.bind(this);

            window.addEventListener('resize', this._listener, false);
          }

          this.add();
        }
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.props.responsive && this._listener) {
          window.removeEventListener('resize', this._listener, false);
        }
      }
    },
    {
      key: 'createProp',
      value: function createProp(element) {
        this.prop = {
          get height() {
            var viewportOffset = element.getBoundingClientRect();
            return parseInt(viewportOffset.bottom - viewportOffset.top, 10);
          },
          get lineheight() {
            var lineh = getComputedStyle(element).getPropertyValue(
              'line-height'
            );
            if (String('normal|initial|inherit').indexOf(lineh) > -1) {
              //very specific case
              lineh =
                parseInt(
                  getComputedStyle(element).getPropertyValue('font-size'),
                  10
                ) + 2;
            }
            return parseInt(lineh, 10);
          }
        };
      }
    },
    {
      key: 'add',
      value: function add() {
        if (this.props.responsive) {
          if (this.refs.paragraph.innerHTML !== this.cached) {
            this.refs.paragraph.innerHTML = this.cached;
          }
        }

        this.createProp(this.refs.paragraph);

        if (this.isNotCorrect()) {
          if (
            this.refs.paragraph.childNodes.length &&
            this.refs.paragraph.childNodes.length > 1
          ) {
            this.handleChilds(this.refs.paragraph);
          } else if (
            this.refs.paragraph.childNodes.length &&
            this.refs.paragraph.childNodes.length === 1 &&
            this.refs.paragraph.childNodes[0].nodeType === 3
          ) {
            this.simpleText(this.refs.paragraph);
          }
        }
      }
    },
    {
      key: 'breakWord',
      value: function breakWord(str, str2, fix) {
        var words = str.split(' ');
        words.pop();
        if (fix) {
          words.pop();
        }
        if (!str2) {
          if (words[words.length - 1]) {
            words[words.length - 1] = words[words.length - 1]
              .replace(/(,$)/g, '')
              .replace(/(\.$)/g, '');
          }
          words.push(this.conf.ellipsis);
          return words.join(' ');
        } else {
          if (words[words.length - 1]) {
            words[words.length - 1] = words[words.length - 1]
              .replace(/(,$)/g, '')
              .replace(/(\.$)/g, '');
            words.push(this.conf.ellipsis);
            return [words.join(' '), str2];
          } else if (!words[words.length - 1] && str2) {
            var st =
              ' ' +
              str2
                .trim()
                .replace(/(,$)/g, '')
                .replace(/(\.$)/g, '') +
              ' ';
            words.push(this.conf.ellipsis);
            return [words.join(' '), st];
          }
        }
      }
    },
    {
      key: 'simpleText',
      value: function simpleText(element) {
        var childText = element.childNodes[0].nodeValue;
        while (this.prop.height > this.prop.lineheight * this.lines.current) {
          element.childNodes[0].nodeValue = childText.slice(0, -1);
          childText = element.childNodes[0].nodeValue;
        }
        if (this.props.breakWord) {
          element.childNodes[0].nodeValue =
            childText.slice(0, -this.props.ellipsis.length) +
            this.props.ellipsis;
          if (this.isNotCorrect()) {
            //edge case
            element.childNodes[0].nodeValue =
              ' ' +
              element.childNodes[0].nodeValue
                .slice(0, -(this.props.ellipsis.length + 1))
                .trim()
                .slice(0, -this.props.ellipsis.length) +
              this.props.ellipsis;
          }
          this.props.onTruncate(true);
        } else {
          element.childNodes[0].nodeValue = this.breakWord(
            element.childNodes[0].nodeValue
          );
          if (this.isNotCorrect()) {
            //edge case
            element.childNodes[0].nodeValue = this.breakWord(
              element.childNodes[0].nodeValue,
              null,
              true
            );
          }
        }
      }
    },
    {
      key: 'isNotCorrect',
      value: function isNotCorrect() {
        return this.prop.height > this.prop.lineheight * this.lines.current;
      }
    },
    {
      key: 'processBreak',
      value: function processBreak(dOne, dTwo, fix) {
        var r = this.breakWord(
          dOne.innerHTML || dOne.nodeValue,
          dTwo.innerHTML || dTwo.nodeValue,
          fix
        );
        if (dOne.innerHTML) {
          dOne.innerHTML = r[0];
        } else {
          dOne.nodeValue = r[0];
        }
        if (dTwo.innerHTML) {
          dTwo.innerHTML = r[1];
        } else {
          dTwo.nodeValue = r[1];
        }
      }
    },
    {
      key: 'handleChilds',
      value: function handleChilds(e) {
        var domChilds = e.childNodes;
        var childText = void 0;
        for (var i = domChilds.length - 1; i >= 0; i--) {
          var displayOrigin = void 0;
          if (domChilds[i].nodeType === 3) {
            displayOrigin = domChilds[i].nodeValue;
            domChilds[i].nodeValue = '';
          } else if (domChilds[i].nodeType === 1) {
            displayOrigin = getComputedStyle(domChilds[i]).getPropertyValue(
              'display'
            );
            domChilds[i].style.display = 'none';
          }

          if (this.prop.height <= this.prop.lineheight * this.lines.current) {
            if (domChilds[i].nodeType === 3) {
              domChilds[i].nodeValue = displayOrigin;
              childText = domChilds[i].nodeValue;
              while (
                this.prop.height >
                this.prop.lineheight * this.lines.current
              ) {
                domChilds[i].nodeValue = childText.slice(0, -1);
                childText = domChilds[i].nodeValue;
              }

              if (this.props.breakWord) {
                domChilds[i].nodeValue =
                  childText.slice(0, -this.props.ellipsis.length) +
                  this.props.ellipsis;
                this.props.onTruncate(true);
                if (this.isNotCorrect()) {
                  //edge case
                  domChilds[i].nodeValue =
                    ' ' +
                    domChilds[i].nodeValue
                      .slice(0, -this.props.ellipsis.length)
                      .trim()
                      .slice(0, -this.props.ellipsis.length);
                  if (domChilds[i].nodeValue.length > 1) {
                    domChilds[i].nodeValue =
                      domChilds[i].nodeValue.slice(
                        0,
                        -this.props.ellipsis.length
                      ) + this.props.ellipsis;
                    this.props.onTruncate(true);
                  } else {
                    continue;
                  }
                }
              } else {
                if (!domChilds[i].innerHTML && !domChilds[i].nodeValue) {
                  continue;
                }
                this.processBreak(domChilds[i], domChilds[i - 1]);
                if (this.isNotCorrect()) {
                  //edge case
                  this.processBreak(domChilds[i], domChilds[i - 1], true);
                  if (this.isNotCorrect()) {
                    e.removeChild(domChilds[i]);
                    continue;
                  }
                }
              }
            } else {
              domChilds[i].style.display = displayOrigin;
              childText = domChilds[i].innerHTML;
              while (
                this.prop.height >
                this.prop.lineheight * this.lines.current
              ) {
                domChilds[i].innerText = childText.slice(0, -1);
                childText = domChilds[i].innerText;
              }
              if (this.props.breakWord) {
                domChilds[i].innerHTML =
                  childText.slice(0, -this.props.ellipsis.length) +
                  this.props.ellipsis;
                this.props.onTruncate(true);
                if (this.isNotCorrect()) {
                  //edge case
                  domChilds[i].innerHTML =
                    ' ' +
                    domChilds[i].innerHTML
                      .slice(0, -this.props.ellipsis.length)
                      .trim()
                      .slice(0, -this.props.ellipsis.length);
                  if (domChilds[i].innerHTML.length > 1) {
                    domChilds[i].innerHTML =
                      domChilds[i].innerHTML.slice(
                        0,
                        -this.props.ellipsis.length
                      ) + this.props.ellipsis;
                    this.props.onTruncate(true);
                  } else {
                    continue;
                  }
                }
              } else {
                if (!domChilds[i].innerHTML && !domChilds[i].nodeValue) {
                  continue;
                }
                this.processBreak(domChilds[i], domChilds[i - 1]);
                if (this.isNotCorrect()) {
                  //edge case
                  this.processBreak(domChilds[i], domChilds[i - 1], true);
                  if (this.isNotCorrect()) {
                    e.removeChild(domChilds[i]);
                    continue;
                  }
                }
              }
            }
            break;
          } else {
            e.removeChild(domChilds[i]);
          }
        }
      }
    }
  ]);
  return Truncate;
})(_react.Component);

Truncate.propTypes = {
  ellipsis: _propTypes2.default.string,
  debounce: _propTypes2.default.number,
  responsive: _propTypes2.default.bool,
  lines: _propTypes2.default.oneOfType([
    _propTypes2.default.oneOf([false]),
    _propTypes2.default.number
  ]),
  portrait: _propTypes2.default.number,
  breakWord: _propTypes2.default.bool,
  onTruncate: _propTypes2.default.func
};
Truncate.defaultProps = {
  ellipsis: '…',
  debounce: 100,
  responsive: true,
  lines: 2,
  portrait: null,
  breakWord: true,
  onTruncate: function onTruncate() {}
};
exports.default = Truncate;
