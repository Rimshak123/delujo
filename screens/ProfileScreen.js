import React from 'react';
import { View, StyleSheet, Alert, Image, Text } from 'react-native';

import Header from '../components/Header';
import ProfileBody from '../components/ProfileBody';

const ProfileScreen = () => {

  return (
    <View style={styles.container}>
    <View style={styles.titleContainer}>
        <Text style={styles.title}>Profile</Text>
      </View>
      <ProfileBody />
    </View>
  );
};

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#7051C4",
  },
  titleContainer: {
    backgroundColor: '#7252C5',
    borderRadius: 5,
    width: 400,
    height: 120,
  },
   title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F3F3F3',
    textAlign: 'center',
    marginTop: 60,
  },
});

export default ProfileScreen;

