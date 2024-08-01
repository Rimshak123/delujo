const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  originalPrice: {
    type: Number,
    required: true,
  },
  listingPrice: {
    type: String,
    required: true,
  },
  earnedPrice: {
    type: String,
    required: true,
  },
  priceDescription: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  ownerName:{
    type: String,
    required: true,
  },
  ownerEmail:{
    type: String,
    required: true,
  },
  // producttype:{
  //   type: String,
  //   required: true,
  // },
 
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
