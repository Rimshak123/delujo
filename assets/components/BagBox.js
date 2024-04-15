import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import LikeIcon from '../icons/LikeIcon';
import Offers from './Offers';
import Bar from './Bar';
const BagBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Thule Paramount</Text>
        <Text style={styles.text2}>
          You put this on sale 5 days ago</Text>
        <Offers />
        <View style={styles.amount}>
          <Text style={{fontWeight:'bold',fontSize:18,marginTop:30}}>$35</Text>
          </View>
          <View style={styles.circle} />
          <View style={styles.dotscircle}> 
          <View style={styles.dot} />
      <View style={styles.dot} />
      <View style={styles.dot} /></View>
         
      </View>

    <View style={styles.bottombar}>
    <Image
        source={require('../assets/H-removebg-preview.png')} 
        style={styles.imagebar}
        resizeMode="cover"
      />
       
    </View>
      <Image
        source={require('../assets/mochila001.png')} 
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
    marginRight: 65,
  },
  dotscircle:{
    flexDirection:'row' ,
    position: 'absolute',
    marginTop: 47,
    marginLeft: 150,
  },
  amount:{
     position: 'absolute',
    marginTop: 32,
    marginLeft: 90,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor:'#7252C5',
    borderWidth:3,
    position:'absolute',
    marginTop: 24,
    marginLeft: 140,
  },
  dot:{
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor:'#7252C5',
    marginHorizontal: 2,
  },

  
  text: {
    fontSize: 13,
    color: '#333', 
  },
  text2: {
    fontSize: 10,
    color: '#888888', // Adjust the color as needed
  },


  text3: {
    fontSize: 14,
    color: '#333',
    fontWeight: "bold",

  },
  image: {
    marginLeft: 5,
    width: '35.8%',
    height: '85.4%',
    marginBottom: 12,
  },
  imagebar: {
    position:'absolute',
    marginLeft: 15,
    width: 38,
    height: 38,
    marginBottom: 12,
    flexDirection:'row',
    
  },
 
  bottombar: {
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
