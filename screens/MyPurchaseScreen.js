
import React from 'react';import { View, Text, StyleSheet } from 'react-native';
import HeaderWithSearchBar from '../components/HeaderWithSearchBar';
import MyPurchaseBody from '../components/MyPurchaseBody';

const MyPurchaseScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderWithSearchBar/>
      <MyPurchaseBody/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7050C3',
  },
});
MyPurchaseScreen.options = {
  headerShown: false,
};
export default MyPurchaseScreen;
