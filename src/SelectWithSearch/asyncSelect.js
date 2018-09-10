import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import CheckBox from '../CheckBox';
import Icon from '../Icon';
import Loader from '../Loader';
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
    isButton: PropTypes.bool,
    buttonLabel: PropTypes.string,
    placeholder: PropTypes.string,
    buttonMaxWidth: PropTypes.number,
    buttonMinWidth: PropTypes.number
  };

  static defaultProps = {
    cacheUniq: null,
    pageSize: 10,
    isButton: false,
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
      menuIsOpen: false,
      showSelect: true,
      showInput: false,
      inputValue: ''
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

  onInputChange = (search, event) => {
    if (event.action == 'input-change') {
      this.setState({
        inputValue: search,
        search
      });
    }

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
    const { defaultValue, isButton } = this.props;
    const { optionsCache, search } = this.state;
    const currentOptions = optionsCache[search] || initialCache;
    if (isButton) {
      this.setState({ showSelect: false });
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
    if (!optionsCache[''] || optionsCache[''].hasMore) {
      await this.loadOptions();
    }
    document.addEventListener('mousedown', this.handleClickOutside);
  };
  handleClickOutside = event => {
    if (this.buttonRef && this.buttonRef.contains(event.target)) {
      this.isBlurActive = false;
    }
  };

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  onCheckboxClick = data => {
    const selectedItems = [...this.state.selectedItems];
    let index = selectedItems.indexOf(data);
    if (index < 0) {
      selectedItems.push(data);
    } else {
      selectedItems.splice(index, 1);
    }
    this.setState({ selectedItems });
  };

  onClearAll = () => {
    const selectedItems = [];
    this.setState({ selectedItems });
  };

  onDone = () => {
    this.isBlurActive = true;
    const { selectedItems, optionsCache } = this.state;
    const { isButton, onChange } = this.props;
    const options = optionsCache[''].options;
    const selectedValues = selectedItems.map(selectedItem => {
      return selectedItem.value;
    });
    onChange(selectedValues);
    const arrangedOptions = this.__arrangeOptions(selectedItems, options);
    this.setState(prevState => {
      let newState = {
        menuIsOpen: false,
        showInput: false,
        inputValue: '',
        optionsCache: {
          ...prevState.optionsCache,
          '': {
            ...prevState.optionsCache[''],
            options: arrangedOptions
          }
        }
      };
      newState = isButton
        ? Object.assign(newState, { showSelect: false })
        : newState;
      return newState;
    });
  };

  toggleButton = () => {
    if (this.isBlurActive) {
      this.isBlurActive = false;
      return;
    }
    this.setState(prevState => ({
      showSelect: !prevState.showSelect,
      menuIsOpen: !prevState.menuIsOpen,
      showInput: !prevState.showInput
    }));
  };

  handleDisplayValue = ({ data }) => {
    const { selectedItems } = this.state;
    if (data.value == selectedItems[0].value)
      return (
        <div className="selectedItem clearfix">
          <span className="selectedItemLabel floatL">{`${data.label}`}</span>
          <span className="floatL">{`${
            selectedItems.length > 1 ? `+${selectedItems.length - 1}` : ''
          }`}</span>
        </div>
      );
    return null;
  };

  handleSingleValue = ({ data, ...props }) => {
    const { placeholder } = this.props;
    return (
      <components.SingleValue {...props}>
        {data.value == 'None' ? placeholder : data.label}
      </components.SingleValue>
    );
  };

  optionWithCheckBox = params => {
    const { isDisabled, data } = params;
    const { selectedItems } = this.state;
    if (!this.props.isMulti)
      return (
        <div title={data.label}>
          <components.Option {...params} />
        </div>
      );
    return !isDisabled ? (
      <div
        onClick={() => this.onCheckboxClick(data)}
        className="checkboxWrapper"
        title={data.label}
      >
        <CheckBox checked={selectedItems.indexOf(data) > -1 ? true : false} />
        <span className="dataLabel">{data.label}</span>
      </div>
    ) : null;
  };

  buildMenu = props => {
    const { selectedItems, search, optionsCache } = this.state;
    const isLoading = optionsCache[search] && optionsCache[search].isLoading;
    const { isMulti } = this.props;
    let loaderStyle = {
      position: 'absolute',
      bottom: isMulti ? 30 : 0,
      left: '50%'
    };
    return (
      <components.Menu {...props}>
        {props.children}
        {!!isLoading && (
          <Loader size={'sizeXSmall'} vCenter={false} style={loaderStyle} />
        )}
        {isMulti && (
          <div className="componentWrapper">
            <div className="buttonWrapperL">
              <Button type="text" onClick={this.onClearAll}>
                {'Clear All'}
              </Button>
            </div>

            <div className="buttonWrapperR">
              <Button type="text" onClick={this.onDone}>
                {`Done`}
                <span className="doneMarginR">
                  {selectedItems.length ? `(${selectedItems.length})` : ''}
                </span>
              </Button>
            </div>
          </div>
        )}
      </components.Menu>
    );
  };

  handleControl = arg => {
    const { inputValue } = this.state;
    return (
      <div className="selectBoxWrapper">
        <div
          className={this.state.showInput ? 'activeSearch' : ''}
          onClick={() => {
            this.setState({
              menuIsOpen: true,
              showInput: true
            });
          }}
        >
          <components.Control {...arg} />
          <div className={inputValue.length ? 'activeInput' : ''}>
            <Icon
              type="cross"
              onClick={() => this.setState({ inputValue: '' })}
            />
          </div>
        </div>
      </div>
    );
  };

  normalizeOption = options => {
    if (!this.props.isMulti && !this.state.search.length) {
      options.unshift({ label: 'None', value: 'None' });
    }
    return options;
  };

  getButtonText = () => {
    const { selectedItems } = this.state;
    const { buttonLabel } = this.props;
    const selectedItemsLength = selectedItems.length;
    if (selectedItemsLength) {
      if (selectedItemsLength == 1)
        return `${
          selectedItems[0].label == 'None'
            ? buttonLabel
            : selectedItems[0].label
        }`;
      return `${buttonLabel}.${selectedItems.length}`;
    }
    return buttonLabel;
  };

  render() {
    const {
      search,
      optionsCache,
      selectedItems,
      menuIsOpen,
      showSelect,
      showInput,
      inputValue
    } = this.state;
    const { isMulti, isButton, buttonMaxWidth, buttonMinWidth } = this.props;
    let currentOptions = optionsCache[search] || initialCache;
    const options = this.normalizeOption([...currentOptions.options]);
    const selectProps = isMulti
      ? {
          onChange: this.onCheckboxClick,
          hideSelectedOptions: false,
          components: {
            Option: this.optionWithCheckBox,
            MultiValueContainer: this.handleDisplayValue,
            Menu: this.buildMenu,
            Control: this.handleControl
          },
          value: selectedItems,
          closeMenuOnSelect: false,
          controlShouldRenderValue: !showInput,
          menuIsOpen: menuIsOpen,
          isSearchable: showInput,
          autoFocus: showInput,
          onBlur: this.onDone,
          inputValue: inputValue
        }
      : {
          components: {
            Option: this.optionWithCheckBox,
            Control: this.handleControl,
            SingleValue: this.handleSingleValue,
            Menu: this.buildMenu
          },
          onChange: data => {
            this.setState({
              showInput: false,
              selectedItems: [data],
              menuIsOpen: false,
              showSelect: !isButton
            });
            this.props.onChange(data.value);
          },
          onBlur: () => {
            this.isBlurActive = true;
            this.setState({
              showInput: false,
              menuIsOpen: false,
              showSelect: !isButton
            });
          },
          autoFocus: showInput,
          backspaceRemovesValue: false,
          controlShouldRenderValue: !showInput,
          menuIsOpen: menuIsOpen
        };

    return (
      <div>
        {isButton && (
          <div
            ref={e => {
              if (e) {
                this.buttonRef = e;
              }
            }}
          >
            <Button
              type="secondary"
              onClick={this.toggleButton}
              style={{ maxWidth: buttonMaxWidth, minWidth: buttonMinWidth }}
            >
              {this.getButtonText()}
            </Button>
          </div>
        )}
        {showSelect && (
          <Select
            {...this.props}
            classNamePrefix={'mt-react-select'}
            onInputChange={this.onInputChange}
            options={options}
            onMenuOpen={this.onMenuOpen}
            autoload={false}
            onMenuScrollToBottom={this.onMenuScrollToBottom}
            {...selectProps}
          />
        )}
      </div>
    );
  }
}
