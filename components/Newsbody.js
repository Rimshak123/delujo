import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity,Image } from 'react-native';

import Newsimages from '../components/Newsimages';

const Newsbody = () => {
  return (
    <View style={styles.container}>
      <View style={styles.newsContainer}>
        <Text style={styles.newsTitle}>News</Text>
        <View style={styles.horizontalList}>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>People</Text>
          </TouchableOpacity>
       
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText1}>Comments</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText2}>Offers</Text>
          
          
        </TouchableOpacity>
       
      </View>  
      <View style={styles.newcontainer}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width:400,  }}>
      {/* Use the ProfileCard component */}
      <Newsimages
        imageSource={require('../assets/profile-pic.png')}
        bottomImageSource={require('../assets/btn-Mas.png')}
        name="Monitajack"
        selling="is selling"
        device="Kingstone USB"
        years="21 days ago"
      />
      <Newsimages
        imageSource={require('../assets/profile-pic2.png')}
        bottomImageSource={require('../assets/btn-Mas2.png')}
        name="Mominshaf"
        selling="is selling"
        device="Phone Samsung"
        years="30 days ago"
      />
    </View>
</View>
</View>

</View>

    
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopRightRadius:70,
    borderTopLeftRadius:70,
    justifyContent: 'center',
    alignItems: 'center',
    width:400,
    backgroundColor: '#f3f3f3', 
    
 
  },
  newcontainer:{
backgroundColor:'#E7E7E7',
marginTop:60,
height:790,
// height:700

  },
  newsContainer: {
    padding: 20,
    height:650,
  
    marginTop:-100,
    
  },
  newsTitle: {
    // marginBottom:-50,
    //alignContent:'center',
    marginRight:10,
    fontSize: 24,
    left:165,
    // marginBottom:15,
    marginTop:80,
    fontWeight: 'bold',
    color: '#7252C5', // Text color for news title
  },
  itemText: {
    color: '#808080',
    marginLeft:25,
  },
  itemText1: {
    color: '#808080',
    marginLeft:10,
  },
  itemText2: {
    color: '#7252C5',
    marginLeft:10,
    marginRight:-10,
  },



  item: {
    padding: 14,
    borderRadius: 5,
    marginBottom:-69,
    marginTop:10,
  },
  horizontalList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'F3F3F3',
    marginTop:-7,
    marginRight: 50,
  },

 













});

export default Newsbody;