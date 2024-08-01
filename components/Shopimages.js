import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const Shopimages = ({ peopleText, viewAllText, imageSource, imageSource1, imageSource2, imageSource3, view1, view2, view3, view4 }) => {
  return (
    <View style={styles.container}>
      <View style={styles.additionalContent}>
        <Text style={styles.additionalText1}>{peopleText}</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => { /* Handle onPress for icon 1 */ }}>
            <Image source={require('../assets/icon-chevron.png')} style={styles.icon1} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { /* Handle onPress for icon 2 */ }}>
            <Image source={require('../assets/icon-heart2.png')} style={styles.icon2} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { /* Handle onPress for icon 3 */ }}>
            <Image source={require('../assets/iconextend.png')} style={styles.icon3} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => { /* Handle onPress for View All */ }}>
          <Text style={styles.additionalText2}>{viewAllText}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>
        <View style={styles.imagesContainer}>
          <View style={styles.imageWithText}>
            <Image source={imageSource} style={styles.additionalImage} />
            <Text style={styles.Text}>{view1}</Text>
          </View>
          <View style={styles.imageWithText}>
            <Image source={imageSource1} style={styles.additionalImage} />
            <Text style={styles.Text}>{view2}</Text>
          </View>
          <View style={styles.imageWithText}>
            <Image source={imageSource2} style={styles.additionalImage} />
            <Text style={styles.Text}>{view3}</Text>
          </View>
          <View style={styles.imageWithText}>
            <Image source={imageSource3} style={styles.additionalImage} />
            <Text style={styles.Text}>{view4}</Text>
          </View>
        </View>
      </ScrollView>
         </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  additionalContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#e5e4e2',
    padding: 5,
    width: 350,
    marginTop: 80,
  },
  additionalText1: {
    fontSize: 14,
    color: '#7252C5',
    left: 10,
  },
  additionalText2: {
    fontSize: 14,
    color: '#808080',
    left: -20,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon1: {
    width: 22,
    height: 21,
    marginRight: 20,
    left: -23,
  },
  icon2: {
    width: 19,
    height: 16,
    top: 5,
    marginRight: 20,
    left: -10,
  },
  icon3: {
    width: 16,
    height: 21,
    marginRight: 10,
    top: 3,
  },
  imagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
  },
  imageWithText: {
    alignItems: 'center',
    marginRight: 10,
  },
  additionalImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: '#7252C5',
  },
  Text: {
    fontSize: 12,
    color: '#808080',
    marginTop: 5,
  },
});

export default Shopimages;