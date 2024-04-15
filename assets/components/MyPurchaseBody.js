import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Frame from '../components/Frame';

const MyPurchaseBody = () => {
  return (
    <View style={styles.bodyContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Your Bundles
        </Text>
      </View>

      <Text style={styles.secondaryText}>
        Today </Text>
      <Frame
        imagePath={require('../assets/bag-removebg-preview.png')}
        productText='Thule paramount'
        size='Medium'
        amount='$192,215'
        vender='OmerJ'
        productstatus='On the way'
      />
      <View style={{ marginBottom: 25 }} />
      <Frame
        imagePath={require('../assets/umbrella-removebg-preview (1).png')}
        productText='Sombrilla de colores'
        size='Large'
        amount='$19,215'
        vender='GusR'
        productstatus='On the way'
      />
      <View style={{ marginBottom: 25 }} />
      <Frame
        imagePath={require('../assets/laptop-removebg-preview (3).png')}
        productText='Ordenador LENOVO'
        size='Medium'
        amount='$ 3,700,000'
        vender='Monita'
        productstatus='On the way'
      />
      <View style={{ marginBottom: 25 }} />
      <Frame
        imagePath={require('../assets/pens-removebg-preview.png')}
        productText='Sharpie pens'
        size='Medium'
        amount='$230,700'
        vender='Arturole'
        productstatus='On the way'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: "#F3F3F3",
    borderTopLeftRadius: 65,
    borderTopRightRadius: 65,
  },

  header: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 30,
  },
  headerText: {
    fontSize: 20,
    color: "#7051C4",
    fontWeight: 'bold',
  },
  topRightText: {
    fontSize: 14,
    color: "#ADADAD",
    paddingRight: 30,
  },
  secondaryText: {
    fontSize: 16,
    color: "#8E8E94",
    left: 18,
    marginTop: 15,

  },
});

export default MyPurchaseBody;
