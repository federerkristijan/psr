import React, { useEffect, useState } from "react";
import sanityClient from "../lib/client";
import imageUrlBuilder from "@sanity/image-url";
// import ReactAudioPlayer from "react-audio-player";
import { AudioContextProvider } from "../elements/AudioContext";

// credits to justinmc @https://github.com/justinmc/react-audio-player
// import ReactAudioPlayer from "react-audio-player";

import { AiOutlineShoppingCart } from "react-icons/ai";
import "../styles/global.css";
import { Link } from "react-router-dom";
import HomeMadeAudioPlayer from "../elements/HomeMadeAudioPlayer";
import Back from "./Back";

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

        }`
      )
      .then((data) => setShop(data))
      .catch(console.error);
  }, []);

  console.log("tracks", shop);

  return (
    <>
    <AudioContextProvider>
      <div className="shop">
        <Back />
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
            shop.map((item) => (
              <div className="shop-data" key={item.title}>
                <div className="record-cover">
                  <img
                    src={urlFor(item.cover).width(140).url()}
                    alt={item.title}
                  />
                </div>
                <div className="record-text">
                  <div className="record-artist">
                    <h3>{item.artist}</h3>
                  </div>
                  <div className="record-title">
                    <h4>{item.title}</h4>
                  </div>
                </div>
                <div className="price">
                  <p>{item.price}€</p>
                </div>
                {/* multi file player, for now it just puts out as much players as there are files */}
                <div className="tracks">
                  {item.multiTrack.map((song) => (
                    <div>
                      {song.artist}
                      {/* <ReactAudioPlayer
                      src={
                        song
                          ? `https://cdn.sanity.io/files/pyenle2m/production/${song.asset._ref
                              .toString()
                              .slice(5)
                              .replace("-", ".")}`
                          : "nope"
                      }
                      type="audio/mp3"
                      preload="auto"
                      play="true"
                      className="audio_volume_only"
                    ></ReactAudioPlayer> */}
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
                    </div>
                  ))}
                </div>
              </div>
            ))}
      </div>
    </AudioContextProvider>
    </>
  );
};

export default Shop;
