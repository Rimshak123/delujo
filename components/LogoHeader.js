import { StyleSheet, Text, View,Image} from "react-native";
import React from "react";

const LogoHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.TextH}>Welcome to Delujo</Text>
      <View >
      <Image 
         source={require('../assets/Laaunch.png')}style={{ width: 100,alignItems:"center", height: 100 }}/>
  </View>
    </View>
  );
};

export default LogoHeader;

const styles = StyleSheet.create({
  TextH: {
    marginTop:35,
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
  //imege:{
    //position:"absolute",
    //height:51,
    //justifyContent: "center",
    //alignItems:"center",
    //width:58, 
    
  
});
