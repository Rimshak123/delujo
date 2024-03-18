import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Welcomefooter = ({ onNextPress, onLaterPress }) => {
  return (
    <View style={styles.container2}>
      <TouchableOpacity style={styles.button} onPress={onNextPress}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.laterButton]} onPress={onLaterPress}>
        <Text style={[styles.buttonText, styles.laterButtonText]}>Do it later</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container2:{
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: -230,
  height: 230,
 // top: -30,
  width: 360,
  backgroundColor: '#dcdcdc',
  borderTopRightRadius: 60,
  borderTopLeftRadius: 60,
 // paddingBottom: -120,
 // marginBottom: -90, 
},
  button: {
    backgroundColor: '#7E4FFE', // Change to your desired button color
    height: 40,
    width: 150,
    marginTop:-15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:5,
  },
  buttonText: {
    color: '#fff', // Change to your desired text color
    fontSize: 16,
    //fontWeight: 'bold',
  },
  laterButton: {
    backgroundColor: '#dcdcdc',
    marginTop: 20,
    alignSelf: 'center', // Center the button horizontally
  },
  laterButtonText: {
    color: '#7E4FFE', // Change to your desired later button text color
  },
});

export default Welcomefooter;
