


const Item = require("../models/Item");


exports.createItem = async (req, res) => {
  try {
    const newItem = new Item({
      product: req.body.product,
      description: req.body.description,
      quantity: req.body.quantity,
      originalPrice: req.body.originalPrice,
      listingPrice: req.body.listingPrice,
      earnedPrice: req.body.earnedPrice,
      priceDescription: req.body.priceDescription,
      height: req.body.height,
      width: req.body.width,
      tag: req.body.tag,
      size: req.body.size,
      ownerName:req.body.ownerName,
      ownerEmail:req.body.ownerEmail,
      // producttype:req.body.producttype,
    
    });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to create item" });
  }
};

exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to fetch items" });
  }
};
//

