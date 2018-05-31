import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntTabs from 'antd/lib/tabs';
import 'antd/lib/tabs/style/index.css'

class Tabs extends Component {

  static propTypes = {
    options: PropTypes.array.isRequired,
    activeKey: PropTypes.string,
    onChange: PropTypes.func
  };

  state = {
    activeKey: this.props.activeKey
  };

  onChange = (activeKey) => {
    this.setState({ activeKey });
    if(this.props.onChange){
      this.props.onChange(activeKey);
    }
  }

  componentWillReceiveProps(nextProps){
    if(typeof nextProps.activeKey !== "undefined"){
      this.state.activeKey = nextProps.activeKey;
    }
  }


  render() {
      let {options, activeKey } = this.props;
      return (
        <AntTabs activeKey={this.state.activeKey} onChange={this.onChange}>
          {options.map((option) => {
            return (
              <AntTabs.TabPane tab={option.title} key={option.key} >{option.title}</AntTabs.TabPane>
            );
          })}
        </AntTabs>
    )
  }
}
export default Tabs;
