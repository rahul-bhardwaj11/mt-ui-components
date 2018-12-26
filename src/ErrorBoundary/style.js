import Styled from 'styled-components';
import theme from '../styles/theme';
import mixins from '../styles/mixins';

const ErrorBoundaryWrapper = Styled.div`
  background: ${theme.colors.WHITE};
  text-align: center;
  height: 100vh;
  display: table;
  width: 100%;
.innerWrapperErrorBoundary{
  display: table-cell;
  vertical-align: middle;
}
  .subErrorText {
  ${mixins.h2()};
  margin: 24px 0 24px;
  }
}
`;

export default ErrorBoundaryWrapper;
