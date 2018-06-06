import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntRadio from 'antd/lib/radio';
import 'antd/lib/radio/style/index.css'
import styled from 'styled-components';
import '../../styles/commonStyle.scss'

var primary = '#4D7CC7'
    // darkGrey = '#888',
    // lightBlue= '4A90E2',
    // help: '#BBB'
    // disabled: 'E8E8E8'
    // light: '#E4EFFB',
    // dark: '#2A2E36',
    // light:  '#606369',
    // lighter: '#989CA6',
    // navigationDard: '#202A39',
    // navigationLight: '#262B43',
    // text:  '#868BA7',
    //
    // icon: '#888888',
    // border: '#DDDDDD',
    // background:  '#F5F6F7'


const MtRadio = styled.div`
  display: inline-block
  .ant-radio-inner:after{
    background-color: white;
  }

  .ant-radio-checked {
    .ant-radio-inner {
        border-color: ${primary};
        background: ${primary};
        ${'' /* border-color: $primary-color;
        background: $primary-color; */}
    }
  }
  .ant-radio-wrapper{
    &:hover{
      .ant-radio .ant-radio-inner{
        border: 1px solid  ${primary};
        ${'' /* border: 1px solid $primary-color; */}
      }
    }
  }
`;

class Radio extends Component {

  static propTypes = {
    children: PropTypes.any,
    checked: PropTypes.bool
  };


  render() {
    let { children } = this.props;
      return (
        <MtRadio>
          <AntRadio {...this.props} >{children}</AntRadio>
        </MtRadio>
      );
  }
}
Radio.Group = AntRadio.Group;
export default Radio;
