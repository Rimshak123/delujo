import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CustomButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftButton}>
        <Text>I am new here!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rightButton}>
        <Text>Login</Text>
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
  rightButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    color: "#fff",
    width: 150,
    height: 50,
    fontSize: 10,
    backgroundColor: "#7251C3",
    borderBottomRightRadius: 20,
    marginLeft: "0px",
    borderTopRightRadius: 20,
  },
  leftButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 50,
    fontSize: 13,
    backgroundColor: "#d3d3d3",
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
});
