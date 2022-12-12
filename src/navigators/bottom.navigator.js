import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, View, Dimensions, Text } from "react-native";
import { Images } from "../assets/images";
import size from "../constants/size";

//Screens
import icons from "../assets/icons";
import GlobalStyle from "../constants/globalStyle";
import color from "../constants/color";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabImage = ({
  focused,
  name,
  icon,
  selectedIcon,
  selectedColor = color.PRIMARY,
  defaultColor = color.LIGHT_GRAY200,
}) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        style={{
          width: focused ? size.ICON * 1.1 : size.ICON,
          height: focused ? size.ICON * 1.1 : size.ICON,
          tintColor: focused ? selectedColor : defaultColor,
        }}
        resizeMode="contain"
        source={selectedIcon ? (focused ? selectedIcon : icon) : icon}
      />
      {name && (
        <Text
          style={{
            ...GlobalStyle.TEXT_STYLE,
            fontSize: size.FONTSIZE_SMALL,
            color: focused ? selectedColor : defaultColor,
          }}
        >
          {name}
        </Text>
      )}
    </View>
  );
};

const HomeIcon = ({ focused }) => {
  return <TabImage focused={focused} name="Home" icon={icons.HOME} />;
};

export const BottomNavigator = ({}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: size.HEIGHT * 0.09,
        },
      }}
    ></Tab.Navigator>
  );
};
