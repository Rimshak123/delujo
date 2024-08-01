import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import Headerbackground from '../components/Headerbackground'
import BodyofPs from '../components/BodyofPs'
import Header from '../components/Header'
import FeedScreen from './FeedScreen'
// import Footer from "../components/Footer";
const NewPeople = () => {
  return (
    <View style={styles.container}>
    <Header
       
       customText="New People"
       customTextMarginTop={-20}
        headerTextSize={20} 
        headerTextWeight="bold"
        headerFlex={3.7}
        imageWidth2={25}
        imageLeft2={-160}
        imageHeight2={20}
        imageTop2={-125}
        
        imagePath2={require('../assets/icon-back.png')}
         
        />
     <BodyofPs/>
    </View>
  )
}

NewPeople.options = {
  headerShown: false,
};
export default NewPeople

const styles = StyleSheet.create({

  container: 
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#7252C5",
  },

})

// import React, { useEffect, useState } from 'react';
// import { View, Image, FlatList, StyleSheet } from 'react-native';

// const NewPeople = () => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     fetchImages();
//   }, []);

//   const fetchImages = async () => {
//     try {
//       const response = await fetch('http://192.168.18.19:5000/api/images');
//       const data = await response.json();
//       setImages(data.images);
//     } catch (error) {
//       console.error('Error fetching images:', error);
//     }
//   };

//   const renderImage = ({ item }) => (
//     <Image source={{ uri: `http://192.168.18.19:5000/api/images/${item.name}` }} style={styles.image} />
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={images}
//         renderItem={renderImage}
//         keyExtractor={(item, index) => index.toString()}
//         numColumns={2}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     width: 150,
//     height: 150,
//     margin: 5,
//   },
// });

// export default NewPeople;




