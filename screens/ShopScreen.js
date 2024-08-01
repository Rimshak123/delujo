import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Modal, Alert, TextInput } from "react-native";
import axios from "axios";

const FeedBody = () => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [paymentModalVisible, setPaymentModalVisible] = useState(false);
  const [creditCardModalVisible, setCreditCardModalVisible] = useState(false);
  const [creditCardInfo, setCreditCardInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
  });
  const [shippingModalVisible, setShippingModalVisible] = useState(false);
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    address2: '',
    city: '',
    postalCode: '',
    phone: '',
    email: '',
  });
  const [orderCompletedModalVisible, setOrderCompletedModalVisible] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get("http://192.168.18.19:5000/api/items/all");
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem._id === item._id);
    if (existingItem) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem._id === item._id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (item, change) => {
    const updatedCart = cartItems
      .map((cartItem) =>
        cartItem._id === item._id ? { ...cartItem, quantity: cartItem.quantity + change } : cartItem
      )
      .filter((cartItem) => cartItem.quantity > 0);
    setCartItems(updatedCart);
  };

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.originalPrice * item.quantity, 0);
  };

  const checkout = () => {
    if (cartItems.length === 0) {
      Alert.alert("Empty Cart", "Please add items to your cart before checkout.");
    } else {
      Alert.alert(
        "Checkout",
        `Total Amount: $${getTotalAmount().toFixed(2)}`,
        [
          { text: "Cancel", style: "cancel" },
          { text: "Confirm", onPress: () => setPaymentModalVisible(true) },
        ]
      );
    }
  };

  const selectPaymentMethod = (method) => {
    setPaymentModalVisible(false);
    if (method === "Cash on Delivery") {
      const totalAmount = getTotalAmount();
      const totalAmountWithCharge = totalAmount + 5;
      Alert.alert(
        "Cash on Delivery",
        `Total Amount with $5 COD Charge: $${totalAmountWithCharge.toFixed(2)}`,
        [
          { text: "Cancel", style: "cancel" },
          { text: "Confirm", onPress: () => {
            Alert.alert("Payment Method", `You have selected Cash on Delivery.`);
            setShippingModalVisible(true);
          } },
        ]
      );
    } else if (method === "Credit Card") {
      setCreditCardModalVisible(true);
    }
  };

  const handleCreditCardSubmit = () => {
    if (
      creditCardInfo.cardNumber &&
      creditCardInfo.expiryDate &&
      creditCardInfo.cvv &&
      creditCardInfo.cardholderName
    ) {
      setCreditCardModalVisible(false);
      Alert.alert("Payment Successful", "Your payment has been processed.");
      setCartItems([]);
      setCreditCardInfo({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardholderName: '',
      });
      setShippingModalVisible(true);
    } else {
      Alert.alert("Error", "Please fill out all credit card fields.");
    }
  };

  const handleShippingSubmit = () => {
    if (
      shippingInfo.fullName &&
      shippingInfo.address &&
      shippingInfo.city &&
      shippingInfo.postalCode &&
      shippingInfo.phone &&
      shippingInfo.email
    ) {
      setShippingModalVisible(false);
      Alert.alert("Shipping Information", "Your shipping information has been submitted successfully.");
      setOrderCompletedModalVisible(true);
    } else {
      Alert.alert("Error", "Please fill out all shipping fields.");
    }
  };

  const closeOrderCompletedModal = () => {
    setOrderCompletedModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Shop</Text>
      </View>
      <View style={styles.body}>
        <ScrollView>
          {items.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
              <Text style={styles.itemText}>{item.product}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.itemDimensions}>Dimensions: {`${item.height}cm x ${item.width}cm`}</Text>
              <Text style={styles.itemPrice}>Price: ${item.originalPrice.toFixed(2)}</Text>
              <TouchableOpacity style={styles.addToCartButton} onPress={() => addToCart(item)}>
                <Text style={styles.addToCartButtonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View style={styles.cartContainer}>
          <Text style={styles.cartTitle}>Cart</Text>
          <ScrollView style={styles.cartItemsContainer}>
            {cartItems.map((item, index) => (
              <View key={index} style={styles.cartItem}>
                <Text style={styles.cartItemText}>{item.product}</Text>
                <View style={styles.quantityControl}>
                  <TouchableOpacity onPress={() => updateQuantity(item, -1)}>
                    <Text style={styles.quantityControlText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantity}>{item.quantity}</Text>
                  <TouchableOpacity onPress={() => updateQuantity(item, 1)}>
                    <Text style={styles.quantityControlText}>+</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.cartItemPrice}>${(item.originalPrice * item.quantity).toFixed(2)}</Text>
              </View>
            ))}
          </ScrollView>
          <Text style={styles.totalText}>Total Amount: ${getTotalAmount().toFixed(2)}</Text>
          <TouchableOpacity style={styles.checkoutButton} onPress={checkout}>
            <Text style={styles.checkoutButtonText}>Checkout</Text>
          </TouchableOpacity>
        </View>

        <Modal animationType="slide" transparent={true} visible={paymentModalVisible} onRequestClose={() => setPaymentModalVisible(false)}>
          <View style={styles.paymentModalContainer}>
            <View style={styles.paymentModalContent}>
              <Text style={styles.paymentModalTitle}>Select Payment Method</Text>
              <TouchableOpacity style={styles.paymentMethodButton} onPress={() => selectPaymentMethod("Cash on Delivery")}>
                <Text style={styles.paymentMethodButtonText}>Cash on Delivery</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.paymentMethodButton} onPress={() => selectPaymentMethod("Credit Card")}>
                <Text style={styles.paymentMethodButtonText}>Credit Card</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.closeButton} onPress={() => setPaymentModalVisible(false)}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal animationType="slide" transparent={true} visible={creditCardModalVisible} onRequestClose={() => setCreditCardModalVisible(false)}>
          <View style={styles.paymentModalContainer}>
            <View style={styles.paymentModalContent}>
              <Text style={styles.paymentModalTitle}>Enter Credit Card Details</Text>
              <TextInput
                style={styles.input}
                placeholder="Cardholder Name"
                value={creditCardInfo.cardholderName}
                onChangeText={(text) => setCreditCardInfo({ ...creditCardInfo, cardholderName: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Card Number"
                keyboardType="numeric"
                value={creditCardInfo.cardNumber}
                onChangeText={(text) => setCreditCardInfo({ ...creditCardInfo, cardNumber: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Expiry Date (MM/YY)"
                value={creditCardInfo.expiryDate}
                onChangeText={(text) => setCreditCardInfo({ ...creditCardInfo, expiryDate: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="CVV"
                keyboardType="numeric"
                secureTextEntry={true}
                value={creditCardInfo.cvv}
                onChangeText={(text) => setCreditCardInfo({ ...creditCardInfo, cvv: text })}
              />
              <TouchableOpacity style={styles.paymentMethodButton} onPress={handleCreditCardSubmit}>
                <Text style={styles.paymentMethodButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal animationType="slide" transparent={true} visible={shippingModalVisible} onRequestClose={() => setShippingModalVisible(false)}>
          <View style={styles.fullScreenContainer}>
            <View style={styles.fullScreenModalContent}>
              <Text style={styles.paymentModalTitle}>Enter Shipping Information</Text>
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                value={shippingInfo.fullName}
                onChangeText={(text) => setShippingInfo({ ...shippingInfo, fullName: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Address Line 1"
                value={shippingInfo.address}
                onChangeText={(text) => setShippingInfo({ ...shippingInfo, address: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Address Line 2"
                value={shippingInfo.address2}
                onChangeText={(text) => setShippingInfo({ ...shippingInfo, address2: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="City"
                value={shippingInfo.city}
                onChangeText={(text) => setShippingInfo({ ...shippingInfo, city: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Postal Code"
                keyboardType="numeric"
                value={shippingInfo.postalCode}
                onChangeText={(text) => setShippingInfo({ ...shippingInfo, postalCode: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                keyboardType="phone-pad"
                value={shippingInfo.phone}
                onChangeText={(text) => setShippingInfo({ ...shippingInfo, phone: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                value={shippingInfo.email}
                onChangeText={(text) => setShippingInfo({ ...shippingInfo, email: text })}
              />
              <TouchableOpacity style={styles.paymentMethodButton} onPress={handleShippingSubmit}>
                <Text style={styles.paymentMethodButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal animationType="slide" transparent={true} visible={orderCompletedModalVisible} onRequestClose={closeOrderCompletedModal}>
          <View style={styles.fullScreenContainer}>
            <View style={styles.fullScreenModalContent}>
              <Text style={styles.paymentModalTitle}>Order Completed</Text>
              <Text style={{ marginBottom: 20 }}>Your order has been completed successfully.</Text>
              <TouchableOpacity style={styles.paymentMethodButton} onPress={closeOrderCompletedModal}>
                <Text style={styles.paymentMethodButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    justifyContent: "flex-start",
    alignItems: "center",
  },
  header: {
    width: "100%",
    backgroundColor: "#7252C5",
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "bold",
    top:25,
    paddingBottom:30,

  },
  body: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  itemContainer: {
    backgroundColor: "#7051C4",
    width: 300,
    padding: 15,
    marginBottom: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemText: {
    color: "#f3f3f3",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  itemDescription: {
    color: "#f3f3f3",
    fontSize: 14,
    marginBottom: 5,
  },
  itemDimensions: {
    color: "#f3f3f3",
    fontSize: 14,
    marginBottom: 5,
  },
  itemPrice: {
    color: "#f3f3f3",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  addToCartButton: {
    backgroundColor: "#fefefe",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  addToCartButtonText: {
    color: "#7051C4",
    fontSize: 16,
    fontWeight: "bold",
  },
  cartContainer: {
    backgroundColor: "white",
    marginTop: 20,
    padding: 20,
    width: "90%",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cartTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#7252C5",
    marginBottom: 10,
  },
  cartItemsContainer: {
    maxHeight: 200,
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  cartItemText: {
    fontSize: 16,
    color: "#333333",
  },
  quantityControl: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityControlText: {
    fontSize: 20,
    color: "#7252C5",
    paddingHorizontal: 10,
  },
  quantity: {
    fontSize: 16,
    color: "#333333",
    paddingHorizontal: 10,
  },
  cartItemPrice: {
    fontSize: 16,
    color: "#333333",
    fontWeight: "bold",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginTop: 10,
    textAlign: "right",
  },
  checkoutButton: {
    backgroundColor: "#7252C5",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  checkoutButtonText: {
    color: "#f3f3f3",
    fontSize: 18,
    fontWeight: "bold",
  },
  paymentModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  paymentModalContent: {
    width: 300,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  paymentModalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  paymentMethodButton: {
    backgroundColor: "#7252C5",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
    width: "100%",
  },
  paymentMethodButtonText: {
    color: "#f3f3f3",
    fontSize: 16,
    fontWeight: "bold",
  },
  closeButton: {
    backgroundColor: "#CCCCCC",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
    width: "100%",
  },
  closeButtonText: {
    color: "#333333",
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: "100%",
  },
  fullScreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  fullScreenModalContent: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
});

export default FeedBody;
