'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(
  _objectWithoutProperties2
);

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./tree-node.css');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/*eslint-disable*/
var TreeNode = (function(_Component) {
  (0, _inherits3.default)(TreeNode, _Component);

  function TreeNode() {
    (0, _classCallCheck3.default)(this, TreeNode);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (TreeNode.__proto__ || (0, _getPrototypeOf2.default)(TreeNode)).apply(
        this,
        arguments
      )
    );
  }

  (0, _createClass3.default)(TreeNode, [
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          children = _props.children,
          listIndex = _props.listIndex,
          swapFrom = _props.swapFrom,
          swapLength = _props.swapLength,
          swapDepth = _props.swapDepth,
          scaffoldBlockPxWidth = _props.scaffoldBlockPxWidth,
          lowerSiblingCounts = _props.lowerSiblingCounts,
          connectDropTarget = _props.connectDropTarget,
          isOver = _props.isOver,
          draggedNode = _props.draggedNode,
          canDrop = _props.canDrop,
          treeIndex = _props.treeIndex,
          treeId = _props.treeId,
          getPrevRow = _props.getPrevRow,
          node = _props.node,
          path = _props.path,
          rowDirection = _props.rowDirection,
          className = _props.className,
          otherProps = (0, _objectWithoutProperties3.default)(_props, [
            'children',
            'listIndex',
            'swapFrom',
            'swapLength',
            'swapDepth',
            'scaffoldBlockPxWidth',
            'lowerSiblingCounts',
            'connectDropTarget',
            'isOver',
            'draggedNode',
            'canDrop',
            'treeIndex',
            'treeId',
            'getPrevRow',
            'node',
            'path',
            'rowDirection',
            'className'
          ]);

        var rowDirectionClass = rowDirection === 'rtl' ? 'rst__rtl' : null;

        // Construct the scaffold representing the structure of the tree
        var scaffoldBlockCount = lowerSiblingCounts.length;
        var scaffold = [];
        lowerSiblingCounts.forEach(function(lowerSiblingCount, i) {
          var lineClass = '';
          if (lowerSiblingCount > 0) {
            // At this level in the tree, the nodes had sibling nodes further down

            if (listIndex === 0) {
              // Top-left corner of the tree
              // +-----+
              // |     |
              // |  +--+
              // |  |  |
              // +--+--+
              lineClass =
                'rst__lineHalfHorizontalRight rst__lineHalfVerticalBottom';
            } else if (i === scaffoldBlockCount - 1) {
              // Last scaffold block in the row, right before the row content
              // +--+--+
              // |  |  |
              // |  +--+
              // |  |  |
              // +--+--+
              lineClass = 'rst__lineHalfHorizontalRight rst__lineFullVertical';
            } else {
              // Simply connecting the line extending down to the next sibling on this level
              // +--+--+
              // |  |  |
              // |  |  |
              // |  |  |
              // +--+--+
              lineClass = 'rst__lineFullVertical';
            }
          } else if (listIndex === 0) {
            // Top-left corner of the tree, but has no siblings
            // +-----+
            // |     |
            // |  +--+
            // |     |
            // +-----+
            lineClass = 'rst__lineHalfHorizontalRight';
          } else if (i === scaffoldBlockCount - 1) {
            // The last or only node in this level of the tree
            // +--+--+
            // |  |  |
            // |  +--+
            // |     |
            // +-----+
            lineClass = 'rst__lineHalfVerticalTop rst__lineHalfHorizontalRight';
          }

          scaffold.push(
            _react2.default.createElement('div', {
              key: 'pre_' + (1 + i),
              style: { width: scaffoldBlockPxWidth },
              className: (0, _classnames2.default)(
                'rst__lineBlock',
                lineClass,
                rowDirectionClass
              )
            })
          );

          if (treeIndex !== listIndex && i === swapDepth) {
            // This row has been shifted, and is at the depth of
            // the line pointing to the new destination
            var highlightLineClass = '';

            if (listIndex === swapFrom + swapLength - 1) {
              // This block is on the bottom (target) line
              // This block points at the target block (where the row will go when released)
              highlightLineClass = 'rst__highlightBottomLeftCorner';
            } else if (treeIndex === swapFrom) {
              // This block is on the top (source) line
              highlightLineClass = 'rst__highlightTopLeftCorner';
            } else {
              // This block is between the bottom and top
              highlightLineClass = 'rst__highlightLineVertical';
            }

            var _style = void 0;
            if (rowDirection === 'rtl') {
              _style = {
                width: scaffoldBlockPxWidth,
                right: scaffoldBlockPxWidth * i
              };
            } else {
              // Default ltr
              _style = {
                width: scaffoldBlockPxWidth,
                left: scaffoldBlockPxWidth * i
              };
            }

            scaffold.push(
              _react2.default.createElement('div', {
                // eslint-disable-next-line react/no-array-index-key
                key: i,
                style: _style,
                className: (0, _classnames2.default)(
                  'rst__absoluteLineBlock',
                  highlightLineClass,
                  rowDirectionClass
                )
              })
            );
          }
        });

        var style = void 0;
        if (rowDirection === 'rtl') {
          style = { right: scaffoldBlockPxWidth * scaffoldBlockCount };
        } else {
          // Default ltr
          style = { left: scaffoldBlockPxWidth * scaffoldBlockCount };
        }

        return connectDropTarget(
          _react2.default.createElement(
            'div',
            (0, _extends3.default)({}, otherProps, {
              className: (0, _classnames2.default)(
                'rst__node',
                rowDirectionClass,
                className
              )
            }),
            scaffold,
            _react2.default.createElement(
              'div',
              { className: 'rst__nodeContent', style: style },
              _react.Children.map(children, function(child) {
                return (0, _react.cloneElement)(child, {
                  isOver: isOver,
                  canDrop: canDrop,
                  draggedNode: draggedNode
                });
              })
            )
          )
        );
      }
    }
  ]);
  return TreeNode;
})(_react.Component);

TreeNode.defaultProps = {
  swapFrom: null,
  swapDepth: null,
  swapLength: null,
  canDrop: false,
  draggedNode: null,
  rowDirection: 'ltr'
};

TreeNode.propTypes = {
  treeIndex: _propTypes2.default.number.isRequired,
  treeId: _propTypes2.default.string.isRequired,
  swapFrom: _propTypes2.default.number,
  swapDepth: _propTypes2.default.number,
  swapLength: _propTypes2.default.number,
  scaffoldBlockPxWidth: _propTypes2.default.number.isRequired,
  lowerSiblingCounts: _propTypes2.default.arrayOf(_propTypes2.default.number)
    .isRequired,

  listIndex: _propTypes2.default.number.isRequired,
  children: _propTypes2.default.node.isRequired,

  // Drop target
  connectDropTarget: _propTypes2.default.func.isRequired,
  isOver: _propTypes2.default.bool.isRequired,
  canDrop: _propTypes2.default.bool,
  draggedNode: _propTypes2.default.shape({}),

  // used in dndManager
  getPrevRow: _propTypes2.default.func.isRequired,
  node: _propTypes2.default.shape({}).isRequired,
  path: _propTypes2.default.arrayOf(
    _propTypes2.default.oneOfType([
      _propTypes2.default.string,
      _propTypes2.default.number
    ])
  ).isRequired,

  // rtl support
  rowDirection: _propTypes2.default.string,
  className: _propTypes2.default.string
};

exports.default = TreeNode;
