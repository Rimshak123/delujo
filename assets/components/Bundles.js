import React from 'react';
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';

const Bundles = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.imageRow}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/Pens.png')}
            style={styles.image}
            resizeMode="cover" />
          <Text style={styles.imageText}>Back to school</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/Clothes.png')}
            style={styles.image}
            resizeMode="cover" />
          <Text style={styles.imageText}>Summer outfits</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/Sound (1).png')}
            style={styles.image}
            resizeMode="cover" />
          <Text style={styles.imageText}>Sound</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/Pets.png')}
            style={styles.image}
            resizeMode="cover" />
          <Text style={styles.imageText}>Adorable pets</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  image: {
    width: 115,
    height: 115,
    // marginHorizontal: 2,
  },
  imageContainer: {
    alignItems: 'center',
    // marginHorizontal: 5,
    // color:"#858585",
    color:'red',
  },
  imageText: {
    color: '#949494', 
    fontSize:12,
  },
});

export default Bundles;
