import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntCollapse from 'antd/lib/collapse';
import 'antd/lib/collapse/style/index.css';
import StringToHTML from "../StringToHTML";



class Collapse extends Component {

  static propTypes = {
    options: PropTypes.any.isRequired
  };


  render() {
    let { options } = this.props;
    return (
      <AntCollapse accordion defaultActiveKey={['0']}>
        {options.map((option, index) => {
              return (
                <AntCollapse.Panel key={index} header={option.header} >
                  { (typeof option.content === "string") ? <StringToHTML content={option.content} /> : option.content }
                </AntCollapse.Panel>
              );
        })}
       </AntCollapse>
     );
  }
}
export default Collapse;
