import React from 'react';
import { View, Image, StyleSheet,Text } from 'react-native';
import { Icon } from 'react-native-elements';

const Bar = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/CuadroRedondeado.png')}
        style={styles.mainImage}
        resizeMode="cover"
      />

      <View style={styles.overlayContainer}>
        {/* <Image
          source={require('../assets/icon-heart2.png')}
          style={styles.overlayImage1}
          resizeMode="cover"
        /> */}<Icon name="favorite" type="material" size={25} color="#E1E1E1" /> 
          <View style={{marginRight:5,}}></View>
    <Text style={styles.icon}>Like</Text>
    <View style={{marginRight:25,}}></View>
        {/* <Image
          source={require('../assets/icon-comment.png')}
          style={styles.overlayImage}
          resizeMode="cover"
        />  */}
        <Icon name="comment" type="material" size={25} color="#E1E1E1" />
        <View style={{marginRight:5,}}></View>
        <Text style={styles.icon}>Comments</Text>
        <View style={{marginRight:10,}}></View>
        <Image
          source={require('../assets/icon-comment.png')}
          style={styles.overlayImage}
          resizeMode="cover"
        />
          <View style={{marginRight:5,}}></View>
         <Text style={styles.icon}>Share</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  mainImage: {
    width: 340,
    height: 42, // Adjust the height based on your requirement
  },
  overlayContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  overlayImage: {
    width: 25,
    height: 25,
   // borderRadius: 25,
    margin: 5,
  
    
  },
  overlayImage1: {
    width: 25,
    height: 25,
   // borderRadius: 25,
    margin: 5,
  
  },
  icon:{
    color:"white",
    fontSize:13,
  },
});

export default Bar;
