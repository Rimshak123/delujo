import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
//import FaceBookIcon from '../assets/FaceBookIcon';
import FaceBookIcon from '../icons/FaceBookIcon';
import GoogleIcon from "../icons/GoogleIcon";

const NormalButton = (props) => {
  const { title, width, height, iconType,borderRadius ,marginTop } = props;

  const renderIcon = () => {
    switch (iconType) {
      case 'facebook':
        return <FaceBookIcon />;
      case 'google':
        return <GoogleIcon />;
      default:
        return null;
    }
  };
  return (
    <View style={styles.container}>
     <TouchableOpacity style={[styles.Button, { width, height,borderRadius, marginTop }]}>
     {iconType && renderIcon()}
     <View style={styles.textContainer}></View>
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
    flexDirection:'row',
    alignItems: "center",
    justifyContent: "center",
    // marginTop: -15,
   
    backgroundColor: "#7251C3",
    //borderRadius: 15,
  },
  textContainer: {
    marginLeft: 10, // Add margin between the icon and text
  },
});
