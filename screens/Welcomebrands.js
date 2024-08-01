// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import Welcomebackground from '../components/Welcomebackground'
// import Footer from '../components/Footer'

// const Welcomebrands = () => {
//   return (
//     <View style={styles.newcontainer}>
//       <Welcomebackground
//         heading="Follow 3 Brands"
//          heading2="You love!"
//         text="This will help us to make better suggestions for you in a future"
//         imageSource={require('../assets/zara.jpg')}
//         imageSource2={require('../assets/adidas.jpg')}
//         imageSource3={require('../assets/nike.jpg')}
//         imageSource4={require('../assets/mkkk.jpg')}

//       />

//     <Footer
//     text='Do it later'
//     />
//     </View>
//   );
// }

// export default Welcomebrands

// const styles = StyleSheet.create({
//   newcontainer: {
//     backgroundColor: '#f3f3f3',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// // })

// import React, { useState } from "react";
// import { View, TouchableOpacity, Image, Button } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import axios from "axios";

// export default function App() {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const pickImage = async () => {
//     try {
//       let result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         aspect: [4, 3],
//         quality: 1,
//       });
  
//       console.log("Selected image URI:", result.uri);
  
//       if (!result.cancelled) {
//         setSelectedImage(result.uri);
//       }
//     } catch (error) {
//       console.error("Error picking image:", error);
//     }
//   };
  

//   const uploadImage = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("image", {
//         uri: selectedImage,
//         type: "image/jpg", // Adjust the type according to your image format
//         name: "image.jpg", // Adjust the name as needed
//       });

//       const response = await axios.post(
//         "http://192.168.18.19:5000/api/v1/auth/images",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       if (response.status === 201) {
//         // Image uploaded successfully
//         setSelectedImage(response.data.imageUrl); 
//       }
//     } catch (error) {
//       console.error("Error uploading image:", error);
//     }
//   };

//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <TouchableOpacity onPress={pickImage}>
//         {selectedImage ? (
//           <Image
//             source={{ uri: selectedImage }}
//             style={{ width: 200, height: 200 }}
//           />
//         ) : (
//           <Image
//             source={require("../assets/image.png")}
//             style={{ width: 130, height: 130 , }}
//           />
//         )}
//       </TouchableOpacity>
//       {selectedImage && (
//         <>
//           <Button
//             title="UPLOAD Image"
//             onPress={uploadImage}
//             disabled={!selectedImage}
//           />
         
//         </>
//       )}
//     </View>
//   );
// }
