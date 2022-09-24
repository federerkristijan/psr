import React, { useState, useEffect } from "react";
import sanityClient from "../lib/client";

import "../styles/global.css";

const Events = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "events"] | order(_createdAt asc){
          name,
          date,
          description,
          url
        }`
      )
      .then((data) => setEvents(data))
      .catch(console.error);
  }, []);

  return (
    <div className="events" target="true">
      <div className="events-title">
        <h1>Our Events</h1>
      </div>
      {events &&
        events.map((events) => (
          <div className="events-data" key={events.name}>
            <div className="events-name">
              <h3>{events.name}</h3>
            </div>
            <div className="events-date">{events.date}</div>
            <div className="events-description">
              <a href={events.url} target="_blank" rel="noreferrer" >
                {events.description}
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Events;
