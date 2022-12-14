import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Notification from '../../../components/notifications/Notification';
import MyStatusBar from '../../../components/global/StatusBar';
const Notifications = () => {
  return (
    <>
      <MyStatusBar />
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.notificationsText}>Notifications</Text>
          {[1, 2, 3, 4].map((item, index) => (
            <Notification
              key={index}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum."
              image={{
                uri: 'https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516__340.jpg',
              }}
              timeAgo={'2 min ago'}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default Notifications;
