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
    isButton: PropTypes.bool,
    buttonLabel: PropTypes.string
  };

  static defaultProps = {
    buttonLabel: 'filter',
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
    const { defaultValue, isButton, options } = this.props;
    if (isButton) {
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
    const { selectedItems, options } = this.state;
    const selectedValues = selectedItems.map(selectedItem => {
      return selectedItem.value;
    });
    this.props.onChange(selectedValues);
    if (this.props.isButton) {
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
        <div className="selectedItem paddingL30">{`${data.label}${
          selectedItems.length > 1 ? `+${selectedItems.length - 1}` : ''
        }`}</div>
      );
    return null;
  };

  optionWithCheckBox = ({ isDisabled, data }) => {
    const { selectedItems } = this.state;
    return !isDisabled ? (
      <div onClick={() => this.onCheckboxClick(data)} className="marginB5">
        <CheckBox checked={selectedItems.indexOf(data) > -1} />
        <span className="dataLabel">{data.label}</span>
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
          <div className="clearfix paddingB15 paddingT15">
            <div className="floatL">
              <Button type="text" onClick={this.onClearAll}>
                {'Clear All'}
              </Button>
            </div>
            <div className="floatR">
              <Button type="text" onClick={this.onDone}>
                {`Done${
                  selectedItems.length ? `(${selectedItems.length})` : ''
                }`}
              </Button>
            </div>
          </div>
        </components.Menu>
      </div>
    );
  };

  handleControl = arg => {
    return (
      <div
        onClick={() => {
          this.setState({
            menuIsOpen: true,
            showInput: true,
            showSelectedValues: false
          });
        }}
      >
        <components.Control {...arg} />
      </div>
    );
  };

  getButtonText = () => {
    const { selectedItems } = this.state;
    const { buttonLabel } = this.props;
    const selectedItemsLength = selectedItems.length;
    if (selectedItemsLength) {
      if (selectedItemsLength == 1) return `${selectedItems[0].label}`;
      return `${buttonLabel}.${selectedItems.length}`;
    }
    return buttonLabel;
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
    const multiProps = isMulti
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
          controlShouldRenderValue: showSelectedValues,
          menuIsOpen: menuIsOpen,
          isSearchable: showInput,
          autoFocus: showInput,
          onBlur: this.onDone
        }
      : {};

    if (showButton) {
      return (
        <Button onClick={this.toggleButton} type="primary">
          {this.getButtonText()}
        </Button>
      );
    }
    return (
      <Select
        {...this.props}
        options={options}
        classNamePrefix={'mt-react-select'}
        {...multiProps}
      />
    );
  }
}
