import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for icons
//import BodyofPs from './BodyofPs';

const Headerbackground = ({}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity  style={styles.leftContainer}>
        <Ionicons name="arrow-back" size={24} color="white" style={styles.icon} />
        <Text style={styles.title}>New People</Text>
      </TouchableOpacity>
      <View style={styles.rightContainer} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7251C3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    //paddingHorizontal: 15,
   paddingTop: 30,
   paddingBottom:40,
    height:140,
    marginBottom:600,
    
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    //marginRight: 10,
    marginLeft:10,
    //marginBottom:30,
  },
  title: {
    color: 'white',
    fontSize: 22,
    marginLeft:92,
    fontWeight:'bold',
  },
  rightContainer: {
    flex: 1,
  },
});

export default Headerbackground;


