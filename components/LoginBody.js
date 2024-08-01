import React, { useState } from "react";
import { View, StyleSheet, Alert, TouchableOpacity , Text} from "react-native";
import NormalButton from "./NormalButton";
import CustomButton from "./CustomButton"; // Ensure CustomButton is imported correctly
import Textbar from "./Textbar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";


const LoginBody = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // State for password
  const navigation = useNavigation();

  const handleSignin = async () => {
    try {
      if (!email || !password) {
        return Alert.alert("Please fill all fields.");
      }
      const { data } = await axios.post(
        "http://192.168.18.19:5000/api/v1/auth/login",
        { email, password } // Send both email and password to the backend
      );
      await AsyncStorage.setItem("@auth", JSON.stringify(data));
      Alert.alert(data.message);
      navigation.navigate("AppNavigator"); // Navigate to HomeScreen after successful login
      console.log("Login Data ==>", { email });
    } catch (error) {
      Alert.alert("Login failed. Please try again.");
      console.log(error);
    }
  };

  const getLocalStorageData = async () => {
    let data = await AsyncStorage.getItem("@auth");
    console.log("Local Storage ==> ", data);
  };
  getLocalStorageData();

  return (
    <View style={styles.container}>
      {/* <View style={{marginTop:10,marginLeft:30}}/> */}
                
      {/* Custom Button */}
      <View style={styles.custombuttonContainer}>
        <CustomButton loginColor="#7252C5" newColor="#000" />
      </View>
      
      {/* Text bar Email address */}
      <View style={{ marginTop: 40 }}>
        <Textbar
          imagePath={require("../assets/graySpace.png")}
          labelText="EMAIL ADDRESS"
          placeholder="Esteban@innovationsmedia.com"
          textSize={11}
          labelLeft={33}
          value={email}
          setValue={setEmail}
        />
      </View>

      {/* Text bar Password */}
      <View style={{ marginTop: 20 }}>
        <Textbar
          imagePath={require("../assets/graySpace.png")}
          labelText="PASSWORD"
          placeholder="123456"
          textSize={11}
          labelLeft={33}
          secureTextEntry={true}
          value={password}
          setValue={setPassword}
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
          handleSignin={handleSignin}
        />
      </View>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Admin ?</Text>
      </TouchableOpacity>
      
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
  buttonContainer: {
    position: "absolute",
    bottom: 170,
  },
  custombuttonContainer: {
    position: "absolute",
    top: 40,
  },
 button:
 {
  //  backgroundColor: '#f3f3f3',
 marginLeft:180,
  marginTop:300,
},
buttonText: {
  color: '#7051C4',
  fontSize: 16,
  left:33,
  top:8,
},
});

export default LoginBody;
