'use strict';

var theme = require('./theme');

var mixins = {
  // button ----------//
  button: function button() {
    return '\n    font-size: 14px;\n    height: 32px;\n    font-weight: 500;\n  ';
  },
  primaryBtn: function primaryBtn() {
    return (
      '\n    border: 1px solid ' +
      theme.colors.INDIGO +
      ';\n    background-color: ' +
      theme.colors.INDIGO +
      ';\n  '
    );
  },

  primaryBtnHover: function primaryBtnHover() {
    return (
      '\n    border: 1px solid ' +
      theme.colors.JODHPUR +
      ';\n    background-color: ' +
      theme.colors.JODHPUR +
      ';\n  '
    );
  },

  textBtn: function textBtn() {
    return '\n    border: 1px dashed transparent;\n    background-color: transparent;\n  ';
  },

  fontStack: function fontStack(_ref) {
    var _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === undefined ? '14px' : _ref$fontSize,
      _ref$fontWeight = _ref.fontWeight,
      fontWeight = _ref$fontWeight === undefined ? 600 : _ref$fontWeight,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? '#2A2E36' : _ref$color,
      _ref$lineHeight = _ref.lineHeight,
      lineHeight = _ref$lineHeight === undefined ? '22px' : _ref$lineHeight,
      _ref$textTransform = _ref.textTransform,
      textTransform =
        _ref$textTransform === undefined ? 'inherit' : _ref$textTransform;

    return (
      '\n    font-size: ' +
      fontSize +
      ';\n    font-weight: ' +
      fontWeight +
      ';\n    color: ' +
      color +
      ';\n    line-height: ' +
      lineHeight +
      ';\n    text-transform: ' +
      textTransform +
      ';\n  '
    );
  },

  h1: function h1() {
    return mixins.fontStack({
      fontSize: '24px',
      fontWeight: 600,
      color: theme.colors.SHARK,
      lineHeight: '32px'
    });
  },
  h2: function h2() {
    return mixins.fontStack({
      fontSize: '20px',
      fontWeight: 600,
      color: theme.colors.SHARK,
      lineHeight: '28px'
    });
  },
  h2Placeholder: function h2Placeholder() {
    return mixins.fontStack({
      fontSize: '20px',
      fontWeight: 600,
      color: theme.colors.SILVER,
      lineHeight: '28px'
    });
  },
  h3: function h3() {
    return mixins.fontStack({
      fontSize: '16px',
      fontWeight: 600,
      color: theme.colors.SHARK,
      lineHeight: '24px'
    });
  },
  h3Grey: function h3Grey() {
    return mixins.fontStack({
      fontSize: '16px',
      fontWeight: 600,
      color: theme.colors.OUTER_SPACE,
      lineHeight: '24px'
    });
  },

  zIndex: {
    GET_SUPPORT: 99999,
    TOAST: 9999,
    LOADER: 9990,
    OVERLAY: 9980,
    CONFIRM_BOX: 9970,
    MODAL: 9960,
    TOOLTIP: 9950,
    POPOVER: 9940
  },

  // links ----------//

  actionLink: function actionLink() {
    return mixins.fontStack({
      fontSize: '14px',
      fontWeight: 600,
      color: theme.colors.INDIGO,
      lineHeight: '20px'
    });
  },

  blackLink: function blackLink() {
    return mixins.fontStack({
      fontSize: '14px',
      fontWeight: 600,
      color: theme.colors.SHARK,
      lineHeight: '20px'
    });
  },
  greyLink: function greyLink() {
    return mixins.fontStack({
      fontSize: '14px',
      fontWeight: 600,
      color: theme.colors.OUTER_SPACE,
      lineHeight: '20px'
    });
  },
  inactiveLink: function inactiveLink() {
    return mixins.fontStack({
      fontSize: '14px',
      fontWeight: 600,
      color: theme.colors.SILVER,
      lineHeight: '20px'
    });
  },
  deleteLink: function deleteLink() {
    return mixins.fontStack({
      fontSize: '14px',
      fontWeight: 600,
      color: theme.colors.BITTERSWEET,
      lineHeight: '20px'
    });
  },

  error: function error() {
    return {
      color: theme.colors.BITTERSWEET
    };
  },

  // body text ----------//

  whiteText: function whiteText() {
    return mixins.fontStack({
      fontSize: '12px',
      fontWeight: 'normal',
      color: theme.colors.WHITE,
      lineHeight: '16px'
    });
  },

  whiteBoldText: function whiteBoldText() {
    return mixins.fontStack({
      fontSize: '14px',
      fontWeight: '600',
      color: theme.colors.WHITE,
      lineHeight: '20px'
    });
  },

  blackText: function blackText() {
    return mixins.fontStack({
      fontSize: '14px',
      fontWeight: 'normal',
      color: theme.colors.SHARK,
      lineHeight: '20px'
    });
  },
  darkText: function darkText() {
    return mixins.fontStack({
      fontSize: '14px',
      fontWeight: 'normal',
      color: theme.colors.DARK_OUTER_SPACE,
      lineHeight: '20px'
    });
  },
  darkSmText: function darkSmText() {
    return mixins.fontStack({
      fontSize: '14px',
      fontWeight: '600',
      color: theme.colors.DARK_OUTER_SPACE,
      lineHeight: '20px'
    });
  },
  greyText: function greyText() {
    return mixins.fontStack({
      fontSize: '14px',
      fontWeight: 'normal',
      color: theme.colors.OUTER_SPACE,
      lineHeight: '20px'
    });
  },
  placeholderText: function placeholderText() {
    return mixins.fontStack({
      fontSize: '14px',
      fontWeight: 'normal',
      color: theme.colors.SILVER,
      lineHeight: '20px'
    });
  },

  // small links ----------//

  smallBlackLink: function smallBlackLink() {
    return mixins.fontStack({
      fontSize: '12px',
      fontWeight: 'normal',
      color: theme.colors.SHARK,
      lineHeight: '16px'
    });
  },
  smallDarkLink: function smallDarkLink() {
    return mixins.fontStack({
      fontSize: '12px',
      fontWeight: 'normal',
      color: theme.colors.DARK_OUTER_SPACE,
      lineHeight: '16px'
    });
  },
  smallGreyLink: function smallGreyLink() {
    return mixins.fontStack({
      fontSize: '12px',
      fontWeight: 'normal',
      color: theme.colors.OUTER_SPACE,
      lineHeight: '16px'
    });
  },
  smallInactiveLink: function smallInactiveLink() {
    return mixins.fontStack({
      fontSize: '12px',
      fontWeight: 'normal',
      color: theme.colors.SILVER,
      lineHeight: '16px'
    });
  },
  smallActiveLink: function smallActiveLink() {
    return mixins.fontStack({
      fontSize: '12px',
      fontWeight: 'normal',
      color: theme.colors.INDIGO,
      lineHeight: '16px'
    });
  },

  // labels ----------//

  smallBlackText: function smallBlackText() {
    return mixins.fontStack({
      fontSize: '11px',
      fontWeight: 600,
      color: theme.colors.OUTER_SPACE,
      lineHeight: '16px',
      textTransform: 'uppercase'
    });
  },

  // number ----------//

  bigNumber: function bigNumber() {
    return mixins.fontStack({
      fontSize: '24px',
      fontWeight: 'bold',
      color: theme.colors.SHARK,
      lineHeight: '32px'
    });
  },
  mediumNumber: function mediumNumber() {
    return mixins.fontStack({
      fontSize: '20px',
      fontWeight: 'bold',
      color: theme.colors.SHARK,
      lineHeight: '28px'
    });
  },
  smallNumber: function smallNumber() {
    return mixins.fontStack({
      fontSize: '20px',
      fontWeight: 'bold',
      color: theme.colors.DARK_OUTER_SPACE,
      lineHeight: '28px'
    });
  },
  smallestNumber: function smallestNumber() {
    return mixins.fontStack({
      fontSize: '13px',
      fontWeight: 'bold',
      color: theme.colors.DARK_OUTER_SPACE,
      lineHeight: '20px'
    });
  },

  displayIB: function displayIB() {
    return '\n  display: inline-block;\n  vertical-align: middle;';
  },

  displayTableCell: function displayTableCell() {
    return '\n  display: table-cell;\n  vertical-align: middle;';
  },

  // @function calc-percent($target, $container) {
  //   @return ($target / $container) * 100%;
  // }

  clearfix: function clearfix() {
    return "\n  &:after {\n    content: '';\n    display: table;\n    clear: both;\n  }";
  },

  centerDiv: function centerDiv() {
    return '\n  top: 50%;\n  left: 50%;\n  bottom: auto;\n  right: auto;\n  transform: translate(-50%, -50%);';
  },

  size: function size(width, height) {
    return '\n  width: ' + width + ';\n  height: ' + height + ';';
  },

  square: function square(size) {
    return mixins.size(size, size);
  },

  opacity: function opacity() {
    var _opacity =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;

    return (
      '\n    filter: alpha(opacity=' +
      _opacity +
      ' * 100);\n    filter: progid:DXImageTransform.Microsoft.Alpha(opacity=#{$opacity*100});\n    opacity: $opacity;'
    );
  },

  truncate: function truncate(width) {
    return (
      '\n        width: ' +
      width +
      ';\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      '
    );
  }
};

module.exports = mixins;
