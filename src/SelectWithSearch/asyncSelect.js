import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import CheckBox from '../CheckBox';
import Select, { components } from 'react-select';

const initialCache = {
  options: [],
  hasMore: true,
  isLoading: false
};

export default class AsyncSelect extends Component {
  static propTypes = {
    promiseOption: PropTypes.func,
    cacheUniq: PropTypes.any,
    pageSize: PropTypes.number,
    options: PropTypes.array,
    multiple: PropTypes.bool,
    defaultValue: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    isMulti: PropTypes.bool,
    onChange: PropTypes.func,
    initialType: PropTypes.string,
    buttonLabel: PropTypes.string
  };

  static defaultProps = {
    cacheUniq: null,
    pageSize: 10,
    initialType: 'select',
    buttonLabel: 'filter'
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
      optionsCache: initialOptionsCache,
      selectedItems: [],
      showSelectedValues: true,
      menuIsOpen: false,
      showButton: false,
      showInput: false
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

  componentWillMount() {
    const { defaultValue, initialType } = this.props;
    const { optionsCache, search } = this.state;
    const currentOptions = optionsCache[search] || initialCache;
    if (initialType == 'button') {
      this.setState({ showButton: true });
    }
    const selectedItems = [];
    if (defaultValue) {
      if (defaultValue.length) {
        defaultValue.map(option => {
          selectedItems.push(option);
        });
      } else {
        selectedItems.push(defaultValue);
      }
    }

    const arrangedOptions = this.__arrangeOptions(
      selectedItems,
      currentOptions.options
    );
    this.setState(prevState => ({
      selectedItems,
      optionsCache: {
        ...prevState.optionsCache,
        [search]: {
          isLoading: false,
          options: arrangedOptions,
          hasMore: true
        }
      }
    }));
  }

  __arrangeOptions = (selectedItems, options) => {
    const optionsThatAreNotSelected = options.filter(option => {
      return selectedItems.indexOf(option) < 0;
    });
    const newOptions = [...selectedItems, ...optionsThatAreNotSelected];
    return newOptions;
  };

  __loadOptions = (search, prevOptions) => {
    let { promiseOption, pageSize } = this.props;
    return new Promise(resolve => {
      let offset = prevOptions.length;
      promiseOption({ search, offset, pageSize }).then(options => {
        resolve({ options, hasMore: options.length === pageSize });
      }, {});
    });
  };

  componentDidMount = async () => {
    //this.onMenuOpen();
    const { optionsCache } = this.state;

    if (!optionsCache[''] || optionsCache[''].hasMore) {
      await this.loadOptions();
    }
  };

  // onMenuOpen = async () => {
  //   console.log("menu opened");
  //   const { optionsCache } = this.state;

  //   if (!optionsCache[''] || optionsCache[''].hasMore) {
  //     await this.loadOptions();
  //   }
  // };

  onCheckboxClick = data => {
    if (data) this.setState({ selectedItems: data });
  };

  onClearAll = () => {
    const selectedItems = [];
    this.setState({ selectedItems });
  };

  onDone = () => {
    const { selectedItems, optionsCache } = this.state;
    const options = optionsCache[''].options;
    const selectedValues = selectedItems.map(selectedItem => {
      return selectedItem.value;
    });
    if (this.props.onChange) this.props.onChange(selectedValues);
    if (this.props.initialType == 'button') {
      this.toggleButton();
    }
    const arrangedOptions = this.__arrangeOptions(selectedItems, options);
    this.setState(prevState => ({
      menuIsOpen: false,
      showSelectedValues: true,
      optionsCache: {
        ...prevState.optionsCache,
        '': {
          ...prevState.optionsCache[''],
          options: arrangedOptions
        }
      }
    }));
  };

  toggleButton = () => {
    this.setState(prevState => ({
      showButton: !prevState.showButton,
      menuIsOpen: !prevState.menuIsOpen,
      showInput: !prevState.showInput,
      showSelectedValues: !prevState.showSelectedValues
    }));
  };

  handleDisplayValue = ({ data }) => {
    const { selectedItems } = this.state;
    if (data.value == selectedItems[0].value)
      return (
        <div>{`${data.value}${
          selectedItems.length > 1 ? `+${selectedItems.length - 1}` : ''
        }`}</div>
      );
    return null;
  };

  optionWithCheckBox = ({ innerProps, isDisabled, data }) => {
    const { selectedItems } = this.state;
    return !isDisabled ? (
      <div onClick={innerProps.onClick}>
        <CheckBox checked={selectedItems.indexOf(data) > -1 ? true : false} />
        {data.label}
      </div>
    ) : null;
  };

  valueContainer = ({ children, ...props }) => {
    return (
      <div onClick={this.onInputClick} {...props}>
        {children}
      </div>
    );
  };

  buildMenu = props => {
    const { selectedItems } = this.state;
    return (
      <div>
        <components.Menu {...props}>
          {props.children}
          <Button type="primary" onClick={this.onClearAll}>
            {'Clear All'}
          </Button>
          <Button type="primary" onClick={this.onDone}>{`Done${
            selectedItems.length ? `+${selectedItems.length}` : ''
          }`}</Button>
        </components.Menu>
      </div>
    );
  };

  handleControl = arg => {
    return (
      <div
        onClick={() => {
          this.setState(prevState => ({
            menuIsOpen: !prevState.menuIsOpen,
            showInput: true,
            showSelectedValues: false
          }));
        }}
      >
        <components.Control {...arg} />
      </div>
    );
  };
  getButtonText = () => {
    const { selectedItems } = this.state;
    const { buttonLabel } = this.props;
    if (selectedItems.length) {
      return `${buttonLabel}.${selectedItems.length}`;
    }
    return buttonLabel;
  };

  render() {
    const {
      search,
      optionsCache,
      selectedItems,
      showSelectedValues,
      menuIsOpen,
      showButton,
      showInput
    } = this.state;
    const { isMulti } = this.props;
    const currentOptions = optionsCache[search] || initialCache;

    if (showButton) {
      return (
        <Button onClick={this.toggleButton} type="primary">
          {this.getButtonText()}
        </Button>
      );
    }

    if (isMulti) {
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
          onChange={this.onCheckboxClick}
          hideSelectedOptions={false}
          components={{
            Option: this.optionWithCheckBox,
            MultiValueContainer: this.handleDisplayValue,
            Menu: this.buildMenu,
            Control: this.handleControl
          }}
          value={selectedItems}
          closeMenuOnSelect={false}
          controlShouldRenderValue={showSelectedValues}
          menuIsOpen={menuIsOpen}
          isSearchable={showInput}
          autoFocus={showInput}
        />
      );
    }
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
