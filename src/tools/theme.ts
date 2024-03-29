import {makeTheme} from 'dripsy';
import {Platform} from 'react-native';

export type Font = {
  fontSize: number;
  letterSpacing?: number;
  fontWeight?: number;
  lineHeight?: string;
};

const theme = {
  // AdaptiveDiv setting value
  adaptivediv: {
    center_device_max_width: 430,
    butterfly_device_max_width: {wide: 400, narrow: 300},
    margin: 20,
  },

  // Modal width
  modal_width_alert: 315,
  modal_width: 335,
  modal_width_large: 755,

  // Color
  white: '#FFFFFF',
  black: '#323232',
  black_40: 'rgba(0, 0, 0, 0.4)',
  black_60: 'rgba(0, 0, 0, 0.6)',
  purple: '#6E3678',
  purple_disabled: '#B89DBD',
  purple_dark: '#572A5E',
  purple_light: '#FAF6FB',
  purple_background: '#FAF8FB',
  purple_hover: '#F4EAF6',
  gray_text: '#888888',
  gray_background: '#EEEEEE',
  gray_line: '#C8C8C8',
  red_text: '#DD616E',
  red_button: '#91313B',
  red_background: '#F9E8E7',
  green_button: '#23913C',
  green_background: '#E6F7E4',
  blue_text: '#576ADE',

  yellow: '#F2A024',

  // Font Size
  font8: {fontSize: 8, letterSpacing: -0.2, lineHeight: 9},
  font8_medium: {
    fontSize: 8,
    letterSpacing: -0.2,
    fontWeight: '500',
    lineHeight: 9,
  },
  font10: {fontSize: 10, fontWeight: '300', lineHeight: 12},
  font10_bold: {fontSize: 10, fontWeight: '700', lineHeight: 12},
  font12: {fontSize: 12, letterSpacing: 0.4, lineHeight: 14},
  font12_bold: {fontSize: 12, fontWeight: '700', lineHeight: 14},
  font14: {fontSize: 14, lineHeight: 16},
  font14_bold: {fontSize: 14, fontWeight: '700', lineHeight: 16},
  font16: {fontSize: 16, letterSpacing: -0.4, lineHeight: 19},
  font16_bold: {
    fontSize: 16,
    letterSpacing: -0.4,
    fontWeight: 700,
    lineHeight: 19,
  },
  font18: {
    fontSize: 18,
    letterSpacing: -0.6,
    fontWeight: '700',
    lineHeight: 21,
  },
  font20: {
    fontSize: 20,
    letterSpacing: -0.75,
    fontWeight: '700',
    lineHeight: 23,
  },
  font28: {
    fontSize: 28,
    letterSpacing: -1,
    fontWeight: 700,
    lineHeight: '33px',
  },

  // Shadow

  // White Container or Button
  shadow:
    '0px 1.5px 1px -0.5px rgba(110, 54, 120, 0.05), ' +
    '0px 2.5px 1px -0.5px rgba(110, 54, 120, 0.03), ' +
    '0px 2px 3px -1px rgba(110, 54, 120, 0.11)',
  shadow_3:
    '0px 3px 4px -2px rgba(110, 54, 120, 0.04),' +
    ' 0px 3px 3px -2px rgba(110, 54, 120, 0.02),' +
    ' 0px 3px 8px -2px rgba(110, 54, 120, 0.1)',
  shadow_3_up:
    '0px -3px 4px -2px rgba(110, 54, 120, 0.04),' +
    ' 0px -3px 3px -2px rgba(110, 54, 120, 0.02),' +
    ' 0px -3px 8px -2px rgba(110, 54, 120, 0.1)',
  // Inset Button
  shadow_purple_button_inset: 'inset 2px 2px 5px -2px rgba(0, 0, 0, 0.15)',
  shadow_gray_button_inset: 'inset 2px 2px 5px -2px rgba(0, 0, 0, 0.075)',
  // Input or DatePicker
  shadow_purple_input_inset: 'inset 1px 1px 2.5px -1px rgba(110, 54, 120, 0.1)',
  shadow_gray_input_inset: ' inset 1px 1px 2.5px -1px rgba(0, 0, 0, 0.075)',
  shadow_clicked:
    '0px 2px 4px rgba(110, 54, 120, 0.2), ' +
    '0px 1px 18px rgba(110, 54, 120, 0.12), ' +
    '0px 6px 10px rgba(110, 54, 120, 0.14)',
  shadow_color_button: '1px 1.5px 2.5px -1px rgba(110, 54, 120, 0.15)',

  // Transition
  duration: '150ms',
  duration_num: 150,

  // Cursor
  cursor: (disabled?: boolean) => {
    return {cursor: disabled ? 'not-allowed' : 'pointer'} as CSS;
  },

  // Overlay
  overlay: (activated: boolean) => ({
    background:
      'linear-gradient(to left, transparent 50%, rgba(0,0,0,0.065) 50%) right',
    backgroundSize: '200%',
    transition: '.25s ease-out',
    pointerEvents: 'none',
    backgroundPosition: activated ? 'left' : 'right',
  }),

  // Ellipsis
  ellipsis: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  } as CSS,

  // zIndex
  zIndex_nav: 10,
  zIndex_background: 20,
  zIndex_headerBar: 40,
  zIndex_modal: 50,
  zIndex_alert: 60,
};

