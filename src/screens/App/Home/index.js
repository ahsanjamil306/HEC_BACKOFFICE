import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, View, Text, I18nManager} from 'react-native';
import MyStatusBar from '../../../components/global/StatusBar';
import Post from '../../../components/home/Post';
import styles from './style';

const Index = ({navigation}) => {
  return (
    <>
      <MyStatusBar />
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.postsText}>Posts</Text>
          <Post
            by={{
              name: 'username',
              username: '@admin',
              image:
                'https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
            }}
            post={{
              image:
                'https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',

              title:
                'This is a test title to check how its working with the title in the image i will try longer titles to check that how its working with all the details given to it ',
              description: 'This is the test description to check',
              time: '2 days ago',
            }}
          />
        </ScrollView>
      </View>
    </>
  );
};

export default Index;
