import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const NormalButton = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Button}>
        <Text style={{ color: "#fff" }}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NormalButton;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  Button: {
    //borderWidth: 1,
    //borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 40,
    backgroundColor: "red",
    //borderBottomLeftRadius: number
    borderRadius: 20,
    //borderTopLeftRadius: number
  },
});
