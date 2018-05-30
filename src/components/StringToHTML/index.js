import React, { Component } from "react";

class StringToHTML extends React.Component {
  render() {
    let { content } = this.props;
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  }
}

export default StringToHTML;
