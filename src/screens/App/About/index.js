import {useRoute} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  Text,
  Dimensions,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Pressable,
} from 'react-native';
import GlobalStyle from '../../../constants/globalStyle';
import Size from '../../../constants/size';
import style from './style';
import Icons from '../../../assets/Icons';
import {Images} from '../../../assets/images';
import SimpleToast from 'react-native-simple-toast';
import TImeComponent from '../../../components/TimeComponent';

const Index = () => {
  const data = useRoute().params;
  return (
    <>
      <View style={style.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/*Information*/}
          <Text style={[GlobalStyle.TEXT_STYLE_BOLD, style.headerFontSize]}>
            About us
          </Text>
          <Text
            style={[
              GlobalStyle.TEXT_STYLE,
              {textAlign: 'justify', marginTop: Size.PADDING / 2},
            ]}>
            {data.information}
          </Text>

          {/*Contacts*/}
          <Text
            style={[
              GlobalStyle.TEXT_STYLE_BOLD,
              style.headerFontSize,
              style.margin,
            ]}>
            Contacts
          </Text>
          {/*Phone Number*/}
          <View style={[style.iconAndTextView, {marginTop: Size.PADDING / 2}]}>
            <Image source={Icons.PHONE} style={style.icon} />
            <Text style={[GlobalStyle.TEXT_STYLE]}>{data.contact.number}</Text>
          </View>
          {/*website or email*/}
          <View style={[style.iconAndTextView, {marginTop: Size.PADDING}]}>
            <Image source={Icons.INTERNET} style={style.icon} />
            <Text style={[GlobalStyle.TEXT_STYLE]}>{data.contact.other}</Text>
          </View>

          {/*Opening Time*/}
          <Text
            style={[
              GlobalStyle.TEXT_STYLE_BOLD,
              style.headerFontSize,
              style.margin,
              {marginBottom: Size.PADDING / 2},
            ]}>
            Timings
          </Text>
          <TImeComponent data={data} />
          {/*Address*/}
          <Text
            style={[
              GlobalStyle.TEXT_STYLE_BOLD,
              style.headerFontSize,
              style.margin,
              {marginBottom: Size.PADDING / 2},
            ]}>
            Address
          </Text>
          {/*Google Map here*/}
          <Pressable
            onPress={() => SimpleToast.show('This is a dummy image.', 1000)}>
            <Image style={style.mapView} source={Images.DUMMY_MAP} />
          </Pressable>
        </ScrollView>
      </View>
    </>
  );
};

export default Index;
