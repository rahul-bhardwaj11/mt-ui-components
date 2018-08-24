import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Truncate from 'react-truncate';
import { FormattedMessage } from 'react-intl';

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
    const { children, more, less, lines } = this.props;

    const { expanded, truncated } = this.state;

    return (
      <div style={{ 'font-family': 'Open sans' }}>
        <Truncate
          lines={!expanded && lines}
          ellipsis={[
            <span key="3dot">...</span>,
            <div className="viewMore" key="view_more">
              <a onClick={this.toggleLines}>{more}</a>
            </div>
          ]}
          onTruncate={this.handleTruncate}
        >
          {children}
        </Truncate>
        {!truncated &&
          expanded && (
            <span className="viewLess">
              <a onClick={this.toggleLines}> {less}</a>
            </span>
          )}
      </div>
    );
  }
}

ReadMore.defaultProps = {
  lines: 3,
  more: <FormattedMessage id="RM_VIEW_MORE" />,
  less: <FormattedMessage id="RM_VIEW_LESS" />
};

ReadMore.propTypes = {
  children: PropTypes.node.isRequired,
  lines: PropTypes.number,
  more: PropTypes.node,
  less: PropTypes.node
};

export default ReadMore;
