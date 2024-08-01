// // import React from 'react';
// // import { View, StyleSheet, Text, ScrollView } from 'react-native';
// // import NormalButton from '../components/NormalButton';
// // import CustomButton from '../components/CustomButton';
// // import Banners from '../components/Banners';
// // import Bundles from '../components/Bundles';
// // import Profiles from '../components/Profiles';
// // import Textbar from '../components/Textbar';
// // const FeedBody = () => {
// //   return (
// //     // <ScrollView style={styles.mainContainer}>
// //       <View style={styles.container}>
// //         <Text style={styles.text}>Feed</Text>
// //         <ScrollView style={styles.mainContainer}>
// //         <Banners
// //           bannerImagePath={require('../assets/banner001.png')}
// //           // bannerText='amna'
// //           boxImagePath={require('../assets/ilustracion01.png')}
// //         />
// //         <Text style={styles.bundlesText}>See more bundles</Text>
// //         <Bundles />
// //         <Profiles
// //           imagePath={require('../assets/profile-pic2.png')}
// //           name="Arturole"
// //           product="Puppies"
// //           seller="LVL 3"
// //         />
// //         {/* <Profiles
// //           imagePath={require('../assets/profile-pic.png')}
// //           name="Aline404"
// //           product="Purses"
// //           seller="LVL 2"
// //         /> */}
// //         <Textbar/>
// //          </ScrollView>
// //       </View>

// //   );
// // };

// // const styles = StyleSheet.create({
// //   mainContainer: {
// //     flex: 1,
// //   },
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#F3F3F3',
// //     justifyContent: 'flex-start',
// //     alignItems: 'center',
// //     width: 400,
// //     borderTopRightRadius: 70,
// //     borderTopLeftRadius: 70,
// //   },
// //   container1: {
// //     flex: 1,
// //     backgroundColor: 'green',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     width: 400,
// //     marginTop: 400,
// //     paddingTop: 150,
// //   },
// //   text: {
// //     color: '#7051C4',
// //     fontSize: 22,
// //     justifyContent: 'flex-start',
// //     alignItems: 'flex-start',
// //     paddingTop: 20,
// //     fontWeight: 'bold',
// //   },
// //   bundlesText: {
// //     color: '#7051C4',
// //     fontSize: 14,
// //     marginTop: 20,
// //     marginBottom: 20,
// //     marginRight: 100,
// //     marginLeft:30,
// //   },
// // });

// // export default FeedBody;

// import React, { useEffect, useState } from "react";
// import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
// import Banners from "../components/Banners";
// import Bundles from "../components/Bundles";
// import Profiles from "../components/Profiles";
// import Bar from "../components/Bar";
// import Textbar from "../components/Textbar";
// import Rating from "../components/Rating";
// import UploadImage from "../components/UploadImage";

// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";

// const FeedBody = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   const fetchItems = async () => {
//     try {
//       const response = await axios.get(
//         "http://192.168.18.19:5000/api/items/all"
//       );
//       setItems(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Feed</Text>
//       <ScrollView>
//         <Banners
//           bannerImagePath={require("../assets/banner001.png")}
//           // bannerText='amna'
//           boxImagePath={require("../assets/ilustracion01.png")}
//         />

//         {items.map((item, index) => (
//           <View key={index} style={styles.itemContainer}>
//              <Image
//                   source={require("../assets/feedicon-removebg-preview.png")}
//                   style={{width:35,height:35, marginLeft:20, marginTop:12}}
//                   resizeMode="cover"
//                 />
//             <Text style={styles.sell}>is selling</Text>
//             <Text style={styles.ownerName}>{item.ownerName}</Text>
//             <Text style={styles.itemText}>{item.product}</Text>
//             <Text style={styles.originalPrice}> ${item.originalPrice}</Text>
//             <Text style={styles.ListingPrice}>${item.listingPrice}</Text>

