import React from 'react';
import AntAutoComplete from 'antd/lib/auto-complete';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import 'antd/lib/auto-complete/style/index.css';

const StyledAutoComplete = Styled.div`
  display: inline-block;
`;

class AutoComplete extends React.Component {
  static propTypes = {
    className: PropTypes.string
  };
  render() {
    const { className, ...rest } = this.props;
    return (
      <StyledAutoComplete
        innerRef={ele => {
          if (ele) this.popUpContainer = ele;
        }}
        className={className}
      >
        <AntAutoComplete
          getPopupContainer={() => this.popUpContainer}
          {...rest}
        />
      </StyledAutoComplete>
    );
  }
}

AutoComplete.Option = AntAutoComplete.Option;
export default AutoComplete;
