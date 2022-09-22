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
          title,
          artist,
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
            <div className="record-cover">
              <img src={item.cover} alt={item.title} />
            </div>
            <div className="record-text">
              <div className="record-title">
                <h3>{item.artist}</h3>
                <h4>{item.title}</h4>
              </div>
            </div>
            <div className="price">
              <p>{item.price}€</p>
            </div>
            <div className="track" key={item.tracks.trackId}>
              <p>I'm track</p>
              {/* <ul>
                <li>
                  <audio src={item.tracks[0].track} type="audio/mp3"></audio>
                </li>
              </ul> */}
              {/* version 1 */}
              {/* <ReactAudioPlayer
                    src={item.tracks[0].track}
                    autoPlay
                    controls
                  /> */}

              {/* version 2 */}
              {/* <ul>
                    <li>
                      <span>
                        <ReactAudioPlayer
                          src={item.tracks[0].track}
                          autoPlay
                          controls
                          key={item.tracks.trackId}
                        />
                      </span>
                    </li>
                  </ul> */}

              {/* version 3 */}
              {/* <span>{shop.tracks && shop.tracks.map((track) => (
                    <ReactAudioPlayer
                    src={item.tracks}
                    autoPlay
                    controls="true"
                    key={track.title}
                  />
                  ))}</span> */}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shop;
