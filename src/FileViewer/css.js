import styled from 'styled-components';
import theme from '../styles/theme';

export const UnsupportedFileViewer = styled.div`
  min-height: inherit;
  border: 1px solid ${theme.colors.PEARL};
  border-radius: 8px;
  position: relative;
  .Icon {
    top: 50%;
    display: block;
    position: absolute;
    left: 50%;
    font-size: 98px;
    transform: translate(-50%, -50%);
    color: ${theme.colors.ICON};
  }
`;
