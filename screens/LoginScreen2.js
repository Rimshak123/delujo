import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header'; 
import LoginBody2 from '../components/LoginBody2';

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
      <LoginBody2 />
      
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

LoginScreen.options = {
  headerShown: false,
};
export default LoginScreen;