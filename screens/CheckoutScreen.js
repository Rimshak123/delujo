import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { CardField, useStripe } from '@stripe/stripe-react-native';

const CheckoutScreen = ({ route }) => {
  const { amount } = route.params;
  const [clientSecret, setClientSecret] = useState('');
  const { confirmPayment } = useStripe();

  useEffect(() => {
    fetchPaymentIntent();
  }, []);

  const fetchPaymentIntent = async () => {
    try {
      const response = await fetch('http://192.168.18.19:5000/api/payment/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: amount * 100 }), // Convert amount to cents
      });
      const data = await response.json();
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.error('Error fetching payment intent:', error);
    }
  };

  const handlePayment = async () => {
    try {
      const { error } = await confirmPayment(clientSecret, {
        type: 'Card',
        billingDetails: {
          email: 'customer@example.com',
        },
      });

      if (error) {
        console.error('Payment failed:', error.message);
      } else {
        console.log('Payment successful');
        // Handle success, e.g., navigate to success screen
      }
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };

  return (
    <View>
      <Text>Total: ${amount}</Text>
      <CardField
        placeholder={{
          number: '4242 4242 4242 4242',
        }}
        style={{ width: '100%', height: 50 }}
        onCardChange={(cardDetails) => {
          console.log('cardDetails', cardDetails);
        }}
      />
      <Button title="Pay Now" onPress={handlePayment} />
    </View>
  );
};

export default CheckoutScreen;
