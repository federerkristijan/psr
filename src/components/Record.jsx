import React, { useEffect, useState } from "react";
import sanityClient from "../lib/client";

const Record = () => {
  const [tracks, setTracks] = useState(false);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "record] {
        artist,
        title,
        cover,
        price,
        tracks {
          tracks
        }
      }`
      )
      .then((data) => setTracks(data))
      .catch(console.error);
  });

  return (
    <>
      {tracks &&
        tracks.map((item) => (
          <div className="record" key={item.title}>
            <div className="cover">{item.cover}</div>
            <div className="text">
              <div className="title">{item.title}</div>
              <div className="artist">{item.artist}</div>
            </div>
            <div className="price">
              {item.price}
            </div>
            <div className="tracks">
              {item.tracks}
            </div>
          </div>
        ))}
    </>
  );
};

export default Record;
