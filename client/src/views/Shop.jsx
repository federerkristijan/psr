import React, { useContext, useEffect, useState } from "react";
import sanityClient from "../lib/client";
import { useNavigate } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";

import { AudioContextProvider } from "../components/AudioContext";
import HomeMadeAudioPlayer from "../components/HomeMadeAudioPlayer";
import CustomTabs from "../components/CustomTabs";
import CartButton from "../components/Cart/CartButton";
import { CartContext, CartContextProvider } from "../store/CartContext";
import "../styles/global.css";

const Shop = (props) => {
  const navigate = useNavigate();
  const [shop, setShop] = useState(false);
  const { items } = useContext(CartContext);

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
        <CartContextProvider>
          <div className="shop">
            <div className="cart-icon">
              <CartButton
                onClick={() => navigate('/shop/cart')}
                count={items.length}
              />
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
        </CartContextProvider>
      </AudioContextProvider>
    </>
  );
};

export default Shop;
