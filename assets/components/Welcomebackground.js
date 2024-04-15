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
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.closeText}>×</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.heading2}>{heading2}</Text>
        <Text style={styles.text}>{firstLine}</Text>
        <Text style={styles.text}>{secondLine}</Text>
        <Text style={styles.text}>{thirdLine}</Text>
      </View>
      <View style={styles.container1}>
        <View style={styles.imageContainer}>
          <TouchableOpacity>
            <Image source={imageSource} style={styles.image} />
            <Text style={styles.imageText1}>{Image1}</Text>
            <Text style={styles.imageText2}>{Image5}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={imageSource2} style={styles.image} />
            <Text style={styles.imageText3}>{Image2}</Text>
            <Text style={styles.imageText4}>{Image6}</Text>
            <TouchableOpacity style={styles.tickContainer}>
              <View style={styles.circle}>
                <Text style={styles.tickIcon}>✓</Text>
              </View>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={imageSource3} style={styles.image} />
            <Text style={styles.imageText5}>{Image3}</Text>
            <Text style={styles.imageText6}>{Image7}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={imageSource4} style={styles.image} />
            <Text style={styles.imageText7}>{Image4}</Text>
            <Text style={styles.imageText8}>{Image8}</Text>
          </TouchableOpacity>

        </View>

      </View>

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7E4FFE',
    width: 400,
    height: 900,
    padding: 20,
  },
  closeText: {
    fontSize: 40,
    top: 25,
    width: 40,
    color: '#F3F3F3',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
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
    color: 'white',
    marginBottom: 20,
  },
  container1: {
    backgroundColor: '#7E4FFE',
    marginTop: 50, 
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
    marginRight: 60,
  },
  image: {
    height: 130,
    width: 130,
    borderRadius: 65,
    margin: 10, 
    borderColor: 'green',
    borderWidth: 2,
  },
  iconContainer: {
    position: 'absolute',
    top: 30,
    right: 30,
    zIndex: 1,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 128,
    marginBottom: -24,
    marginTop: -130,
  },
  tickIcon: {
    fontSize: 10,
    color: 'white',
  },
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
});

export default Welcomebackground;