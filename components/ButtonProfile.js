import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ButtonProfile = ({text,marginTop, imageLeft, imageRight,onPress}) => {
  return (
    <View style={[styles.container, styles.shadowContainer,{marginTop}]}>
      <View style={styles.content}>
        <Text style={[styles.text, { right: imageRight }]}>{text}</Text>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={require('../assets/icon-chevron.png')}
            style={[styles.image, { left: imageLeft } ]}
          />
        </TouchableOpacity>
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3E3E3', // Example background color
    height: 60, // Example height
    width: '100%', // Example width
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:"#7151C4",
    borderTopWidth: 1.5,
    position:"absolute",
    // flex:1,
    
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
   
  },
  text: {
    marginRight: 10,
    fontSize: 12,
    color:"#7050C3",
  },
  shadowContainer: {
    elevation: 0,
  },

});

export default ButtonProfile;
