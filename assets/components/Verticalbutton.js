import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const VerticalButtons = () => {
  return (
    <View style={styles.container}>
      {/* First Button */}
      <TouchableOpacity style={[styles.button, { backgroundColor: '#7251C3' }]}>
        <Text style={styles.buttonText1}>ALL</Text>
      </TouchableOpacity>

      {/* Second Button */}
      <TouchableOpacity style={[styles.button, { backgroundColor: '#c0c0c0' }]}>
        <Text style={styles.buttonText}>CLOSET</Text>
      </TouchableOpacity>

      {/* Third Button */}
      <TouchableOpacity style={[styles.button, { backgroundColor: '#d3d3d3' }]}>
        <Text style={styles.buttonText}>BOUTIQUE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column', // Ensures items are stacked vertically
        justifyContent: 'center',
        alignItems: 'center',
      },
      button: {
        width: 50,
        height: 100,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      },
      textContainer: {
        flexDirection: 'column', // Text is arranged in a column format
        alignItems: 'center',
      },
      buttonText: {
        color: 'black',
        fontSize: 16,
        
      },
});

export default VerticalButtons;
