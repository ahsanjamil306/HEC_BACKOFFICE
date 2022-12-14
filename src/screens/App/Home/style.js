import {StyleSheet, Dimensions} from 'react-native';

//Color
import color from '../../../constants/color';
import GlobalStyle from '../../../constants/globalStyle';
import Size from '../../../constants/size';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.BACKGROUND,
  },
  postsText: {
    marginTop: Size.PADDING,
    ...GlobalStyle.TEXT_STYLE_BOLD,
    fontSize: Size.FONTSIZE_LARGE,
    marginBottom: Size.PADDING,
  },
});

export default styles;
