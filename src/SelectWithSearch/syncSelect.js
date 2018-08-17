import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select, { components } from 'react-select';
import CheckBox from '../CheckBox';
import Button from '../Button';

const noop = () => undefined;

export default class SyncSelect extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
    defaultValue: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    isMulti: PropTypes.bool,
    onChange: PropTypes.func,
    initialType: PropTypes.string,
    filterLabel: PropTypes.string
  };

  static defaultProps = {
    initialType: 'select',
    filterLabel: 'filter',
    onChange: noop
  };

  state = {
    options: this.props.options,
    selectedItems: [],
    showSelectedValues: true,
    menuIsOpen: false,
    showButton: false,
    showInput: false
  };

  componentWillMount() {
    const { defaultValue, initialType, options } = this.props;
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
    const sortedOptions = this.__sortOptions(selectedItems, options);
    this.setState({ selectedItems, options: sortedOptions });
  }

  __sortOptions = (selectedItems, options) => {
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
    if (data) this.setState({ selectedItems: data });
  };

  onClearAll = () => {
    const selectedItems = [];
    this.setState({ selectedItems });
  };

  onDone = () => {
    const { selectedItems, options } = this.state;
    const selectedValues = selectedItems.map(selectedItem => {
      return selectedItem.value;
    });
    this.props.onChange(selectedValues);
    if (this.props.initialType == 'button') {
      this.toggleButton();
    }
    const sortedOptions = this.__sortOptions(selectedItems, options);
    const newState = {
      options: sortedOptions,
      menuIsOpen: false,
      showInput: false,
      showSelectedValues: true
    };
    this.setState({ ...newState });
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
    const { filterLabel } = this.props;
    if (selectedItems.length) {
      return `${filterLabel}.${selectedItems.length}`;
    }
    return filterLabel;
  };

  render() {
    const { isMulti } = this.props;
    const {
      options,
      selectedItems,
      showSelectedValues,
      menuIsOpen,
      showButton,
      showInput
    } = this.state;
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
          autofocus={true}
          options={options}
          classNamePrefix={'mt-react-select'}
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
        options={options}
        classNamePrefix={'mt-react-select'}
      />
    );
  }
}
