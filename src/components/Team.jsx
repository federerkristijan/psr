import React, { useState, useEffect } from "react";
import sanityClient from "../lib/client";
import imageUrlBuilder from "@sanity/image-url";

import "../styles/global.css";
import Back from "./Back";

const Team = () => {
  const [team, setTeam] = useState(null);

  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "team"] | order(lower(name) asc) {
          name,
          role,
          image
        }`
      )
      .then((data) => setTeam(data))
      .catch(console.error);
  }, []);

  return (
    <div className="team">
      <Back />
      <div className="team-title">
        <h2>Our Team</h2>
      </div>
      {team &&
        team.map((item) => (
          <div className="team-data" key={item.name}>
            <div className="team-image">
              {item.image && (
                <img
                  src={urlFor(item.picture).width(200).url()}
                  alt={item.name}
                  className="team-picture"
                />
              )}
            </div>
            <div className="team-text">
              <span>
                {item.name}: {item.role}
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Team;
