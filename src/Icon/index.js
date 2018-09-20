// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import classnames from 'classnames';

// const noop = () => undefined;
// export default class Icon extends Component {
//   static propTypes = {
//     type: PropTypes.string.isRequired,
//     className: PropTypes.string,
//     onClick: PropTypes.func
//   };
//   static defaultProps = {
//     onClick: noop
//   };
//   render() {
//     const { type, className, onClick } = this.props;
//     return (
//       <span
//         className={classnames(`icon-${type}`, className)}
//         onClick={onClick}
//       />
//     );
//   }
// }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import svgIcons from './svgIcons';
//import styles from "./index.scss";

const noop = () => undefined;
export default class Icon extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
    gradient: PropTypes.bool
  };
  static defaultProps = {
    onClick: noop,
    gradient: false
  };
  render() {
    const { type, className, onClick, gradient } = this.props;
    const style = gradient ? { ...style, ...svgIcons[type] } : style;
    return (
      <span
        className={classnames(
          {
            [`icon-${type}`]: !gradient
          },
          className
        )}
        style={style}
        onClick={onClick}
      />
    );
  }
}
