import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntInput from 'antd/lib/input';
import 'antd/lib/input/style/index.css';
import theme from '../styles/theme';
import styled from 'styled-components';

const MtTextArea = styled.div`
  .ant-input {
    border: 1px solid ${theme.colors.ALTO};
    &:hover,
    &:active,
    &:focus {
      border: 1px solid ${theme.colors.SILVER};
    }

    &:active,
    &:focus {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
    }
  }
`;
class TextArea extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    placeholder: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || this.props.defaultValue
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
      <MtTextArea>
        <AntInput.TextArea
          {...this.props}
          value={value}
          onChange={this.onChange}
        />
      </MtTextArea>
    );
  }
}
export default TextArea;
