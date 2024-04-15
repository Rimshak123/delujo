import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
// import Allcategory from '../components/Allcategory';
// import CustomButton from '../components/CustomButton';
import Allcategory from './Allcategory';

const BodyofPs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <View style={styles.btn}>
          <TouchableOpacity style={styles.leftButton}>
            <Text style={{color: '#fff'}}>Fresh Clothes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightButton}>
            <Text style={{color: '#808080'}}>Just joined</Text>
          </TouchableOpacity>
        </View>
        <Allcategory />

        {/* First Image */}
        <View style={styles.imageContainer}>
          <Image source={require('../assets/profile-pic.png')} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.imageText}>AyeshaAli</Text>
            <Text style={{color: '#808080'}}>@ashi12</Text>
          </View>
          <TouchableOpacity style={styles.followButton}>
            <Text style={{color: '#fff'}}>Follow</Text>
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
            <Text style={{color: '#808080'}}>@basit112</Text>
          </View>
          <TouchableOpacity style={styles.followButton}>
            <Text style={{color: '#fff'}}>Follow</Text>
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
    width: 395, 
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    backgroundColor: "#E7E7E7",
    padding: 20,
    height: 780,
    marginBottom: 600,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 25,
    marginLeft: 20,
  },
  textContainer: {
    marginLeft: 25,
    marginTop:-35,
    marginRight: 'auto', 
  },
  username: {
    color: '#808080',
  },
  followButton: {
    backgroundColor: '#7252C5',
    padding: 6,
    paddingLeft:20,
    borderRadius: 10,
    marginRight: 70,
    marginTop: 70,
    width:80,

  }, 
  crossButton: {
    padding: 5,
    marginRight: 30,
    marginTop:-40,

  },
  crossButtonText: {
    color: '#7252C5',
    fontSize: 25,
  },
  leftButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: 155,
    height: 40,
    fontSize: 10,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 30,
    marginLeft: 50,
    backgroundColor: "#7252C5",

  },
  rightButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: 155,
    height: 40,
    fontSize: 10,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 20,
    marginTop: 30,
    backgroundColor: "#DDDEDC",
  },
  btn: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: -80,
    left:-25,
  }
});

export default BodyofPs;
