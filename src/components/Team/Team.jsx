import React from 'react'
import client from '../../lib/client';

let QUERY = encodeURIComponent('*[_type == "animal"]');

// Compose the URL for your project's endpoint and add the query
let URL = `https://${pyenle2m}.api.sanity.io/v2021-10-21/data/query/${production}?query=${team}`;

// fetch the content
fetch(URL)
  .then((res) => res.json())
  .then(({ result }) => {
    // get the list element, and the first item
    let list = document.querySelector("ul");
    let firstListItem = document.querySelector("ul li");

    if (result.length > 0) {
      // remove the placeholder content
      list.removeChild(firstListItem);

      result.forEach((team) => {
        // create a list element for each team
        let listItem = document.createElement("li");

        // add the team name as the text content
        listItem.textContent = team?.name;

        // add the item to the list
        list.appendChild(listItem);
      });
      let pre = document.querySelector("pre");
      // add the raw data to the preformatted element
      pre.textContent = JSON.stringify(result, null, 2);
    }
  })
  .catch((err) => console.error(err));

const Team = () => {
  return (
    <div>
      <ul>
        <li></li>
      </ul>
    </div>
  )
}

export default Team
