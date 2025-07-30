const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["parque", "hotel", "restaurante", "playa", "area_descanso"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    default: "https://source.unsplash.com/featured/?pet,travel",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const placeModel = mongoose.model("Place", placeSchema, "place");
module.exports = placeModel;
