import React from 'react';
import AntAutoComplete from 'antd/lib/auto-complete';
import Styled from 'styled-components';
import 'antd/lib/auto-complete/style/index.css';

const StyledAutoComplete = Styled.div`
`;

class AutoComplete extends React.Component {
  render() {
    return (
      <StyledAutoComplete
        innerRef={ele => {
          if (ele) this.popUpContainer = ele;
        }}
      >
        <AntAutoComplete
          getPopupContainer={() => this.popUpContainer}
          {...this.props}
        />
      </StyledAutoComplete>
    );
  }
}
AutoComplete.Option = AntAutoComplete.Option;
export default AutoComplete;
