import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//import Truncate from "react-truncate";
import mixins from '../styles/mixins';
import trunc from 'trunc-html';

const ALLOWED_HTML_TAGS = [
  'u',
  'a',
  'abbr',
  'article',
  'b',
  'blockquote',
  'br',
  'caption',
  'code',
  'del',
  'details',
  'div',
  'em',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'hr',
  'i',
  'img',
  'ins',
  'kbd',
  'li',
  'main',
  'mark',
  'ol',
  'p',
  'pre',
  'section',
  'span',
  'strike',
  'strong',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'th',
  'thead',
  'tr',
  'ul'
];

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
    var truncateHTML = trunc(html, limit, {
      sanitizer: {
        allowedTags: ALLOWED_HTML_TAGS
      }
    });
    const indexOf = truncateHTML.html.indexOf('…');
    if (indexOf > truncateHTML.html.length - 4) {
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
