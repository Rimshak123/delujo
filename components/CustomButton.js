import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftButton}>
        <Text>Signup</Text>
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
    //borderWidth: 1,
    //borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",

    width: 100,
    height: 40,
    backgroundColor: "red",
    //borderBottomLeftRadius: number
    borderBottomRightRadius: 20,
    //borderTopLeftRadius: number
    marginLeft: "0px",
    borderTopRightRadius: 20,
  },
  leftButton: {
    // borderWidth: 1,
    // marginRight: "0px",
    //borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 40,
    backgroundColor: "green",
    //borderBottomLeftRadius: number
    borderBottomLeftRadius: 20,
    //borderTopLeftRadius: number
    borderTopLeftRadius: 20,
  },
});
