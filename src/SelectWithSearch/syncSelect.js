import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select, { components } from 'react-select';
import CheckBox from '../CheckBox';
import Button from '../Button';
import Icon from '../Icon';
import classnames from 'classnames';

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
    ]),
    style: PropTypes.object,
    optionRenderer: PropTypes.func,
    showSearch: PropTypes.bool
  };

  static defaultProps = {
    buttonLabel: 'filter',
    onChange: noop,
    sortOptions: true,
    options: []
  };

  constructor(props) {
    super(props);
    this.state = {
      options: this.filterOptions(this.props.options),
      selectedItems: [],
      prevSelectedItems: [],
      menuIsOpen: false,
      showSelect: true,
      showInput: false,
      inputValue: ''
    };
  }

  filterOptions = options => options.filter(option => option.label);

  componentDidMount() {
    const { defaultValue, isButton, options, value } = this.props;
    if (isButton) {
      this.setState({ showSelect: false });
    }
    const newValue = value ? value : defaultValue;
    const selectedItems = this.getSelectedItemsFromValue(newValue);
    let sortedOptions = this.__sortOptions(options, selectedItems);
    sortedOptions = this.normalizeOption(sortedOptions);
    this.setState({
      selectedItems,
      options: sortedOptions,
      prevSelectedItems: selectedItems
    });
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
    if (this.selectRef && this.selectRef.contains(event.target)) {
      this.isBlurActive = false;
    }

    if (!this.selectRef.contains(event.target)) {
      if (
        (this.buttonRef && !this.buttonRef.contains(event.target)) ||
        !this.props.isButton
      )
        this.props.isMulti
          ? this.handleMultiOnSelect()
          : this.handleSingleOnBlur();
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
      return !selectedItems.some(
        currOption => option.value == currOption.value
      );
    });
    optionsToSort.sort((item1, item2) => {
      return item1.label > item2.label;
    });
    const sortedOptions = [...selectedItems, ...optionsToSort];
    return sortedOptions;
  };

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
    const { selectedItems, prevSelectedItems, options } = this.state;
    const { onChange } = this.props;
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
    const { optionRenderer } = this.props;
    const { selectedItems } = this.state;
    let checked = selectedItems.map(i => i.value).includes(data.value);
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
      <div className="checkboxWrapper" title={data.label}>
        {optionRenderer ? (
          <div
            onClick={() => {
              !data.disabled && this.onCheckboxClick(data);
            }}
          >
            {optionRenderer({ ...data, checked })}
          </div>
        ) : (
          <CheckBox
            disabled={data.disabled}
            checked={checked}
            className="labelText"
            onChange={() => {
              !data.disabled && this.onCheckboxClick(data);
            }}
          >
            {data.label}
          </CheckBox>
        )}
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
            <Button
              type="text"
              onClick={this.handleMultiOnSelect}
              className={selectedItems.length ? 'activeBtnState' : ' '}
            >
              {'Apply'}
              <span className="doneMarginR">
                {`${selectedItems.length ? `(${selectedItems.length})` : ''}`}
              </span>
            </Button>
          </div>
        </div>
      </components.Menu>
    );
  };

  handleControl = arg => {
    const { inputValue, showInput } = this.state;
    const { isDisabled, showSearch } = this.props;
    const controlProps = { ...arg };
    const openModal = () => {
      !isDisabled &&
        this.setState({
          menuIsOpen: true,
          showInput: true
        });
    };
    controlProps.innerProps = {
      ...arg.innerProps,
      onTouchEnd: openModal
    };
    return (
      showSearch && (
        <div className="selectBoxWrapper">
          <div className={showInput ? 'activeSearch' : ''} onClick={openModal}>
            <components.Control {...controlProps} />
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
      )
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
      return (
        <span className="selectWithSearchText">
          {buttonLabel}
          <Icon type="circle" className="discIcon" />
          {selectedItems.length}
        </span>
      );
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
        width: base.width ? base.width : '256px',
        minWidth: '256px',
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
              className={classnames(
                selectedItems.length > 0 ? 'selectedItems' : '',
                showSelect ? 'activeSelect' : ''
              )}
            >
              {this.getButtonText()}
            </Button>
          </div>
        )}
        {showSelect && (
          <div
            ref={e => {
              if (e) {
                this.selectRef = e;
              }
            }}
          >
            <Select
              styles={this.getStyle()}
              {...this.props}
              options={options}
              classNamePrefix={'mt-react-select'}
              {...selectProps}
              backspaceRemovesValue={false}
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}
