import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Newsbody from '../components/Newsbody'
import HeaderWithSearchBar from '../components/HeaderWithSearchBar'
import Shopbody from '../components/Shopbody';
const ShopScreen = () => {
  return (
    <View style={styles.container}>
    <HeaderWithSearchBar />
    <Shopbody/>

  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7050C3',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default ShopScreen;
