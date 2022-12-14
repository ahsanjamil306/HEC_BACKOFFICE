import {StyleSheet} from 'react-native';
import color from '../../../constants/color';
import GlobalStyle from '../../../constants/globalStyle';
import Size from '../../../constants/size';

const styles = StyleSheet.create({
  container: {
    padding: Size.PADDING,
    flex: 1,
    backgroundColor: color.BACKGROUND,
  },
  profileImage: {
    height: Size.WIDTH * 0.3,
    width: Size.WIDTH * 0.3,
    borderRadius: Size.WIDTH * 0.15,
    alignSelf: 'center',
    marginTop: Size.ICON * 0.5,
  },
  button: {
    width: Size.WIDTH * 0.3,
    alignSelf: 'center',
    marginTop: Size.PADDING * 2,
    backgroundColor: color.PRIMARY,
  },
  buttonText: {
    ...GlobalStyle.TEXT_STYLE,
    fontSize: Size.FONTSIZE_LARGE,
    color: color.PRIMARY_TEXT,
  },
  pickImage: {
    position: 'absolute',
    tintColor: color.TEXT,
    width: Size.WIDTH * 0.07,
    height: Size.WIDTH * 0.07,
    top: Size.ICON * 0.5 + Size.WIDTH * 0.22,
    left: Size.WIDTH / 2 + Size.PADDING,
  },
});

export default styles;
