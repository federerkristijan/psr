// imports
import User from "../models/user.js";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";
import * as dontenv from "dotenv";

// Create a user
const createUser = async function ({ userInput }) {
  const errors = [];
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
  const user = new User({
    email: userInput.email,
    firstName: userInput.firstName,
    password: hashedPw,
    country: userInput.country,
    lastName: userInput.lastName,
    city: userInput.city,
    street: userInput.street,
    streetNumber: userInput.streetNumber,
    zipCode: userInput.zipCode,
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
      email: createdUser.email,
    },
    process.env.JWT,
    { expiresIn: "3y" }
  );

  return { ...createdUser._doc, _id: createdUser.id.toString(), token: token };
};

const loginUser = async function ({ loginEmail, loginPassword }) {
  const user = await User.findOne({ email: loginEmail });
  console.log("rwest", loginEmail, loginPassword);
  console.log(user);
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
  const token = jwt.sign(
    {
      userId: user._id.toString(),
      email: user.email,
    },
    process.env.JWT,
    { expiresIn: "3h" }
  );
  return { token: token, userId: user._id.toString() };
};

const graphqlResolver = {
  login: loginUser,
  createUser: createUser,
};

export { graphqlResolver };
