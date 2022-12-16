import React, { useEffect, useRef, useState } from "react";

import { useCartContext } from "../context/CartContext";
import getStripe from "../lib/getStripe";

// todo sanity and stripe

const Cart = (tracks) => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantites,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    onRemove
  } = useCartContext;

  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.strigify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    stripe.redirectToCheckout({ sessionId: data.id })
  };

  return <div className="cart-wrapper">I am cart, fear me</div>;
};

export default Cart;
