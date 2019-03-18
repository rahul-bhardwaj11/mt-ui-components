import styled from 'styled-components';
import theme from '../styles/theme';
import mixins from '../styles/mixins';

const MTPDFPlayer = styled.div`
  .uploaderHeader {
    ${mixins.clearfix()};
    height: 48px;
    line-height: 48px;
    padding: 6px 20px;
    border: 1px solid ${theme.colors.ALTO};
    border-bottom: none;
    border-radius: 3px 3px 0 0;
  }
  .inputTitle {
    width: 260px;
    :focus {
      box-shadow: none;
    }
  }
  .editMode {
    float: left;
    line-height: 32px;
    ${mixins.clearfix()};
  }
  .replaceModeIcon {
    float: right;
    line-height: 32px;
    display: block;
  }
  .titleText {
    color: ${theme.colors.DARK_OUTER_SPACE};
    font-size: 14px;
  }
  .inputBox,
  .tagBox {
    float: left;
  }
  .saveTag {
    margin-left: 24px;
  }
`;

export default MTPDFPlayer;
