import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
<<<<<<< HEAD
=======
//import FaceBookIcon from '../assets/FaceBookIcon';
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
import FaceBookIcon from '../icons/FaceBookIcon';
import GoogleIcon from "../icons/GoogleIcon";

const NormalButton = (props) => {
<<<<<<< HEAD
  const { title, width, height, iconType,borderRadius ,marginTop, backgroundColor,handleSigin } = props;
=======
  const { title, width, height, iconType } = props;
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443

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
<<<<<<< HEAD
     <TouchableOpacity style={[styles.Button, { width, height,borderRadius, marginTop,backgroundColor } ] } onPress={handleSigin}>
=======
     <TouchableOpacity style={[styles.Button, { width, height }]}>
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
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
<<<<<<< HEAD
    backgroundColor: "#7251C3",
 
  },
  textContainer: {
    marginLeft: 10, 
=======
    marginTop: 25,
   
    backgroundColor: "#7251C3",
    borderRadius: 15,
  },
  textContainer: {
    marginLeft: 10, // Add margin between the icon and text
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
  },
});
