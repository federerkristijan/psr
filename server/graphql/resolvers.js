// imports
import User from "../models/user.js";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";
import * as dontenv from "dotenv";

// Create a user
const createUser = async function ({ userInput }) {
  const errors = [];
  
  if (userInput.email !== "") {
    if (!validator.isEmail(userInput.email)) {
      errors.push({
        message: "Email is invalid",
      });
    }
    if (
      validator.isEmpty(userInput.password) ||
      !validator.isLength(userInput.password, { min: 2 })
    ) {
      errors.push({ message: "Password to short" });
    }
    const existingUser = await User.findOne({ email: userInput.email });

    if (existingUser) {
      const errors = new Error("user exist already!");
      throw errors;
    }
    const hashedPw = await bcrypt.hash(userInput.password, 12);
  }
 
  const user = new User({
    email: userInput.email,
    firstName: userInput.firstName,
    password: userInput.email !== "" ? hashedPw : "",
    country: userInput.country,
    lastName: userInput.lastName,
    city: userInput.city,
    street: userInput.street,
    streetNumber: userInput.streetNumber,
    zipCode: userInput.zipCode,
    shoppingCart: userInput.shoppingCart,
  });
  if (errors.length > 0) {
    const error = new Error("invalid input");
    error.data = errors;
    error.code = 422;
    throw error;
  }
  

  const createdUser = await user.save();

  const token = jwt.sign(
    {
      userId: createdUser._id.toString(),
    },
    process.env.JWT,
    { expiresIn: "3y" }
  );

  return {
    ...createdUser._doc,
    _id: createdUser.id.toString(),
    token: token,
    shoppingCart: createdUser.shoppingCart,
  };
};

const loginUser = async function ({ loginEmail, loginPassword, token }) {

  let userId = false;
  if (token !== "") {
    userId = jwt.verify(token, process.env.JWT).userId;
  }
  const user = await User.findOne(
    userId ? { _id: userId } : { email: loginEmail }
  );
  if (!userId) {
    if (!user) {
      const error = new Error("user not found");
      error.code = 401;
      throw error;
    }
    const isEqual = await bcrypt.compare(loginPassword, user.password);
    if (!isEqual) {
      const error = new Error("Password is incorrect.");
      error.code = 401;
      throw error;
    }
  }
 

  return { userId: user._id.toString(), shoppingCart: user.shoppingCart };
};

const shoppingCart = async function ({ token, shoppingCart }) {
  
  const decoded = jwt.verify(token, process.env.JWT);
  console.log("message", decoded);

  const user = await User.findOneAndUpdate(
    { _id: decoded.userId },
    { shoppingCart: shoppingCart }
  );

  console.log("user", user);

  if (!user) {
    const error = new Error("user not found");
    error.code = 401;
    throw error;
  }

  return { shoppingCart: shoppingCart };
};

const graphqlResolver = {
  login: loginUser,
  createUser: createUser,
  shoppingCart: shoppingCart,
};

export { graphqlResolver };
