import React from 'react';
import {SafeAreaView, View, StatusBar, StyleSheet} from 'react-native';
import color from '../../constants/color';

const MyStatusBar = ({backgroundColor = color.BACKGROUND, ...props}) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor={backgroundColor}
        {...props}
        barStyle={color.isDark ? 'light-content' : 'dark-content'}
      />
    </SafeAreaView>
  </View>
);

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

export default MyStatusBar;
