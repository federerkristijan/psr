import React, { useEffect, useState } from "react";
import sanityClient from "../lib/client";
import imageUrlBuilder from "@sanity/image-url";
import ReactAudioPlayer from "react-audio-player";

// credits to justinmc @https://github.com/justinmc/react-audio-player
// import ReactAudioPlayer from "react-audio-player";

import { AiOutlineShoppingCart } from "react-icons/ai";
import "../styles/global.css";
import { Link } from "react-router-dom";

const Shop = () => {
  const [shop, setShop] = useState(false);
  const [tracks, setTracks] = useState("");

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
          singleTrack,
          multiTrack,
          
        }`
      )
      .then((data) => setShop(data))
      .then((data) => setTracks(data))
      .catch(console.error);
  }, []);

  console.log("tracks", shop);

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
        shop.map((item) => (
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

                    {/* multi file player, for now it just puts out as much players as there are files */}
                    {item.multiTrack
                      ? Object.keys(item.multiTrack).length < 2
                        ? "one song"
                        : item.multiTrack.map((song) => (
                            <ReactAudioPlayer
                              src={
                                song
                                  ? `https://cdn.sanity.io/files/pyenle2m/production/${song.asset._ref
                                      .toString()
                                      .slice(5)
                                      .replace("-", ".")}`
                                  : "nope"
                              }
                              autoPlay
                              controls
                            />
                          ))
                      : "no songs available on multi files"}
                  </div>
                </div>
                <div className="price">
                  <p>{item.price}€</p>
                </div>
                Please add
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
