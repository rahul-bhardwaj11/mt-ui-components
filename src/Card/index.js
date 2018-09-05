import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntCard from 'antd/lib/card';
import styled from 'styled-components';
import 'antd/lib/card/style/index.css';

const MtCard = styled.div`
  .ant-card-bordered {
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    border: transparent;
  }
  .ant-card-wider-padding {
    .ant-card-body {
      padding: 24px;
    }
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
