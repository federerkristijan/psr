import React, { useEffect, useState } from "react";
// https://github.com/notrab/react-use-cart
// import { CartProvider, useCart } from "react-use-cart";

import { GraphQLContext } from "./GraphQLContext";
import sanityClient from "../lib/client";

// todo sanity and stripe

const Cart = (tracks) => {
  const [cart, setCart] = useState(false);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "record"] {
          _id,
          title,
          artist,
          cover,
          price,
          singleTrack,
          multiTrack
        }`
      )
      .then((data) => setCart(data))
      .catch(console.error);
  }, []);

  return (
    <div className="cart-wrapper">
    </div>
  );
};

export default Cart;
