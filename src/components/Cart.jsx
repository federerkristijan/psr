import React, { useEffect, useRef, useState } from "react";

import { GraphQLContext } from "./GraphQLContext";
import sanityClient from "../lib/client";

// todo sanity and stripe

const Cart = (tracks) => {
  const cartRef = useRef();
  const { token, productId, userId } = GraphQLContext;
  // const [cart, setCart] = useState(false);

  // useEffect(() => {
  //   sanityClient
  //     .fetch(
  //       `*[_type == "record"] {
  //         _id,
  //         title,
  //         artist,
  //         cover,
  //         price,
  //         singleTrack,
  //         multiTrack
  //       }`
  //     )
  //     .then((data) => setCart(data))
  //     .catch(console.error);
  // }, []);

  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.strigify(cartItems);
    });
  };

  return <div className="cart-wrapper">I am cart, fear me</div>;
};

export default Cart;
