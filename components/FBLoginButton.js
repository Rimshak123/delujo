import React from "react";
import { Text, TouchableOpacity, StyleSheet, View, Image } from "react-native";
//import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Icon } from "@rneui/themed";
import Facebook from "../assets/facebook-icon.png";
const FBLoginButton = () => {
  return (
    <View
      style={{
        height: 80,
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
          backgroundColor: "#7251C3",
          height: 10,
          borderRadius: 20,
          borderBlockColor: "#242124",
          borderStyle: "solid",
          borderWidth: 1,
          width: 300,
        }}
      >
        <Image
          style={styles.tinyLogo}
          source={require("../assets/facebook-icon.png")}
        />
        <Text
          style={{
            padding: 15,
            color: "#fff",
          }}
        >
          Sign up with Facebook
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
export default FBLoginButton;
