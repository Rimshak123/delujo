

// LoginScreen.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header'; 
import WelcomeUsernameBody from '../components/WelcomeUsernameBody';

const WelcomeUsername = () => {
  return (
    <View style={styles.container}>
      <Header
        showImage={true}
        headerTextSize={18}
        customText="Welcome to Delujo"
        imagePath={require('../assets/profile-pic-user.png')}
        headerFlex={0.4} 
      />
      <WelcomeUsernameBody />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#7051C4",
  },
});

export default WelcomeUsername;