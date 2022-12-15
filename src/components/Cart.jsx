import React, { useEffect, useRef, useState } from "react";

import { GraphQLContext } from "./GraphQLContext";

// todo sanity and stripe

const Cart = (tracks) => {
  const cartRef = useRef();
  const { userData, setUserData } = GraphQLContext;

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
