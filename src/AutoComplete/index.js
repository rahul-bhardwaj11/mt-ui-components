import React from 'react';
import AntAutoComplete from 'antd/lib/auto-complete';
import Styled from 'styled-components';

const StyledAutoComplete = Styled(AntAutoComplete)`
`;

class AutoComplete extends React.Component {
  render() {
    return <StyledAutoComplete {...this.props} />;
  }
}

export default AutoComplete;
