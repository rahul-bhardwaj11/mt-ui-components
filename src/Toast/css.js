import styled from 'styled-components';
import theme from '../styles/theme';
import mixins from '../styles/mixins';
const StyledToast = styled.div`

  .toast {
    opacity: 0;
    border-radius: 4px;
    text-align: center;
    transition: opacity;
    transition-timing-function: ease;
    padding: 7px 24px 8px 24px;
    &.show {
      opacity: 1;
    }
    &.toast-info {
      background-color: #5DC778;
    }
    &.toast-success {
      background-color: #5DC778;
    }
    &.toast-warning {
      background-color: ${theme.colors.BITTERSWEET};
    }
    &.toast-error {
      background-color: ${theme.colors.BITTERSWEET};
      float: left;
    }
    &.toast-loading {
      background-color: ${theme.colors.SHARK};
    }
    .toastMessage {
      ${mixins.whiteText()};
    }
  }

  .toastReloadBtn {
    padding: 6px 24px 7px 24px;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid ${theme.colors.ALTO};
    background-color: ${theme.colors.WHITE};
  }

  @-webkit-keyframes fadein {
    from {
      top: -30px;
      opacity: 0;
    }
    to {
      top: 0px;
      opacity: 1;
    }
  }

  @keyframes fadein {
    from {
      top: -30px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeout {
    from {
      top: 0px;
      opacity: 1;
    }
    to {
      top: -30px;
      opacity: 0;
    }
  }

  @keyframes fadeout {
    from {
      top: 0;
      opacity: 1;
    }
    to {
      top: -30px;
      opacity: 0;
    }
  }
}
`;

export default StyledToast;
