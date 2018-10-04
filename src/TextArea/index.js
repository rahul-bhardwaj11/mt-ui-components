import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntInput from 'antd/lib/input';
import 'antd/lib/input/style/index.css';

class TextArea extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    placeholder: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }

  onChange = event => {
    const { onChange } = this.props;
    const value = event.target.value;
    this.setState({ value });
    onChange(event, value);
  };

  componentWillReceiveProps(newProps) {
    const { value } = this.props;
    let { value: newValue } = newProps;
    if (newValue !== value) {
      this.setState({ value: newValue });
    }
  }

  render() {
    const { value } = this.state;
    return (
      <AntInput.TextArea
        {...this.props}
        value={value}
        onChange={this.onChange}
      />
    );
  }
}
export default TextArea;
