import {StyleSheet} from 'react-native';
import color from '../../../constants/color';
import GlobalStyle from '../../../constants/globalStyle';
import Size from '../../../constants/size';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.BACKGROUND,
  },
  optionContainer: {
    marginVertical: Size.PADDING,
    padding: Size.PADDING / 2,
    width: Size.WIDTH,
    alignSelf: 'center',
  },
  profileImage: {
    height: Size.ICON * 1.5,
    width: Size.ICON * 1.5,
    borderRadius: Size.WIDTH * 0.15,
    alignSelf: 'center',
  },
  name: {
    fontSize: Size.FONTSIZE * 1.3,
  },
  hello: {
    fontSize: Size.FONTSIZE * 0.9,
  },
  email: {
    alignSelf: 'center',
    color: color.GRAY,
  },
  profileView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Size.PADDING * 2,
    marginTop: Size.PADDING,
  },
  profileDisView: {
    marginLeft: Size.PADDING,
  },
});

export default styles;
