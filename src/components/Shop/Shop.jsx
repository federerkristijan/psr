import React, { useEffect, useState } from "react";
import sanityClient from "../../lib/client";

// credits to justinmc @https://github.com/justinmc/react-audio-player
import ReactAudioPlayer from "react-audio-player";

import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Shop.css";
import { Link } from "react-router-dom";

const Shop = () => {
  const [shop, setShop] = useState(false);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "record"] {
          artist,
          title,
          cover,
          price,
          tracks[] {
            title,
            artist,
            trackId
          }
        }`
      )
      .then((data) => setShop(data))
      .catch(console.error);
  }, []);

  return (
    <div className="shop">
      <div className="shop-header">
        <div className="shop-title">
          <h1>Shop</h1>
          <h3>check out our collection</h3>
        </div>
        <div className="cart">
          <Link to="/shop/cart">
            <AiOutlineShoppingCart />
          </Link>
        </div>
      </div>
      {shop &&
        shop?.map((item) => (
          <div className="shop-data" key={item.title}>
            <ul>
              <li>
                <div className="record-text">
                  <div className="record-title">
                    <h2>{item.artist}</h2>
                    <h3>{item.title}</h3>
                    <img src={item.cover} alt={item.title} />
                  </div>
                </div>
                <div className="price">
                  <p>{item.price}€</p>
                </div>
                <div className="track" key={item.tracks.trackId}>
                  {/* version 1 */}
                  <ReactAudioPlayer
                    src={item.tracks.track}
                    autoPlay
                    controls
                  />

                  {/* version 2 */}
                  {/* <span>{shop.tracks && shop.tracks.map((track) => (
                    <ReactAudioPlayer
                    src={item.tracks}
                    autoPlay
                    controls="true"
                    key={track.title}
                  />
                  ))}</span> */}
                </div>
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Shop;
