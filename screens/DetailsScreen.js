import React from 'react';
import { View, StyleSheet, Alert, Image, Text } from 'react-native';
import Header from '../components/Header';
import DetailBody from '../components/DetailBody';

const DetailsScreen = () => {

  return (
    <View style={styles.container}>

      <Header

        customText="Details"
        headerTextSize={20}
        headerTextWeight="bold"
        headerFlex={0}
        imageWidth2={25}
        imageLeft2={-160}
        imageHeight2={20}
        imageTop2={-50}

        imagePath2={require('../assets/icon-back.png')}

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
