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
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    width: 100,
    height: 40,
    backgroundColor: "#7251C3",
    borderRadius: 20,
  },
});
