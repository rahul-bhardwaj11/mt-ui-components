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

exports.default = ProviderHelperHoc;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _store = require('../store');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react3 = require('unistore/react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var count = 0;

function ProviderHelperHoc(Comp) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    (0, _inherits3.default)(ProviderHelper, _Component);

    function ProviderHelper(props) {
      (0, _classCallCheck3.default)(this, ProviderHelper);

      var _this = (0, _possibleConstructorReturn3.default)(this, (ProviderHelper.__proto__ || (0, _getPrototypeOf2.default)(ProviderHelper)).call(this, props));

      var namespace = 'ra_' + count++;
      _this.namespace = namespace;
      _this.store = (0, _store.getStore)(namespace, props);
      return _this;
    }

    (0, _createClass3.default)(ProviderHelper, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _react3.Provider,
          { store: this.store },
          _react2.default.createElement(Comp, (0, _extends3.default)({}, this.props, { namespace: this.namespace }))
        );
      }
    }]);
    return ProviderHelper;
  }(_react.Component), _class.propTypes = {
    app: _propTypes2.default.object
  }, _temp;
}