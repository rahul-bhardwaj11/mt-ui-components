import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Truncate from 'react-truncate';
import mixins from '../styles/mixins';

const MTReadMore = styled.div`
  .viewMore,
  .viewLess {
    margin: 10px 0px;
    display: block;
    ${mixins.actionLink()};
  }
`;

class ReadMore extends Component {
  constructor() {
    super();

    this.state = {
      expanded: false,
      truncated: false
    };

    this.handleTruncate = this.handleTruncate.bind(this);
    this.toggleLines = this.toggleLines.bind(this);
  }

  handleTruncate(truncated) {
    if (this.state.truncated !== truncated) {
      this.setState({
        truncated
      });
    }
  }

  toggleLines(event) {
    event.preventDefault();

    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    const { children, moreText, lessText, lines } = this.props;

    const { expanded, truncated } = this.state;

    return (
      <MTReadMore>
        <Truncate
          lines={!expanded && lines}
          ellipsis={[
            <span key="3dot">...</span>,
            <div className="viewMore" key="view_more">
              <a onClick={this.toggleLines}>{moreText}</a>
            </div>
          ]}
          onTruncate={this.handleTruncate}
        >
          {children}
        </Truncate>
        {!truncated &&
          expanded && (
            <span className="viewLess">
              <a onClick={this.toggleLines}> {lessText}</a>
            </span>
          )}
      </MTReadMore>
    );
  }
}

ReadMore.defaultProps = {
  lines: 3,
  moreText: 'Read More',
  lessText: 'Read Less'
};

ReadMore.propTypes = {
  children: PropTypes.node.isRequired,
  lines: PropTypes.number,
  moreText: PropTypes.string,
  lessText: PropTypes.string
};

export default ReadMore;
