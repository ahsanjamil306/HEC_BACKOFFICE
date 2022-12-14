import React from 'react';
import color from '../constants/color';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import SignIn from '../screens/Auth/SignIn/index';
import ForgetPassword from '../screens/Auth/ForgetPassword';

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
      name="ForgetPassword"
      options={headerOptions.ForgetPassword}
      component={ForgetPassword}
    />
  </Stack.Navigator>
);

export const RootNavigator = () => {
  const user = useSelector(state => state.user.data);

  // useEffect(() => {
  //   console.log('currentUser :', auth().currentUser);
  //   console.log('reduxUser :', user);
  // });

  return false ? <SignedInStack /> : <SignedOutStack />;
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
