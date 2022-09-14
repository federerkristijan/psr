import React, { useState, useEffect } from "react";
import sanityClient from "../../lib/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/free-brands-svg-icons";

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
              <span>{about.story}</span>
            </div>
            <div className="about-chris">
              <div className="chris-text">
                <span>{about.chris_profile}</span>
              </div>
              <div className="chris-icons">
                <FontAwesomeIcon icon="fab fa-instagram" />
                <FontAwesomeIcon icon="fa-brands fa-facebook" />
              </div>
            </div>
            <div className="about-marty">
              <div className="marty-text">
                <span>{about.marty_profile}</span>
              </div>
              <div className="marty-icons">
                <FontAwesomeIcon icon="fab fa-instagram" />
                <FontAwesomeIcon icon="fa-brands fa-facebook" />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default About;
