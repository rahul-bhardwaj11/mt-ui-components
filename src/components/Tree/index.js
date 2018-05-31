import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';

class Tree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: this.props.treeData
    };
  }

  render() {
    return (
        <SortableTree
          maxDepth={2}
          scaffoldBlockPxWidth={10}
          isVirtualized={false}
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
        />
    );
  }
}

export default Tree;
