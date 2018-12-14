import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//import Truncate from "react-truncate";
import mixins from '../styles/mixins';
import TruncateHTML from './truncate-html';

const MTReadMore = styled.div`
  line-height: initial;
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
    const {
      showViewMore,
      moreText,
      lessText,
      lines,
      className,
      html
    } = this.props;
    const { expanded, truncated } = this.state;

    return (
      <MTReadMore className={className}>
        {!expanded && (
          <TruncateHTML
            lines={lines}
            html={html}
            onTruncate={this.handleTruncate}
          />
        )}
        {expanded && <span dangerouslySetInnerHTML={{ __html: html }} />}
        {showViewMore &&
          truncated &&
          !expanded && (
            <div className="viewMore" key="view_more">
              <a onClick={this.toggleLines}>{moreText}</a>
            </div>
          )}
        {expanded &&
          showViewMore && (
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
  lessText: 'Read Less',
  showViewMore: true
};

ReadMore.propTypes = {
  lines: PropTypes.number,
  moreText: PropTypes.string,
  lessText: PropTypes.string,
  showViewMore: PropTypes.bool,
  className: PropTypes.string,
  html: PropTypes.string
};

export default ReadMore;
