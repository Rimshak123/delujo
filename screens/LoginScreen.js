

// LoginScreen.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
<<<<<<< HEAD
import Header from '../components/Header'; 
// import LoginBody from '../components/Body/LoginBody';
import LoginBody from '../components/LoginBody';
// import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
 

  return (
    <View style={styles.container}>
      <Header
        showImage={true}
        headerTextSize={18}
        customText="Welcome to Delujo"
        imagePath1={require('../assets/DeLujo-Logo.png')}
        headerFlex={0.2} 
        imageWidth={65} 
        imageHeight={55}
      />
      <LoginBody />
      
=======
import WelcomeToDelujo from '../components/WelcomeToDelujo'; 
import LoginBody from '../components/LoginBody';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <WelcomeToDelujo/>
      <LoginBody />
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
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

<<<<<<< HEAD
LoginScreen.options = {
  headerShown: false,
};
=======
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
export default LoginScreen;