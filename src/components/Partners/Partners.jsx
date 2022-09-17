import React, { useEffect, useState } from "react";
import sanityClient from "../../lib/client";
import imageUrlBuilder from "@sanity/image-url";

import "./Partners.css";

//  todo Sanity block with <a> to partner's page

const Partners = () => {
  const [partners, setPartners] = useState(null);

  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    sanityClient
    .fetch(
      `*[_type == "partners"] | order(_createdAt asc) {
        title,
        logo,
        picture,
        href
      }`
    )
    .then((data) => setPartners(data))
    .catch(console.error);

  }, [])


  return (
    <div className="partners">
      <div className="partners-header">
        <h1>here comes Partners</h1>
      </div>
      {partners && partners.map((item) => (
        <div className="partners-data" key={item.title}>
          <div className="partners-title">
            {item.title}
          </div>
          <div className="partners-logo">
          {item.image && (<img
                src={urlFor(item.picture).width(200).url()}
                alt={item.title}
                className="partners-picture"
              />)}
          </div>
          <div className="partners-picture">
          {item.image && (<img
                src={urlFor(item.picture).width(200).url()}
                alt={item.name}
                className="team-picture"
              />)}
          </div>
          <div className="partners-icon">
            <a href={item.href} target="_blank" rel="noreferrer">{item.href}</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Partners;
