import { StyleSheet, View} from "react-native";
import React from "react";
import LoginControls from "../components/LoginControls";
import LogoHeader from "../components/LogoHeader";

const login = () => {

  return (
    <View style={styles.container}>
      <LogoHeader />
      <LoginControls />
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7251C3",
    height: 100,
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
