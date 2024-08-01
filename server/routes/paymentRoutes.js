const express = require('express');
const router = express.Router();

const stripe = require('stripe')('sk_test_51PVEchG56SCh1jDVtPuGzHKkxKQQjr4EjhLHzawRZd9Yf5pae6tdPsl059NS4JdWBSgoaaH4nF7cOLnWa5cBGuL500Mj4oK1Ow');
// Router end points
router.post('/intent', async (req, res) => {
  try {
    // Create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount, // Integer
      currency: 'usd',
    //   automatic_payment_methods: {
    //     enabled: true,
    //   },
    payment_method_types: ['card'], 
    });
    // Return the intent
    res.json({ paymentIntent: paymentIntent.client_secret });
  } catch (e) {
    res.status(400).json({
      error: e.message,
    });
  }
});

module.exports = router;

