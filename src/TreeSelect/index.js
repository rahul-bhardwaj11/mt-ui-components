import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntTreeSelect from 'antd/lib/tree-select';
import 'antd/lib/tree-select/style/index.css';
import './index.scss';

//const AntTreeNode = AntTreeSelect.TreeNode;

class TreeSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      treeData: props.treeData,
      searchValue: ''
    };
  }

  static defaultProps = {
    treeData: []
  };

  static propTypes = {
    treeData: PropTypes.array.isRequired,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onSearchInputChange: PropTypes.func,
    className: PropTypes.string
  };

  onSearch = value => {
    let { onSearchInputChange } = this.props;
    onSearchInputChange(value).then(treeData => {
      this.setState({
        treeData,
        searchValue: value
      });
    });
  };

  onChange = value => {
    this.setState({ value });
  };

  render() {
    let { treeData, searchValue, value } = this.state;
    return (
      <AntTreeSelect
        showSearch={true}
        searchValue={searchValue}
        onSearch={this.onSearch}
        value={value}
        treeData={treeData}
        onChange={this.onChange}
        className={this.props.className}
      />
    );
  }
}
export default TreeSelect;
