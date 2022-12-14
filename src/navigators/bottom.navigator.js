import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image, View, Dimensions, Text} from 'react-native';
import {Images} from '../assets/images';

//Screens
import Notifications from '../screens/App/Notifications';
import Profile from '../screens/App/Profile';
import Home from '../screens/App/Home/index';
import Icons from '../assets/Icons';
import Size from '../constants/Size';
import color from '../constants/color';
import GlobalStyle from '../constants/GlobalStyle';

// dimenstion
const {width, height} = Dimensions.get('window');

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabImage = ({focused, icon, name, selectedIcon}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={selectedIcon ? (focused ? selectedIcon : icon) : icon}
        style={{
          width: focused ? Size.ICON * 0.5 : Size.ICON * 0.4,
          height: focused ? Size.ICON * 0.5 : Size.ICON * 0.4,
          tintColor: focused ? color.PRIMARY : color.TEXT,
        }}
        resizeMode="contain"
      />
      <Text
        style={[
          GlobalStyle.TEXT_STYLE,
          {
            fontSize: 12,
            color: focused ? color.PRIMARY : color.TEXT,
          },
        ]}>
        {name}
      </Text>
    </View>
  );
};

const homeIcon = ({focused}) => (
  <TabImage
    focused={focused}
    icon={Icons.HOME}
    name="Home"
    selectedIcon={Icons.HOME_SELECTED}
  />
);

const notificationsIcon = ({focused}) => {
  const [noOfNoti, setNoOfNoti] = useState(5);
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={Icons.BELL}
        style={{
          width: focused ? Size.ICON * 0.5 : Size.ICON * 0.4,
          height: focused ? Size.ICON * 0.5 : Size.ICON * 0.4,
          tintColor: focused ? color.PRIMARY : color.TEXT,
        }}
        resizeMode="contain"
      />
      {noOfNoti && !focused && (
        <View
          style={{
            backgroundColor: color.PRIMARY,
            position: 'absolute',
            height: Size.FONTSIZE,
            minWidth: Size.FONTSIZE,
            justifyContent: 'center',
            borderRadius: Size.FONTSIZE,
            alignItems: 'center',
            paddingHorizontal: 4,
            transform: [{translateX: Size.ICON * 0.1}],
          }}>
          <Text
            style={[
              GlobalStyle.TEXT_STYLE,
              {color: color.PRIMARY_TEXT, fontSize: Size.FONTSIZE * 0.8},
            ]}>
            {noOfNoti}
          </Text>
        </View>
      )}
      <Text
        style={[
          GlobalStyle.TEXT_STYLE,
          {
            fontSize: 12,
            color: focused ? color.PRIMARY : color.TEXT,
          },
        ]}>
        {'Notifications'}
      </Text>
    </View>
  );
};

const profileIcon = ({focused}) => (
  <TabImage focused={focused} icon={Icons.MORE} name="More" />
);

export const BottomNavigator = ({}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: color.BACKGROUND,
          minHeight: Size.HEADER_FOOTER_SIZE,
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: homeIcon,
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: notificationsIcon,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: profileIcon,
        }}
      />
    </Tab.Navigator>
  );
};
