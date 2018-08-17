import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import Button from '../Button';
import Select from 'react-select';
//import AsyncSelect from "react-select/lib/Async";
//import { Icon } from 'antd';
import styled from 'styled-components';
import theme from '../styles/theme';

const SelectBox = styled.div`
  .mt-react-select__single-value {
    padding-left: 30px;
  }
  .mt-react-select__value-container::before {
    content: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5zZWFyY2g8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM+PC9kZWZzPiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJEZXNrdG9wLUhEIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzg1LjAwMDAwMCwgLTg0LjAwMDAwMCkiIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyI+ICAgICAgICAgICAgPHBhdGggZD0iTTM5Ny4yMDY2NzIsOTQuOTcyNDQ5MyBMNDAwLjc0NDM4NCw5OC41MTAxNjE0IEM0MDEuMDg1MjA1LDk4Ljg1MDk4MjYgNDAxLjA4NTIwNSw5OS40MDM1NjI5IDQwMC43NDQzODQsOTkuNzQ0Mzg0MSBDNDAwLjQwMzU2MywxMDAuMDg1MjA1IDM5OS44NTA5ODMsMTAwLjA4NTIwNSAzOTkuNTEwMTYxLDk5Ljc0NDM4NDEgTDM5NS45NzI0NDksOTYuMjA2NjcyIEMzOTQuODIxNjczLDk3LjA5NTQ2OTcgMzkzLjM3ODY0OCw5Ny42MjQyNDI0IDM5MS44MTIxMjEsOTcuNjI0MjQyNCBDMzg4LjA0OTg5MSw5Ny42MjQyNDI0IDM4NSw5NC41NzQzNTE5IDM4NSw5MC44MTIxMjEyIEMzODUsODcuMDQ5ODkwNiAzODguMDQ5ODkxLDg0IDM5MS44MTIxMjEsODQgQzM5NS41NzQzNTIsODQgMzk4LjYyNDI0Miw4Ny4wNDk4OTA2IDM5OC42MjQyNDIsOTAuODEyMTIxMiBDMzk4LjYyNDI0Miw5Mi4zNzg2NDggMzk4LjA5NTQ3LDkzLjgyMTY3MzMgMzk3LjIwNjY3Miw5NC45NzI0NDkzIFogTTM5MS44MTIxMjEsOTUuODc4Nzg3OSBDMzk0LjYxMDM2NCw5NS44Nzg3ODc5IDM5Ni44Nzg3ODgsOTMuNjEwMzYzOSAzOTYuODc4Nzg4LDkwLjgxMjEyMTIgQzM5Ni44Nzg3ODgsODguMDEzODc4NSAzOTQuNjEwMzY0LDg1Ljc0NTQ1NDUgMzkxLjgxMjEyMSw4NS43NDU0NTQ1IEMzODkuMDEzODc4LDg1Ljc0NTQ1NDUgMzg2Ljc0NTQ1NSw4OC4wMTM4Nzg1IDM4Ni43NDU0NTUsOTAuODEyMTIxMiBDMzg2Ljc0NTQ1NSw5My42MTAzNjM5IDM4OS4wMTM4NzgsOTUuODc4Nzg3OSAzOTEuODEyMTIxLDk1Ljg3ODc4NzkgWiIgaWQ9InNlYXJjaCI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
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
    width: ${({ width = 'auto' }) => width};
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
    color: ${theme.colors.OUTER_SPACE};
    height: 32px;
  }
  // .mt-react-select__option:hover{
  //   background-color: ${theme.colors.INDIGO};
  //   color: #ffffff;
  //   cursor: pointer;
  // }
  .mt-react-select__option--is-selected {
    background-color: #ffffff;
    color: ${theme.colors.OUTER_SPACE};
  }
  .mt-react-select__option--is-focused {
    background-color:  ${theme.colors.INDIGO};
    color: #ffffff;
    cursor: pointer;
  }
  .mt-react-select__input {
    padding-left: 30px;
  }
  .mt-react-select__placeholder {
    padding-left: 30px;
  }
  .mt-react-select__indicators {
    display: none;
  }
`;

