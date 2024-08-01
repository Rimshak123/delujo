import React from 'react';
import { View, StyleSheet, Modal, Text, ScrollView } from 'react-native';

const OrderSummaryModal = ({ isVisible, closeModal, items, subtotal, taxes, totalAmount }) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Order Summary</Text>
        
        <ScrollView style={styles.itemList}>
          {items.map((item, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.itemText}>{item.product}</Text>
              <Text style={styles.itemPrice}>${item.originalPrice}</Text>
            </View>
          ))}
        </ScrollView>
        
        <View style={styles.summary}>
          <Text style={styles.summaryText}>Subtotal: ${subtotal.toFixed(2)}</Text>
          <Text style={styles.summaryText}>Taxes: ${taxes.toFixed(2)}</Text>
          <Text style={[styles.summaryText, styles.total]}>Total Amount: ${totalAmount.toFixed(2)}</Text>
        </View>

        <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7252C5',
    marginBottom: 20,
  },
  itemList: {
    maxHeight: 200,
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    color: '#333333',
  },
  itemPrice: {
    fontSize: 16,
    color: '#333333',
    fontWeight: 'bold',
  },
  summary: {
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
    paddingTop: 10,
    alignItems: 'flex-end',
  },
  summaryText: {
    fontSize: 18,
    marginBottom: 5,
  },
  total: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  closeButton: {
    backgroundColor: '#7252C5',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OrderSummaryModal;
