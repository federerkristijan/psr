import React, { useContext } from "react";
// import {
//   AiOutlineDelete,
//   AiOutlineLeft,
//   AiOutlineMinus,
//   AiOutlinePlus,
//   AiOutlineShopping,
// } from "react-icons/ai";
// import toast from "react-hot-toast";
// import { Link } from "react-router-dom";

// credits to https://notiflix.github.io/documentation

// import { CartContext, useCartContext } from "../context/CartContext";
// import getStripe from "../lib/getStripe";
// import { urlFor } from "../lib/client";
import { useShoppingCart } from 'use-shopping-cart';
import { getProductData } from '../store/ProductStore';


const Cart = (props) => {
  const productData = props.getProductData;

  const { totalPrice, redirectToCheckout, cartCount } = useShoppingCart();

  return (
    <>
    {productData.map((product) => (
      <Product product={product} />
    ))}

    <p>Number of items: {cartCount}</p>
    <p>Total: {totalPrice}</p>

    <button onClick={redirectToCheckout} >Checkout</button>
    </>
  )
};

export default Cart;
