import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import LikeIcon from '../icons/LikeIcon';
import Offers from '../components/Offers';
const BagBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Thule Paramount        </Text>
        <Text style={styles.text2}>
          You put this on sale 5 days ago  </Text>
         
        <Offers />
        
      </View>
      
     
      
      <View style={styles.bottonbar}></View>
      <Image
        source={require('../assets/mochila001.png')} // Replace with your actual image path
        style={styles.image}
        resizeMode="cover"
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    width: 350,
    height: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 20,
    paddingLeft: 5,
  },
  textContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-start',
    marginTop: 15,
    marginRight: 30,

  },
  text: {
    fontSize: 13,
    color: '#333', // Adjust the color as needed
  },
  text2: {
    fontSize: 12,
    color: '#888888', // Adjust the color as needed
  },
 
  
  text3: {
    fontSize: 14,
    color: '#333',
    fontWeight:"bold",
   
  },
  image: {
    marginLeft: 10,
    width: '35.8%',
    height: '85.4%',
    marginBottom: 12,
  },
  bottonbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    width: 335,
    borderTopRightRadius: 45,
    borderBottomLeftRadius: 10,
    backgroundColor: '#7252C5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BagBox;
