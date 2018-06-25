import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import style from './index.scss';
import AntCheckbox from 'antd/lib/checkbox';
import 'antd/lib/checkbox/style/index.css'
import styled from 'styled-components';

var DARK: '#2A2E36',
    LIGHTER: '#989CA6'

const MtCheckbox = styled.div`
  .ant-checkbox-wrapper{
    font-weight:500;
    display:inherit;
    .ant-checkbox{
      float: left;
    }
    .ant-checkbox + span{
      float: left;
      min-width: 125px;
      font-size: 12px;
    }
    .ant-checkbox-checked + span{
      color:${DARK};
    }

    span{
      color:${LIGHTER};
    }
  }

`;


class CheckBox extends Component {

  static propTypes = {
    label: PropTypes.string,
    checked: PropTypes.bool.isRequired,
    onClick: PropTypes.func
  };

  state = {
    checked: this.props.checked
  };

  onChange = event => {
    event.stopPropagation();
    const isChecked = !this.state.checked;
    this.setState({ checked: isChecked });
    this.props.onChange(isChecked);
  };

  componentWillReceiveProps(nextProps){
    if(typeof nextProps.checked !== "undefined"){
      this.state.checked = nextProps.checked;
    }
  }

  render() {
    const { checked, className, onChange, label } = this.props;
    return (
      <MtCheckbox>
        <AntCheckbox checked={this.state.checked} onChange={this.onChange}>{label}</AntCheckbox>
      </MtCheckbox>
    );
  }
}
export default CheckBox;
