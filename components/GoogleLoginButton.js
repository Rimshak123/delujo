import React from "react";
import { Text, TouchableOpacity, StyleSheet, View, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const GoogleLoginButton = () => {
  return (
    <View
      style={{
        height: 80,
        width: 400,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: "row",
          margin: 10,
          backgroundColor: "#F5F5F5",
          height: 10,
          borderRadius: 20,
          backgroundColor: "#7251C3",
          borderBlockColor: "#000000",
          borderStyle: "solid",
          borderWidth: 1,
          width: 300,
        }}
      >
        <Image
          style={styles.tinyLogo}
          source={require("../assets/google-logo.png")}
        />
        <Text
          style={{
            padding: 15,
          }}
        >
          Sign up with Google
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginTop: 5,
    marginLeft: 5,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default GoogleLoginButton;
