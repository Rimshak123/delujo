

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Newsbody from '../components/Newsbody'
import HeaderWithSearchBar from '../components/HeaderWithSearchBar'
// import Shopheader from '../components/Shopheader'
const NewsScreen = () => {
  return (
    <View style={styles.container}>
      {/* <HeaderWithSearchBar/> */}
      <Newsbody/>
    </View>
  )
}
const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#7252C5",
  },
});
NewsScreen.options = {
  headerShown: false,
};
export default NewsScreen;

// ReferScreen.js

// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import Share from 'react-native-share';

// const ReferScreen = () => {

//   const handleShare = async () => {
//     try {
//       const shareOptions = {
//         message: 'Check out this cool app!',
//         // You can add more properties like URL, etc.
//       };
//       await Share.open(shareOptions);
//     } catch (error) {
//       console.log('Error sharing:', error.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Refer a Friend</Text>
//       <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
//         <Text style={styles.shareText}>Share</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f3f3f3',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#7051C4',
//   },
//   shareButton: {
//     backgroundColor: '#7051C4',
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     borderRadius: 8,
//   },
//   shareText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default ReferScreen;



