import React, { useEffect, useState } from "react";
// https://github.com/notrab/react-use-cart
import { CartProvider, useCart } from "react-use-cart";

import sanityClient from "../lib/client";

// todo sanity and stripe

const Cart = (tracks) => {
  const { addItem } = useCart();
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
      {cart &&
        cart.map((item) => (
          <div className="cart-data" key={item.id}>
            <div className="cart-display"></div>
            <button onClick={() => addItem(item)}>Add to cart</button>
          </div>
        ))}
    </div>
  );
};

export default Cart;
