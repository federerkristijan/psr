import express from "express";
import { graphqlHTTP } from "express-graphql";
import graphqlSchema from "./graphql/schema.js";
import { graphqlResolver } from "./graphql/resolvers.js";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: '{{PRICE_ID}}',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));

dotenv.config();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));

app.listen(8080);

/////////////////////////////////////Sven's//Coding/ Date: 22-11-2022 13:23 ////////////
// login to mongoose
/////////////////////////////////////////gnidoC//s'nevS////////////////////////////////
const mongooseLogin = process.env.MONGO_URI;

const DataBaseConnect = async () => {
  try {
    await mongoose.connect(mongooseLogin);
    console.log("Connection established with mongo");
  } catch (error) {
    console.log("DB error", error);
  }
};

DataBaseConnect();
// End of connect to mongoose

//GraphQL
app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
    formatError(err) {
      if (!err.originalError) {
        return err;
      }
      const data = err.originalError.data;
      const message = err.message || "an error occured";
      const code = err.originalError.code || 500;
      return { message: message, status: code, data: data };
    },
  })
);
