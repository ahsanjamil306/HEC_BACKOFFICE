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
    marginTop: Size.PADDING,
  },
  image: {
    height: Size.WIDTH * 0.4,
    width: Size.WIDTH * 0.4,
    marginTop: Size.PADDING * 2,
    alignSelf: 'center',
  },
  mainView: {
    paddingHorizontal: Size.PADDING * 2,
    height: Size.HEIGHT,
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
    marginTop: Size.PADDING * 3,
  },
  forgetPassView: {
    marginVertical: Size.PADDING,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomText: {
    alignSelf: 'center',
    textAlignVertical: 'bottom',
    marginTop: Size.PADDING,
  },
});

export default styles;
