import React, { useState, useEffect } from "react";
import sanityClient from "../../lib/client";
import imageUrlBuilder from "@sanity/image-url";

import "./Team.css";

const Team = () => {
  const [team, setTeam] = useState(null);

  // const builder = imageUrlBuilder(sanityClient);

  // function urlFor(source) {
  //   return builder.image(source);
  // }

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "team"]{
          name,
          role
        }`
      )
      .then((data) => setTeam(data))
      .catch(console.error);
  }, []);

  return (
    <div className="team">
      <div className="team-title">
        <h2>Our Team</h2>
      </div>
      {team &&
        team.map((team) => (
          <div className="team-data" key={team.name}>
            {/* <div className="team-image">
              <img
                src={urlFor(team.picture).width(200).url()}
                alt={team.name}
                className="team-pictrure"
              />
            </div> */}
            <div className="team-text">
              <h3 className="team-name">{team.name}</h3>
              <span className="team-role">{team.role}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Team;
