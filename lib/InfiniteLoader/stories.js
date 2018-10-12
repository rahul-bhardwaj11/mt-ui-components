'use strict';

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

var _react3 = require('@storybook/react');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var stories = (0, _react3.storiesOf)('Infinite Loader', module);

var displayData = Array(40)
  .fill()
  .map(function(v, k) {
    return k + 1;
  });

var App = (function(_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this)
    );

    _this.loadMore = _this.loadMore.bind(_this);
    _this.state = {
      currentPage: 1,
      displayItemsPerPage: 10
    };
    return _this;
  }

  (0, _createClass3.default)(App, [
    {
      key: 'loadMore',
      value: function loadMore(page) {
        var _this2 = this;

        setTimeout(function() {
          _this2.setState({
            currentPage: page
          });
        }, 1000);
      }
    },
    {
      key: 'render',
      value: function render() {
        var numberOfItems =
          this.state.currentPage * this.state.displayItemsPerPage;
        var items = displayData.slice(0, numberOfItems);
        var hasMore = numberOfItems < displayData.length;
        return _react2.default.createElement(
          _index2.default,
          { loadMore: this.loadMore, hasMore: hasMore },
          items.map(function(v, k) {
            return _react2.default.createElement('div', {
              key: k,
              style: {
                height: '100px',
                backgroundColor: '#a7a7a7',
                margin: '3px'
              }
            });
          })
        );
      }
    }
  ]);
  return App;
})(_react.Component);

stories.add('Infinite Loader', function() {
  return _react2.default.createElement(App, null);
});
