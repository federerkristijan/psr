import React, { useEffect, useState } from "react";
import sanityClient from "../lib/client";
import imageUrlBuilder from "@sanity/image-url";

// credits to justinmc @https://github.com/justinmc/react-audio-player
// import ReactAudioPlayer from "react-audio-player";

import { AiOutlineShoppingCart } from "react-icons/ai";
import "../styles/global.css";
import { Link } from "react-router-dom";

const Shop = () => {
  const [shop, setShop] = useState(false);
  const [tracks, setTracks] = useState([]);

  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "record"] {
          _id,
          title,
          artist,
          cover,
          price,
          "tracks": *[_type == "track"] {
            _id,
            title,
            artist,
            audio
          }
        }`
      )
      .then((data) => setShop(data))
      .then((data) => setTracks(data))
      .catch(console.error);
  }, []);

  // const listTracks = (tracks) => {
  //   return tracks.map((track) => <li>{track}</li>);
  // };
  // const tracks = useEffect(() => {
  //   sanityClient
  //   .fetch(
  //     `*[_type == "track"]{

  //     }`
  //   )
  // });

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
          <div className="shop-data">
            <ul key={item._id}>
              <li>
                <div className="record-cover">
                  <img
                    src={urlFor(item.cover).width(120).url()}
                    alt={item.title}
                  />
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
                {tracks >= 1 ?
                  tracks?.map((track) => (
                    <div className="track">
                      <p>I'm track</p>
                      <ul key={track._id}>
                        <li>
                          <audio src={track.audio} type="audio/mp3"></audio>
                        </li>
                      </ul>
                    </div>
                  )) : "Please add a track"}
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Shop;

{
  /* version 1 */
}
{
  /* <ReactAudioPlayer
                    src={item.tracks[0].track}
                    autoPlay
                    controls
                  /> */
}

{
  /* version 2 */
}
{
  /* <ul>
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
                  </ul> */
}

{
  /* version 3 */
}
{
  /* <span>{shop.tracks && shop.tracks.map((track) => (
                    <ReactAudioPlayer
                    src={item.tracks}
                    autoPlay
                    controls="true"
                    key={track.title}
                  />
                  ))}</span> */
}
