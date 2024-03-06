

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Body from '../components/Body';
// import BagBox from '../components/BagBox';
//import Offers from '../components/Offers';
const MyBundles = () => {
  return (
    <View style={styles.container}>
      {/* Header Component */}
      <Header
        onHamburgerPress={() => {
          console.log('Hamburger icon pressed');
        }}
        onAddFriendPress={() => {
          console.log('Add a Friend icon pressed');
        }}
        onLikePress={() => {
          console.log('Like icon pressed');
        }}
      />
      {/* <Offers/> */}
{/* <BagBox/> */}
<Body />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: '#7252C5',
  },
});

export default MyBundles;
