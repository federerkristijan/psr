import React, { useEffect, useState } from "react";
import sanityClient from "../../lib/client";

import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Shop.css";
import { Link } from "react-router-dom";

const Shop = () => {
  const [shop, setShop] = useState(false);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "shop"] | order(_createdAt asc) {
        title,
        description,
        price
      }`
      )
      .then((data) => setShop(data))
      .catch(console.error);
  }, []);

  return (
    <div className="shop">
      <div className="shop-header">
        <h1>Shop</h1>
        <h3>check out our collection</h3>
      </div>
      <div className="cart">
        <Link to="/shop/cart">
          <AiOutlineShoppingCart />
        </Link>
      </div>
      {shop &&
        shop.map((item) => (
          <div className="shop-data" key={item.title}>
            <div className="record-title">
              <h3>{item.title}</h3>
            </div>
            <div className="record-description">
              <span>{item.description}</span>
            </div>
            <div className="price">
              <p>{item.price}€</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shop;
