import React, { useEffect, useState } from "react";
import sanityClient from "../lib/client";

import "../styles/global.css";

const Media = () => {
  const [media, setMedia] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "media"] | order(_createdAt asc){
          mediaTitle,
          mediaUrl,
          mediaImg,
          mediaDesc
        }`
      )
      .then((data) => setMedia(data))
      .catch(console.error);
  }, []);

  return (
    <div className="media" taget="true">
      <div className="media-header">
        <h1>Here you can find us in other media</h1>
      </div>
      {media &&
        media.map((item) => (
          <div className="media-data" key={item.mediaTitle}>
            <div className="media-title">
              <span>{item.mediaTitle}</span>
            </div>
            <div className="media-desc">
              <span>{item.mediaDesc}</span>
            </div>
            <div className="media-links">
              <a href={item.mediaUrl} target="_blank" rel="noreferrer">
                {item.mediaUrl}
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Media;
