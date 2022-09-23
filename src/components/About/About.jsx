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
            {about.href1 && about.href2 && (
              <div className="about-icons" target="true">
                <span>
                  ig: @
                  <a
                    href={`www.instagram.com/${about.href1}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {about.href1}
                  </a>
                </span>
                <span>
                  FB:
                  <a
                    href={`www.facebook.com/${about.href1}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {about.href2}
                  </a>
                </span>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default About;
