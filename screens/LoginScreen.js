

// LoginScreen.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import WelcomeToDelujo from '../components/WelcomeToDelujo'; 
import LoginBody from '../components/LoginBody';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <WelcomeToDelujo/>
      <LoginBody />
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

export default LoginScreen;