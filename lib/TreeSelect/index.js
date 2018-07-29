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

var _treeSelect = require('antd/lib/tree-select');

var _treeSelect2 = _interopRequireDefault(_treeSelect);

require('antd/lib/tree-select/style/index.css');

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const AntTreeNode = AntTreeSelect.TreeNode;

var TreeSelect = function (_Component) {
  (0, _inherits3.default)(TreeSelect, _Component);

  function TreeSelect(props) {
    (0, _classCallCheck3.default)(this, TreeSelect);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TreeSelect.__proto__ || (0, _getPrototypeOf2.default)(TreeSelect)).call(this, props));

    _this.onSearch = function (value) {
      var onSearchInputChange = _this.props.onSearchInputChange;

      onSearchInputChange(value).then(function (treeData) {
        _this.setState({
          treeData: treeData,
          searchValue: value
        });
      });
    };

    _this.onChange = function (value) {
      _this.setState({ value: value });
    };

    _this.state = {
      treeData: props.treeData,
      searchValue: ''
    };
    return _this;
  }

  (0, _createClass3.default)(TreeSelect, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          treeData = _state.treeData,
          searchValue = _state.searchValue,
          value = _state.value;

      return _react2.default.createElement(_treeSelect2.default, {
        showSearch: true,
        searchValue: searchValue,
        onSearch: this.onSearch,
        value: value,
        treeData: treeData,
        onChange: this.onChange,
        className: this.props.className
      });
    }
  }]);
  return TreeSelect;
}(_react.Component);

TreeSelect.defaultProps = {
  treeData: []
};
TreeSelect.propTypes = {
  treeData: _propTypes2.default.array.isRequired,
  defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  onSearchInputChange: _propTypes2.default.func,
  className: _propTypes2.default.string
};
exports.default = TreeSelect;
//# sourceMappingURL=index.js.map