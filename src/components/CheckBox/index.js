import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import style from './index.scss';

import AntCheckbox from 'antd/lib/checkbox';
import 'antd/lib/checkbox/style/index.css'
import styled from 'styled-components';

var dark: '#2A2E36',
    lighter: '#989CA6'

const MtCheckbox = styled.div`
  .ant-checkbox-wrapper{
    font-weight:500;
    .ant-checkbox-checked + span{
      color:${dark};
    }

    span{
      color:${lighter};
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
