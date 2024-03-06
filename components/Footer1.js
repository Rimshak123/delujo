import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Footer1 = () => {
  return (
    <View style={styles.overlayImages}>
      <Image
        source={require('../assets/icon-feed-unused.png')}
        style={styles.smallImage}
        resizeMode="cover"
      />
      {/* Add more images as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  overlayImages: {
    flexDirection: 'row',
    position: 'absolute',
    top: 24,
    left: 20,
  },
  smallImage: {
    width: 44,
    height: 30,
    marginHorizontal: -5,
  },
});

export default Footer1;
