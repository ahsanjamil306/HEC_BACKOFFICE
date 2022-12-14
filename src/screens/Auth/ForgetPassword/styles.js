import {StyleSheet} from 'react-native';
import color from '../../../constants/color';
import GlobalStyle from '../../../constants/globalStyle';
import Size from '../../../constants/size';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.BACKGROUND,
    paddingHorizontal: Size.PADDING * 2,
  },
  button: {
    width: Size.WIDTH - Size.PADDING * 2,
    marginTop: Size.PADDING * 2,
    alignSelf: 'center',
    backgroundColor: color.PRIMARY,
    height: Size.ICON * 0.8,
  },
  textStyle: {
    ...GlobalStyle.TEXT_STYLE_BOLD,
    fontSize: Size.WIDTH * 0.04,
    color: color.PRIMARY_TEXT,
  },
  emailInput: {
    marginTop: Size.ICON,
    width: Size.WIDTH - Size.PADDING * 2,
    alignSelf: 'center',
  },
  messageView: {
    width: '100%',
    minHeight: Size.HEIGHT * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: Size.WIDTH * 0.05,
  },
  details: {
    marginTop: Size.PADDING,
    width: Size.WIDTH * 0.8,
    textAlign: 'center',
    color: color.GRAY,
  },
});
export default styles;
