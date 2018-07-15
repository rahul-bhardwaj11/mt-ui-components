import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntTreeSelect from 'antd/lib/tree-select';
import 'antd/lib/tree-select/style/index.css';
import './index.scss';

const AntTreeNode = AntTreeSelect.TreeNode;

class TreeSelect extends Component {
  static propTypes = {
    options: PropTypes.any.isRequired,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  render() {
    let { options } = this.props;
    return (
      <AntTreeSelect {...this.props} showSearch style={{ width: 200 }}>
        {options.map((option, index) => {
          return (
            <AntTreeNode
              value={option.value}
              title={option.title}
              key={index}
            />
          );
        })}
      </AntTreeSelect>
    );
  }
}
export default TreeSelect;
