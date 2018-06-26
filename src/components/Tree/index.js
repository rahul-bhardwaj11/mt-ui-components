import React, { Component } from "react";
import SortableTree from "react-sortable-tree";
import "react-sortable-tree/style.css";

class Tree extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { treeData, onChange, onMoveNode, canDrag, canDrop } = this.props;
    return (
      <SortableTree
        maxDepth={2}
        scaffoldBlockPxWidth={10}
        isVirtualized={false}
        treeData={treeData}
        canDrop={canDrop}
        canDrag={canDrag}
        onChange={onChange}
        onMoveNode={onMoveNode}
      />
    );
  }
}
export default Tree;
