import React from 'react';
import AntFrom from 'antd/lib/form';
import Styled from 'styled-components';

const StyledForm = Styled(AntFrom)`
`;
class Form extends React.Component {
  render() {
    return <StyledForm {...this.props} />;
  }
}

Form.create = AntFrom.create;
Form.Item = AntFrom.Item;
export default Form;
