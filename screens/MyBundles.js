
import React from 'react';import { View, Text, StyleSheet } from 'react-native';
import HeaderWithSearchBar from '../components/HeaderWithSearchBar';
import Body from '../components/Body';
import Footer from '../components/Footer';
import Footer2 from '../components/Footer2';

const MyBundles = () => {
  return (
    <View style={styles.container}>
      <HeaderWithSearchBar/>
      <Body />  
      {/* <Footer imageName="../assets/icon-star-full.png" text="Description 1" />

       {/* Example 2 */}
       {/* <Footer imageName="../assets/dogPic2.png" text="Description 2" /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7050C3',
  },
});

export default MyBundles;
