import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";

const LogoHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.TextH}>Welcome to Delujo</Text>
      <Image></Image>
    </SafeAreaView>
  );
};

export default LogoHeader;

const styles = StyleSheet.create({
  TextH: {
    alignItems: "center",
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
