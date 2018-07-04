import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from "../Button";
import Link from "../Link";
import style from "./index.scss";

class ConfirmBox extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    style: PropTypes.object
  };

  render() {
      let {title, children} = this.props;
      return (
          <div className="confirmBoxWrapper">
            <h2>{title}</h2>
            <div className="actionButtons">
              <Button type="link">Cancel</Button>
              <Button type="primary">Delete</Button>
            </div>
            {children}
          </div>
      );
  }
}
export default ConfirmBox;
