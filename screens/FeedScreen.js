import React from 'react';
import { View, StyleSheet, Alert, Image, Text } from 'react-native';
import HeaderWithSearchBar from '../components/HeaderWithSearchBar';
import FeedBody from '../components/FeedBody';

const FeedScreen = () => {

  return (
    <View style={styles.container}>
      {/* <HeaderWithSearchBar /> */}
      <FeedBody />
    </View>
  );
};

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#7252C5",
  },
});

export default FeedScreen;


// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   StyleSheet,

// } from 'react-native';
// import axios from 'axios';

// const FeedScreen = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   const fetchItems = async () => {
//     try {
//       const response = await axios.get("http://192.168.18.19:5000/api/items/all");
//       setItems(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//       <View style={styles.container}>
//         {items.map((item, index) => (
//           <View key={index} style={styles.itemContainer}>
//             <Text style={styles.itemText}>Product: {item.product}</Text>
//             <Text style={styles.itemText}>Description: {item.description}</Text>
//             <Text style={styles.itemText}>Quantity: {item.quantity}</Text>
//             <Text style={styles.itemText}>Original Price: {item.originalPrice}</Text>
//             <Text style={styles.itemText}>Listing Price: {item.listingPrice}</Text>
//             <Text style={styles.itemText}>Earned Price: {item.earnedPrice}</Text>
//             <Text style={styles.itemText}>Price Description: {item.priceDescription}</Text>
//             <Text style={styles.itemText}>Height: {item.height}</Text>
//             <Text style={styles.itemText}>Width: {item.width}</Text>
//             <Text style={styles.itemText}>Tag: {item.tag}</Text>
//             <Text style={styles.itemText}>Size: {item.size}</Text>
//           </View>
//         ))}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f3f3f3',
//   },
//   itemContainer: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//     marginBottom: 20,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 8,
//     elevation: 1,
//   },
//   itemText: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
// });

// export default FeedScreen;


