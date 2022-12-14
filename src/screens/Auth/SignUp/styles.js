import {StyleSheet} from 'react-native';
import color from '../../../constants/color';
import GlobalStyle from '../../../constants/globalStyle';
import Size from '../../../constants/size';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.BACKGROUND,
  },
  text: {
    fontSize: Size.WIDTH * 0.07,
    marginTop: Size.HEIGHT * 0.02,
  },
  mainView: {
    paddingHorizontal: Size.PADDING * 2,
    height: Size.HEIGHT * 0.95,
    backgroundColor: color.BACKGROUND,
  },
  buttonSignIn: {
    width: '100%',
    backgroundColor: color.PRIMARY,
    height: Size.ICON * 0.8,
  },
  textStyle: {
    ...GlobalStyle.TEXT_STYLE_BOLD,
    fontSize: Size.WIDTH * 0.04,
    color: color.PRIMARY_TEXT,
  },
  inputView: {
    marginTop: Size.PADDING,
    justifyContent: 'space-between',
  },
  forgetPassView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
