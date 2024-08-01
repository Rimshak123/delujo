import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import axios from "axios";

const FeedBody = () => {
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get("http://192.168.18.19:5000/api/items/all");
      setItems(response.data);
      calculateSummary(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const calculateSummary = (items) => {
    const totalItems = items.length;
    const totalValue = items.reduce((acc, item) => {
      const price = parseFloat(item.originalPrice) || 0;
      return acc + price;
    }, 0);
    setTotalItems(totalItems);
    setTotalValue(totalValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>DeLujo's Report</Text>
      </View>
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Total Items: <Text style={styles.summaryValue}>{totalItems}</Text></Text>
        <Text style={styles.summaryText}>Total Value: <Text style={styles.summaryValue}>${totalValue.toFixed(2)}</Text></Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent} nestedScrollEnabled={true}>
        <ScrollView horizontal={true}>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={[styles.headerText, styles.borderRight]}>Item Number</Text>
              <Text style={[styles.headerText, styles.borderRight]}>Owner Name</Text>
              <Text style={[styles.headerText, styles.borderRight]}>Owner Email Address</Text>
              <Text style={[styles.headerText, styles.borderRight]}>Product Name</Text>
              <Text style={[styles.headerText, styles.borderRight]}>Original Price (USD)</Text>
              <Text style={[styles.headerText, styles.borderRight]}>Listing Price (USD)</Text>
              <Text style={[styles.headerText, styles.borderRight]}>Earned Value (USD)</Text>
              <Text style={[styles.headerText, styles.borderRight]}>Product Description</Text>
              <Text style={[styles.headerText, styles.borderRight]}>Quantity Available</Text>
              <Text style={styles.headerText}>Product Size</Text>
            </View>
            {items.map((item, index) => (
              <View key={index} style={[styles.tableRow, index % 2 === 0 && styles.tableRowAlternate]}>
                <Text style={[styles.cell, styles.borderRight]}>{index + 1}</Text>
                <Text style={[styles.cell, styles.borderRight]}>{item.ownerName}</Text>
                <Text style={[styles.cell, styles.borderRight]}>{item.ownerEmail}</Text>
                <Text style={[styles.cell, styles.borderRight]}>{item.product}</Text>
                <Text style={[styles.cell, styles.borderRight]}>${item.originalPrice}</Text>
                <Text style={[styles.cell, styles.borderRight]}>${item.listingPrice}</Text>
                <Text style={[styles.cell, styles.borderRight]}>${item.earnedPrice}</Text>
                <Text style={[styles.cell, styles.borderRight]}>{item.description}</Text>
                <Text style={[styles.cell, styles.borderRight]}>{item.quantity}</Text>
                <Text style={styles.cell}>{item.size}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Text style={styles.footerText}>This report provides an in-depth summary of the current product listings on DeLujo's platform, offering valuable insights for strategic decision-making.</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7252C5",
  },
  headerContainer: {
    backgroundColor: "#7252C5",
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
    height: 110,
  },
  header: {
    fontSize: 26,
    color: "#F3F3F3",
    fontWeight: "bold",
    top: 30,
  },
  summaryContainer: {
    padding: 20,
    backgroundColor: "#F3F3F3",
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    alignItems: "center",
    marginBottom: 20,
  },
  summaryText: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
  },
  summaryValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#7252C5",
  },
  scrollViewContent: {
    paddingBottom: 20,
    backgroundColor: "#F3F3F3",
  },
  table: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#7252C5",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
  },
  tableRowAlternate: {
    backgroundColor: "#f3f3f3",
  },
  headerText: {
    width: 150,
    color: "#F3F3F3",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  cell: {
    width: 150,
    textAlign: "center",
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  borderRight: {
    borderRightWidth: 1,
    borderRightColor: "#ccc",
  },
  footer: {
    marginTop: 20,
    alignItems: "center",
    paddingVertical: 10,
  },
  footerText: {
    fontSize: 18,
    color: "#7252C5",
    textAlign: "center",
    paddingHorizontal: 20,
  },
});

export default FeedBody;