export default theme;

/******************************** */

// dripsy theme
const fontName = 'NanumSquare';
const webFont = (font: string) =>
  Platform.select({
    web: `${font}, NanumSquare,Helvetica,Arial,sans-serif`,
    default: font,
  });

export const dripsyTheme = makeTheme({
  colors: {
    white: '#FFFFFF',
    black: '#323232',
    black_40: 'rgba(0, 0, 0, 0.4)',
    black_60: 'rgba(0, 0, 0, 0.6)',
    purple: '#6E3678',
    purple_disabled: '#B89DBD',
    purple_dark: '#572A5E',
    purple_light: '#FAF6FB',
    purple_background: '#FAF8FB',
    purple_hover: '#F4EAF6',
    gray_text: '#888888',
    gray_background: '#EEEEEE',
    gray_line: '#C8C8C8',
    red_text: '#DD616E',
    red_button: '#91313B',
    red_background: '#F9E8E7',
    green_button: '#23913C',
    green_background: '#E6F7E4',
    blue_text: '#576ADE',
    yellow: '#F2A024',
  },

  customFonts: {
    [fontName]: {
      bold: webFont('NanumSquareBold'),
      default: webFont(fontName),
      normal: webFont(fontName),
      '300': webFont('NanumSquareLight'),
      '500': webFont(fontName),
      '700': webFont('NanumSquareBold'),
    },
  },

  fontSizes: {
    $0: 8,
    $1: 10,
    $2: 12,
    $3: 14,
    $4: 16,
    $5: 18,
    $6: 20,
    $7: 28,
  },
  fontWeights: {
    light: '300',
    normal: '500',
    bold: '700',
  },
  letterSpacings: {
    $0: -1,
    $1: -0.75,
    $2: -0.6,
    $3: -0.4,
    $4: -0.2,
    $5: 0.4,
  },
  lineHeights: {
    $0: '9px',
    $1: '12px',
    $2: '14px',
    $3: '16px',
    $4: '19px',
    $5: '21px',
    $6: '23px',
    $7: '33px',
  },

  text: {
    font8: {fontSize: '$0', letterSpacing: '$4', lineHeight: '$0'},
    font8_medium: {
      fontSize: '$0',
      letterSpacing: '$4',
      fontWeight: 'normal',
      lineHeight: '$0',
    },
    font10: {fontSize: '$1', fontWeight: 'light', lineHeight: '$1'},
    font10_bold: {fontSize: '$1', fontWeight: 'bold', lineHeight: '$1'},
    font12: {fontSize: '$2', letterSpacing: '$5', lineHeight: '$2'},
    font12_bold: {fontSize: '$2', fontWeight: 'bold', lineHeight: '$2'},
    font14: {fontSize: '$3', lineHeight: '$3'},
    font14_bold: {fontSize: '$3', fontWeight: 'bold', lineHeight: '$3'},
    font16: {fontSize: '$4', letterSpacing: '$3', lineHeight: '$4'},
    font16_bold: {
      fontSize: '$4',
      letterSpacing: '$3',
      fontWeight: 'bold',
      lineHeight: '$4',
    },
    font18: {
      fontSize: '$5',
      letterSpacing: '$2',
      fontWeight: 'bold',
      lineHeight: '$5',
    },
    font20: {
      fontSize: '$6',
      letterSpacing: '$1',
      fontWeight: 'bold',
      lineHeight: '$6',
    },
    font28: {
      fontSize: '$7',
      letterSpacing: '$0',
      fontWeight: 'bold',
      lineHeight: '$7',
    },
  },
  shadows: {},
});
