import React, { Component } from "react";
import PropTypes from "prop-types";
import AntBadge from "antd/lib/badge";
import "antd/lib/badge/style/index.css";
import styled from "styled-components";
import theme from "../styles/theme";

const BADGE_TYPES = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning"
};

const BADGE_COLOR_TYPE_MAP = {
  [BADGE_TYPES.SUCCESS]: `${theme.colors.PASTEL_GREEN}`,
  [BADGE_TYPES.ERROR]: `${theme.colors.BITTERSWEET}`,
  [BADGE_TYPES.WARNING]: `${theme.colors.KOROMIKO}`
};

const MtBadge = styled.span`
  .ant-badge-dot {
    top: -2px;
    right: 7px;
    height: 10px;
    width: 10px;
    background-color: ${props => BADGE_COLOR_TYPE_MAP[props.type]};
    position: absolute;
    z-index: 0;
    box-shadow: none;
  }
`;

class Badge extends Component {
  static propTypes = {
    children: PropTypes.node,
    type: PropTypes.oneOf(Object.values(BADGE_TYPES)).isRequired
  };

  render() {
    const { children, type } = this.props;
    return (
      <MtBadge type={type}>
        <AntBadge {...this.props}>{children}</AntBadge>
      </MtBadge>
    );
  }
}

export default Badge;
