import React, { useEffect, useState } from "react";
import sanityClient from "../lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { AudioContextProvider } from "../components/AudioContext";
import { Link } from "react-router-dom";
import HomeMadeAudioPlayer from "../components/HomeMadeAudioPlayer";
import "../styles/global.css";
import CustomTabs from "../components/CustomTabs";
import CartItem from "../components/Cart/CartItem";

const Shop = () => {
  const [shop, setShop] = useState(false);

  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  const clickCheck = () => {
    console.log("pom");
  };

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
          multiTrack,
          currency
        }`
      )
      .then((data) => setShop(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <AudioContextProvider>
        <div className="shop">
          <div className="cart-icon">
            <Link to="/shop/cart">
              <AiOutlineShoppingCart />
            </Link>
          </div>
          <div className="shop-header">
            <div className="shop-title">
              <h1>Shop</h1>
              <h3>check out our collection</h3>
            </div>
          </div>
          {shop &&
            shop.map((item) => (
              <div className="shop-data" key={`${item._id}tsi`}>
                <div className="card-left">
                  <div className="record-cover">
                    <img src={urlFor(item.cover).url()} alt={item.title} />
                  </div>
                </div>
                <div className="card-right">
                  {/* click addHandler goes inside  */}
                  <CustomTabs item={item} />
                  <div className="text-audio">
                    <div className="record-text">
                      <div className="record-artist">
                        <h3>{item.artist}</h3>
                      </div>
                      <div className="record-title">
                        <h4>{item.title}</h4>
                      </div>
                    </div>
                    {/* multi file player, for now it just puts out as much players as there are files */}
                    <div className="tracks">
                      {item.multiTrack.map((song) => (
                        <ul key={`UL${song._key}${item._id}`}>
                          <li className="track">
                            <HomeMadeAudioPlayer
                              onclick={clickCheck}
                              src={
                                song
                                  ? `https://cdn.sanity.io/files/pyenle2m/production/${song.asset._ref
                                      .toString()
                                      .slice(5)
                                      .replace("-", ".")}`
                                  : "nope"
                              }
                            />
                            {song.artist}
                          </li>
                        </ul>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </AudioContextProvider>
    </>
  );
};

export default Shop;
