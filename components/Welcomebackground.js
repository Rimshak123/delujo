// CustomComponent.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';


const Welcomebackground = ({ heading, smallheading,Image1,Image2,Image3,Image4,Image5,Image6,Image7,Image8, discription, discription1, imageSource, imageSource2, imageSource3, imageSource4, imageSource5 }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.closeText}>×</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.text1}>{heading}</Text>
        <Text style={styles.text2}>{smallheading}</Text>
        <Text style={styles.text3}>{discription}</Text>
        <Text style={styles.text4}>{discription1}</Text>
      </View>
      <View style={styles.container1}>
        <View style={styles.imageContainer}>
          <TouchableOpacity>
            <Image source={imageSource} style={styles.image} />
            <Text style={styles.imageText1}>{ Image1}</Text>
            <Text style={styles.imageText2}>{ Image5}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={imageSource2} style={styles.image} />
            <Text style={styles.imageText3}>{Image2}</Text>
             <Text style={styles.imageText4}>{ Image6}</Text>
            <TouchableOpacity style={styles.tickContainer}>
            <View style={styles.circle}>
              <Text style={styles.tickIcon}>✓</Text>
            </View>
          </TouchableOpacity> 
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={imageSource3} style={styles.image} />
            <Text style={styles.imageText5}>{Image3}</Text>
             <Text style={styles.imageText6}>{ Image7}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={imageSource4} style={styles.image} />
            <Text style={styles.imageText7}>{Image4}</Text>
             <Text style={styles.imageText8}>{ Image8}</Text>
          </TouchableOpacity>
          
        </View>
       
      </View>
     
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7E4FFE',
    width: 380,
    height: 800,
    padding: 20,
  },
  closeText: {
    fontSize: 40,
    top: 35,
    width: 30,
    color: '#F3F3F3',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:- 5, // Adjust as needed
    marginBottom: -30, // Adjust as needed
  },
  text1: {
    fontSize: 24,
    color: 'white',
  },
  text2: {
    fontSize: 11,
    color: 'white',
    marginBottom: 10,
    marginTop:5,
  },
  text3: {
    fontSize: 11,
    color: 'white',
    marginBottom: 10,
  },
  text4: {
    fontSize: 11,
    color: 'white',
    marginBottom: 20,
  },
  container1: {
    backgroundColor: '#7E4FFE',
    marginTop: 20, // Adjust as needed
    height: 400,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:60,
  },
  image: {
    height: 130,
    width: 130,
    borderRadius: 65,
    margin: 10, // Adjust as needed
    borderColor: 'green',
    borderWidth: 2,
  },
  iconContainer: {
    position: 'absolute',
    top: 30,
    right: 30,
    zIndex: 1,
   // marginLeft:30,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
     marginLeft:128,
     marginBottom:-24,
     marginTop:-130,
    // zIndex: 1,
  },
  tickIcon: {
    fontSize: 10,
    color: 'white',
  },
  imageText1:{
    color:'white',
    marginLeft:50,
      },
      
          imageText3:{
            color:'white',
            marginLeft:60,
              },
              imageText5:{
                color:'white',
                marginLeft:45,
                  },
                  imageText7:{
                    color:'white',
                    marginLeft:60,
                      },
imageText2:{
  color:'#d3d3d3',
marginLeft:35,
},
imageText4:{
  color:'#d3d3d3',
  marginLeft:40,
},
imageText8:{
  color:'#d3d3d3',
  marginLeft:45,
},
imageText6:{
  color:'#d3d3d3',
  marginLeft:30,
},
});

export default Welcomebackground;