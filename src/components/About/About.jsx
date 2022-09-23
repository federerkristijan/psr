import React, { useState, useEffect } from "react";
import sanityClient from "../../lib/client";
import "./About.css";

const About = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "about"] | order(_createdAt asc) {
          title,
          text,
          href1,
          href2
        }`
      )
      .then((data) => setAbout(data))
      .catch(console.error);
  }, []);

  return (
    <div className="about">
      {about &&
        about.map((about) => (
          <div className="about-data" key={about.title}>
            <div className="about-title">
              <h1>{about.title}</h1>
            </div>
            <div className="about-text">
              <span>{about.text}</span>
            </div>
            <div className="about-icons">
                <a href="/">{about.href1}</a>
                <a href="/">{about.href2}</a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default About;
