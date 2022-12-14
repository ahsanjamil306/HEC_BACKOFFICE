import {StyleSheet, Dimensions, I18nManager} from 'react-native';

//Color
import color from '../../../constants/color';
import Size from '../../../constants/size';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.BACKGROUND,
    paddingHorizontal: Size.PADDING * 2,
    paddingVertical: Size.PADDING,
  },
  headerFontSize: {
    fontSize: Size.WIDTH * 0.045,
  },
  margin: {
    marginTop: Size.PADDING * 2,
  },
  icon: {
    marginRight: Size.PADDING,
    tintColor: color.TEXT,
    height: Size.FONTSIZE * 1.2,
    width: Size.FONTSIZE * 1.2,
  },
  iconAndTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Size.PADDING / 2,
  },
  mapView: {
    height: (Size.WIDTH * 0.95 * 9) / 16,
    width: '100%',
    backgroundColor: color.GRAY_LIGHT,
  },
});
