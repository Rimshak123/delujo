import { StyleSheet,  View, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

const Shopheader = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.searchBar}>
        <Icon name="search" size={20} color="#555" style={styles.searchIcon} />
        <TextInput
          placeholder="Search for stuff!"
          style={styles.input}
          
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.hamburguer}>
        <Image
          source={require('../assets/icon-hamburguer-menu.png')}
          style={styles.Image1} // Add style for the image
        />
      </TouchableOpacity>


      <TouchableOpacity style={styles.addFriendIcon}>
        <Image
          source={require('../assets/icon-add-user.png')}
          style={styles.addFriendImage} // Add style for the image
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.hearticon}>
        <Image
          source={require('../assets/icon-heart2.png')}
          style={styles.Image} // Add style for the image
        />
      </TouchableOpacity>
    
</View>
   
    
  );
};

export default Shopheader;

const styles = StyleSheet.create({
  TextH: {
    marginTop: 10,
    textAlign: "center",
    color: "#fff",
  },
  container: {
    backgroundColor: "#7251C3",
    paddingTop: 200, // Adjusted paddingTop to increase height
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
    marginTop: -270,
    marginLeft: 29,
    height: 40,
    width: 250,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  searchIcon: {
    marginRight: 10,
    //:50,
  },
  magnifierIcon: {
    position: 'absolute',
    right: 20,
    top: 10,
  },
  addFriendIcon: {
    position: 'absolute',
    
    right: 20,
    marginRight:20,
  },
  addFriendImage: {
    width: 18, 
    height: 16, 
     marginTop:-40,
  },
  hearticon:
  {
    position: 'absolute',
    marginTop: 40,
    right: 20,
    marginRight:-4,
  },
  Image:{
    width: 19, 
    height: 16,
    marginTop:-40,
  },
  hamburguer:{
    position: 'absolute',
    marginTop: 50,
    right: 20,
    marginRight:310,
  },
  Image1:{
    width: 19, 
    height: 16,
    marginTop:-40,
  },
 
});


