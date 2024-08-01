import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import HamburgerIcon from '../icons/HamburgerIcon';
import AddFriendIcon from '../icons/AddFriendIcon';
import LikeIcon from '../icons/LikeIcon';
import SearchBar from './SearchBar';



const HeaderWithSearchBar = ({ onHamburgerPress, onAddFriendPress, onLikePress, onSearch }) => {
  return (
    <View style={styles.headerContainer}>
    
      <View style={[styles.iconContainer ,styles.iconWithMargin]}>
      <Image
        source={require('../assets/DeLujo-Logo.png')} 
        style={styles.image}
      />

      </View>
      <SearchBar onSearch={onSearch} />
      <View style={{marginLeft:15}}/>
      <View style={[styles.iconContainer, { marginRight: 0 }]}>
        <AddFriendIcon  />
      </View>
     
      
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7050C3',
    paddingVertical: 10,
    paddingTop: 40,
    paddingBottom:15,
    width:'100%',
  },
  iconWithMargin: {
    top:4,
    right: 8,
  },
  iconContainer: {
    marginHorizontal: 10,
    top:5,
  },
  image: {
    width: 30,
    height: 28,
    marginTop:5,
    marginLeft:-30,
  },
});

export default HeaderWithSearchBar;
