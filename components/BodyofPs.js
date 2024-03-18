import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Allcategory from '../components/Allcategory';
import CustomButton from './CustomButton';
//import Images from '../components/Images';
//import Footer from "./componets/Footer";
const BodyofPs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <View style={styles.btn}>
            <TouchableOpacity style={styles.leftButton}>
            <Text style={styles.buttonText}>Fresh Clothes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightButton}>
            <Text style={styles.buttonText1}>Just joined</Text>
          </TouchableOpacity>
          </View>
        <Allcategory/>
        
      {/* First Image */}
      <View style={styles.imageContainer}>
        <Image source={require('../assets/profile-pic.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.imageText}>AyeshaAli</Text>
          <Text style={styles.username}>@ashi12</Text>
        </View>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followButtonText}>Follow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.crossButton}>
          <Text style={styles.crossButtonText}>X</Text>
        </TouchableOpacity>
        
      </View>

      {/* Second Image */}
      <View style={styles.imageContainer}>
        <Image source={require('../assets/profile-pic2.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.imageText}>AbdulBasit</Text>
          <Text style={styles.username}>@basit112</Text>
        </View>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followButtonText}>Follow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.crossButton}>
          <Text style={styles.crossButtonText}>X</Text>
        </TouchableOpacity>
      
      </View>
     
    </View>
        
        </View>
     
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyContainer: {
    width: 395, // Adjust width as needed
    borderTopLeftRadius: 100,
   borderTopRightRadius: 100,
   backgroundColor: "#dcdcdc",
   padding: 20,
   //marginBottom: 225,
   height:700,
   marginBottom:600,
  },
  
  
  imageContainer: {
   flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop:20,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 25,
    marginLeft:20,
  },
  textContainer: {
    marginLeft: 10,
    marginRight: 'auto', // Pushes the text to the left, allowing buttons to appear on the right
  },
  imageText: {
    //fontWeight: 'bold',
    color:'#7252C5',
  },
  username: {
    color: '#808080',
  },
  followButton: {
    backgroundColor: '#7252C5',
    padding: 6,
    borderRadius: 5,
    marginRight: 110,
    marginTop: 80,
   
  },
  followButtonText: {
    color: '#fff',
  },
  crossButton: {
    padding: 5,
    marginRight: 20,
  },
  crossButtonText: {
    color: '#7252C5',
    fontSize: 30,
  }, 
  leftButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: 130,
    height: 40,
    fontSize: 10,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 30,
    //marginBottom:20,
   marginLeft:50,
   //flexDirection:'row',
   backgroundColor:"#7252C5",
    
  },
  rightButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: 150,
    height: 40,
    fontSize: 10,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 20,
    marginTop:30,
    backgroundColor:"#bebebe",
  },
  buttonText: {
    color: '#fff',
  },
  buttonText1:{
    color:'#808080',
  },
  btn:{
    display: 'flex',
    flexDirection: 'row',
    marginBottom:-80,
  }
  
});

export default BodyofPs;
