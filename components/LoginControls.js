import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import LogoHeader from "../components/LogoHeader";
import TextBox from "../components/TextBox";
import NormalButton from "../components/NormalButton";
import FBLoginButton from "../components/FBLoginButton";
import GoogleLoginButton from "../components/GoogleLoginButton";
const login = () => {
  const [text, setText] = useState("");

  const handleTextChange = (text) => {
    setText(text);
  };
  return (
    <View style={styles.container}>
      <CustomButton />
      <FBLoginButton />
      <GoogleLoginButton />
    
      <TextBox
      title="Email Address"
        placeholder="yourEmail@email.com"
        onChangeText={handleTextChange}
        value={text}
      />
      <NormalButton title="NEXT" />
    </View>
  );
};
export default login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "72%",
    justifyContent: "top",
    padding: 25,
    alignItems: "center",
    
  },
  
});
