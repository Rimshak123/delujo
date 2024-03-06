import React from 'react';
import { View, StyleSheet, Alert, Image, Text } from 'react-native';
import Header from '../components/Header';
import DetailBody from '../components/DetailBody';

const DetailsScreen = () => {
  const handleImagePress = () => {
    Alert.alert('Image Pressed', 'Do something when the image is pressed');
  };
  return (
    <View style={styles.container}>
      <Header
        showImage={true}
        headerTextSize={20}
        headerTextWeight="bold"
        customText="Details"
        headerFlex={0.1}
      />
      <DetailBody />
    </View>
  );
};

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#7252C5",
  },
});

export default DetailsScreen;
