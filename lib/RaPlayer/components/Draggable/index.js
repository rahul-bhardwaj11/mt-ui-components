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

var _index = require('./index.scss');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Draggable = function (_Component) {
  (0, _inherits3.default)(Draggable, _Component);

  function Draggable() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Draggable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Draggable.__proto__ || (0, _getPrototypeOf2.default)(Draggable)).call.apply(_ref, [this].concat(args))), _this), _this.dragStart = function (event) {
      var style = window.getComputedStyle(event.target, null);
      event.dataTransfer.setData('text', parseInt(style.getPropertyValue('left'), 10) - event.clientX + ',' + (parseInt(style.getPropertyValue('top'), 10) - event.clientY));
    }, _this.dragOver = function (event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }, _this.drop = function (event) {
      var offset = event.dataTransfer.getData('text').split(',');
      _this.dragElem.style.left = event.clientX + parseInt(offset[0], 10) + 'px';
      _this.dragElem.style.top = event.clientY + parseInt(offset[1], 10) + 'px';
      event.preventDefault();
      return false;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Draggable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.attachEvents();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.dragElem.removeEventListener('dragstart', this.dragStart);
      document.body.removeEventListener('dragover', this.dragOver);
      document.body.removeEventListener('dragenter', this.dragEnter);
      document.body.removeEventListener('drop', this.drop);
    }
  }, {
    key: 'attachEvents',
    value: function attachEvents() {
      this.dragElem.addEventListener('dragstart', this.dragStart, false);
      document.body.addEventListener('dragover', this.dragOver, false);
      document.body.addEventListener('dragenter', this.dragEnter, false);
      document.body.addEventListener('drop', this.drop, false);
    }
  }, {
    key: 'dragEnter',
    value: function dragEnter(event) {
      event.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        {
          draggable: 'true',
          ref: function ref(e) {
            return _this2.dragElem = e;
          },
          className: _index2.default.drag
        },
        this.props.children
      );
    }
  }]);
  return Draggable;
}(_react.Component);

Draggable.propTypes = {
  children: _propTypes2.default.node
};
exports.default = Draggable;