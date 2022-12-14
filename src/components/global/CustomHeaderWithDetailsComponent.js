import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Size from '../../constants/size';
import GlobalStyle from '../../constants/globalStyle';
import color from '../../constants/color';

const CustomHeaderWithDetailsComponent = ({title, details, style}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[GlobalStyle.TEXT_STYLE_BOLD, styles.title]}>{title}</Text>
      <Text style={[GlobalStyle.TEXT_STYLE, styles.details]}>{details}</Text>
    </View>
  );
};

export default CustomHeaderWithDetailsComponent;

const styles = StyleSheet.create({
  container: {
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
