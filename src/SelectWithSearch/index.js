import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import Button from '../Button';
import Select from 'react-select';
//import AsyncSelect from "react-select/lib/Async";
import './index.scss';
//import { Icon } from 'antd';

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
    options: PropTypes.array
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
      <div>
        <Select
          {...this.props}
          onInputChange={this.onInputChange}
          isLoading={currentOptions.isLoading}
          options={currentOptions.options}
          onMenuOpen={this.onMenuOpen}
          autoload={false}
          onMenuScrollToBottom={this.onMenuScrollToBottom}
        />
      </div>
    );
  }
}

class SelectWithSearch extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
    async: PropTypes.bool
  };
  render() {
    let { async } = this.props;
    if (async) {
      return <AsyncSelect {...this.props} />;
    }
    return <Select {...this.props} />;
  }
}

// class SelectWithAsyncSearch extends Component {
//   static propTypes = {
//     promiseOption: PropTypes.func,
//     cacheUniq: PropTypes.any,
//     options: PropTypes.arrayOf(PropTypes.object),
//     pageSize: PropTypes.number
//   };

//   static defaultProps = {
//     cacheUniq: null,
//     options: null,
//     pageSize: 10
//   };

//   constructor(props) {
//     super(props);

//     const initialOptionsCache = props.options
//       ? {
//           '': {
//             isLoading: false,
//             options: props.options,
//             hasMore: true
//           }
//         }
//       : {};

//     this.state = {
//       search: '',
//       optionsCache: initialOptionsCache,
//       menuIsOpen: false
//     };
//   }

//   componentDidUpdate(oldProps) {
//     const { cacheUniq } = this.props;

//     if (oldProps.cacheUniq !== cacheUniq) {
//       this.setState({
//         optionsCache: {}
//       });
//     }
//   }

//   onMenuClose = () => {
//     this.setState({
//       search: '',
//       menuIsOpen: false
//     });
//   };

//   onMenuOpen = async () => {
//     await this.setState({
//       menuIsOpen: true
//     });

//     const { optionsCache } = this.state;

//     if (!optionsCache['']) {
//       await this.loadOptions();
//     }
//   };

//   onInputChange = async search => {
//     await this.setState({
//       search
//     });

//     const { optionsCache } = this.state;

//     if (!optionsCache[search]) {
//       await this.loadOptions();
//     }
//   };

//   onMenuScrollToBottom = async () => {
//     const { search, optionsCache } = this.state;

//     const currentOptions = optionsCache[search];

//     if (currentOptions) {
//       await this.loadOptions();
//     }
//   };

//   async loadOptions() {
//     const { search, optionsCache } = this.state;

//     const currentOptions = optionsCache[search] || initialCache;

//     if (currentOptions.isLoading || !currentOptions.hasMore) {
//       return;
//     }

//     await this.setState(prevState => ({
//       search,
//       optionsCache: {
//         ...prevState.optionsCache,
//         [search]: {
//           ...currentOptions,
//           isLoading: true
//         }
//       }
//     }));

//     try {
//       const loadOptions = this.__loadOptions;

//       const { options, hasMore } = await loadOptions(
//         search,
//         currentOptions.options
//       );

//       await this.setState(prevState => ({
//         optionsCache: {
//           ...prevState.optionsCache,
//           [search]: {
//             ...currentOptions,
//             options: currentOptions.options.concat(options),
//             hasMore: !!hasMore,
//             isLoading: false
//           }
//         }
//       }));
//     } catch (e) {
//       await this.setState(prevState => ({
//         optionsCache: {
//           ...prevState.optionsCache,
//           [search]: {
//             ...currentOptions,
//             isLoading: false
//           }
//         }
//       }));
//     }
//   }

//   __loadOptions = (search, prevOptions) => {
//     let { promiseOption, pageSize } = this.props;
//     return new Promise(resolve => {
//       let offset = prevOptions.length;
//       promiseOption({ search, offset, pageSize }).then(options => {
//         resolve({ options, hasMore: options.length === pageSize });
//       }, {});
//     });
//   };

//   render() {
//     const { search, optionsCache, menuIsOpen } = this.state;

//     const currentOptions = optionsCache[search] || initialCache;

//     return (
//       <SelectBase
//         {...this.props}
//         arrowRenderer={() => null}
//         classNamePrefix="react-select-container"
//         inputValue={search}
//         menuIsOpen={menuIsOpen}
//         onMenuClose={this.onMenuClose}
//         onMenuOpen={this.onMenuOpen}
//         onInputChange={this.onInputChange}
//         onMenuScrollToBottom={this.onMenuScrollToBottom}
//         isLoading={currentOptions.isLoading}
//         options={currentOptions.options}
//       />
//     );
//   }
// }

// class SelectWithSearch extends Component {
//   static propTypes = {
//     promiseOption: PropTypes.func,
//     async: PropTypes.bool,
//     cacheUniq: PropTypes.any,
//     selectedOption: PropTypes.object,
//     options: PropTypes.arrayOf(PropTypes.object),
//     placeholder: PropTypes.string,
//     pageSize: PropTypes.number,
//     style: PropTypes.object,
//     onSelect: PropTypes.func
//   };
//   static defaultProps = {
//     style: { width: 200 }
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       showSelect: false,
//       selectedOption: props.selectedOption
//     };
//   }

//   handleChange = selectedOption => {
//     this.setState({ selectedOption, showSelect: false });
//     this.props.onSelect(selectedOption.value);
//   };

//   render() {
//     let { async, style } = this.props;
//     let SelectComponent;
//     if (async) {
//       SelectComponent = SelectWithAsyncSearch;
//     } else {
//       SelectComponent = SelectWithSyncSearch;
//     }
//     let { showSelect, selectedOption } = this.state;
//     let { width } = style;
//     return (
//       <div style={style}>
//         <Button
//           type="default"
//           style={{ width }}
//           onClick={() => {
//             this.setState({
//               showSelect: !showSelect
//             });
//           }}
//         >
//           {selectedOption.label}
//           <Icon type="down" />
//         </Button>
//         {showSelect && (
//           <SelectComponent {...this.props} onChange={this.handleChange} />
//         )}
//       </div>
//     );
//   }
// }

export default SelectWithSearch;
