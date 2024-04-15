<<<<<<< HEAD


import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BagBox from './BagBox';
//import FooterDetail from '../components/FooterDetail';
// bundles Screen
=======
// BodySection.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BagBox from '../components/BagBox';

>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
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
<<<<<<< HEAD
    backgroundColor: "#F3F3F3",
    borderTopLeftRadius: 65,
    borderTopRightRadius: 65,
  },

=======
    backgroundColor: "#F0F0F0",
    borderTopLeftRadius: 65,
    borderTopRightRadius: 65,
  },
  
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    // padding: 40,
<<<<<<< HEAD
    paddingTop: 50,
    paddingLeft: 40,
=======
    paddingTop:50,
    paddingLeft:40,
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
  },
  headerText: {
    fontSize: 20,
    color: "#7051C4",
    fontWeight: 'bold',
  },
  topRightText: {
    fontSize: 14,
    color: "#ADADAD",
<<<<<<< HEAD
    paddingRight: 30,
  },
  secondaryText: {
    fontSize: 16, 
    color: "#7051C4",
    paddingLeft: 40,
=======
    paddingRight:30,
  },
  secondaryText: {
    fontSize: 16, 
    color: "#7051C4",  
   // marginTop: 7, 
paddingLeft:40,
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
  },
});

export default Body;
