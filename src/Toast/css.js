<<<<<<< HEAD
import styled from "styled-components";
=======
import styled from 'styled-components';
import theme from '../styles/theme';
import mixins from '../styles/mixins';
>>>>>>> ebc79d918199d9f406f15732bb676870b779aa24
const StyledToast = styled.div`
  .toast {
<<<<<<< HEAD
    width: 100%;
    height: 50px;
    border-radius: 0px;
    padding: 10px 20px;
    line-height: 30px;
    position: fixed;
    font-size: 14px;
    top: 0;
    left: 0;
    opacity: 0;
    // visibility: hidden;
    transition: opacity;
    transition-timing-function: ease;
    z-index: z-index(toast);
  
    .toastReloadBtn {
      line-height: 28px;
      padding: 0px 30px;
      border: 1px solid #0072bc;
      border-radius: 100px;
      cursor: pointer;
      color: #0072bc;
      font-size: 13px;
    }
    &.show {
      opacity: 1;
    }
=======
    border-radius: 4px;
    text-align: center;
    padding: 7px 24px 8px 24px;
>>>>>>> ebc79d918199d9f406f15732bb676870b779aa24
    &.toast-info {
      background-color: #5dc778;
    }
    &.toast-success {
      background-color: #5dc778;
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
    ${mixins.darkText()};
    padding: 6px 24px 7px 24px;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid ${theme.colors.WHITE};
    background-color: ${theme.colors.WHITE};
  }
`;

export default StyledToast;
