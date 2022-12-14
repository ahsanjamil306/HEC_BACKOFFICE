import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import styles from './style';
import Comment from '../../../components/post/Comment';
import Size from '../../../constants/size';

const Post = () => {
  const post = useRoute().params.post;
  const by = useRoute().params.by;
  return (
    <View style={styles.container}>
      <ScrollView>
        {/*Profile*/}
        <View style={styles.profile}>
          <Image source={{uri: by.image}} style={styles.profileImage} />
          <View style={styles.profileView}>
            <Text style={styles.profileName}>{by.name}</Text>
            <Text style={styles.profileUsername}>{by.username}</Text>
          </View>
          <View style={{flex: 1}} />
          <Text style={styles.time}>{post.time}</Text>
        </View>
        {/*Post*/}
        {post.image.length != 0 && (
          <Image style={styles.image} source={{uri: post.image}} />
        )}
        <Text style={styles.title}>{post.title}...</Text>
        <Text style={styles.headerText}>Description</Text>
        <Text style={styles.des}>{post.description}</Text>
        <Text style={[styles.headerText, {marginBottom: Size.PADDING / 2}]}>
          Comments
        </Text>
        {[1, 2, 3, 4].map((item, index) => (
          <Comment key={index} comment={{...post, text: post.title, ...by}} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Post;
