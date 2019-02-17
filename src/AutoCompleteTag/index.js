import React from 'react';
import PropTypes from 'prop-types';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css'; // If using WebPack and style-loader.
import styled from 'styled-components';
import searchIcon from '../styles/icons/search.svg';
import theme from '../styles/theme';
import mixins from '../styles/mixins';

const StyleAutoCompleteTag = styled.div`
  .react-tagsinput {
    position: relative;
    font-family:inherit;
    min-height: 32px;
    background-color:${theme.colors.WHITE};
    overflow: hidden;
    border-radius: 4px;
    border: 1px solid  ${theme.colors.ALTO};
    padding: 0 ${props => (props.withSearch ? `32px` : `12px`)};
    &:before {
        display: ${props => (props.withSearch ? `block` : `none`)};
        background: url('${searchIcon}') no-repeat 1px 0px;
        height: 15px;
        width: 15px;
        content: '';
        background-size: 13px;
        position: absolute;
        opacity: 0.6;
        left: 12px;
        top: 9px;
      }
      &:hover{
        border: 1px solid  ${theme.colors.SILVER};
      }
  }
  .react-tagsinput-input {
    background: transparent;
    border: 0;
    color: ${theme.colors.SHARK};
    font-size: 12px;
    font-weight: 500;
    outline: none;
    width: auto;
    padding: 0;
    margin:0 0 0  ${props => (props.withSearch ? `4px` : `0`)};;
    line-height: 30px;
    float:left;
    font-family:inherit;
    ::placeholder{
      color: ${theme.colors.ALTO};
    }
  }
  .react-tagsinput-tag {
    font-family:inherit;
    height: 24px;
    border: 1px solid  ${theme.colors.ALTO};
    border-radius: 16px;
    background-color: ${theme.colors.PORCELAIN};
    padding: 3px 12px;
    ${mixins.smallGreyLink()};
    margin: 4px 8px 4px 0;
    float:left;
  }
  .react-tagsinput-remove {
    cursor: pointer;
    color:${theme.colors.SILVER};
    font-size:14px;
    margin-left: 6px;
  }
`;

class AutoCompleteTag extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    tags: PropTypes.array,
    className: PropTypes.string,
    withSearch: PropTypes.bool,
    placeholder: PropTypes.string
  };

  static defaultProps = {
    withSearch: true,
    placeholder: 'Search words'
  };

  state = {
    tags: this.props.tags || []
  };

  handleChange = tags => {
    this.setState({ tags });
    this.props.onChange(tags);
  };

  render() {
    const { className, withSearch, placeholder, ...rest } = this.props;
    return (
      <StyleAutoCompleteTag className={className} withSearch={withSearch}>
        <TagsInput
          inputProps={{
            placeholder: placeholder
          }}
          {...rest}
          value={this.state.tags}
          onChange={this.handleChange}
          onlyUnique={true}
        />
      </StyleAutoCompleteTag>
    );
  }
}

export default AutoCompleteTag;
