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

var _upload = require('antd/lib/upload');

var _upload2 = _interopRequireDefault(_upload);

require('antd/lib/upload/style/index.css');

var _index = require('../Button/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

//import styled from 'styled-components';
var Upload = (function(_Component) {
  (0, _inherits3.default)(Upload, _Component);

  function Upload() {
    (0, _classCallCheck3.default)(this, Upload);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (Upload.__proto__ || (0, _getPrototypeOf2.default)(Upload)).apply(
        this,
        arguments
      )
    );
  }

  (0, _createClass3.default)(Upload, [
    {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _upload2.default,
          null,
          _react2.default.createElement(
            _index2.default,
            { type: 'primary', size: 'medium' },
            'Upload'
          )
        );
      }
    }
  ]);
  return Upload;
})(_react.Component);
//import PropTypes from 'prop-types';

Upload.Dragger = _upload2.default.Dragger;
exports.default = Upload;
