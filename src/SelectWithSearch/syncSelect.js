import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select, { components } from 'react-select';
import CheckBox from '../CheckBox';
import Button from '../Button';
import Icon from '../Icon';

const noop = () => undefined;

export default class SyncSelect extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
    defaultValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ]),
    isMulti: PropTypes.bool,
    onChange: PropTypes.func,
    isButton: PropTypes.bool,
    isDisabled: PropTypes.bool,
    buttonLabel: PropTypes.string,
    placeholder: PropTypes.string,
    buttonMaxWidth: PropTypes.string,
    buttonMinWidth: PropTypes.string,
    sortOptions: PropTypes.bool,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ])
  };

  static defaultProps = {
    buttonLabel: 'filter',
    onChange: noop,
    sortOptions: true
  };

  state = {
    options: this.props.options,
    selectedItems: [],
    menuIsOpen: false,
    showSelect: true,
    showInput: false,
    inputValue: ''
  };

  componentDidMount() {
    const { defaultValue, isButton, options, value } = this.props;
    if (isButton) {
      this.setState({ showSelect: false });
    }
    const newValue = value ? value : defaultValue;
    const selectedItems = this.getSelectedItemsFromValue(newValue);
    let sortedOptions = this.__sortOptions(options, selectedItems);
    sortedOptions = this.normalizeOption(sortedOptions);
    this.setState({ selectedItems, options: sortedOptions });
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  getSelectedItemsFromValue = value => {
    const { options } = this.props;
    const selectedItems = [];
    if (value) {
      if (Array.isArray(value)) {
        value.forEach(item => {
          const option = options.filter(option => option.value == item);
          selectedItems.push(...option);
        });
      } else {
        const option = options.filter(option => option.value == value);
        selectedItems.push(...option);
      }
    }
    return selectedItems;
  };

  handleClickOutside = event => {
    if (this.buttonRef && this.buttonRef.contains(event.target)) {
      this.isBlurActive = false;
    }
    if (this.iconRef && this.iconRef.contains(event.target)) {
      this.setState({ inputValue: '' });
      this.isIconClicked = true;
    }
  };

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  normalizeOption = sortedOptions => {
    const { isMulti } = this.props;
    if (!isMulti) {
      sortedOptions.unshift({ label: 'None', value: 'None' });
    }
    return sortedOptions;
  };

  isOptionsEqual = (prevOptions = [], newOptions = []) => {
    if (prevOptions.length != newOptions.length) return false;
    if (prevOptions.length) {
      prevOptions.forEach((option, index) => {
        if (option.value != newOptions[index].value) return false;
      });
    }
    return true;
  };
  componentWillReceiveProps(nextProps) {
    const { options, value } = this.props;
    if (
      value != nextProps.value ||
      !this.isOptionsEqual(options, nextProps.options)
    ) {
      let selectedItems = [];
      if (value) {
        selectedItems = this.getSelectedItemsFromValue(nextProps.value);
      }
      let sortedOptions = this.__sortOptions(nextProps.options, selectedItems);
      sortedOptions = this.normalizeOption(sortedOptions);
      this.setState({ options: sortedOptions, selectedItems });
    }
  }

  __sortOptions = (options, selectedItems = []) => {
    const { sortOptions } = this.props;
    if (!sortOptions) return options;
    const optionsToSort = options.filter(option => {
      return selectedItems.indexOf(option) < 0;
    });
    optionsToSort.sort((item1, item2) => {
      return item1.label > item2.label;
    });
    const sortedOptions = [...selectedItems, ...optionsToSort];
    return sortedOptions;
  };

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
    if (this.isIconClicked) {
      this.isIconClicked = false;
      return;
    }
    this.isBlurActive = true;
    const { selectedItems, options } = this.state;
    const { onChange } = this.props;
    const selectedValues = selectedItems.map(selectedItem => {
      return selectedItem.value;
    });
    onChange(selectedValues);
    const sortedOptions = this.__sortOptions(options, selectedItems);
    let newState = this.getNewStateAfterOnSelect();
    newState.options = sortedOptions;
    this.setState({ ...newState });
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
        <div className="selectedItem clearfix" key="dipslayValue">
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
        <CheckBox
          disabled={data.disabled}
          checked={selectedItems.map(i => i.value).includes(data.value)}
        />
        <span className="dataLabel">{data.label}</span>
      </div>
    ) : null;
  };

  buildMenu = props => {
    const { selectedItems } = this.state;
    return (
      <components.Menu {...props}>
        {props.children}
        <div className="componentWrapper">
          <div className="buttonWrapperL">
            <Button type="text" onClick={this.onClearAll}>
              {'Clear All'}
            </Button>
          </div>
          <div className="buttonWrapperR">
            <Button type="text" onClick={this.handleMultiOnSelect}>
              <span className="marginR5"> Done</span>
              {`${selectedItems.length ? `(${selectedItems.length})` : ''}`}
            </Button>
          </div>
        </div>
      </components.Menu>
    );
  };

  handleControl = arg => {
    const { inputValue, showInput } = this.state;
    const { isDisabled } = this.props;
    return (
      <div className="selectBoxWrapper">
        <div
          className={showInput ? 'activeSearch' : ''}
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
              onClick={() => this.setState({ inputValue: '' })}
            />
          </div>
        </div>
      </div>
    );
  };

  onInputChange = (input, event) => {
    if (event.action == 'input-change') this.setState({ inputValue: input });
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
    onChange(data.value);
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

  render() {
    const { isMulti, isButton, buttonMaxWidth, buttonMinWidth } = this.props;
    const {
      options,
      selectedItems,
      menuIsOpen,
      showSelect,
      showInput,
      inputValue
    } = this.state;
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
          autosize: false,
          onBlur: this.handleMultiOnSelect,
          inputValue: inputValue,
          onInputChange: this.onInputChange
        }
      : {
          components: {
            Option: this.optionWithCheckBox,
            Control: this.handleControl,
            SingleValue: this.handleSingleValue
          },
          onChange: this.handleSingleOnSelect,
          onBlur: this.handleSingleOnBlur,
          autoFocus: showInput,
          isFocused: true,
          backspaceRemovesValue: false,
          inputValue: inputValue,
          onInputChange: this.onInputChange,
          controlShouldRenderValue: !showInput,
          menuIsOpen: menuIsOpen,
          value: selectedItems[0]
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
            styles={{
              container: () => ({
                width: '200px',
                position: 'absolute'
              })
            }}
            {...this.props}
            options={options}
            classNamePrefix={'mt-react-select'}
            {...selectProps}
          />
        )}
      </div>
    );
  }
}
