'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./node-renderer-default.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isDescendant(older, younger) {
  return !!older.children && typeof older.children !== 'function' && older.children.some(function (child) {
    return child === younger || isDescendant(child, younger);
  });
}

var NodeRendererDefault = function (_Component) {
  (0, _inherits3.default)(NodeRendererDefault, _Component);

  function NodeRendererDefault() {
    (0, _classCallCheck3.default)(this, NodeRendererDefault);
    return (0, _possibleConstructorReturn3.default)(this, (NodeRendererDefault.__proto__ || (0, _getPrototypeOf2.default)(NodeRendererDefault)).apply(this, arguments));
  }

  (0, _createClass3.default)(NodeRendererDefault, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          scaffoldBlockPxWidth = _props.scaffoldBlockPxWidth,
          toggleChildrenVisibility = _props.toggleChildrenVisibility,
          connectDragPreview = _props.connectDragPreview,
          connectDragSource = _props.connectDragSource,
          isDragging = _props.isDragging,
          canDrop = _props.canDrop,
          canDrag = _props.canDrag,
          node = _props.node,
          title = _props.title,
          subtitle = _props.subtitle,
          draggedNode = _props.draggedNode,
          path = _props.path,
          treeIndex = _props.treeIndex,
          isSearchMatch = _props.isSearchMatch,
          isSearchFocus = _props.isSearchFocus,
          buttons = _props.buttons,
          className = _props.className,
          style = _props.style,
          didDrop = _props.didDrop,
          treeId = _props.treeId,
          isOver = _props.isOver,
          parentNode = _props.parentNode,
          rowDirection = _props.rowDirection,
          otherProps = (0, _objectWithoutProperties3.default)(_props, ['scaffoldBlockPxWidth', 'toggleChildrenVisibility', 'connectDragPreview', 'connectDragSource', 'isDragging', 'canDrop', 'canDrag', 'node', 'title', 'subtitle', 'draggedNode', 'path', 'treeIndex', 'isSearchMatch', 'isSearchFocus', 'buttons', 'className', 'style', 'didDrop', 'treeId', 'isOver', 'parentNode', 'rowDirection']);

      var nodeTitle = title || node.title;
      var nodeSubtitle = subtitle || node.subtitle;
      var rowDirectionClass = rowDirection === 'rtl' ? 'rst__rtl' : null;

      var handle = void 0;
      if (canDrag) {
        if (typeof node.children === 'function' && node.expanded) {
          // Show a loading symbol on the handle when the children are expanded
          //  and yet still defined by a function (a callback to fetch the children)
          handle = _react2.default.createElement(
            'div',
            { className: 'rst__loadingHandle' },
            _react2.default.createElement(
              'div',
              { className: 'rst__loadingCircle' },
              [].concat((0, _toConsumableArray3.default)(new Array(12))).map(function (_, index) {
                return _react2.default.createElement('div', {
                  // eslint-disable-next-line react/no-array-index-key
                  key: index,
                  className: (0, _classnames2.default)('rst__loadingCirclePoint', rowDirectionClass)
                });
              })
            )
          );
        } else {
          // Show the handle used to initiate a drag-and-drop
          handle = connectDragSource(_react2.default.createElement('div', { className: 'rst__moveHandle' }), {
            dropEffect: 'copy'
          });
        }
      }

      var isDraggedDescendant = draggedNode && isDescendant(draggedNode, node);
      var isLandingPadActive = !didDrop && isDragging;

      var buttonStyle = { left: -0.5 * scaffoldBlockPxWidth };
      if (rowDirection === 'rtl') {
        buttonStyle = { right: -0.5 * scaffoldBlockPxWidth };
      }

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ style: { height: '100%' } }, otherProps),
        toggleChildrenVisibility && node.children && (node.children.length > 0 || typeof node.children === 'function') && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('button', {
            type: 'button',
            'aria-label': node.expanded ? 'Collapse' : 'Expand',
            className: (0, _classnames2.default)(node.expanded ? 'rst__collapseButton' : 'rst__expandButton', rowDirectionClass),
            style: buttonStyle,
            onClick: function onClick() {
              return toggleChildrenVisibility({
                node: node,
                path: path,
                treeIndex: treeIndex
              });
            }
          }),
          node.expanded && !isDragging && _react2.default.createElement('div', {
            style: { width: scaffoldBlockPxWidth },
            className: (0, _classnames2.default)('rst__lineChildren', rowDirectionClass)
          })
        ),
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)('rst__rowWrapper', rowDirectionClass) },
          connectDragPreview(_react2.default.createElement(
            'div',
            {
              className: (0, _classnames2.default)('rst__row', isLandingPadActive && 'rst__rowLandingPad', isLandingPadActive && !canDrop && 'rst__rowCancelPad', isSearchMatch && 'rst__rowSearchMatch', isSearchFocus && 'rst__rowSearchFocus', rowDirectionClass, className),
              style: (0, _extends3.default)({
                opacity: isDraggedDescendant ? 0.5 : 1
              }, style)
            },
            handle,
            _react2.default.createElement(
              'div',
              {
                className: (0, _classnames2.default)('rst__rowContents', !canDrag && 'rst__rowContentsDragDisabled', rowDirectionClass)
              },
              _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('rst__rowLabel', rowDirectionClass) },
                _react2.default.createElement(
                  'span',
                  {
                    className: (0, _classnames2.default)('rst__rowTitle', node.subtitle && 'rst__rowTitleWithSubtitle')
                  },
                  typeof nodeTitle === 'function' ? nodeTitle({
                    node: node,
                    path: path,
                    treeIndex: treeIndex
                  }) : nodeTitle
                ),
                nodeSubtitle && _react2.default.createElement(
                  'span',
                  { className: 'rst__rowSubtitle' },
                  typeof nodeSubtitle === 'function' ? nodeSubtitle({
                    node: node,
                    path: path,
                    treeIndex: treeIndex
                  }) : nodeSubtitle
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'rst__rowToolbar' },
                buttons.map(function (btn, index) {
                  return _react2.default.createElement(
                    'div',
                    {
                      key: index // eslint-disable-line react/no-array-index-key
                      , className: 'rst__toolbarButton'
                    },
                    btn
                  );
                })
              )
            )
          ))
        )
      );
    }
  }]);
  return NodeRendererDefault;
}(_react.Component);

