import {StyleSheet} from 'react-native';
import color from '../../../constants/color';
import GlobalStyle from '../../../constants/globalStyle';
import Size from '../../../constants/size';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.BACKGROUND,
    paddingTop: Size.PADDING,
  },
  profile: {
    height: Size.WIDTH * 0.12,
    width: Size.PADDED_WIDTH,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  profileImage: {
    height: Size.WIDTH * 0.12,
    width: Size.WIDTH * 0.12,
    borderRadius: Size.WIDTH * 0.12,
  },
  profileView: {
    height: '100%',
    justifyContent: 'center',
    marginLeft: Size.PADDING,
  },
  profileName: {
    ...GlobalStyle.TEXT_STYLE_BOLD,
  },
  profileUsername: {
    ...GlobalStyle.TEXT_STYLE,
    fontSize: Size.FONTSIZE_SMALL,
    color: color.GRAY,
  },
  image: {
    marginTop: Size.PADDING / 2,
    width: Size.WIDTH,
    height: 300,
    alignSelf: 'center',
  },
  title: {
    ...GlobalStyle.TEXT_STYLE,
    marginTop: Size.PADDING / 2,
    width: Size.PADDED_WIDTH,
    alignSelf: 'center',
    textAlign: 'justify',
  },
  des: {
    ...GlobalStyle.TEXT_STYLE,
    width: Size.PADDED_WIDTH,
    alignSelf: 'center',
    textAlign: 'justify',
  },
  headerText: {
    ...GlobalStyle.TEXT_STYLE_BOLD,
    fontSize: Size.FONTSIZE_LARGE,
    marginLeft: Size.PADDING,
    marginTop: Size.PADDING,
    color: color.PRIMARY,
  },
});

export default styles;
