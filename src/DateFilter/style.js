import styled from 'styled-components';
import theme from '../styles/theme';

const DateFilterStyle = styled.div`
  .dateInput {
    position: relative;
    min-width: 180px;
    padding: 6px 12px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 12px;
    &.dateNotSelected {
      border: 1px solid ${theme.colors.SILVER};
    }
    &.dateSelected {
      font-weight: 600;
      color: ${theme.colors.INDIGO};
      background-color: ${theme.colors.TROPICAL_BLUE};
      border: 1px solid ${theme.colors.OCEAN};
      .dateCaret {
        color: ${theme.colors.INDIGO};
      }
    }
    &.dropdownOpen {
      .datePlaceholder {
        color: ${theme.colors.SILVER};
      }
      .dateCaret {
        color: ${theme.colors.DARK_OUTER_SPACE};
      }
    }
  }
  .dateRangeDropdown {
    top: 40px !important;
    left: 0 !important;
  }
  .dateCaret {
    padding: 4px 0;
    margin-left: 10px;
    float: right;
    color: ${theme.colors.SILVER};
    font-size: 10px;
  }
  .ant-calendar-input-wrap {
    display: none;
  }

  .ant-calendar-selected-date,
  .ant-calendar-selected-start-date,
  .ant-calendar-selected-end-date {
    .ant-calendar-date {
      background: ${theme.colors.INDIGO};
      &:hover {
        background: ${theme.colors.INDIGO};
      }
    }
  }
  .ant-calendar-range .ant-calendar-in-range-cell:before {
    background: ${theme.colors.PORCELAIN};
  }
`;

export default DateFilterStyle;
