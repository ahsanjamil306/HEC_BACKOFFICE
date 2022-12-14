import {StyleSheet} from 'react-native';
import color from '../../../constants/color';
import Size from '../../../constants/size';

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  Logo: {
    height: Size.WIDTH * 0.4,
    width: Size.WIDTH * 0.4,
  },
});

export default styles;
