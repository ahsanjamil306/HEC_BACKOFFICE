import {View, Text, ImageBackground, Image, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {Images} from '../../../assets/images';
import Icons from '../../../assets/Icons';
import CustomButtonComponent from '../../../components/global/CustomButtonComponent';
import Size from '../../../constants/size';

const Intro = ({navigation}) => {
  const navigate = () => {
    navigation.replace('SignIn');
  };
  useEffect(() => {
    // less time for loading
    setTimeout(navigate, 1000);
  });
  return (
    <SafeAreaView style={styles.container}>
      <Image source={Icons.LOGO} style={styles.Logo} />
    </SafeAreaView>
  );
};

export default Intro;
