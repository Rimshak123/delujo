import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Images = () => {
  return (
    <View style={styles.container}>
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
  );
};

export default Images;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    padding: 10,
    height:700,
    backgroundColor: '#d3d3d3',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop:20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 25,
    borderColor:'#a9a9a9',
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
    marginRight: 130,
    marginTop: 80,
  },
  followButtonText: {
    color: '#fff',
  },
  crossButton: {
    padding: 5,
    marginLeft: 10,
  },
  crossButtonText: {
    color: '#7252C5',
    fontSize: 30,
  },
});
