import React, { Component } from 'react';
import { Input } from 'antd';
import 'antd/lib/input/style/index.css';
import styled from 'styled-components';

const AntSearch = Input.Search;

const MtSearchInput = styled.div`
  .ant-input-affix-wrapper {
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
`;

class Search extends Component {
  render() {
    return (
      <MtSearchInput>
        <AntSearch {...this.props} />
      </MtSearchInput>
    );
  }
}
export default Search;
