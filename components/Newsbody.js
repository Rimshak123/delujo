import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import axios from "axios";

const NewsScreen = () => {
  const [view, setView] = useState("people");
  const [users, setUsers] = useState([]);
  const [items, setItems] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "http://10.140.176.112:5000/api/v1/auth/users"
      );
      const usersWithTimestamp = response.data.users.map((user) => ({
        ...user,
        createdAt: new Date(),
      }));
      setUsers(usersWithTimestamp);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchItems = async () => {
    try {
      const response = await axios.get(
        "http://10.140.176.112:5000/api/items/all"
      );
      const itemsWithTimestamp = response.data.map((item) => ({
        ...item,
        createdAt: new Date(),
      }));
      setItems(itemsWithTimestamp);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handlePeoplePress = () => {
    setView("people");
    fetchUsers();
  };

  const handleOffersPress = () => {
    setView("offers");
    fetchItems();
  };

  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.newsTitle}>News</Text>
          <TouchableOpacity style={styles.item} onPress={handlePeoplePress}>
            <Text
              style={[styles.itemText, view === "people" && styles.activeText]}
            >
              People
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item2} onPress={handleOffersPress}>
            <Text
              style={[styles.itemText2, view === "offers" && styles.activeText]}
            >
              Offers
            </Text>
          </TouchableOpacity>
        </View>
        {view === "people" && (
          <ScrollView>
            {users.map((user, index) => (
              <View key={index} style={{ marginTop: 10 , paddingRight: 40,}}>
                 <View style={{ marginTop: 0, marginLeft: 45 }}>
                  <Image
                    source={require("../assets/i3-removebg-preview.png")}
                    style={{ height: 22, width: 26 }}
                  />
                </View>
                <View style={{ marginTop: 15 }} />
                <View style={styles.userInfo}>
                  <Text style={styles.userName}><Text style={{ color: '#7252C5', fontSize: 18,}}>{user.name}</Text>{" "}has signed up as a new user in DeLujo.</Text>
                
                </View>
              </View>
            ))}
          </ScrollView>
        )}
        {view === "offers" && (
          <ScrollView>
            {items.map((item, index) => (
              <View key={index} style={styles.itemContainer}>
                <View style={{ marginTop: 0, marginLeft: 40 }}>
                  <Image
                    source={require("../assets/i2-removebg-preview.png")}
                    style={{ height: 22, width: 26 }}
                  />
                </View>
                <View style={{ marginTop: -5, marginLeft: 80 }}>
                  <Text style={styles.ownerName}>
                  <Text style={{ color: '#7252C5', fontSize: 18,}}>{item.ownerName}</Text> is offering the{" "}
                    <Text style={{  color: '#7252C5' }}>{item.product}</Text>{" "}
                    for sale at a price as low as{" "}<Text style={{  fontWeight:'500' }}>${item.originalPrice}</Text>.
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContainer: {
    width: 400,
    borderTopLeftRadius: 95,
    borderTopRightRadius: 95,
    backgroundColor: "#E7E7E7",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop:60,
  },
  headerContainer: {
    backgroundColor: "#F3F3F3",
    borderTopLeftRadius: 95,
    borderTopRightRadius: 95,
    marginBottom: 20,
    width: 400,
    height: 95,
  },
  horizontalList: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  newsTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#7252C5",
    marginTop: 20,
    marginLeft: 160,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -20,
  },
  item: {
    marginTop: 16,
    marginLeft: 80,
  },
  item2: {
    marginTop: -23,
    marginLeft: 250,
  },
  itemText: {
    fontSize: 18,
    color: "#555555",
  },
  itemText2: {
    fontSize: 18,
    color: "#555555",
  },
  activeText: {
    color: "#7252C5",
  },
  userName: {
    fontSize: 16,
    // fontWeight: "bold",
    // color: "#7252C5",
    marginLeft: 100,
    marginTop: -25,
  },
  userText: {
    fontSize: 14,
    color: "#555555",
    marginLeft: 8,
    marginTop: -20,
  },

  itemContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-between",
    // padding: 10,
    // paddingLeft:10,
    paddingRight: 40,
  },
  // offerText: {
  //   // flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   fontSize: 16,
  //   color: '#333',
  //   top:-50,
  // },
  ownerName: {
    fontSize: 14,
    // color: '#7252C5',
    // color: '#333',
  },
  productText: {
    fontSize: 16,
    color: "#333",
  },
  listingPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

export default NewsScreen;
