import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
const AntTextArea = Input.TextArea;
import 'antd/lib/input/style/index.css'
import styled from 'styled-components'

const MtTextArea = styled.div`
display: inline;
`
// const { TextArea } = Input;
class TextArea extends Component {
  static propTypes = {
    placeholder: PropTypes.string
  };

  static defaultProps = {
    placeholder: "Enter the scenario description. Example: Record a video directly on MindTickle or upload a pre-recorded video.",
  };

  render() {
      return (
        <MtTextArea>
          <AntTextArea {...this.props} />
        </MtTextArea>
    )
  }
}

export default TextArea;
