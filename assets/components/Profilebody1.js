import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
//import Card from "../components/Card"
import Profilefooter from "./Profilefooter"
const Profilebody1 = () => {
  return (
   
    <View style={styles.container1}>
      <View style={styles.horizontalList}>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Listings</Text>
          <Text style={styles.itemText1}>38</Text>
          <View style={styles.horizontalLine}></View>
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Shares</Text>
          <Text style={styles.itemText1}>12K</Text>
          <View style={styles.horizontalLine}></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Followers</Text>
          <Text style={styles.itemText1}>8812</Text>
          <View style={styles.horizontalLine}></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item2}>
          <Text style={styles.itemText2}>Following</Text>
          <Text style={styles.itemText1}>9576</Text>
          <View style={styles.horizontalLine}></View>
        </TouchableOpacity>
       
      </View>
      
      <View style={styles.iconContainer}>
        <TouchableOpacity>
        <Image source={require('../assets/icon-funnel.png')} style={[styles.icon, styles.image1]} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require('../assets/icon-reorder.png')} style={[styles.icon, styles.image2]} />
      
      </TouchableOpacity>
      </View>
      <View>
      
  {/* First Card */}
  <View style={styles.card}>
    <Image source={require('../assets/foto-001.png')} style={styles.image} />
    <Text style={styles.title1}>By oj82</Text>
    <Text style={styles.title2}>Tommy Hillfinger Sweater</Text>
    <Text style={styles.title3}>$35</Text>
    <View style={styles.circle}>
      <Text style={styles.title}>Size: Various</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image source={require('../assets/icon-heart.png')} style={[styles.icon, styles.image3]} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/icon-bag.png')} style={[styles.icon, styles.image4]} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/icon-comment.png')} style={[styles.icon, styles.image5]} />
        </TouchableOpacity>
      </View>
    </View>
  </View>

  {/* Second Card */}
  <View style={styles.card3}>
    <Image source={require('../assets/foto-002.png')} style={styles.image} />
    <Text style={styles.title1}>By oj82</Text>
    <Text style={styles.title2}>Tommy Hillfinger Shirt</Text>
    <Text style={styles.title3}>$50</Text>
    <View style={styles.circle}>
      <Text style={styles.title}>Size: Large</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image source={require('../assets/icon-heart.png')} style={[styles.icon, styles.image3]} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/icon-bag.png')} style={[styles.icon, styles.image4]} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/icon-comment.png')} style={[styles.icon, styles.image5]} />
        </TouchableOpacity>
      </View>
    </View>
  </View>
  {/* <Profilefooter/> */}
  
    </View>
    
  </View>


    




    
  );
};

const styles = StyleSheet.create({
  container1: {
    backgroundColor: '#E9E9EB',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop:-4,
    height: 800,
    borderTopRightRadius: 110,
  },
  horizontalList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'F3F3F3',
    marginRight: 55,
  },
  item: {
    padding: 14,
    borderRadius: 5,
  },
  itemText: {
    color: '#808080',
    marginLeft:5,
  },
  itemText1: {
    color: '#7251C3',
    marginLeft:5,
  },
  horizontalLine: {
    borderBottomWidth:1,
    borderBottomColor: '#696969',
    marginTop:5,
    width:'190%',
  },
  itemText2: {
    marginTop: 14,
    color: '#808080',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 30,
  },
  icon: {
    width: 20,
    height: 20,
  },
  image1: {
    width: 15, 
    height: 15,
    marginTop:-16,
    marginLeft:250, 
  },
  image2: {
    width: 20, 
    height: 15,
    marginTop:-14,
  },


  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 20,
    margin: 20,
     maxWidth: 160, 
    shadowColor: '#000',
   shadowOpacity: 0.1,
    shadowRadius: 4,
    marginTop:10,
    height:290,
    marginLeft:20,
    //flexDirection:'row',
  },
  
  
      card3: {
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          padding: 20,
          margin: 20,
          //width: 306, // Set the width to 306
          maxWidth: 190, // Set the maximum width to 160
          shadowColor: '#000',
         // shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
         // marginTop:30,
        //  marginTop:-10,
         // elevation: 2, // for android shadow
          height:290,
          marginLeft:182,
          marginTop:-310,
         // flexDirection:'row',
        },
       

  
image: {
    width: 145,
    height: 130,
    marginBottom: 100,
    borderRadius: 8,
  // marginRight:30,
  marginLeft:-13,
  marginTop:-13,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title1:{
  color:'#808080',
  marginTop:-96,
  fontSize:12,
  },
  title2:{
  fontSize:13,
 // marginLeft:-1,
  },
  title3:
  {
  fontWeight:'bold',
  marginTop:20,
  fontSize:16,
  },

  circle: {
      position: 'absolute',
      top: -8,
      right: -20,
      width: 90,
      height: 20,
      //borderRadius: 35,
      backgroundColor:'#7252C5',
      zIndex: -1,
      marginRight:30,
      //marginLeft:20,
      marginTop:200,
    },
    title:{
      color:'#f4f0ec',
      marginLeft:5,
    },
    image3:{
      width: 19, 
      height: 16,
    marginLeft:-70,
      marginTop:40,
    },
    image4:{
      width: 24, 
      height: 17,
      marginLeft:-30,
      marginTop:40,
    },
    image5:{
      width: 22, 
      height: 18,
      marginLeft:20,
      marginTop:40,
    },
});

export default Profilebody1;