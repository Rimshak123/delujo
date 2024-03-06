import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Footer1 from '../components/Footer1';
import Footer2 from '../components/Footer2';

const Footer = ({ imagePath,  text }) => {
  return (
    <View style={styles.container}>
      <Image
       source={require('../assets/footer-base.png')}
        style={styles.image}
        resizeMode="cover"
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 395,
    height: 90,
  },
  overlayImages: {
    position: 'absolute',
    top: 24,
    left: 20,
    flexDirection: 'row',
  },
  smallImage: {
    width: 44,
    height: 30,
    marginHorizontal: -5,
  },
});

export default Footer;
