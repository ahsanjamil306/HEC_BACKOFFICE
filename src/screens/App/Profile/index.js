import {View, Text, Image, ScrollView, Pressable, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import ProfileOptionComponent from '../../../components/more/ProfileOptionComponent';
import Icons from '../../../assets/Icons';
import {useDispatch, useSelector} from 'react-redux';
import GlobalStyle from '../../../constants/GlobalStyle';
import {useNavigation} from '@react-navigation/native';
import MyStatusBar from '../../../components/global/StatusBar';
import color from '../../../constants/color';
import {userLogout} from '../../../store/reducer/user';
import auth from '@react-native-firebase/auth';
import SimpleToast from 'react-native-simple-toast';
import Loader from '../../../components/global/Loader';

const Profile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const user = useSelector(state => state.user.data);

  const signOutPressed = () => {
    Alert.alert('Sign out', 'Are your sure you want to sign out?', [
      {text: 'No'},
      {
        text: 'Yes',
        onPress: () => {
          setLoader(true);
          auth()
            .signOut()
            .then(res => {
              dispatch(userLogout());
            })
            .catch(er => {
              SimpleToast.show(er.code.substring(5), SimpleToast.SHORT);
            })
            .finally(() => {
              setLoader(false);
            });
        },
      },
    ]);
  };
  return (
    <>
      <MyStatusBar />
      <View style={styles.container}>
        <ScrollView>
          {/*Profile*/}
          <Pressable
            onPress={() => navigation.navigate('EditProfile')}
            style={styles.profileView}>
            <Image
              source={user?.image ? {uri: user.image} : Icons.PROFILE}
              style={styles.profileImage}
            />
            <View style={styles.profileDisView}>
              <Text style={[GlobalStyle.TEXT_STYLE, styles.hello]}>Hello,</Text>
              <Text style={[GlobalStyle.TEXT_STYLE_BOLD, styles.name]}>
                {user.name}
              </Text>
            </View>
          </Pressable>
          {/*All Options*/}
          <View style={styles.optionContainer}>
            <ProfileOptionComponent
              title="Account Information"
              icon={Icons.ACCOUNT}
              onPress={() => navigation.navigate('EditProfile')}
            />
            <ProfileOptionComponent
              title="Report a problem"
              onPress={() => navigation.navigate('Report')}
              icon={Icons.SETTINGS}
            />
            <ProfileOptionComponent
              title="Sign out"
              icon={Icons.LOG_OUT}
              onPress={signOutPressed}
              color={color.RED}
            />
          </View>
        </ScrollView>
      </View>
      {loader && <Loader />}
    </>
  );
};

export default Profile;
