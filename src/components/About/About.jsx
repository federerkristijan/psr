import React, { useState, useEffect } from "react";
import sanityClient from "../../lib/client";
import Insta from "../../assets/images/instagram.svg";
import Face from "../../assets/images/facebook.svg";

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
          <div className="about-data" >
            <div className="about-story" key={about.story}>
              <h3>Founding Story</h3>
              <span>{about.story}</span>
            </div>
            <div className="about-chris" key={about.chris_profile}>
              <div className="chris-text">
                <h3>About Chris</h3>
                <span>{about.chris_profile}</span>
              </div>
              <div className="chris-icons">
                {/* <FontAwesomeIcon icon="fab fa-instagram" /> */}
                <i src={Insta} path="/" />
                {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
              </div>
            </div>
            <div className="about-marty" key={about.marty_profile}>
              <div className="marty-text">
                <h3>About Marty</h3>
                <span>{about.marty_profile}</span>
              </div>
              <div className="marty-icons">
                {/* <FontAwesomeIcon icon="fab fa-instagram" />
                <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default About;
