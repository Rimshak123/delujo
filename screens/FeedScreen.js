import React from 'react';
import { View, StyleSheet, Alert, Image, Text } from 'react-native';
import HeaderWithSearchBar from '../components/HeaderWithSearchBar';
import FeedBody from '../components/FeedBody';

const FeedScreen = () => {

  return (
    <View style={styles.container}>
      <HeaderWithSearchBar />
      <FeedBody />
    </View>
  );
};

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#7252C5",
  },
});

export default FeedScreen;
