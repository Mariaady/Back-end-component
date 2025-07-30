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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre(/^find/, function (next) {
  this.select("-password");
  next();
});

const userModel = mongoose.model("User", userSchema, "user");
module.exports = userModel;
