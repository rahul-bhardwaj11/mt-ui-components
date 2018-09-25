import React, { Component } from 'react';
import { Input } from 'antd';
import 'antd/lib/input/style/index.css';
import styled from 'styled-components';
import theme from '../styles/theme';
import Icon from '../Icon';

const AntSearch = Input.Search;

const MtSearchInput = styled.span`
  .ant-input-affix-wrapper {
    font-family: inherit;
    .ant-input:not(:last-child) {
      padding: 0px 0px 0px 30px;
    }
  }
  .ant-input-search:not(.ant-input-search-small) {
    & > .ant-input-suffix {
      right: 0px;
      left: 12px;
      top: 17px;
      width: 14px;
    }
  }

  .ant-input-affix-wrapper:hover .ant-input:not(.ant-input-disabled) {
    border: 1px solid ${theme.colors.ALTO};
    &:hover {
      border: 1px solid ${theme.colors.SILVER};
    }
  }
  .ant-input {
    color: ${theme.colors.SHARK};
    font-family: inherit;
    font-size: 12px;
    border: 1px solid ${theme.colors.ALTO};
    &:hover {
      border: 1px solid ${theme.colors.SILVER};
    }
    &:focus {
      border: 1px solid ${theme.colors.SILVER};
      box-shadow: none;
    }
  }
  .ant-input-search > .ant-input-suffix > .ant-input-search-icon {
    display: none;
  }
  .icon-search {
    color: ${theme.colors.ALTO};
  }
  .ant-input-search:focus .icon-search,
  .ant-input-search:active .icon-search,
  .ant-input-search:focus-within .icon-search {
    color: ${theme.colors.GREY};
  }
`;

class Search extends Component {
  render() {
    const suffix = <Icon type="search" />;
    return (
      <MtSearchInput>
        <AntSearch {...this.props} suffix={suffix} />
      </MtSearchInput>
    );
  }
}
export default Search;