NodeRendererDefault.defaultProps = {
  isSearchMatch: false,
  isSearchFocus: false,
  canDrag: false,
  toggleChildrenVisibility: null,
  buttons: [],
  className: '',
  style: {},
  parentNode: null,
  draggedNode: null,
  canDrop: false,
  title: null,
  subtitle: null,
  rowDirection: 'ltr'
};

NodeRendererDefault.propTypes = {
  node: _propTypes2.default.shape({}).isRequired,
  title: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node]),
  subtitle: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node]),
  path: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])).isRequired,
  treeIndex: _propTypes2.default.number.isRequired,
  treeId: _propTypes2.default.string.isRequired,
  isSearchMatch: _propTypes2.default.bool,
  isSearchFocus: _propTypes2.default.bool,
  canDrag: _propTypes2.default.bool,
  scaffoldBlockPxWidth: _propTypes2.default.number.isRequired,
  toggleChildrenVisibility: _propTypes2.default.func,
  buttons: _propTypes2.default.arrayOf(_propTypes2.default.node),
  className: _propTypes2.default.string,
  style: _propTypes2.default.shape({}),

  // Drag and drop API functions
  // Drag source
  connectDragPreview: _propTypes2.default.func.isRequired,
  connectDragSource: _propTypes2.default.func.isRequired,
  parentNode: _propTypes2.default.shape({}), // Needed for dndManager
  isDragging: _propTypes2.default.bool.isRequired,
  didDrop: _propTypes2.default.bool.isRequired,
  draggedNode: _propTypes2.default.shape({}),
  // Drop target
  isOver: _propTypes2.default.bool.isRequired,
  canDrop: _propTypes2.default.bool,

  // rtl support
  rowDirection: _propTypes2.default.string
};

exports.default = NodeRendererDefault;
//# sourceMappingURL=node-renderer-default.js.map