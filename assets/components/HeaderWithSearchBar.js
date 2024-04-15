import React from 'react';
import { View, StyleSheet } from 'react-native';
import HamburgerIcon from '../icons/HamburgerIcon';
import AddFriendIcon from '../icons/AddFriendIcon';
import LikeIcon from '../icons/LikeIcon';
import SearchBar from './SearchBar';



const HeaderWithSearchBar = ({ onHamburgerPress, onAddFriendPress, onLikePress, onSearch }) => {
  return (
    <View style={styles.headerContainer}>
    
      <View style={[styles.iconContainer ,styles.iconWithMargin]}>
      <HamburgerIcon onPress={onHamburgerPress} />
      </View>
      <SearchBar onSearch={onSearch} />
      <View style={[styles.iconContainer]}>
        <AddFriendIcon onPress={onAddFriendPress} />
      </View>
     
      <View style={[styles.iconContainer]}>
      <LikeIcon onPress={onLikePress}  />
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
});

export default HeaderWithSearchBar;
