<<<<<<< HEAD
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
//Find Friends
const Welcomebackground = ({ heading,heading2, text, Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, discription, discription1, imageSource, imageSource2, imageSource3, imageSource4, imageSource5 }) => {

  const textParts = text.split(' ');
  const firstMidpoint = Math.ceil(textParts.length / 3);
  const secondMidpoint = Math.ceil((1.8 * textParts.length) / 3);
  const firstLine = textParts.slice(0, firstMidpoint).join(' ');
  const secondLine = textParts.slice(firstMidpoint, secondMidpoint).join(' ');
  const thirdLine = textParts.slice(secondMidpoint).join(' ');
=======
// CustomComponent.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';


const Welcomebackground = ({ heading, smallheading,Image1,Image2,Image3,Image4,Image5,Image6,Image7,Image8, discription, discription1, imageSource, imageSource2, imageSource3, imageSource4, imageSource5 }) => {
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.closeText}>×</Text>
      </TouchableOpacity>
      <View style={styles.content}>
<<<<<<< HEAD
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.heading2}>{heading2}</Text>
        <Text style={styles.text}>{firstLine}</Text>
        <Text style={styles.text}>{secondLine}</Text>
        <Text style={styles.text}>{thirdLine}</Text>
=======
        <Text style={styles.text1}>{heading}</Text>
        <Text style={styles.text2}>{smallheading}</Text>
        <Text style={styles.text3}>{discription}</Text>
        <Text style={styles.text4}>{discription1}</Text>
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
      </View>
      <View style={styles.container1}>
        <View style={styles.imageContainer}>
          <TouchableOpacity>
            <Image source={imageSource} style={styles.image} />
<<<<<<< HEAD
            <Text style={styles.imageText1}>{Image1}</Text>
            <Text style={styles.imageText2}>{Image5}</Text>
=======
            <Text style={styles.imageText1}>{ Image1}</Text>
            <Text style={styles.imageText2}>{ Image5}</Text>
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={imageSource2} style={styles.image} />
            <Text style={styles.imageText3}>{Image2}</Text>
<<<<<<< HEAD
            <Text style={styles.imageText4}>{Image6}</Text>
            <TouchableOpacity style={styles.tickContainer}>
              <View style={styles.circle}>
                <Text style={styles.tickIcon}>✓</Text>
              </View>
            </TouchableOpacity>
=======
             <Text style={styles.imageText4}>{ Image6}</Text>
            <TouchableOpacity style={styles.tickContainer}>
            <View style={styles.circle}>
              <Text style={styles.tickIcon}>✓</Text>
            </View>
          </TouchableOpacity> 
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={imageSource3} style={styles.image} />
            <Text style={styles.imageText5}>{Image3}</Text>
<<<<<<< HEAD
            <Text style={styles.imageText6}>{Image7}</Text>
=======
             <Text style={styles.imageText6}>{ Image7}</Text>
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={imageSource4} style={styles.image} />
            <Text style={styles.imageText7}>{Image4}</Text>
<<<<<<< HEAD
            <Text style={styles.imageText8}>{Image8}</Text>
          </TouchableOpacity>

        </View>

      </View>

    </View>

=======
             <Text style={styles.imageText8}>{ Image8}</Text>
          </TouchableOpacity>
          
        </View>
       
      </View>
     
    </View>
    
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7E4FFE',
<<<<<<< HEAD
    width: 400,
    height: 900,
=======
    width: 380,
    height: 800,
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
    padding: 20,
  },
  closeText: {
    fontSize: 40,
<<<<<<< HEAD
    top: 25,
    width: 40,
=======
    top: 35,
    width: 30,
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
    color: '#F3F3F3',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
<<<<<<< HEAD
    marginTop: - 5, 
    marginBottom: -30, 
  },
  heading: {
    fontSize: 24,
    color: 'white',
    marginBottom: -2,
  },
  heading2: {
    fontSize: 16,
=======
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
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
    color: 'white',
    marginBottom: 20,
  },
  container1: {
    backgroundColor: '#7E4FFE',
<<<<<<< HEAD
    marginTop: 50, 
=======
    marginTop: 20, // Adjust as needed
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
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
<<<<<<< HEAD
    marginRight: 60,
=======
    marginRight:60,
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
  },
  image: {
    height: 130,
    width: 130,
    borderRadius: 65,
<<<<<<< HEAD
    margin: 10, 
=======
    margin: 10, // Adjust as needed
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
    borderColor: 'green',
    borderWidth: 2,
  },
  iconContainer: {
    position: 'absolute',
    top: 30,
    right: 30,
    zIndex: 1,
<<<<<<< HEAD
=======
   // marginLeft:30,
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
<<<<<<< HEAD
    marginLeft: 128,
    marginBottom: -24,
    marginTop: -130,
=======
     marginLeft:128,
     marginBottom:-24,
     marginTop:-130,
    // zIndex: 1,
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
  },
  tickIcon: {
    fontSize: 10,
    color: 'white',
  },
<<<<<<< HEAD
  imageText1: {
    color: 'white',
    marginLeft: 50,
  },

  imageText3: {
    color: 'white',
    marginLeft: 60,
  },
  imageText5: {
    color: 'white',
    marginLeft: 45,
  },
  imageText7: {
    color: 'white',
    marginLeft: 60,
  },
  imageText2: {
    color: '#d3d3d3',
    marginLeft: 35,
  },
  imageText4: {
    color: '#d3d3d3',
    marginLeft: 40,
  },
  imageText8: {
    color: '#d3d3d3',
    marginLeft: 45,
  },
  imageText6: {
    color: '#d3d3d3',
    marginLeft: 30,
  },
  text: {
    fontSize: 14,
    color: 'white',
  },
=======
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
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
});

export default Welcomebackground;