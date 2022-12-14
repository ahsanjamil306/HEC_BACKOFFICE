import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Size from '../../constants/size';
import GlobalStyle from '../../constants/globalStyle';
import color from '../../constants/color';

const CustomInputComponent = ({
  placeholder,
  placeholderTextColor,
  value,
  onChangeText,
  error,
  icon,
  secureTextEntry,
  style,
  onBlur,
  keyboardType,
  autoFocus,
  ref,
  iconColor,
  multiline,
  editable,
  ...props
}) => {
  return (
    <View style={[styles.container(error), style]}>
      {icon && (
        <Image source={icon} style={[styles.image, {tintColor: iconColor}]} />
      )}
      <TextInput
        {...props}
        editable={editable}
        multiline={multiline}
        autoFocus={autoFocus}
        onChangeText={onChangeText}
        ref={ref}
        onBlur={onBlur}
        value={value}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={
          placeholderTextColor ? placeholderTextColor : color.GRAY
        }
        keyboardType={keyboardType}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default CustomInputComponent;

const styles = StyleSheet.create({
  container: error => ({
    width: Size.WIDTH - Size.PADDING * 4,
    height: Size.ICON * 0.9,
    borderRadius: Size.BORDER_RADIUS,

    paddingHorizontal: Size.PADDING,
    justifyContent: 'center',
    borderWidth: error ? 1 : 0.5,
    borderColor: error ? color.RED : color.GRAY,
  }),
  input: {
    width: Size.WIDTH * 0.8,
    ...GlobalStyle.TEXT_STYLE,
    fontSize: Size.ICON * 0.3,
  },
  image: {
    width: Size.ICON * 0.5,
    height: Size.ICON * 0.5,
    marginRight: Size.PADDING,
  },
  error: {
    position: 'absolute',
    alignSelf: 'flex-end',
    right: Size.PADDING,
    color: color.RED,
  },
});
