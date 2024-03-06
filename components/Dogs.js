import React from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';

const Dogs = (imagePath) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Image
          source={require('../assets/dogPic.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <Image
          source={require('../assets/dogPic2.png')}
          style={styles.image}
          resizeMode="cover"
        />
         <Image
          source={require('../assets/dogPic.png')}
          style={styles.image}
          resizeMode="cover"
        />
      
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:70,
    marginLeft:15,
  },
  image: {
    width: 140,
    height: 140,
    
  },
});

export default Dogs;
