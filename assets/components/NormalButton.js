import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
//import FaceBookIcon from '../assets/FaceBookIcon';
import FaceBookIcon from '../icons/FaceBookIcon';
import GoogleIcon from "../icons/GoogleIcon";

const NormalButton = (props) => {
  const { title, width, height, iconType,borderRadius ,marginTop, backgroundColor } = props;

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
     <TouchableOpacity style={[styles.Button, { width, height,borderRadius, marginTop,backgroundColor }]}>
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
    backgroundColor: "#7251C3",
 
  },
  textContainer: {
    marginLeft: 10, 
  },
});
