import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import LogoHeader from "../components/LogoHeader";
import TextBox from "../components/TextBox";
import NormalButton from "../components/NormalButton";
const login = () => {
  const [text, setText] = useState("");

  const handleTextChange = (text) => {
    setText(text);
  };
  return (
    <View style={styles.container}>
      <CustomButton />
      <TextBox
        title="Name"
        placeholder="Enter your name"
        onChangeText={handleTextChange}
        value={text}
      />
      <TextBox
        title="Email"
        placeholder="Enter your email"
        onChangeText={handleTextChange}
        value={text}
      />
      <NormalButton title="Login" />
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
    height: "60%",
    justifyContent: "top",
    padding: 10,
    alignItems: "center",
  },
});
