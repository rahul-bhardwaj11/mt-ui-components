import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Loader from "../Loader";
import {
  DEFAULT_HIDE_TIMER,
  ANIMATION_TRANSITION_DURATION,
  TOAST_REMOVE_TIME
} from "./constants";
import StyledToast from "./css";

export const TOAST_TYPES = ["success", "warning", "error", "info", "loading"];

const ReloadBtn = () => {
  return (
    <div
      className={classnames("floatR")}
      onClick={() => {
        window.location.href = window.location.href; // eslint-disable-line
      }}
    >
      <span className={classnames("floatR", "toastReloadBtn")}>Reload</span>
    </div>
  );
};

const HideBtn = ({ hide }) => {
  return (
    <div className={classnames("floatR", "link")} onClick={hide}>
      Hide
    </div>
  );
};

HideBtn.propTypes = {
  hide: PropTypes.func.isRequired
};

export default class Toast extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(TOAST_TYPES),
    hideBtn: PropTypes.bool,
    reloadBtn: PropTypes.bool,
    load: PropTypes.bool,
    freeze: PropTypes.bool,
    autoHide: PropTypes.bool,
    timeout: PropTypes.number,
    onHide: PropTypes.func
  };
  static defaultProps = {
    timeout: DEFAULT_HIDE_TIMER,
    autoHide: true,
    hideBtn: true,
    freeze: false,
    load: false
  };
  state = {
    timer: null
  };

  style = {
    transitionDuration: `${ANIMATION_TRANSITION_DURATION}ms`
  };

  removeToast = () => setTimeout(this.props.onHide, TOAST_REMOVE_TIME);

  stopTimer = () => {
    let { timer } = this.state;
    if (timer) {
      clearTimeout(timer);
      this.setState({ timer: null });
    }
  };

  hideToast = () => {
    this.stopTimer();
    this.removeToast();
  };

  startTimer = time => {
    let { timer } = this.state;
    this.stopTimer();
    timer = setTimeout(() => {
      this.setState({ timer: null });
      this.removeToast();
    }, time);
    this.setState({ timer });
  };

  handleTimer = props => {
    const { autoHide, freeze, timeout } = props;
    if (freeze) {
      this.stopTimer();
    } else if (autoHide) {
      this.startTimer(timeout);
    }
  };

  getClasses = () => {
    const { timer } = this.state;
    const { type, autoHide, freeze } = this.props;

    return classnames({
      toast: true,
      show: freeze || (autoHide && timer) || !autoHide,
      [`toast-${type}`]: true,
      clearfix: true
    });
  };

  componentWillReceiveProps(newProps) {
    this.handleTimer(newProps);
  }

  componentDidMount() {
    this.handleTimer(this.props);
  }

  render() {
    const { message, hideBtn, freeze, reloadBtn, load } = this.props;
    return (
      <StyledToast>
        <div className={this.getClasses()} style={this.style}>
          {load && (
            <Loader
              size="sizeXSmall"
              style={{ float: "left" }}
              vCenter={false}
            />
          )}
          <span className="floatL">{message}</span>
          <span>{hideBtn && !freeze && <HideBtn hide={this.hideToast} />}</span>
          <span>{freeze && reloadBtn && <ReloadBtn />}</span>
        </div>
        <div>{freeze && <div className="freezeScreen" />}</div>
      </StyledToast>
    );
  }
}
