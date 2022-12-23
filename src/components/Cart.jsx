import React, { useContext } from "react";
import {
  AiOutlineDelete,
  AiOutlineLeft,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShopping,
} from "react-icons/ai";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

// credits to https://notiflix.github.io/documentation

import { CartContext, useCartContext } from "../context/CartContext";
import getStripe from "../lib/getStripe";
import { urlFor } from "../lib/client";
import { CartProvider } from "use-shopping-cart";

// todo sanity and stripe

const Cart = ({children}) => {
  // const cart = useContext(CartContext);
  // const id = props.id;
  // const quantity = props.quantity;
  // const productData = props.productData(id);
  // const {
  //   totalPrice,
  //   totalQuantites,
  //   cartItems,
  //   setShowCart,
  //   toggleCartItemQuantity,
  //   onRemove,
  // } = useCartContext;

  // const handleCheckout = async () => {
  //   const stripe = await getStripe();
  //   const response = await fetch("/api/stripe", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.strigify(cartItems),
  //   });

  //   if (response.statusCode === 500) return;

  //   const data = await response.json();

  //   toast.loading("Redirecting...");

  //   stripe.redirectToCheckout({ sessionId: data.id });
  //   console.log(data, "stripe date");
  // };

  return (
    <CartProvider
      mode="checkout-session"
      stripe={getStripe()}
      currency={"EUR"}
    >
      {children}
    </CartProvider>
    // <div className="cart-wrapper">
    //   <div className="cart-container">
    //     <button type="button" className="cart-heading">
    //       <AiOutlineLeft />
    //       <span className="cart-heading">Your Cart</span>
    //       <span className="cart-num-items">
    //         <h3>{productData.title}</h3>
    //         <p>{quantity} total</p>
    //         <p>${ (quantity * productData.price).toFixed(2)}</p>
    //         <button type="button" onClick={() => cart.deleteFromCart(id)}>Remove</button>
    //       </span>
    //     </button>

    //     {/* {cartItems.length < 1 && (
    //       <div className="empty-cart">
    //         <AiOutlineShopping size={150} />
    //         <h3>Your shopping is empty</h3>
    //         <Link href="/">
    //           <button
    //             type="button"
    //             onClick={() => setShowCart(false)}
    //             className="btn"
    //           >
    //             Continue shopping
    //           </button>
    //         </Link>
    //       </div>
    //     )} */}
    //     {/* <div className="product-container">
    //       {cartItems.length >= 1 &&
    //         cartItems.map((item) => (
    //           <div className="product" key={item._id}>
    //             <img
    //               src={urlFor(item?.image[0])}
    //               className="cart-product-image"
    //               alt="record_img"
    //             />
    //             <div className="item-desc">
    //               <div className="flex-top">
    //                 <h5>{item.name}</h5>
    //                 <h4>{item.price}</h4>
    //               </div>
    //               <div className="flex-bottom">
    //                 <div>
    //                   <p className="quantity-desc">
    //                     <span
    //                       className="minus"
    //                       onClick={() =>
    //                         toggleCartItemQuantity(item._id, "dec")
    //                       }
    //                     >
    //                       <AiOutlineMinus />
    //                     </span>
    //                     <span
    //                       className="plus"
    //                       onClick={() =>
    //                         toggleCartItemQuantity(item._id, "inc")
    //                       }
    //                     >
    //                       <AiOutlinePlus />
    //                     </span>
    //                   </p>
    //                 </div>
    //                 <button
    //                   type="button"
    //                   className="remove-item"
    //                   onClick={() => onRemove(item)}
    //                 >
    //                   <AiOutlineDelete />
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //     </div> */}
    //     {/* {cartItems.length >= 1 && (
    //       <div className="cart-bottom">
    //         <div className="total">
    //           <h3>Subtotal</h3>
    //           <h3>{totalPrice}</h3>
    //         </div>
    //         <div className="btn-container">
    //           <button type="button" className="btn" onClick={handleCheckout}>
    //             Pay
    //           </button>
    //         </div>
    //       </div>
    //     )} */}
    //   </div>
    // </div>
  );
};

export default Cart;
