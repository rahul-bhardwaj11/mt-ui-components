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
    defaultValue: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    isMulti: PropTypes.bool,
    onChange: PropTypes.func,
    isButton: PropTypes.bool,
    buttonLabel: PropTypes.string,
    placeholder: PropTypes.string
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
    showSelect: true,
    showInput: false,
    inputValue: ''
  };

  componentDidMount() {
    const { defaultValue, isButton, options } = this.props;
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
    let sortedOptions = this.__sortOptions(options, selectedItems);
    sortedOptions = this.normalizeOption(sortedOptions);
    this.setState({ selectedItems, options: sortedOptions });
  }

  normalizeOption = sortedOptions => {
    const { isMulti } = this.props;
    if (!isMulti) {
      sortedOptions.unshift({ label: 'None', value: 'None' });
    }
    return sortedOptions;
  };
  componentWillReceiveProps(nextProps) {
    if (this.props.options != nextProps.options) {
      let sortedOptions = this.__sortOptions(nextProps.options);
      sortedOptions = this.normalizeOption(sortedOptions);
      this.setState({ options: sortedOptions });
    }
  }

  __sortOptions = (options, selectedItems = []) => {
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
    this.blur = true;
    const { selectedItems, options } = this.state;
    const { isButton, onChange } = this.props;
    const selectedValues = selectedItems.map(selectedItem => {
      return selectedItem.value;
    });
    onChange(selectedValues);
    const sortedOptions = this.__sortOptions(options, selectedItems);
    let newState = {
      options: sortedOptions,
      menuIsOpen: false,
      showInput: false,
      showSelectedValues: true,
      inputValue: ''
    };
    newState = isButton
      ? Object.assign(newState, { showSelect: false })
      : newState;
    this.setState({ ...newState });
  };

  toggleButton = () => {
    if (this.blur) {
      this.blur = false;
      return;
    }
    this.setState(prevState => ({
      showSelect: !prevState.showSelect,
      menuIsOpen: !prevState.menuIsOpen,
      showSelectedValues: !prevState.showSelectedValues,
      showInput: !prevState.showInput
    }));
  };

  handleDisplayValue = ({ data }) => {
    const { selectedItems } = this.state;
    if (data.value == selectedItems[0].value)
      return (
        <div className="selectedItem">{`${data.label}${
          selectedItems.length > 1 ? `+${selectedItems.length - 1}` : ''
        }`}</div>
      );
    return null;
  };

  handleSingleValue = ({ data }) => {
    if (data.value == 'None')
      return (
        <div className="selectedSingleValue">{this.props.placeholder}</div>
      );
    return <div className="selectedSingleValue">{data.label}</div>;
  };

  optionWithCheckBox = ({ isDisabled, data }) => {
    const { selectedItems } = this.state;
    return !isDisabled ? (
      <div
        onClick={() => this.onCheckboxClick(data)}
        className="checkboxWrapper"
      >
        <CheckBox checked={selectedItems.indexOf(data) > -1} />
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
            <Button type="text" onClick={this.onDone}>
              <span className="marginR5"> Done</span>
              {`${selectedItems.length ? `(${selectedItems.length})` : ''}`}
            </Button>
          </div>
        </div>
      </components.Menu>
    );
  };

  handleControl = arg => {
    return (
      <div className="selectBoxWrapper">
        <div
          className={this.state.showInput ? 'activeSearch' : ''}
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
      </div>
    );
  };

  handleInput = props => {
    if (props.isHidden) {
      return <components.Input {...props} />;
    }
    return (
      <div className={props.value.length ? 'activeInput' : ''}>
        <components.Input {...props} />
        <Icon type="Cancel" onClick={() => this.setState({ inputValue: '' })} />
      </div>
    );
  };

  onInputChange = (input, event) => {
    if (event.action == 'input-change') this.setState({ inputValue: input });
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
    const { isMulti, isButton } = this.props;
    const {
      options,
      selectedItems,
      showSelectedValues,
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
            Control: this.handleControl,
            Input: this.handleInput
          },
          value: selectedItems,
          closeMenuOnSelect: false,
          controlShouldRenderValue: showSelectedValues,
          menuIsOpen: menuIsOpen,
          isSearchable: showInput,
          autoFocus: showInput,
          onBlur: this.onDone,
          inputValue: inputValue,
          onInputChange: this.onInputChange
        }
      : {
          components: {
            Control: this.handleControl,
            Input: this.handleInput,
            SingleValue: this.handleSingleValue
          },
          onChange: value => {
            this.setState({ showInput: false });
            this.props.onChange(value);
          },
          onBlur: () => this.setState({ showInput: false }),
          backspaceRemovesValue: false
        };

    return (
      <div>
        {isButton && (
          <Button type="secondary" onClick={this.toggleButton}>
            {this.getButtonText()}
          </Button>
        )}
        {showSelect && (
          <Select
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
