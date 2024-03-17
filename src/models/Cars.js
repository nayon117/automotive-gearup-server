const mongoose = require('mongoose');

// Define the car schema
const carSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

// Create a Mongoose model based on the schema
const Cars = mongoose.model('Cars', carSchema);

module.exports = Cars;
s