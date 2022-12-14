import {StyleSheet, Text, TextInput, View, Pressable} from 'react-native';
import React, {useRef, useState} from 'react';
import color from '../../constants/color';
import Size from '../../constants/Size';
import GlobalStyle from '../../constants/GlobalStyle';

const TextView = ({selected, borderColor, borderSelectedColor, number}) => {
  return (
    <View
      style={{
        height: Size.ICON,
        width: Size.ICON * 0.8,
        borderColor: color.GRAY,
        borderRadius: 5,
        borderWidth: selected ? 2 : 1,
        borderColor: selected ? borderSelectedColor : borderColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{...GlobalStyle.TEXT_STYLE, fontSize: 30}}>{number}</Text>
    </View>
  );
};

const CustomOTPInputComponent = ({
  borderColor,
  borderSelectedColor,
  onChangeText,
  style,
}) => {
  const foc = useRef(null);
  const [text, setText] = useState('');
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [n3, setN3] = useState('');
  const [n4, setN4] = useState('');
  const [n5, setN5] = useState('');

  const [focused, setFocused] = useState(1);

  const setTextInViews = textInput => {
    if (textInput.length <= 5) {
      setText(textInput);
      if (onChangeText) {
        onChangeText(textInput);
      }
      setN1(textInput[0]);
      setN2(textInput[1]);
      setN3(textInput[2]);
      setN4(textInput[3]);
      setN5(textInput[4]);
      setFocused(textInput.length + 1);
    }
  };

  return (
    <Pressable onPress={() => foc.current.focus()} style={style}>
      <TextInput
        style={styles.textInput}
        onChangeText={setTextInViews}
        value={text}
        autoFocus={true}
        keyboardType={'number-pad'}
        ref={foc}
      />
      <View style={styles.inputView}>
        <TextView
          borderColor={borderColor}
          borderSelectedColor={borderSelectedColor}
          number={n1}
          selected={focused == 1}
        />
        <TextView
          borderColor={borderColor}
          borderSelectedColor={borderSelectedColor}
          number={n2}
          selected={focused == 2}
        />
        <TextView
          borderColor={borderColor}
          borderSelectedColor={borderSelectedColor}
          number={n3}
          selected={focused == 3}
        />
        <TextView
          borderColor={borderColor}
          borderSelectedColor={borderSelectedColor}
          number={n4}
          selected={focused == 4}
        />
        <TextView
          borderColor={borderColor}
          borderSelectedColor={borderSelectedColor}
          number={n5}
          selected={focused == 5}
        />
      </View>
    </Pressable>
  );
};

export default CustomOTPInputComponent;

const styles = StyleSheet.create({
  inputView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: Size.WIDTH * 0.7,
    alignSelf: 'center',
  },
  textInput: {
    position: 'absolute',
    fontSize: 0,
    height: 0,
    width: 0,
  },
});
