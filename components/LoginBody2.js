// import React, { useState } from "react";
// import { View, StyleSheet, Image, Text, TextInput, Alert } from "react-native";
// import NormalButton from "./NormalButton";
// import CustomButton from "./CustomButton";
// import Textbar from "./Textbar";
// import axios from "axios";

// const LoginBody2 = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [repeatPassword, setRepeatPassword] = useState("");

//   const handleSigin = async () => {
//   try {
//     if (!name || !email || !password || !repeatPassword) {
//       return Alert.alert("Please fill all fields.");
//     }
//     if (password !== repeatPassword) {
//       return Alert.alert("Passwords do not match.");
//     }
//     const { data } = await axios.post(
//       "http://192.168.18.19:5000/api/v1/auth/register",
//       { name, email, password, repeatPassword }
//     );
//     Alert.alert(data.message);
//     console.log("Register Data ==>", {
//       name,
//       email,
//       password,
//       repeatPassword,
//     });
//   } catch (error) {
//     Alert.alert(error.response.data.message);
//     console.log(error);
//   }
// };


//   return (
//     <View style={styles.container}>
//       {/* Custom Button */}
//       <View style={styles.custombuttonContainer}>
//         <CustomButton loginColor="#000" newColor="#7252C5" />
//       </View>
//       <View>
//         <Textbar
//           imagePath={require("../assets/graySpace.png")}
//           labelText="USER NAME"
//           placeholder="Esteban Jurado"
//           textSize={11}
//           textbarMarginTop={-90}
//           labelLeft={40}
//           value={name}
//           setValue={setName}
//         />
//       </View>
//       <View>
//         <Textbar
//           imagePath={require("../assets/graySpace.png")}
//           labelText="EMAIL ADDRESS"
//           placeholder="Esteban@innovationsmedia.com"
//           textSize={11}
//           textbarMarginTop={0}
//           labelLeft={33}
//           value={email}
//           setValue={setEmail}
//         />
//       </View>
//       <View>
//         <Textbar
//           imagePath={require("../assets/graySpace.png")}
//           labelText="PASSWORD"
//           placeholder="123456"
//           textSize={11}
//           textbarMarginTop={30}
//           labelLeft={42}
//           secureTextEntry={true}
//           value={password}
//           setValue={setPassword}
//         />
//       </View>

//       <View>
//         <Textbar
//           imagePath={require("../assets/graySpace.png")}
//           labelText="REPEAT PASSWORD"
//           placeholder="123456"
//           textbarMarginTop={30}
//           labelLeft={26}
//           textSize={10}
//           value={repeatPassword}
//           setValue={setRepeatPassword}
//         />
//       </View>

//       {/* Siggnin Button */}
//       <View style={styles.buttonContainer}>
//         <NormalButton
//           title="Signin"
//           width={130}
//           height={40}
//           borderRadius={15}
//           backgroundColor="#7051C4"
//           handleSigin={handleSigin}
//         />
//       </View>
//       {/* <Text>{JSON.stringify({name,email,password},null,4)}</Text> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F3F3F3",
//     justifyContent: "center",
//     alignItems: "center",
//     width: 400,
//     borderTopRightRadius: 70,
//     borderTopLeftRadius: 70,
//   },
//   facebook: {
//     position: "absolute",
//     top: 80,
//   },
//   google: {
//     position: "absolute",
//     top: 160,
//   },
//   buttonContainer: {
//     position: "absolute",
//     bottom: 80,
//   },
//   custombuttonContainer: {
//     position: "absolute",
//     top: 40,
//   },
//   image: {
//     width: 320,
//     height: 65,
//   },
//   textInput: {
//     position: "absolute",
//     top: 12,
//     left: 20,
//     width: 290,
//     height: 35,
//     backgroundColor: "#F3F3F3",
//     borderRadius: 20,
//   },
//   email: {
//     position: "absolute",
//     left: 33,
//     bottom: 55,
//     fontSize: 11,
//     color: "#868688",
//   },
// });

// export default LoginBody2;


import React, { useState } from "react";
import { View, StyleSheet, Text, Alert ,Button,TouchableOpacity } from "react-native";
import NormalButton from "./NormalButton";
import CustomButton from "./CustomButton";
import Textbar from "./Textbar";
import axios from "axios";

