const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
  namePet: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    enum: ["perro", "gato", "otro"],
    required: true,
  },
  breed: {
    type: String,
  },
  size: {
    type: String,
    enum: ["pequeño", "mediano", "grande"],
    required: true,
  },
  age: {
    type: String,
  },
  photo: {
    type: String,
  },
});

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  profilePhoto: {
    type: String,
    default: "https://source.unsplash.com/featured/?person",
  },
  gmail: {
    type: String,
    required: true,
    unique: true,
  },
  pets: [petSchema],
  cart: [
    {
      placeId: {
        type: Schema.Types.ObjectId,
        ref: "Place",
      },
      cartAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const userModel = mongoose.model("User", userSchema, "user");
module.exports = userModel;
