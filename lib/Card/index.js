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

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    .ant-card-bordered{\n        background: #fff;\n        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n        border-radius: 8px;\n        border:transparent;\n\n    }\n    .ant-card-wider-padding {\n        .ant-card-body{\n        padding:24px;\n    }\n}\n'], ['\n    .ant-card-bordered{\n        background: #fff;\n        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n        border-radius: 8px;\n        border:transparent;\n\n    }\n    .ant-card-wider-padding {\n        .ant-card-body{\n        padding:24px;\n    }\n}\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _card = require('antd/lib/card');

var _card2 = _interopRequireDefault(_card);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

require('antd/lib/card/style/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MtCard = _styledComponents2.default.div(_templateObject);

var Card = function (_Component) {
    (0, _inherits3.default)(Card, _Component);

    function Card() {
        (0, _classCallCheck3.default)(this, Card);
        return (0, _possibleConstructorReturn3.default)(this, (Card.__proto__ || (0, _getPrototypeOf2.default)(Card)).apply(this, arguments));
    }

    (0, _createClass3.default)(Card, [{
        key: 'render',
        value: function render() {
            var children = this.props.children;

            return _react2.default.createElement(
                MtCard,
                null,
                _react2.default.createElement(
                    _card2.default,
                    null,
                    children
                )
            );
        }
    }]);
    return Card;
}(_react.Component);

Card.propTypes = {
    children: _propTypes2.default.node
};
exports.default = Card;
//# sourceMappingURL=index.js.map