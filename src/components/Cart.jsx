import React from "react";
// https://github.com/notrab/react-use-cart
import { CartProvider, useCart } from "react-use-cart";

// todo sanity and stripe

const Cart = (tracks) => {
  const { addItem } = useCart();

  return (
    <div className="cart-wrapper">
      {/*       {tracks && tracks.map((item) => (
        <div className="cart-data" key={item.id}>
          <button onClick={() => addItem(item)}>Add to cart</button>
        </div>
      ))} */}
      <button>Add</button>
      <button>Add</button>
      <button>Add</button>
    </div>
  );
};

export default Cart;
