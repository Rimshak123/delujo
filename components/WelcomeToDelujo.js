// HeaderWithImage.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const WelcomeToDelujo = () => {
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.headerText}>Welcome to DeLujo
        </Text>
      </View>
      <View style={styles.imageContainer}>
      <Image
        source={require('../assets/DeLujo-Logo.png')} // Replace with your actual image path
        style={styles.image}
        resizeMode="cover"
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    justifyContent: 'flex-Start',
    alignItems: 'center',
    backgroundColor:"#7051C4",
    width:400, 
    // margin:40,
    paddingTop:70,

  },
//   header: {
//     marginBottom: 20,
//   },
  headerText: {
    fontSize: 16,
    color:"#FFFFFF",
  },
  imageContainer: {
    //width: '100%',
    //alignItems: 'center',
    paddingTop:10,
  },
  image: {
    width: 65, // Adjust the width and height according to your image size
    height: 55,
  },
});

export default WelcomeToDelujo;
