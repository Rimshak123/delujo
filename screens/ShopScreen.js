// SimpleTextComponent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ShopScreen = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Shop Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

ShopScreen.options = {
  headerShown: false,
};

export default ShopScreen;
