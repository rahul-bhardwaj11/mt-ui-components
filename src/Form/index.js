import React from 'react';
import AntFrom from 'antd/lib/form';
import Styled from 'styled-components';
import theme from '../styles/theme';

const StyledForm = Styled(AntFrom)`
    .ant-form-explain{
      margin-bottom: 0px;  
      margin-top: 0px;
      line-height: 20px;
      font-size: 12px;    
    }    
    .ant-form-item{
      margin-bottom: 0px;
    }
    .ant-form-item-control-wrapper{
      height: 52px;
    }
    .ant-form-item-control{
        line-height: unset;
    }  
    .has-error .ant-select-selection,    
    .has-error .ant-form-explain, .has-error .ant-form-split{
      border-color: ${theme.colors.BITTERSWEET};   
      color: ${theme.colors.BITTERSWEET};   
    }
    .ant-input .ant-select-search__field{
      border-color: ${theme.colors.INDOGO};
    }        
`;
class Form extends React.Component {
  render() {
    return <StyledForm {...this.props} />;
  }
}

Form.create = AntFrom.create;
Form.Item = AntFrom.Item;
export default Form;