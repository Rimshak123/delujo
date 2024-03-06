import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TextInput } from 'react-native';

const Textbar = ({ imagePath, labelText, placeholder, handleInputChange, value }) => {
    return (
      <View style={{ marginTop: 10 }}>
        <Image source={imagePath} style={styles.image} resizeMode="cover" />
        <Text style={styles.imageText}>{labelText}</Text>
        <View style={styles.textInput}>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            onChangeText={handleInputChange}
            value={value}
          />
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 65,
    },
    textInput: {
        position: 'absolute',
        top: 12, 
        left: 20, 
        width: 290,
        height: 35, 
        backgroundColor: '#F3F3F3', 
        borderRadius: 20,
    },
    imageText: {
        position: 'absolute',
        left: 33,
        bottom: 55, 
        fontSize: 11,
        color: '#868688',
    },
});

export default Textbar;
