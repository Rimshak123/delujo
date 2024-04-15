import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import NormalButton from './NormalButton';

const Footer = ({  onLaterPress,text }) => {
  return (
    <View style={styles.container}>
      <NormalButton title="Next" width={140} height={40} borderRadius={20} marginTop={-20} backgroundColor='#7E4FFE' />
      <TouchableOpacity style={[styles.laterButton]} onPress={onLaterPress}>
        <Text style={[styles.laterButtonText]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -220,
    height: 230,
    width: 400,
    backgroundColor: '#F3F3F3',
    borderTopRightRadius: 70,
    borderTopLeftRadius: 70,
  },
  laterButton: {
    marginTop: 20,
    alignSelf: 'center',
    borderBottomColor: '#7E4FFE',
    borderBottomWidth: 1.5,
  },
  laterButtonText: {
    color: '#7E4FFE',
    fontSize: 16,
  },
});

export default Footer;
