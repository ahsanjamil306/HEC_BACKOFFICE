import {StyleSheet} from 'react-native';
import color from '../../../constants/color';
import Size from '../../../constants/size';
import GlobalStyles from '../../../constants/globalStyle';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.BACKGROUND,
  },
  notificationsText: {
    marginTop: Size.PADDING,
    marginHorizontal: Size.PADDING,
    ...GlobalStyles.TEXT_STYLE_BOLD,
    fontSize: Size.FONTSIZE_LARGE,
    marginBottom: Size.PADDING,
  },
});

export default styles;
