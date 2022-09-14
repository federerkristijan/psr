import React, { useState, useEffect } from "react";
import sanityClient from "../../lib/client";

const About = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "about"]{
          story,
          chris_profile,
          marty_profile
        }`
      )
      .then((data) => setAbout(data))
      .catch(console.error);
  }, []);

  return (
    <div className="about">
      {about &&
        about.map((about) => (
          <div className="about-data">
            <div className="about-story">
              <h3>Founding Story</h3>
              <span>{about.story}</span>
            </div>
            <div className="about-chris">
              <h3>About Chris</h3>
              <span>{about.chris_profile}</span>
            </div>
            <div className="about-marty">
              <h3>About Marty</h3>
              <span>{about.marty_profile}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default About;
