import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const CustomButton = (backgroundColor,customtext,leftButton,rightButton) => {
  const [leftButtonPressed, setLeftButtonPressed] = useState(false);
  const [rightButtonPressed, setRightButtonPressed] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[ styles.leftButton  ]}
        onPressIn={() => setLeftButtonPressed(true)}
        onPressOut={() => setLeftButtonPressed(false)}
      >
        <Text style={{ color: leftButtonPressed ? '#7252C5' : '#000' }}>
          I am new here!
        </Text>
      </TouchableOpacity>
      <View style={styles.line} />
      <TouchableOpacity
        style={[ styles.rightButton ]}
        onPressIn={() => setRightButtonPressed(true)}
        onPressOut={() => setRightButtonPressed(false)}
      >
        <Text style={{ color: rightButtonPressed ? '#7252C5' : '#000' }}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  leftButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 40,
    fontSize: 13,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  line: {
    width: 1.5,
    height: 40,
    backgroundColor: '#7252C5',
  },
  rightButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: 150,
    height: 40,
    fontSize: 10,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 20,
  },

});
