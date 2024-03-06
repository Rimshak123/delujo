import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SmallBoxWithText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>2 Offers</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 75,
    height: 23,
    backgroundColor: 'green',  // Adjust the background color as needed
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#7252C5',  
    marginTop:30,
    // Adjust the border radius for rounded corners
  },
  text: {
    color: 'white',  // Adjust the text color as needed
    fontSize: 10,  // Adjust the font size as needed
    fontWeight: 'bold',
  },
});

export default SmallBoxWithText;
