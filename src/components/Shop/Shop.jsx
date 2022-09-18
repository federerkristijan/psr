import React from "react";
import Cart from "./Cart";

import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Shop.css";
import { Link } from "react-router-dom";

// todo sanity and stripe

const Shop = () => {
  return (
    <div className="shop">
      <div className="shop-header">
        <h1>here comes shop</h1>
      </div>
      <div className="cart">
        <Link to="/shop/cart">
          <AiOutlineShoppingCart />
        </Link>
        {/* href={<Cart/>} */}
      </div>
    </div>
  );
};

export default Shop;
