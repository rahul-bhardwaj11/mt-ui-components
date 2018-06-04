import React, { Component } from "react";
import SortableTree from "react-sortable-tree";
import "react-sortable-tree/style.css";
import isPlainObject from "is-plain-object";

function customStringify(a) {
  try {
    return JSON.stringify(a);
  } catch (error) {
    return false;
  }
}

function deepEqual(a, b) {
  if (isPlainObject(a) && isPlainObject(b)) {
    return Object.is(customStringify(a), customStringify(b));
  } else if (Array.isArray(a) && Array.isArray(b)) {
    a = a.map(v => customStringify(v)).join(",");
    b = b.map(v => customStringify(v)).join(",");
    return a == b;
  }
  return false;
}

class Tree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      treeData: this.props.treeData
    };
  }
  handleMove = obj => {
    /*eslint-disable*/
    console.log(obj);
    // const oldTreeData = this.props.treeData;
    // const prevParentNode = getImmediateParent({
    //   treeData: oldTreeData,
    //   node
    // });
    // if (nextParentNode) {
    //   this.update(this.operations.MOVE, oldTreeData, treeData, {
    //     sourceParent: prevParentNode,
    //     destParent: nextParentNode,
    //     node,
    //     index: nextTreeIndex - nextPath[nextPath.length - 2] - 1
    //   });
    // } else {
    //   const index = treeData.findIndex(rootNode => node.data.id == rootNode.data.id);
    //   this.update(this.operations.MOVE, oldTreeData, treeData, {
    //     node,
    //     index
    //   });
    // }
    // this.setState({ treeData });
  };

  componentWillReceiveProps(nextProps) {
    const { treeData } = this.state;
    if (!deepEqual(treeData, nextProps.treeData)) {
      this.setState({
        treeData: nextProps.treeData
      });
    }
  }

  render() {
    let { treeData } = this.state;
    return (
      <SortableTree
        maxDepth={2}
        scaffoldBlockPxWidth={10}
        isVirtualized={false}
        treeData={treeData}
        onChange={treeData => this.setState({ treeData })}
        onMoveNode={this.handleMove}
      />
    );
  }
}

export default Tree;
