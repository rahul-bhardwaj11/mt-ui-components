import React from 'react';
import PropTypes from 'prop-types';
import TagsInput from 'react-tagsinput';

import 'react-tagsinput/react-tagsinput.css'; // If using WebPack and style-loader.

class AutoCompleteTag extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    tags: PropTypes.array
  };

  state = {
    tags: (this.props.tags.length && this.props.tags) || []
  };

  handleChange = tags => {
    this.setState({ tags });
    this.props.onChange(tags);
  };

  render() {
    return (
      <TagsInput
        {...this.props}
        value={this.state.tags}
        onChange={this.handleChange}
        onlyUnique={true}
      />
    );
  }
}

export default AutoCompleteTag;
