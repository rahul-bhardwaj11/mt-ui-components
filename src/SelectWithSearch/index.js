import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import AsyncSelect from "react-select/lib/Async";
//import { Icon } from 'antd';
import styled from 'styled-components';
import theme from '../styles/theme';

import AsyncSelect from './asyncSelect';
import SyncSelect from './syncSelect';

const SelectBox = styled.div`
  .mt-react-select__single-value {
    padding-left: 30px;
  }
  .mt-react-select__value-container::before {
    //content: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5zZWFyY2g8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM+PC9kZWZzPiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJEZXNrdG9wLUhEIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzg1LjAwMDAwMCwgLTg0LjAwMDAwMCkiIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyI+ICAgICAgICAgICAgPHBhdGggZD0iTTM5Ny4yMDY2NzIsOTQuOTcyNDQ5MyBMNDAwLjc0NDM4NCw5OC41MTAxNjE0IEM0MDEuMDg1MjA1LDk4Ljg1MDk4MjYgNDAxLjA4NTIwNSw5OS40MDM1NjI5IDQwMC43NDQzODQsOTkuNzQ0Mzg0MSBDNDAwLjQwMzU2MywxMDAuMDg1MjA1IDM5OS44NTA5ODMsMTAwLjA4NTIwNSAzOTkuNTEwMTYxLDk5Ljc0NDM4NDEgTDM5NS45NzI0NDksOTYuMjA2NjcyIEMzOTQuODIxNjczLDk3LjA5NTQ2OTcgMzkzLjM3ODY0OCw5Ny42MjQyNDI0IDM5MS44MTIxMjEsOTcuNjI0MjQyNCBDMzg4LjA0OTg5MSw5Ny42MjQyNDI0IDM4NSw5NC41NzQzNTE5IDM4NSw5MC44MTIxMjEyIEMzODUsODcuMDQ5ODkwNiAzODguMDQ5ODkxLDg0IDM5MS44MTIxMjEsODQgQzM5NS41NzQzNTIsODQgMzk4LjYyNDI0Miw4Ny4wNDk4OTA2IDM5OC42MjQyNDIsOTAuODEyMTIxMiBDMzk4LjYyNDI0Miw5Mi4zNzg2NDggMzk4LjA5NTQ3LDkzLjgyMTY3MzMgMzk3LjIwNjY3Miw5NC45NzI0NDkzIFogTTM5MS44MTIxMjEsOTUuODc4Nzg3OSBDMzk0LjYxMDM2NCw5NS44Nzg3ODc5IDM5Ni44Nzg3ODgsOTMuNjEwMzYzOSAzOTYuODc4Nzg4LDkwLjgxMjEyMTIgQzM5Ni44Nzg3ODgsODguMDEzODc4NSAzOTQuNjEwMzY0LDg1Ljc0NTQ1NDUgMzkxLjgxMjEyMSw4NS43NDU0NTQ1IEMzODkuMDEzODc4LDg1Ljc0NTQ1NDUgMzg2Ljc0NTQ1NSw4OC4wMTM4Nzg1IDM4Ni43NDU0NTUsOTAuODEyMTIxMiBDMzg2Ljc0NTQ1NSw5My42MTAzNjM5IDM4OS4wMTM4NzgsOTUuODc4Nzg3OSAzOTEuODEyMTIxLDk1Ljg3ODc4NzkgWiIgaWQ9InNlYXJjaCI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
    //content: url('./assets/search.svg')
    padding-left: 5px;
    padding-top: 5px;
    position: absolute;
    opacity: 0.6;
  }
  .mt-react-select__menu-list {
    padding: 8px;
  }
  .mt-react-select__control {
    border: 1px solid ${theme.colors.ALTO};
  }
  .mt-react-select__control--is-focused {
    box-shadow: none;
    border: 1px solid ${theme.colors.SILVER};
  }
  .mt-react-select__control--is-focused:hover {
    border: 1px solid ${theme.colors.SILVER};
  }
  .mt-react-select__option {
    border-radius: 4px;
    padding: 6px 20px 8px 16px;
    color: #989ca6;
    height: 32px;
  }
  // .mt-react-select__option:hover{
  //   background-color: ${theme.colors.LIGHT_BLUE};
  //   color: #ffffff;
  //   cursor: pointer;
  // }
  .mt-react-select__option--is-selected {
    background-color: #ffffff;
    color: ${theme.colors.OUTER_SPACE};
  }
  .mt-react-select__option--is-focused {
    background-color:  ${theme.colors.LIGHT_BLUE};
    color: #ffffff;
    cursor: pointer;
  }
  .mt-react-select__input {
    padding-left: 0px;
  }
  .mt-react-select__placeholder {
    padding-left: 30px;
  }
  .mt-react-select__indicators {
    display: none;
  }
`;

class SelectWithSearch extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
    async: PropTypes.bool,
    placeholder: PropTypes.string,
    isMulti: PropTypes.bool,
    onChange: PropTypes.func.isRequired
  };
  static defaultProps = {
    placeholder: 'Type here to Search'
  };

  render() {
    let { async } = this.props;
    if (async) {
      return (
        <SelectBox>
          <AsyncSelect {...this.props} />
        </SelectBox>
      );
    } else
      return (
        <SelectBox>
          <SyncSelect {...this.props} />
        </SelectBox>
      );
  }
}

export default SelectWithSearch;
