import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntCollapse from 'antd/lib/collapse';
import 'antd/lib/collapse/style/index.css';
import StringToHTML from '../StringToHTML';
import styled from 'styled-components';

const MtCollapse = styled.div`
  .ant-collapse {
    border: 0px;
    border-radius: 0px;
    background: transparent;
  }
  .ant-collapse {
    & > .ant-collapse-item {
      &:last-child {
        border-radius: 0px;
      }
    }
    & > .ant-collapse-item {
      &:last-child {
        & > .ant-collapse-header {
          border-radius: 0px;
        }
      }
    }
  }
  .ant-collapse-header {
    font-weight: bold;
    background: #fff;
  }
  .ant-collapse {
    & > .ant-collapse-item {
      & > .ant-collapse-header {
        padding: 12px 12px 12px 15px;
      }
    }
  }
  .ant-collapse {
    & > .ant-collapse-item {
      & > .ant-collapse-header {
        .arrow {
          font-size: 0px;
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 7px solid #6f7583;
          border-radius: 2px;
          position: absolute;
          left: 91%;
        }
      }
    }
  }
  .ant-collapse {
    & > .ant-collapse-item {
      & > .ant-collapse-header[aria-expanded='true'] {
        .arrow {
          transform: rotate(-90deg);
          position: absolute;
          left: 91%;
          top: 43%;
        }
      }
    }
  }
`;

class Collapse extends Component {
  static propTypes = {
    options: PropTypes.any.isRequired,
    accordion: PropTypes.bool,
    panelStyle: PropTypes.object
  };

  render() {
    let { options, panelStyle } = this.props;
    return (
      <MtCollapse>
        <AntCollapse defaultActiveKey={['0']} {...this.props}>
          {options.map((option, index) => {
            return (
              <AntCollapse.Panel
                key={option.value || index}
                header={option.header}
                style={panelStyle}
              >
                {typeof option.content === 'string' ? (
                  <StringToHTML content={option.content} />
                ) : (
                  option.content
                )}
              </AntCollapse.Panel>
            );
          })}
        </AntCollapse>
      </MtCollapse>
    );
  }
}
export default Collapse;
