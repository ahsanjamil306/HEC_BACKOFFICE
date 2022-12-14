import {StyleSheet} from 'react-native';
import color from '../../../constants/color';
import Size from '../../../constants/size';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.BACKGROUND,
  },
  inputView: {
    marginTop: Size.PADDING,
    width: Size.WIDTH * 0.95,
    alignSelf: 'center',
    height: Size.WIDTH * 0.5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  submitButton: {
    alignSelf: 'center',
    marginTop: Size.PADDING,
    backgroundColor: color.PRIMARY,
  },
});
export default styles;
