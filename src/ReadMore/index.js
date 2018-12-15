import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//import Truncate from "react-truncate";
import mixins from '../styles/mixins';
import trunc from 'trunc-html';

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
      expanded: false
    };
    this.toggleLines = this.toggleLines.bind(this);
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
      className,
      html,
      limit
    } = this.props;
    let truncated = false;
    let { expanded } = this.state;
    var truncateHTML = trunc(html, limit);
    if (truncateHTML.html.indexOf('…') > -1) {
      truncated = true;
    }

    return (
      <MTReadMore className={className}>
        {!expanded && (
          <span dangerouslySetInnerHTML={{ __html: truncateHTML.html }} />
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
  limit: 500,
  moreText: 'Read More',
  lessText: 'Read Less',
  showViewMore: true
};

ReadMore.propTypes = {
  limit: PropTypes.number,
  moreText: PropTypes.string,
  lessText: PropTypes.string,
  showViewMore: PropTypes.bool,
  className: PropTypes.string,
  html: PropTypes.string
};

export default ReadMore;
