// BodySection.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BagBox from '../components/BagBox';

const Body = () => {
  return (
    <View style={styles.bodyContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Your Bundles
        </Text>
        <Text style={styles.topRightText}>
          Sell
        </Text>
      </View>
      <Text style={styles.secondaryText}>
        Stuff you are selling      </Text>
      <BagBox />
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    //padding: 40,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: "#F0F0F0",
    borderTopLeftRadius: 65,
    borderTopRightRadius: 65,
  },
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    // padding: 40,
    paddingTop:50,
    paddingLeft:40,
  },
  headerText: {
    fontSize: 20,
    color: "#7051C4",
    fontWeight: 'bold',
  },
  topRightText: {
    fontSize: 14,
    color: "#ADADAD",
    paddingRight:30,
  },
  secondaryText: {
    fontSize: 16, 
    color: "#7051C4",  
   // marginTop: 7, 
paddingLeft:40,
  },
});

export default Body;
