import styled from 'styled-components';
import mixins from '../styles/mixins.js';
import theme from '../styles/theme';

const StyledLoader = styled.div`
  &.fullPageloadingScreen {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    background: #fff;
    &.loader {
      p {
        font-size: 14px;
      }
    }
  }
  &.smallPageLoadingScreen {
    &.loader {
      p {
        font-size: 14px;
      }
    }
  }
  &.smallPageLoadingScreen,
  &.fullPageloadingScreen {
    padding: 2%;
    //@include z-index(loader);
    &.loader {
      text-align: center;
      .spinner {
      }
    }
    .loadingHeading {
      text-align: center;
      color: #000;
      font-size: 20px;
      line-height: 30px;
      font-weight: 700;
    }
  }

  .spinner {
    &.centerDiv {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      bottom: auto;
      right: auto;
      position: absolute;
    }
    text-align: center;
    display: inline-block;
    position: relative;
    &.xsmall {
      width: 30px;
      height: 30px;
    }
    &.small {
      width: 40px;
      height: 40px;
    }
    &.big {
      width: 64px;
      height: 64px;
    }
  }

  .spinner div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    margin: 6px;
    border: 6px solid #fff;
    border-radius: 50%;
    animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${theme.colors.INDIGO} transparent transparent transparent;
    &.xsmall {
      ${mixins.square('16px')};
    }
    &.small {
      ${mixins.square('18px')};
    }
    &.big {
      ${mixins.square('24px')};
    }
  }

  .spinner {
    &.xsmall {
      div {
        ${mixins.square('16px')};
        border-width: 2px;
      }
    }
    &.small {
      div {
        ${mixins.square('30px')};
        border-width: 2px;
      }
    }
    &.big {
      div {
        ${mixins.square('51px')};
        border-width: 3px;
      }
    }
  }

  .spinner div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .spinner div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .spinner div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default StyledLoader;
