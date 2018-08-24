import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntCard from 'antd/lib/card';
import 'antd/lib/card/style/index.css';
import styled from 'styled-components';

const MtCard = styled.div`
  .ant-card-body {
    padding: 24px;
  }
  .ant-card-bordered {
    border: 1px solid transparent;
    border-radius: 8px;
  }
`;

class Card extends Component {
  static propTypes = {
    children: PropTypes.node
  };
  render() {
    const { children } = this.props;
    return (
      <MtCard>
        <AntCard>{children}</AntCard>
      </MtCard>
    );
  }
}
export default Card;
