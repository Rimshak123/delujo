// StripeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StripeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Stripe Screen</Text>
      {/* Implement Stripe integration here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StripeScreen;
