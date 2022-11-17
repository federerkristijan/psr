import React, { useState, useEffect } from "react";
import sanityClient from "../lib/client";
import "../styles/global.css";
import Back from "../components/Back";

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
      <Back />
      {about &&
        about.map((about) => (
          <div className="about-data" key={about.title}>
            <div className="about-title">
              <h1>{about.title}</h1>
            </div>
            <div className="about-text">
              <span>{about.text}</span>
            </div>
            {about.href1 && about.href2 && (
              <div className="about-icons">
                ig: @
                <a
                  href={`www.instagram.com/${about.href1}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {about.href1}
                </a>
                FB: /
                <a
                  href={`www.facebook.com/${about.href1}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {about.href2}
                </a>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default About;
