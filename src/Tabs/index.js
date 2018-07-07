import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntTabs from 'antd/lib/tabs';
import 'antd/lib/tabs/style/index.css';
import styled from 'styled-components';
import { SHARK } from '../colors';

const MtTabs = styled.div`
  .ant-tabs-bar {
    border-bottom: 1px solid #e7e8ec;
    margin-bottom: 40px;
  }
  .ant-tabs-nav {
    .ant-tabs-tab {
      font-weight: 500;
      color: #989ca6;
      margin: 0 1px 0 0;
      padding: 12px 10px;
    }
  }
  .ant-tabs-nav {
    .ant-tabs-tab {
      &:hover {
        color: ${SHARK};
      }
    }
    .ant-tabs-tab-active {
      color: ${SHARK};
    }
  }
  .ant-tabs-content > .ant-tabs-tabpane {
    padding: 0 10px;
  }
`;

class Tabs extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    activeKey: PropTypes.string,
    onChange: PropTypes.func
  };

  state = {
    activeKey: this.props.activeKey
  };

  onChange = activeKey => {
    this.setState({ activeKey });
    if (this.props.onChange) {
      this.props.onChange(activeKey);
    }
  };

  componentWillReceiveProps(nextProps) {
    if (typeof nextProps.activeKey !== 'undefined') {
      this.setState({ activeKey: nextProps.activeKey });
    }
  }

  render() {
    let { options } = this.props;
    return (
      <MtTabs>
        <AntTabs activeKey={this.state.activeKey} onChange={this.onChange}>
          {options.map(option => {
            return (
              <AntTabs.TabPane tab={option.title} key={option.key}>
                {option.title}
              </AntTabs.TabPane>
            );
          })}
        </AntTabs>
      </MtTabs>
    );
  }
}
export default Tabs;
