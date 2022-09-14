import React, { useState, useEffect } from "react";
import { SanityClient } from "@sanity/client";

const Events = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "events"]{
          name,
          description,
          date,
          slug
        }`
    );
  });

  return (
    <div className="events">
      <div className="events-title">
        <h3>Our Events</h3>
      </div>
      {events &&
        events.map((events) => (
          <div className="events-data">
            <div className="events-name">{events.name}</div>
            <div className="events-description"><a href={events.slug}>{events.description}</a></div>
            <div className="events-date">
              {events.date}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Events;
