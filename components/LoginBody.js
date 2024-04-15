<<<<<<< HEAD
import React, { useState } from "react";
import { View, StyleSheet, Image, Alert} from "react-native";
import NormalButton from "./NormalButton";
import CustomButton from "./CustomButton";
import Textbar from "./Textbar";

const LoginBody = () => {
  const [email, setEmail] = useState("");

  
  const handleSigin = () => {
    try {
      if (!email) {
        return Alert.alert("Please fill field.");
      }
      console.log("Register Data ==>", { email});

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Custom Button */}
      <View style={styles.custombuttonContainer}>
        <CustomButton 
         loginColor='#7252C5'
         newColor='#000'
        />
      </View>
      {/* FaceBook signup*/}
      <View style={styles.facebook}>
        <NormalButton
          title="   Signup with FaceBook"
          iconType="facebook"
          width={300}
          height={60}
          marginTop={40}
          borderRadius={20}
          backgroundColor="#7051C4"
        />
      </View>

      {/* Google Signup */}
      <View style={styles.google}>
        <NormalButton
          title="   Signup with Google"
          iconType="google"
          width={300}
          height={60}
          marginTop={40}
          borderRadius={20}
          backgroundColor="#7051C4"
        />
      </View>

      {/* Text bar Email address */}
      <View>
        <Textbar
          imagePath={require("../assets/graySpace.png")}
          labelText="EMAIL ADDRESS"
          placeholder="Esteban@innovationsmedia.com"
          textSize={11}
          textbarMarginTop={0}
          labelLeft={33}
          value={email}
          setValue={setEmail}
        />
      </View>

      {/* Login Button */}
      <View style={styles.buttonContainer}>
      <NormalButton
          title="Signin"
          width={130}
          height={40}
          borderRadius={15}
          backgroundColor="#7051C4"
          handleSigin={handleSigin}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    justifyContent: "center",
    alignItems: "center",
    width: 400,
    borderTopRightRadius: 70,
    borderTopLeftRadius: 70,
  },
  facebook: {
    position: "absolute",
    top: 80,
  },
  google: {
    position: "absolute",
    top: 160,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 80,
  },
  custombuttonContainer: {
    position: "absolute",
    top: 40,
  },
  image: {
    width: 320,
    height: 65,
  },
  textInput: {
    position: "absolute",
    top: 12,
    left: 20,
    width: 290,
    height: 35,
    backgroundColor: "#F3F3F3",
    borderRadius: 20,
  },
  email: {
    position: "absolute",
    left: 33,
    bottom: 55,
    fontSize: 11,
    color: "#868688",
  },
=======
import React from 'react';
import { View, StyleSheet } from 'react-native';
import NormalButton from '../components/NormalButton';
import CustomButton from '../components/CustomButton';
const LoginBody = () => {
    return (
        <View style={styles.container}>
            <View style={styles.custombuttonContainer}>
                <CustomButton />
            </View>
            <View style={styles.facebook}>
                <NormalButton title="Signup with FaceBook" iconType="facebook" width={300} height={60} />
            </View>
            <View style={styles.google}>
                <NormalButton title="Signup with Google"iconType="google" width={300} height={60} />
            </View>
            <View style={styles.buttonContainer}>
                <NormalButton title="Login" width={130} height={40} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3',
        justifyContent: 'center',
        alignItems: 'center',
        width: 400,
        borderTopRightRadius: 70,
        borderTopLeftRadius: 70,
    },

    facebook: {
        position: 'absolute',
        top: 80,

    },
     google: {
        position: 'absolute',
        top: 160,

    },
    buttonContainer: {
        position: 'absolute',
        bottom: 80,
    },
    custombuttonContainer: {
        position: 'absolute',
        top: 40,
    },
>>>>>>> e1b9dfd53ff360d1eea30142a0703b0f64471443
});

export default LoginBody;
