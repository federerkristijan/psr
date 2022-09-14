import React, { useState, useEffect } from "react";
import sanityClient from "../../lib/client";
import imageUrlBuilder from "@sanity/image-url";

const Team = () => {
  const [team, setTeam] = useState(null);

  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  // zato sam i mislio ako mogu tu manualno addati header, koji dopusta cors
  //Access-Control-Allow-Origin: *
  //treba nam on; no neam blage kak radi sanityClient? kajeto?
  //ovaju fetch radi post? to je get sa cms-a; ok svejedno (i post i get mogu imat HTTP header)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "team"]{
          name,
          role,
          picture
        }`
      )
      .then((data) => setTeam(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <div className="team-title">
        <h2>Our Team</h2>
      </div>
      {team &&
        team.map((team) => (
          <div className="team-data" key={team.name}>
            <div className="team-image">
              <img
                src={urlFor(team.picture).width(200).url()}
                alt={team.name}
                className="team-pictrure"
              />
            </div>
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

// let PROJECT_ID = "pyenle2m";
// let DATASET = "production";
// let QUERY = encodeURIComponent('*[_type == "team"]');
// // Compose the URL for your project's endpoint and add the query
// let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

// // fetch the content
// fetch(URL)
//   .then((res) => res.json())
//   .then(({ result }) => {
//     // get the list element, and the first item
//     let list = document.querySelector("ul");
//     let firstListItem = document.querySelector("ul li");

//     if (result.length > 0) {
//       // remove the placeholder content
//       list.removeChild(firstListItem);

//       result.forEach((team) => {
//         // create a list element for each team
//         let listItem = document.createElement("li");

//         // add the team name as the text content
//         listItem.textContent = team?.name;

//         // add the item to the list
//         list.appendChild(listItem);
//       });
//       let pre = document.querySelector("pre");
//       // add the raw data to the preformatted element
//       pre.textContent = JSON.stringify(result, null, 2);
//     }
//   })
//   .catch((err) => console.error(err));
