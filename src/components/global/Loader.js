import React from 'react';
import {
  View,
  Modal,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from 'react-native';
import color from '../../constants/color';
const {width, height} = Dimensions.get('window');

export default function Loader(props) {
  return (
    <View style={styles.overlay}>
      <View style={styles.background} />
      <ActivityIndicator size={'large'} color={color.PRIMARY} />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  background: {
    position: 'absolute',
    height,
    width,
    backgroundColor: color.BACKGROUND,
    opacity: 0.8,
  },
});
