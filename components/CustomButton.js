import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const CustomButton = ({loginColor,newColor}) => {
  const navigation = useNavigation();
  const LoginScreen2 = () => {
    navigation.navigate('LoginScreen2');
  };

  const LoginScreen = () => {
    navigation.navigate('LoginScreen');
  };
//color: "#000" . color: "#7252C5"
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.leftButton]} onPress={LoginScreen2}>
        <Text style={{ color: newColor }}>I am new here!</Text>
      </TouchableOpacity>

      <View style={styles.line} />
      <TouchableOpacity style={[styles.rightButton]} onPress={LoginScreen}>
        <Text style={{ color: loginColor }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  leftButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 40,
    fontSize: 13,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  line: {
    width: 1.5,
    height: 40,
    backgroundColor: "#7252C5",
  },
  rightButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: 150,
    height: 40,
    fontSize: 10,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 20,
  },
});
