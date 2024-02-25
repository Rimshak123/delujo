import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const LogoHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.TextH}>Welcome to Delujo</Text>
    </View>
  );
};

export default LogoHeader;

const styles = StyleSheet.create({
  TextH: {
    alignItems: "center",
    color: "#fff",
  },
  container: {
    backgroundColor: "#7251C3",
    height: 100,
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
