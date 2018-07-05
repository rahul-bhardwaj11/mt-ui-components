import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import styled from 'styled-components';

const MtConfirmBox = styled.div`
  .actionButtons {
    text-align: right;
    margin-top: 25px;
    div {
      display: inline-block;
    }
  }
  h2 {
    color: #2a2e36;
    font-size: 14px;
    font-weight: 600;
    text-align: left;
  }
`;

class ConfirmBox extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    style: PropTypes.object
  };

  render() {
    let { title, children } = this.props;
    return (
      <MtConfirmBox>
        <h2>{title}</h2>
        <div className="actionButtons">
          <Button type="link">Cancel</Button>
          <Button type="primary">Delete</Button>
        </div>
        {children}
      </MtConfirmBox>
    );
  }
}
export default ConfirmBox;
