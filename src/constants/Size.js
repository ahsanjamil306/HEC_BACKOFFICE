import {Dimensions, useWindowDimensions} from 'react-native';
import {getPixelSizeForLayoutSize} from 'react-native/Libraries/Utilities/PixelRatio';

const {width, height} = Dimensions.get('window');

export default {
  PADDING: width * 0.03,
  FONTSIZE: 14,
  FONTSIZE_LARGE: 18,
  FONTSIZE_SMALL: 12,
  WIDTH: width,
  HEIGHT: height,
  ICON: width * 0.14,
  PADDED_WIDTH: width - width * 0.06,
  HEADER_FOOTER_SIZE: width * 0.15,
  BORDER_RADIUS: 5,
  BORDER_RADIUS_HIGH: 15,
};
