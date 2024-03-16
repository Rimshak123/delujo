import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';


const Newimages = ({ imageSource,bottomImageSource, name,selling,device,years }) => {
  return (
    <View style={styles.profileCard}>
      <Image source={imageSource} style={styles.profileImage} />
      <View style={styles.additionalImageContainer}>
      <TouchableOpacity onPress={() => {/* Handle onPress event */}}>
          <Image source={bottomImageSource} style={styles.bottomImage} />
        </TouchableOpacity>

      </View>
      <View style={styles.profileDetails}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.selling}>{selling}</Text>
        <Text style={styles.device}>{device}</Text>
        <Text style={styles.years}>{years}</Text>
      </View>
      
    </View>
  );
};


const styles = StyleSheet.create({
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
    marginTop:-200,
    
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 40,
    marginBottom:-10,
  },
  profileDetails: {
    marginLeft: 20,
  },
  name: {
    fontSize: 14,
   // fontWeight: 'bold',
   color:"#7051C4"
  },
  selling: {
    fontSize: 12,
    color: '#888',
    //flexDirection:'row',
    marginLeft:76,
    marginTop:-18,
  },
  device:{
color:'black',
fontWeight:'bold',
fontSize:11,
marginLeft:130,
marginTop:-15,
  },
  years:{
color: '#888',
marginTop:10,
  },
  bottomImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginTop:60,
   // marginRight:10,
   marginLeft:-20,
  },
});



export default Newimages;
