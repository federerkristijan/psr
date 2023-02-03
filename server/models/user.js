import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  street: {
    type: String,
    required: false,
  },
  streetNumber: {
    type: String,
    required: false,
  },
  zipCode: {
    type: String,
    required: false,
  },
  loginPassword: {
    type: String,
    required: false,
  },
  loginEmail: {
    type: String,
    required: false,
  },
  shoppingCart: {
    type: [String],
    required: false,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
