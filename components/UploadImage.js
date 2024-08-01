

// import React, { useState } from "react";
// import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import PhotoElement from "../components/PhotoElement";
// import axios from "axios"; 

// const UploadImage = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const pickImageAsync = async () => {
//     try {
//       const { status } =
//         await ImagePicker.requestMediaLibraryPermissionsAsync();
//       if (status !== "granted") {
//         alert("Sorry, we need camera roll permissions to make this work!");
//         return;
//       } else {
//         let result = await ImagePicker.launchImageLibraryAsync({
//           mediaTypes: ImagePicker.MediaTypeOptions.All,
//           allowsEditing: false,
//           quality: 1,
//         });
//         if (!result.cancelled) {
//           // Send image to backend for storage
//           const imageName = await postImage({ uri: result.assets[0].uri });
//           setSelectedImage({ uri: result.assets[0].uri, name: imageName });
//         }
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const removeImage = () => {
//     setSelectedImage(null);
//   };

//   const postImage = async ({ uri }) => {
//     try {
//       const data = createFormData(uri);
//       const res = await axios.post(
//         "http://192.168.18.19:5000/api/images",
//         data,
//         {
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       return res.data.imageName; // Assuming backend returns imageName upon successful upload
//     } catch (error) {
//       console.error("Error uploading image:", error);
//       // Handle error
//     }
//   };

//   const createFormData = (uri) => {
//     const fileName = uri.split("/").pop();
//     const fileType = fileName.split(".").pop();
//     const formData = new FormData();
//     formData.append("image", {
//       name: fileName,
//       uri,
//       type: `image/${fileType}`,
//     });
//     return formData;
//   };

//   return (
//     <View>
//       {selectedImage && (
//         <PhotoElement uri={selectedImage.uri} removeAction={removeImage} />
//       )}
//       <TouchableOpacity
//         style={uploadPhotoStyles.container}
//         onPress={pickImageAsync}
//       >
//         <Text  style={{ color: "#fff"}}>+</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
// const uploadPhotoStyles = StyleSheet.create({
//   container:{
//     height: 100,
//     width: 100,
//     borderRadius: 28,
//     backgroundColor: "#7252C5",
//     alignItems: "center",
//     justifyContent: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     elevation: 2,
//     marginBottom: 16,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     marginBottom: 16,
//     borderRadius: 50,
//   },
// });

// export default UploadImage;

import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import PhotoElement from "../components/PhotoElement";
import axios from "axios"; 

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
        return;
      } else {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: false,
          quality: 1,
        });
        if (!result.cancelled) {
          // Send image to backend for storage
          const imageName = await postImage({ uri: result.assets[0].uri });
          setSelectedImage({ uri: result.assets[0].uri, name: imageName });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

 

  const postImage = async ({ uri }) => {
    try {
      const data = createFormData(uri);
      const res = await axios.post(
        "http://192.168.18.19:5000/api/images",
        data,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return res.data.imageName; // Assuming backend returns imageName upon successful upload
    } catch (error) {
      console.error("Error uploading image:", error);
      // Handle error
    }
  };

  const createFormData = (uri) => {
    const fileName = uri.split("/").pop();
    const fileType = fileName.split(".").pop();
    const formData = new FormData();
    formData.append("image", {
      name: fileName,
      uri,
      type: `image/${fileType}`,
    });
    return formData;
  };

  return (
    <View>
      {selectedImage && (
        <PhotoElement uri={selectedImage.uri}  />
      )}
      <TouchableOpacity
        style={uploadPhotoStyles.containerimage}
        onPress={pickImageAsync}
      >
        <Text style={{color:"#ffffff" , fontWeight:"700", fontSize:18}}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const uploadPhotoStyles = StyleSheet.create({
  containerimage: {
    height: 56,
    width: 56,
    borderRadius: 10,
    backgroundColor: "#7050C3",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    marginBottom: 16,
  },
  
});

export default UploadImage;