const LoginBody2 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const handlePress = async () => {
    try {
      if (!name || !email || !password || !repeatPassword) {
        return Alert.alert("Please fill all fields.");
      }
      if (password !== repeatPassword) {
        return Alert.alert("Passwords do not match.");
      }
      console.log("Sending request to register user", { name, email, password, repeatPassword });
      
      const response = await axios.post(
        "http://192.168.18.19.112:5000/api/v1/auth/register",
        { name, email, password, repeatPassword }
      );
      
      console.log("Response received", response);
      Alert.alert(response.data.message);
    } catch (error) {
      if (error.response) {
        // Request made and server responded
        console.log("Error response:", error.response);
        Alert.alert(error.response.data.message);
      } else if (error.request) {
        // Request made but no response
        console.log("Error request:", error.request);
        Alert.alert("Server did not respond. Please try again later.");
      } else {
        // Something happened in setting up the request
        console.log("Error message:", error.message);
        Alert.alert("An unexpected error occurred. Please try again later.");
      }
      console.log("Error details:", error.config);
    }
  };
  
  // const handlePress = () => {
  //   Alert.alert('Button pressed!');
  // };

  return (
    <View style={styles.container}>
      {/* Custom Button */}
      <View style={styles.custombuttonContainer}>
        <CustomButton loginColor="#000" newColor="#7252C5" />
      </View>
      <View style={{marginTop:50,}}/>

      <View>
        <Textbar
          imagePath={require("../assets/graySpace.png")}
          labelText="USER NAME"
          placeholder="Esteban Jurado"
          textSize={11}
          textbarMarginTop={-90}
          labelLeft={40}
          value={name}
          setValue={setName}
        />
      </View>
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
      <View>
        <Textbar
          imagePath={require("../assets/graySpace.png")}
          labelText="PASSWORD"
          placeholder="123456"
          textSize={11}
          textbarMarginTop={30}
          labelLeft={42}
          secureTextEntry={true}
          value={password}
          setValue={setPassword}
        />
      </View>

      <View>
        <Textbar
          imagePath={require("../assets/graySpace.png")}
          labelText="REPEAT PASSWORD"
          placeholder="123456"
          textbarMarginTop={30}
          labelLeft={26}
          textSize={10}
          value={repeatPassword}
          setValue={setRepeatPassword}
        />
      </View>

      {/* Signin Button */}
      {/* <View style={styles.buttonContainer}>
        <NormalButton
          title="Signup"
          width={130}
          height={40}
          borderRadius={15}
          backgroundColor="#7051C4"
          onPress={handleSigin} // Changed from handleSigin to onPress
        />
      </View> */}
      <View style={{marginTop:40,}}/>
                <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
      {/* <Text>{JSON.stringify({name,email,password},null,4)}</Text> */}
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
  button: {
    backgroundColor: '#7051C4',
    width:110,
    height:40,
    borderRadius:18,
    // marginTop:20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    left:33,
    top:8,
  },

});

export default LoginBody2;


// import React, { useState } from "react";
// import { View, StyleSheet, Alert, Button } from "react-native";
// import NormalButton from "./NormalButton";
// import CustomButton from "./CustomButton";
// import Textbar from "./Textbar";

// const LoginBody2 = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [repeatPassword, setRepeatPassword] = useState("");

//   const handleRegister = () => {
//     if (!name || !email || !password || !repeatPassword) {
//       return Alert.alert("Please fill all fields.");
//     }
//     if (password !== repeatPassword) {
//       return Alert.alert("Passwords do not match.");
//     }
//     Alert.alert("Thank you for signing up!");
//   };
//   const handlePress = () => {
//     Alert.alert('Button pressed!');
//   };

//   return (
//     <View style={styles.container}>
//       {/* Custom Button */}
//       <View style={styles.custombuttonContainer}>
//         <CustomButton loginColor="#000" newColor="#7252C5" />
//       </View>
//       <View>
//         <Textbar
//           imagePath={require("../assets/graySpace.png")}
//           labelText="USER NAME"
//           placeholder="Esteban Jurado"
//           textSize={11}
//           textbarMarginTop={-90}
//           labelLeft={40}
//           value={name}
//           setValue={setName}
//         />
//       </View>
//       <View>
//         <Textbar
//           imagePath={require("../assets/graySpace.png")}
//           labelText="EMAIL ADDRESS"
//           placeholder="Esteban@innovationsmedia.com"
//           textSize={11}
//           textbarMarginTop={0}
//           labelLeft={33}
//           value={email}
//           setValue={setEmail}
//         />
//       </View>
//       <View>
//         <Textbar
//           imagePath={require("../assets/graySpace.png")}
//           labelText="PASSWORD"
//           placeholder="123456"
//           textSize={11}
//           textbarMarginTop={30}
//           labelLeft={42}
//           secureTextEntry={true}
//           value={password}
//           setValue={setPassword}
//         />
//       </View>

//       <View>
//         <Textbar
//           imagePath={require("../assets/graySpace.png")}
//           labelText="REPEAT PASSWORD"
//           placeholder="123456"
//           textbarMarginTop={30}
//           labelLeft={26}
//           textSize={10}
//           value={repeatPassword}
//           setValue={setRepeatPassword}
//         />
//       </View>

//       {/* Signin Button */}
//       <View style={styles.buttonContainer}>
//         <NormalButton
//           title="Signup"
//           width={130}
//           height={40}
//           borderRadius={15}
//           backgroundColor="#7051C4"
//           onPress={handleRegister} // Changed from handleSigin to onPress
//         />
//       </View>
//       <Button
//         title="Press me"
//         onPress={handlePress}
//         color="#841584" // You can customize the button color
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F3F3F3",
//     justifyContent: "center",
//     alignItems: "center",
//     width: 400,
//     borderTopRightRadius: 70,
//     borderTopLeftRadius: 70,
//   },
//   facebook: {
//     position: "absolute",
//     top: 80,
//   },
//   google: {
//     position: "absolute",
//     top: 160,
//   },
//   buttonContainer: {
//     position: "absolute",
//     bottom: 80,
//   },
//   custombuttonContainer: {
//     position: "absolute",
//     top: 40,
//   },
//   image: {
//     width: 320,
//     height: 65,
//   },
//   textInput: {
//     position: "absolute",
//     top: 12,
//     left: 20,
//     width: 290,
//     height: 35,
//     backgroundColor: "#F3F3F3",
//     borderRadius: 20,
//   },
//   email: {
//     position: "absolute",
//     left: 33,
//     bottom: 55,
//     fontSize: 11,
//     color: "#868688",
//   },
// });

// export default LoginBody2;