//             <View
//               style={{
//                 backgroundColor: "#7252C5",
//                 height: 20,
//                 width: 75,
//                 borderRadius: 5,
//                 marginLeft: 60,
//                 marginTop: -18,
//               }}
//             >
//               <Text
//                 style={{
//                   fontWeight: "normal",
//                   color: "#ffffff",
//                   fontSize: 12,
//                   marginLeft: 7,
//                 }}
//               >
//                 Seller LVL3
//               </Text>
//             </View>

//             <View style={styles.rating}>
//               <Rating />
//               <Rating />
//               <Rating />
//               <Rating />
//               <Rating />
//             </View>
//             <View style={styles.imagecontainer}>
//               <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//                 <Image
//                   source={require("../assets/dogPic.png")}
//                   style={styles.image}
//                   resizeMode="cover"
//                 />
//                 <Image
//                   source={require("../assets/dogPic2.png")}
//                   style={styles.image}
//                   resizeMode="cover"
//                 />
//                 <Image
//                   source={require("../assets/dogPic.png")}
//                   style={styles.image}
//                   resizeMode="cover"
//                 />
//               </ScrollView>
//             </View>
//             <View style={{ marginRight: 60, marginTop: 5 }}>
//               <Bar />
//             </View>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F3F3F3",
//     justifyContent: "flex-start",
//     alignItems: "center",
//     width: 400,
//     borderTopRightRadius: 70,
//     borderTopLeftRadius: 70,
//   },
//   imagecontainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 10,
//     marginLeft: 15,
//   },

//   image: {
//     width: 140,
//     height: 140,
//   },
//   text: {
//     color: "#7051C4",
//     fontSize: 22,
//     justifyContent: "flex-start",
//     alignItems: "flex-start",
//     paddingTop: 20,
//     fontWeight: "bold",
//   },
//   itemContainer: {
//     backgroundColor: "#FAFAFA",
//     width: 400,
//     height: 280,
//     borderColor: "#E3E3E3",
//     borderTopWidth: 25,
//   },
//   sell: {
//     color: "#7252C5",
//     fontSize: 16,
//     marginLeft: 114,
//     // fontWeight: "bold",
//     marginTop: -30,
//   },
//   ownerName: {
//     color: "#7252C5",
//     fontSize: 16,
//     marginLeft: 60,
//     marginTop: -21,
//     fontWeight: "bold",
//   },
//   itemText: {
//     color: "#7252C5",
//     fontSize: 16,
//     marginLeft: 185,
//     marginTop: -21,
//   },
//   originalPrice: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginLeft: 280,
//     marginTop:0,
//   },
//   ListingPrice: {
//     fontSize: 15,
//     marginLeft: 340,
//     textDecorationLine: "line-through",
//     color: "#949494",
//     marginTop: -18,
//   },
//   rating: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: -22,
//     marginLeft: 25,
//   },
//   bundlesText: {
//     color: "#7051C4",
//     fontSize: 14,
//     marginTop: 20,
//     marginBottom: 20,
//     marginRight: 100,
//     marginLeft: 30,
//   },
// });

// export default FeedBody;


import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import Banners from "../components/Banners";
import Bundles from "../components/Bundles";
import Profiles from "../components/Profiles";
import Bar from "../components/Bar";
import Textbar from "../components/Textbar";
import Rating from "../components/Rating";
import UploadImage from "../components/UploadImage";
import HeaderWithSearchBar from "../components/HeaderWithSearchBar"; // Import HeaderWithSearchBar

