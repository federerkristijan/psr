import React, { useState, useEffect } from "react";
import sanityClient from "../../lib/client";

import "./Media.css";

const FeaturedIn = () => {
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured"] | order(_createdAt asc){
          title,
          url
        }`
      )
      .then((data) => setFeatured(data))
      .catch(console.error);
  }, []);

  return (
    <div className="featured" taget="true">
      <div className="featured-header">
        <h1>Here you can find us in other media</h1>
      </div>
      {featured &&
        featured.map((item) => (
          <div className="featured-data" key={item.title}>
            <div className="featured-title">
              <span>{item.title}</span>
            </div>
            <div className="featured-links">
              <a href={item.url} target="_blank">
                {item.url}
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FeaturedIn;
