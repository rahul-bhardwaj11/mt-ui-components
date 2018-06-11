import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntInput from 'antd/lib/input';
import 'antd/lib/input/style/index.css'
import styled from 'styled-components'

var help: '#BBB',
    disable: 'E8E8E8'


const MtInput = styled.div`
  .ant-input {
    border:1px solid #ddd;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
  }
  .ant-input {
    &:hover{
      border-color: ${help};
    }

  }
  .ant-input{
    &:focus{
        border-color: ${help};
        font-weight: 500;
        outline: 0;
        -webkit-box-shadow: 0 0 0 0px rgba(24, 144, 255, 0.2);
        box-shadow: 0 0 0 0px rgba(24, 144, 255, 0.2);
    }
  }
  .ant-input-disabled{
    border-color: ${disable};
    background-color: #F8F8F8;
    color: ${help};
    &:hover{
      border-color: ${disable};
    }
  }
  .ant-input-error{
    border-color:#FF6060;
  }
`

class Input extends Component {

  static propTypes = {
    placeholder: PropTypes.string
  };


  render() {
      return (
        <MtInput>
          <AntInput {...this.props} />
        </MtInput>
    )
  }
}
Input.TextArea = AntInput.TextArea;
export default Input;