import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const FeedBody = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]); // State for filtered items
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get(
        "http://192.168.18.19:5000/api/items/all"
      );
      setItems(response.data);
      setFilteredItems(response.data); // Initialize filteredItems with all items
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to handle search query change
  const handleSearch = (query) => {
    setSearchQuery(query);
    // Filter items based on search query
    const filtered = items.filter(
      (item) =>
        item.product.toLowerCase().includes(query.toLowerCase()) // Case insensitive search
    );
    setFilteredItems(filtered);
  };

  const handleHamburgerPress = () => {
    // Handle hamburger icon press
  };

  const handleAddFriendPress = () => {
    // Handle add friend icon press
  };

  const handleLikePress = () => {
    // Handle like icon press
  };

  return (
    <View style={styles.container}>
      <HeaderWithSearchBar
        onAddFriendPress={handleAddFriendPress}
       
      />
      <Text style={styles.text}>Feed</Text>
      <ScrollView>
        <Banners
          bannerImagePath={require("../assets/banner001.png")}
          // bannerText='amna'
          boxImagePath={require("../assets/ilustracion01.png")}
        />

        {/* <Text style={styles.bundlesText}>See more bundles</Text> */}
        {/* <Bundles /> */}

        {filteredItems.map((item, index) => ( // Render filteredItems instead of items
          <View key={index} style={styles.itemContainer}>
             <Image
                  source={require("../assets/feedicon-removebg-preview.png")}
                  style={{width:35,height:35, marginLeft:20, marginTop:12}}
                  resizeMode="cover"
                />
            <Text style={styles.sell}>is selling</Text>
            <Text style={styles.ownerName}>{item.ownerName}</Text>
            <Text style={styles.itemText}>{item.product}</Text>
            <Text style={styles.originalPrice}> ${item.originalPrice}</Text>
            <Text style={styles.ListingPrice}>${item.listingPrice}</Text>

            <View
              style={{
                backgroundColor: "#7252C5",
                height: 20,
                width: 75,
                borderRadius: 5,
                marginLeft: 60,
                marginTop: -18,
              }}
            >
              <Text
                style={{
                  fontWeight: "normal",
                  color: "#ffffff",
                  fontSize: 12,
                  marginLeft: 7,
                }}
              >
                Seller LVL3
              </Text>
            </View>

            <View style={styles.rating}>
              <Rating />
              <Rating />
              <Rating />
              <Rating />
              <Rating />
            </View>
            <View style={styles.imagecontainer}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Image
                  source={require("../assets/dogPic.png")}
                  style={styles.image}
                  resizeMode="cover"
                />
                <Image
                  source={require("../assets/dogPic2.png")}
                  style={styles.image}
                  resizeMode="cover"
                />
                <Image
                  source={require("../assets/dogPic.png")}
                  style={styles.image}
                  resizeMode="cover"
                />
              </ScrollView>
            </View>
            <View style={{ marginRight: 60, marginTop: 5 }}>
              <Bar />
            </View>

            {/* Additional information displayed when item matches search */}
            {searchQuery.length > 0 && item.product.toLowerCase().includes(searchQuery.toLowerCase()) && (
              <View style={styles.itemDetails}>
                <Text style={styles.itemDescription}>{item.description}</Text>
                <Text style={styles.itemPrice}>Price: ${item.originalPrice}</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 400,
    borderTopRightRadius: 70,
    borderTopLeftRadius: 70,
    // backgroundColor:"#7051C4",
  },
  imagecontainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 15,
  },

  image: {
    width: 140,
    height: 140,
  },
  text: {
    color: "#7051C4",
    fontSize: 22,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 20,
    fontWeight: "bold",
  },
  itemContainer: {
    backgroundColor: "#FAFAFA",
    width: 400,
    height: 280,
    borderColor: "#E3E3E3",
    borderTopWidth: 25,
  },
  sell: {
    color: "#7252C5",
    fontSize: 16,
    marginLeft: 114,
    marginTop: -34,
  },
  ownerName: {
    color: "#7252C5",
    fontSize: 16,
    marginLeft: 60,
    marginTop: -21,
    fontWeight: "bold",
  },
  itemText: {
    color: "#7252C5",
    fontSize: 16,
    marginLeft: 185,
    marginTop: -21,
  },
  originalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 280,
    marginTop: 0,
  },
  ListingPrice: {
    fontSize: 15,
    marginLeft: 340,
    textDecorationLine: "line-through",
    color: "#949494",
    marginTop: -18,
  },
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -22,
    marginLeft: 25,
  },
  bundlesText: {
    color: "#7051C4",
    fontSize: 14,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 100,
    marginLeft: 30,
  },
  itemDetails: {
    backgroundColor: "#D9E4F5",
    padding: 10,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 8,
  },
  itemDescription: {
    fontSize: 14,
    color: "#333333",
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
    color: "#7051C4",
  },
});

export default FeedBody;