import React, { useRef } from "react";
import { AiOutlineLeft, AiOutlineShopping } from "react-icons/ai";

// credits to https://notiflix.github.io/documentation

import { useCartContext } from "../context/CartContext";
import getStripe from "../lib/getStripe";
import { Link } from "react-router-dom";

// todo sanity and stripe

const Cart = (tracks) => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantites,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
  } = useCartContext;

  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.strigify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="cart-heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantites} items)</span>
        </button>
        {/* empty cart - not active yet */}
        {/* {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Continue shopping
              </button>
            </Link>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Cart;
