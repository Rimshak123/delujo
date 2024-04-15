import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import NormalButton from '../components/NormalButton';
import CustomButton from '../components/CustomButton';
import Banners from '../components/Banners';
import Bundles from '../components/Bundles';
import Profiles from '../components/Profiles';
import Textbar from '../components/Textbar';
const FeedBody = () => {
  return (
    // <ScrollView style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>Feed</Text>
        <ScrollView style={styles.mainContainer}>
        <Banners
          bannerImagePath={require('../assets/banner001.png')}
          // bannerText='amna'
          boxImagePath={require('../assets/ilustracion01.png')}
        />
        <Text style={styles.text1}>See more bundles</Text>
        <Bundles />
        <Profiles
          imagePath={require('../assets/profile-pic2.png')}
          name="Arturole"
          product="Puppies"
          seller="LVL 3"
        />
        <Profiles
          imagePath={require('../assets/profile-pic.png')}
          name="Aline404"
          product="Purses"
          seller="LVL 2"
        />
        <Textbar/>
         </ScrollView>
      </View>
   
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 400,
    borderTopRightRadius: 70,
    borderTopLeftRadius: 70,
  },
  container1: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    marginTop: 400,
    paddingTop: 150,
  },
  text: {
    color: '#7051C4',
    fontSize: 22,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 20,
    fontWeight: 'bold',
  },
  text1: {
    color: '#7051C4',
    fontSize: 14,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 100,
    marginLeft:30,
  },
});

export default FeedBody;
