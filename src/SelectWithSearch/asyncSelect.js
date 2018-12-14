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
    defaultValue: PropTypes.oneOfType([
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string
      }),
      PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string,
          value: PropTypes.string
        })
      )
    ]),
    isMulti: PropTypes.bool,
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    hideFooter: PropTypes.bool,
    persistOpen: PropTypes.bool,
    isButton: PropTypes.bool,
    isDisabled: PropTypes.bool,
    buttonLabel: PropTypes.string,
    placeholder: PropTypes.string,
    buttonMaxWidth: PropTypes.string,
    buttonMinWidth: PropTypes.string,
    sortOptions: PropTypes.bool,
    value: PropTypes.oneOfType([
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string
      }),
      PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string,
          value: PropTypes.string
        })
      )
    ]),
    style: PropTypes.object,
    optionRenderer: PropTypes.func
  };

  static defaultProps = {
    cacheUniq: null,
    pageSize: 15,
    isButton: false,
    buttonLabel: 'filter',
    onSelect: () => {},
    persistOpen: false,
    hideFooter: false
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
    const openState = props.persistOpen
      ? {
          menuIsOpen: true,
          showSelect: true,
          showInput: true
        }
      : {
          menuIsOpen: false,
          showSelect: true,
          showInput: false
        };
    this.state = {
      search: '',
      optionsCache: initialOptionsCache,
      selectedItems: [],
      prevSelectedItems: [],
      inputValue: '',
      ...openState
    };
  }

  componentDidUpdate(oldProps) {
    const { cacheUniq } = this.props;

    if (oldProps.cacheUniq !== cacheUniq) {
      this.setState(
        {
          optionsCache: {}
        },
        () => {
          this.loadOptions();
        }
      );
    }
  }

  onInputChange = (search, event) => {
    if (event.action == 'input-change') {
      this.setState(
        {
          inputValue: search,
          search
        },
        () => {
          const { optionsCache } = this.state;
          if (!optionsCache[search]) {
            this.loadOptions();
          }
        }
      );
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

      const { options = [], hasMore } = await loadOptions(
        search,
        currentOptions.options
      );
      let uniqueOptions = [];
      options.length &&
        options.forEach(option => {
          if (
            !currentOptions.options.some(
              currOption => option.value == currOption.value
            )
          ) {
            uniqueOptions.push(option);
          }
        });

      await this.setState(prevState => ({
        optionsCache: {
          ...prevState.optionsCache,
          [search]: {
            ...currentOptions,
            options: currentOptions.options.concat(uniqueOptions),
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
    //const { sortOptions } = this.props;
    //if (!sortOptions) return options;
    const optionsThatAreNotSelected = options.filter(option => {
      return !selectedItems.some(
        currOption => option.value == currOption.value
      );
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
    const { defaultValue, isButton, value } = this.props;
    const { optionsCache, search } = this.state;
    const currentOptions = optionsCache[search] || initialCache;
    if (isButton) {
      this.setState({ showSelect: false });
    }
    const newValue = value ? value : defaultValue;
    const selectedItems = this.getSelectedItemsFromValue(newValue);

    const arrangedOptions = this.__arrangeOptions(
      selectedItems,
      currentOptions.options
    );
    await this.setState(prevState => ({
      selectedItems,
      prevSelectedItems: selectedItems,
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

  getSelectedItemsFromValue = value => {
    if (!value) {
      return [];
    }
    return Array.isArray(value) ? value : [value];
    // const { search, optionsCache } = this.state;
    // const currentOptions = optionsCache[search] || initialCache;
    // const options = this.normalizeOption([...currentOptions.options]);
    // const selectedItems = [];
    // if (value) {
    //   if (Array.isArray(value)) {
    //     value.forEach(item => {
    //       const option = options.filter(option => option.value == item.value);
    //       selectedItems.push(...option);
    //     });
    //   } else {
    //     const option = options.filter(option => option.value == value.value);
    //     selectedItems.push(...option);
    //   }
    // }
    // return selectedItems;
  };

  componentWillReceiveProps(nextProps) {
    const { value } = this.props;
    if (value != nextProps.value) {
      let selectedItems = [];
      if (value) {
        selectedItems = this.getSelectedItemsFromValue(nextProps.value);
      }
      this.setState({ selectedItems });
    }
  }

  handleClickOutside = event => {
    if (this.buttonRef && this.buttonRef.contains(event.target)) {
      this.isBlurActive = false;
    }
    if (this.iconRef && this.iconRef.contains(event.target)) {
      this.setState({ inputValue: '', search: '' });
      this.isIconClicked = true;
    }
  };

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  onCheckboxClick = (data, event) => {
    if (event) {
      return;
    }
    const selectedItems = [...this.state.selectedItems];
    let index = selectedItems.indexOf(data);
    if (index < 0) {
      selectedItems.push(data);
    } else {
      selectedItems.splice(index, 1);
    }
    this.props.onSelect(selectedItems);
    this.setState({ selectedItems }, () => {
      if (this.props.persistOpen) {
        this.handleMultiOnSelect();
      }
      this.selectRef.focus();
      this.optionClicked = false;
    });
  };

  onClearAll = () => {
    const selectedItems = [];
    this.setState({ selectedItems });
  };

  getNewStateAfterOnSelect = () => {
    const { isButton } = this.props;
    let newState = {
      menuIsOpen: false,
      showInput: false,
      inputValue: ''
    };
    newState = isButton
      ? Object.assign(newState, { showSelect: false })
      : newState;
    return newState;
  };

  handleMultiOnSelect = () => {
    if (this.isIconClicked || this.optionClicked) {
      this.isIconClicked = false;
      this.optionClicked = false;
      return;
    }
    this.isBlurActive = true;
    const { selectedItems, optionsCache, prevSelectedItems } = this.state;
    const { isButton, onChange, persistOpen } = this.props;
    const options = optionsCache[''].options;
    let isSelectedItemsChange = false;
    if (selectedItems.length == prevSelectedItems.length) {
      for (let index = 0; index < selectedItems.length; index++) {
        if (selectedItems[index].value != prevSelectedItems[index].value) {
          isSelectedItemsChange = true;
          break;
        }
      }
    } else {
      isSelectedItemsChange = true;
    }
    if (isSelectedItemsChange) {
      onChange(selectedItems);
      this.setState({ prevSelectedItems: selectedItems });
    }

    const arrangedOptions = this.__arrangeOptions(selectedItems, options);
    this.setState(prevState => {
      let newState = {
        menuIsOpen: persistOpen ? true : false,
        showInput: persistOpen ? true : false,
        inputValue: '',
        search: '',
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
    let { selectedItems } = this.state;
    const { value, placeholder } = this.props;
    if (value) {
      selectedItems = this.getSelectedItemsFromValue(value);
    }
    if (!selectedItems.length) {
      selectedItems.push({ label: placeholder, value: 'None' });
    }
    if (data.value == selectedItems[0].value || value)
      return (
        <div className="selectedItem clearfix">
          <span className="selectedItemLabel floatL">{`${
            selectedItems[0].label
          }`}</span>
          <span className="floatL">{`${
            selectedItems.length > 1 ? `+${selectedItems.length - 1}` : ''
          }`}</span>
        </div>
      );
    return null;
  };

  handleSingleValue = props => {
    let { selectedItems } = this.state;
    const { value, placeholder } = this.props;
    if (value) {
      selectedItems = this.getSelectedItemsFromValue(value);
    }
    if (!selectedItems.length) {
      selectedItems.push({ label: placeholder, value: 'None' });
    }
    return (
      <components.SingleValue {...props}>
        {selectedItems[0].value == 'None'
          ? placeholder
          : selectedItems[0].label}
      </components.SingleValue>
    );
  };

  optionWithCheckBox = params => {
    const { isDisabled, data } = params;
    const { optionRenderer } = this.props;
    const { selectedItems } = this.state;
    if (!this.props.isMulti)
      return optionRenderer ? (
        <div
          title={data.label}
          onClick={() => {
            this.handleSingleOnSelect(data);
          }}
        >
          {optionRenderer(data)}
        </div>
      ) : (
        <div title={data.label}>
          <components.Option {...params} />
        </div>
      );
    return !isDisabled ? (
      <div
        onClick={() => {
          !data.disabled && this.onCheckboxClick(data);
        }}
        onMouseDown={() => {
          this.optionClicked = true;
        }}
        className="checkboxWrapper"
        title={data.label}
      >
        {optionRenderer ? (
          optionRenderer(data)
        ) : (
          <CheckBox
            disabled={data.disabled}
            checked={selectedItems.map(i => i.value).includes(data.value)}
          >
            {data.label}
          </CheckBox>
        )}
      </div>
    ) : null;
  };

  buildMenu = props => {
    const { selectedItems, search, optionsCache } = this.state;
    const isLoading = optionsCache[search] && optionsCache[search].isLoading;
    const { isMulti, hideFooter } = this.props;
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
        {isMulti &&
          !hideFooter && (
            <div className="componentWrapper">
              <div className="buttonWrapperL">
                <Button type="text" onClick={this.onClearAll}>
                  {'Clear All'}
                </Button>
              </div>

              <div className="buttonWrapperR">
                <Button
                  type="text"
                  onClick={this.handleMultiOnSelect}
                  className={selectedItems.length ? 'activeBtnState' : ' '}
                >
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
    const { isDisabled } = this.props;
    return (
      <div className="selectBoxWrapper">
        <div
          className={this.state.showInput ? 'activeSearch' : ''}
          onClick={() => {
            !isDisabled &&
              this.setState({
                menuIsOpen: true,
                showInput: true
              });
          }}
        >
          <components.Control {...arg} />
          <div
            className={inputValue.length ? 'activeInput' : ''}
            ref={e => {
              if (e) {
                this.iconRef = e;
              }
            }}
          >
            <Icon
              type="cross"
              onClick={() => {
                this.setState({ inputValue: '', search: '' });
              }}
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
    const { buttonLabel, value } = this.props;
    let { selectedItems } = this.state;
    if (value) {
      selectedItems = this.getSelectedItemsFromValue(value);
    }
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

  handleSingleOnSelect = data => {
    const { onChange } = this.props;
    let newState = this.getNewStateAfterOnSelect();
    newState.selectedItems = [data];
    this.setState({ ...newState });
    onChange(data);
  };
  handleSingleOnBlur = () => {
    if (this.isIconClicked) {
      this.isIconClicked = false;
      return;
    }
    this.isBlurActive = true;
    const newState = this.getNewStateAfterOnSelect();
    this.setState({ ...newState });
  };

  getStyle = () => {
    const { isButton, style: target = {} } = this.props;
    const DEFAULT_SELECT_STYLE = {
      container: base => ({
        ...base,
        width: '210px',
        position: isButton ? 'absolute' : 'inherit'
      })
    };
    const styles = { ...DEFAULT_SELECT_STYLE };
    Object.keys(target).forEach(key => {
      if (DEFAULT_SELECT_STYLE[key]) {
        styles[key] = (rsCss, props) => {
          return target[key](DEFAULT_SELECT_STYLE[key](rsCss, props), props);
        };
      } else {
        styles[key] = target[key];
      }
    });
    return styles;
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
          isFocused: true,
          onBlur: this.handleMultiOnSelect,
          inputValue: inputValue
        }
      : {
          components: {
            Option: this.optionWithCheckBox,
            Control: this.handleControl,
            SingleValue: this.handleSingleValue,
            Menu: this.buildMenu
          },
          onChange: this.handleSingleOnSelect,
          onBlur: this.handleSingleOnBlur,
          autoFocus: showInput,
          backspaceRemovesValue: false,
          controlShouldRenderValue: !showInput,
          menuIsOpen: menuIsOpen,
          inputValue: inputValue,
          value: selectedItems[0]
        };

    return (
      <React.Fragment>
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
              style={{
                maxWidth: buttonMaxWidth,
                minWidth: buttonMinWidth
              }}
              size="small"
            >
              {this.getButtonText()}
            </Button>
          </div>
        )}
        {showSelect && (
          <Select
            styles={this.getStyle()}
            {...this.props}
            ref={node => (this.selectRef = node)}
            classNamePrefix={'mt-react-select'}
            onInputChange={this.onInputChange}
            options={options}
            onMenuOpen={this.onMenuOpen}
            autoload={false}
            onMenuScrollToBottom={this.onMenuScrollToBottom}
            filterOption={() => true}
            {...selectProps}
            backspaceRemovesValue={false}
          />
        )}
      </React.Fragment>
    );
  }
}
