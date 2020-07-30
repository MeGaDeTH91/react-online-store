const mongoose = require("mongoose");
const { Schema, model: Model } = mongoose;
const { String, ObjectId } = Schema.Types;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  category: {
    type: ObjectId,
    ref: "Category",
  },
  usersFavorite: [
    {
      type: ObjectId,
      ref: "User",
    },
  ],
  productReviews: [
    {
      type: ObjectId,
      ref: "Review",
    },
  ],
});

module.exports = new Model("Product", productSchema);