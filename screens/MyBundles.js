
import React from 'react';import { View, Text, StyleSheet } from 'react-native';
import HeaderWithSearchBar from '../components/HeaderWithSearchBar';
// import Body from '../components/Body';

const MyBundles = () => {
  return (
    <View style={styles.container}>
      <HeaderWithSearchBar/>
      {/* <Body />   */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7050C3',
  },
});
MyBundles.options = {
  headerShown: false,
};
export default MyBundles;
