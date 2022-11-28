import React, { useEffect, useState } from "react";
import sanityClient from "../lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { AudioContextProvider } from "../components/AudioContext";
import { Link } from "react-router-dom";
import HomeMadeAudioPlayer from "../components/HomeMadeAudioPlayer";
import Back from "../components/Back";
import "../styles/global.css";
import CustomTabs from "../components/CustomTabs";
import LP from "../components/LP";

const Shop = () => {
  const [shop, setShop] = useState(false);
  const [openTab, setOpenTab] = useState(false);

  // const tabs = {
  //   LP: {
  //     border: "1px solid black",
  //   },
  //   digital: {
  //     border: "1px solid red",
  //   },
  // };

  useEffect(() => {
    if(setOpenTab === <LP/>){
      openTab(true)
    }
  }, [openTab, setOpenTab])


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
          <div className="cart">
            <Link to="/shop/cart">
              <AiOutlineShoppingCart />
            </Link>
          </div>
          <Back />
          <div className="shop-header">
            <div className="shop-title">
              <h1>Shop</h1>
              <h3>check out our collection</h3>
            </div>
          </div>
          {shop &&
            shop.map((item) => (
              <div className="shop-data" key={item._id}>
                <div className="card-left">
                  <div className="record-cover">
                    <img
                      src={urlFor(item.cover).width(140).url()}
                      alt={item.title}
                    />
                  </div>
                </div>
                <div className="card-middle">
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
                      <div className="track" key={song._id}>
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
                      </div>
                    ))}
                  </div>
                </div>
                <div className="card-right">
                  <div className="record-tabs">
                    <CustomTabs/>
                    {/* <div className="Tabs-wrapper">
                      <div className="Tabs">
                        <ul className="Nav">
                          <li
                            className={activeTab === "lp" ? "active" : ""}
                            onClick={handleLP}
                            id="lp"
                          >
                            LP
                          </li>
                          <li
                            className={activeTab === "digital" ? "active" : ""}
                            onClick={handleDigital}
                            id="digital"
                          >
                            Digital
                          </li>
                        </ul>
                        <div className="outlet">
                          {activeTab === "lp" ? "1" : "2"}
                        </div>
                      </div>
                    </div> */}
                  </div>
                  {openTab && <div className="price">{item.price}€</div>}
                </div>
              </div>
            ))}
        </div>
      </AudioContextProvider>
    </>
  );
};

export default Shop;
