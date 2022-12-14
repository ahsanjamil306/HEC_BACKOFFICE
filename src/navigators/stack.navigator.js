import React, {useEffect} from 'react';
import color from '../constants/color';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';

//Screens
import Splash from '../screens/Auth/Splash';
import SignIn from '../screens/Auth/SignIn/index';
import SignUp from '../screens/Auth/SignUp';
import ForgetPassword from '../screens/Auth/ForgetPassword';
import Home from '../screens/App/Home';
import EditProfile from '../screens/App/EditProfile';
import Report from '../screens/App/Report';
import Post from '../screens/App/Post';

//bottom tab
import {BottomNavigator} from './bottom.navigator';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const SignedInStack = () => (
  <Stack.Navigator
    initialRouteName="BottomNavigator"
    screenOptions={{
      headerShadowVisible: false,
      headerShown: false,
      headerStyle: {
        backgroundColor: color.BACKGROUND,
      },
      headerTitleStyle: {
        color: color.TEXT,
      },
      headerTintColor: color.TEXT,
    }}>
    {/*App*/}
    <Stack.Screen
      name="Report"
      component={Report}
      options={headerOptions.ReportAProblem}
    />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen
      name="EditProfile"
      component={EditProfile}
      options={headerOptions.EditProfile}
    />
    <Stack.Screen name="Post" component={Post} options={headerOptions.Post} />

    {/* BOTTOM TAB */}
    <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
  </Stack.Navigator>
);

const SignedOutStack = () => (
  <Stack.Navigator
    initialRouteName="SignIn"
    // initialRouteName="BottomNavigator"
    screenOptions={{
      headerShadowVisible: false,
      headerShown: false,
      headerStyle: {
        backgroundColor: color.BACKGROUND,
      },
      headerTitleStyle: {
        color: color.TEXT,
      },
      headerTintColor: color.TEXT,
    }}>
    {/*Auth*/}
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen
      name="SignUp"
      options={headerOptions.SignUp}
      component={SignUp}
    />
    <Stack.Screen
      name="ForgetPassword"
      options={headerOptions.ForgetPassword}
      component={ForgetPassword}
    />
  </Stack.Navigator>
);

export const RootNavigator = () => {
  const user = useSelector(state => state.user.data);

  useEffect(() => {
    console.log('currentUser :', auth().currentUser);
    console.log('reduxUser :', user);
  });

  return user?.uid ? <SignedInStack /> : <SignedOutStack />;
};

const headerOptions = {
  SignUp: {
    headerShown: true,
    title: ' ',
  },
  ForgetPassword: {
    headerShown: true,
    title: ' ',
  },
  Verification: {
    headerShown: true,
    title: ' ',
  },
  ImageShow: {
    headerShown: true,
    title: ' ',
  },
  EditProfile: {
    headerShown: true,
    title: ' ',
  },
  ViewAll: {
    headerShown: true,
    // title: 'ShowAll',
  },
  ReportAProblem: {
    headerShown: true,
    title: 'Report a problem',
  },
  Post: {
    headerShown: true,
    title: ' ',
  },
};
