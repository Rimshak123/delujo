import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for icons
import Profilebody from '../components/Profilebody';
//import BodyofPs from './BodyofPs';

const Profileheader = ({}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftContainer}>
        <Ionicons name="arrow-back" size={24} color="white" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.threeDotContainer}>
        <Ionicons name="ellipsis-horizontal" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>My Profile</Text>
      
      <View style={styles.imageContainer}>
        <Image source={require('../assets/profile-pic2.png')} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.imageText}>Omar j</Text>
        <Text style={styles.username}>@oj82</Text>
        
      </View>
      <Profilebody/>
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7251C3',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 40,
    height: 400,
    marginBottom: 600,
    position: 'relative',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginRight: 290,
    marginTop: 20,
  },
  icon: {
    marginLeft: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
   // marginBottom:3,
    marginTop:-2,

   
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  imageText: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  username: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 110, // Adjust width as needed
    height: 110, // Adjust height as needed
  },
  threeDotContainer: {
    position: 'absolute',
    top: 50,
    right: 15,
   
  },
 



});

export default Profileheader;
