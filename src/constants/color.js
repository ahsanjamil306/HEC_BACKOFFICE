import {Appearance} from 'react-native';

const defaultColors = {
  PRIMARY: '#00689c',
  SKY_BLUE: '#00ccff',
  PRIMARY_TEXT: 'white',
  SHOW_MORE: '#3db6fc',
  RED: '#ff1605',
  GREEN: '#18c900',
  FULL_LIGHT_GRAY: '#e6e6e6',
  GRAY_LIGHT: '#c1c7c2',
  BLACK: 'black',
  WHITE: 'white',
};

const colorsDark = {
  ...defaultColors,
  isDark: true,
  BACKGROUND: 'black',
  PRIMARY_BACKGROUND: '#5c5e5c',
  TEXT: 'white',
  CHAT: '#5c5e5c',
  THEME_GRAY: '#c1c7c2 ',
  GRAY: 'grey',
};
const colorsLight = {
  ...defaultColors,
  isDark: false,
  BACKGROUND: 'white',
  PRIMARY_BACKGROUND: '#e6e6e6',
  CHAT: '#efefef',
  TEXT: 'black',
  THEME_GRAY: '#5c5e5c',
  GRAY: 'grey',
};

export default color =
  Appearance.getColorScheme() == 'light' ? colorsLight : colorsDark;

//export default color = 1 ? colorsLight : colorsDark;