const initialCache = {
  options: [],
  hasMore: true,
  isLoading: false
};

class AsyncSelect extends Component {
  static propTypes = {
    promiseOption: PropTypes.func,
    cacheUniq: PropTypes.any,
    pageSize: PropTypes.number,
    options: PropTypes.array,
    width: PropTypes.string
  };

  static defaultProps = {
    cacheUniq: null,
    pageSize: 10
  };

  constructor(props) {
    super(props);
    const initialOptionsCache = props.options
      ? {
          '': {
            isLoading: false,
            options: props.options || [],
            hasMore: true
          }
        }
      : {};
    this.state = {
      search: '',
      optionsCache: initialOptionsCache
    };
  }

  componentDidUpdate(oldProps) {
    const { cacheUniq } = this.props;

    if (oldProps.cacheUniq !== cacheUniq) {
      this.setState({
        optionsCache: {}
      });
    }
  }

  onInputChange = search => {
    this.setState({
      search
    });

    const { optionsCache } = this.state;

    if (!optionsCache[search]) {
      this.loadOptions();
    }
  };

  onMenuScrollToBottom = async () => {
    const { search, optionsCache } = this.state;

    const currentOptions = optionsCache[search];

    if (currentOptions) {
      await this.loadOptions();
    }
  };

  async loadOptions() {
    const { search, optionsCache } = this.state;

    const currentOptions = optionsCache[search] || initialCache;

    if (currentOptions.isLoading || !currentOptions.hasMore) {
      return;
    }

    await this.setState(prevState => ({
      search,
      optionsCache: {
        ...prevState.optionsCache,
        [search]: {
          ...currentOptions,
          isLoading: true
        }
      }
    }));

    try {
      const loadOptions = this.__loadOptions;

      const { options, hasMore } = await loadOptions(
        search,
        currentOptions.options
      );

      await this.setState(prevState => ({
        optionsCache: {
          ...prevState.optionsCache,
          [search]: {
            ...currentOptions,
            options: currentOptions.options.concat(options),
            hasMore: !!hasMore,
            isLoading: false
          }
        }
      }));
    } catch (e) {
      await this.setState(prevState => ({
        optionsCache: {
          ...prevState.optionsCache,
          [search]: {
            ...currentOptions,
            isLoading: false
          }
        }
      }));
    }
  }

  __loadOptions = (search, prevOptions) => {
    let { promiseOption, pageSize } = this.props;
    return new Promise(resolve => {
      let offset = prevOptions.length;
      promiseOption({ search, offset, pageSize }).then(options => {
        resolve({ options, hasMore: options.length === pageSize });
      }, {});
    });
  };

  onMenuOpen = async () => {
    const { optionsCache } = this.state;

    if (!optionsCache['']) {
      await this.loadOptions();
    }
  };

  render() {
    const { search, optionsCache } = this.state;
    const currentOptions = optionsCache[search] || initialCache;
    return (
      <Select
        {...this.props}
        classNamePrefix={'mt-react-select'}
        onInputChange={this.onInputChange}
        isLoading={currentOptions.isLoading}
        options={currentOptions.options}
        onMenuOpen={this.onMenuOpen}
        autoload={false}
        onMenuScrollToBottom={this.onMenuScrollToBottom}
      />
    );
  }
}

class SelectWithSearch extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
    async: PropTypes.bool,
    placeholder: PropTypes.string
  };

  static defaultProps = {
    placeholder: 'Search'
  };

  render() {
    let { async } = this.props;
    if (async) {
      return (
        <SelectBox {...this.props}>
          <AsyncSelect {...this.props} />
        </SelectBox>
      );
    }
    return (
      <SelectBox {...this.props}>
        <Select {...this.props} classNamePrefix={'mt-react-select'} />
      </SelectBox>
    );
  }
}

export default SelectWithSearch;
